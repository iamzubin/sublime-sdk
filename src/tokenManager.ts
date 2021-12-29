import { zeroAddress } from './config/constants';
import { Token } from './wrappers/Token';
import { Token__factory } from './wrappers/factories/Token__factory';
import { Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { getPrice } from './queries/prices';
import { SublimeSubgraph } from './subgraph';
import { CreditLinesOverview, SavingAccountUserDetailDisplay } from './types/Types';
import { tokenData } from './config/tokenMapping';

/**
 * @class TokenManager
 * @description An token manager stores, retrieves and caches the data like token name, decimals, logos and prices.
 */
export class TokenManager {
  /**
   * @description caches number of decimals for a token address
   */
  private decimals = {};

  /**
   * @description caches name of token
   */
  private names = {};

  /**
   * @description cache the price of token, Updates every 1 min
   */
  private prices = {};

  /**
   * @description stores when last time when the token price was updated
   */
  private priceLastUpdatedAt = {};

  /**
   * @description caches the token logo
   */
  private logos = {};

  /**
   * @description used for mapping tokens logos of testnet
   */
  private addressMapper = {};

  /**
   * @description Base path for logos
   */
  private logoUrlTemplate: string = 'https://tokens.1inch.io/ADDRESS.png';

  /**
   * @description subgraph URL that fetches prices
   */
  private priceSubgraphUrl: string;

  /**
   * @description interval at which prices are refreshed in the SDK
   */
  private priceRefreshInterval: number = 60000;

  /**
   * @description web3 signer
   */
  private signer: Signer;

  private subgraph: SublimeSubgraph;

  constructor(signer: Signer, priceSubgraphUrl: string) {
    this.signer = signer;
    this.priceSubgraphUrl = priceSubgraphUrl;

    for (let index = 0; index < tokenData.length; index++) {
      const element = tokenData[index];
      this.addressMapper[element.address.toLowerCase()] = element.iconMapping.toLowerCase();
      this.decimals[element.address.toLowerCase()] = element.decimals;
      this.names[element.address.toLowerCase()] = element.symbol;
    }
  }

  /**
   * @description Updates the token meta data
   * @param tokenAddress
   */
  async updateAll(tokenAddress: string): Promise<void> {
    await this.updateLogo(tokenAddress);
    await this.updatePricePerAsset(tokenAddress);
    await this.updateTokenDecimals(tokenAddress);
    await this.updateTokenName(tokenAddress);
    return;
  }

  /**
   * @description Updated the token decimals
   * @param tokenAddress
   * @returns
   */
  async updateTokenDecimals(tokenAddress: string): Promise<void> {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.decimals) {
      return;
    } else {
      let token: Token = await new Token__factory(this.signer).attach(tokenAddress);
      this.decimals[tokenAddress] = await token.decimals();
      return;
    }
  }

  /**
   * @description Updates token name
   * @param tokenAddress
   * @returns
   */
  async updateTokenName(tokenAddress: string): Promise<void> {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.names) {
      return;
    } else {
      let token: Token = await new Token__factory(this.signer).attach(tokenAddress);
      this.names[tokenAddress] = await token.name();
      return;
    }
  }

  /**
   * @description Updates token price
   * @param tokenAddress
   * @returns
   */
  async updatePricePerAsset(tokenAddress: string): Promise<void> {
    tokenAddress = tokenAddress.toLowerCase();
    const now = new Date().valueOf();
    if (!(tokenAddress in this.prices) || now > this.priceRefreshInterval + this.priceLastUpdatedAt[tokenAddress]) {
      let mappedAddress = tokenAddress;
      if (this.addressMapper[tokenAddress]) {
        mappedAddress = this.addressMapper[tokenAddress];
      }
      this.prices[tokenAddress] = await getPrice(this.priceSubgraphUrl, mappedAddress);
      this.priceLastUpdatedAt[tokenAddress] = new Date().valueOf();
    }
    return;
  }

  /**
   * @description Updates token Logo
   * @param tokenAddress
   * @returns
   */
  async updateLogo(tokenAddress: string): Promise<void> {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.logos) {
      return;
    } else {
      let mappedAddress = tokenAddress;
      if (this.addressMapper[tokenAddress]) {
        mappedAddress = this.addressMapper[tokenAddress];
      }
      this.logos[tokenAddress] = this.logoUrlTemplate.replace('ADDRESS', mappedAddress);
      return;
    }
  }

  /**
   * @param tokenAddress
   * @returns number of token decimals
   */
  getTokenDecimals(tokenAddress: string): number {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.decimals) {
      return this.decimals[tokenAddress];
    } else {
      throw new Error('Error in class TokenManager');
    }
  }

  /**
   * @param tokenAddress
   * @returns token name
   */
  getTokenName(tokenAddress: string): string {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.names) {
      return this.names[tokenAddress];
    } else {
      throw new Error('Error in class TokenManager');
    }
  }

  /**
   * @param tokenAddress
   * @returns price of asset
   */
  async getPricePerAsset(tokenAddress: string): Promise<BigNumber> {
    tokenAddress = tokenAddress.toLowerCase();
    await this.updatePricePerAsset(tokenAddress);
    if (tokenAddress in this.prices) {
      return this.prices[tokenAddress];
    } else {
      throw new Error('Error in class TokenManager');
    }
  }

  /**
   * @param tokenAddress
   * @returns return url which renders the logo/pic of the token
   */
  getLogo(tokenAddress: string): string {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.logos) {
      return this.logos[tokenAddress];
    } else {
      throw new Error('Error in class TokenManager');
    }
  }

  /**
   * @param user the address for which the overview is required
   * @returns return credit line information
   */
  async getCreditlineOverview(user: string): Promise<CreditLinesOverview> {
    let userAddress = user.toLowerCase();
    let creditLineInfo = await this.subgraph.getCreditLinesOverview(userAddress);
    return creditLineInfo;
  }

  /**
   * @param user the address for which the overview is required
   * @returns return savings account information
   */
  async getSavingsAccountOverview(user: string): Promise<SavingAccountUserDetailDisplay> {
    let userAddress = user.toLowerCase();
    let savingsAccountInfo = await this.subgraph.getSavingsAccountOverview(userAddress);
    return savingsAccountInfo;
  }
}
