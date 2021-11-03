import { zeroAddress } from './config/constants';
import { Token } from './wrappers/Token';
import { Token__factory } from './wrappers/factories/Token__factory';
import { Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';

export class TokenManager {
  private decimals = {};
  private names = {};
  private prices = {};
  private logos = {};

  private tempLogoLink: string = 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png';

  private signer: Signer;

  constructor(signer: Signer) {
    this.decimals[zeroAddress] = 18;
    this.names[zeroAddress] = 'ETH';
    this.signer = signer;
  }

  async updateAll(tokenAddress: string): Promise<void> {
    await this.updateLogo(tokenAddress);
    await this.updatePricePerAsset(tokenAddress);
    await this.updateTokenDecimals(tokenAddress);
    await this.updateTokenName(tokenAddress);
  }

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

  async updatePricePerAsset(tokenAddress: string): Promise<void> {
    tokenAddress = tokenAddress.toLowerCase();
    this.prices[tokenAddress] = new BigNumber(Math.random()).toString();
    if (tokenAddress in this.prices) {
      return;
    } else {
      return;
    }
  }

  async updateLogo(tokenAddress: string): Promise<void> {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.logos) {
      return;
    } else {
      this.logos[tokenAddress] = this.tempLogoLink;
      return;
    }
  }

  getTokenDecimals(tokenAddress: string): number {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.decimals) {
      return this.decimals[tokenAddress];
    } else {
      throw new Error('Error in class TokenManager');
    }
  }

  getTokenName(tokenAddress: string): string {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.names) {
      return this.names[tokenAddress];
    } else {
      throw new Error('Error in class TokenManager');
    }
  }

  getPricePerAsset(tokenAddress: string): string {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.prices) {
      return this.prices[tokenAddress];
    } else {
      throw new Error('Error in clas TokenManager');
    }
  }

  getLogo(tokenAddress: string): string {
    tokenAddress = tokenAddress.toLowerCase();
    if (tokenAddress in this.logos) {
      return this.logos[tokenAddress];
    } else {
      throw new Error('Error in clas TokenManager');
    }
  }
}
