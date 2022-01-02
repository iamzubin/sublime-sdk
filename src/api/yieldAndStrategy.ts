import { BigNumberish } from '@ethersproject/bignumber';
import { Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { IYield } from '../wrappers';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';
import { StrategyRegistry } from '../wrappers/StrategyRegistry';
import { StrategyRegistry__factory } from '../wrappers/factories/StrategyRegistry__factory';

import { zeroAddress } from '../config/constants';
import { SublimeConfig } from '../types/sublimeConfig';

import { Strategy, StrategyType } from '../types/Types';
import { TokenManager } from '../tokenManager';

/**
 * @class YieldAndStrategyApi
 */
export class YieldAndStrategyApi {
  private signer: Signer;
  config: SublimeConfig;
  private tokenManager: TokenManager;

  constructor(signer: Signer, config: SublimeConfig, tokenManger: TokenManager) {
    this.signer = signer;
    this.config = config;
    this.tokenManager = tokenManger;
  }

  /**
   * @description Returns the number of tokens that will be redeemed for given number of shares
   * @param yieldAddress
   * @param asset
   * @param shares
   * @param sharesInLowestUnits
   * @returns
   */
  public async getTokensForShares(
    yieldAddress: string,
    asset: string,
    shares: BigNumber,
    sharesInLowestUnits?: boolean
  ): Promise<BigNumber> {
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);

    await this.tokenManager.updateTokenDecimals(asset);
    const depositTokenDecimal = this.tokenManager.getTokenDecimals(asset);

    const _amount = new BigNumber(shares);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    let _amountInLowestUnits = new BigNumber(_amount);

    if (!sharesInLowestUnits) {
      const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);
      await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
      const liquidityTokenDecimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

      _amountInLowestUnits = _amount.multipliedBy(new BigNumber(10).pow(liquidityTokenDecimal));
    }

    const _temp: string = (await yieldContract.callStatic.getTokensForShares(_amountInLowestUnits.toFixed(0), asset)).toString();
    return new BigNumber(_temp).div(new BigNumber(10).pow(depositTokenDecimal));
  }

  /**
   * @description returns the number shares that will be generated for given number of tokens
   * @param yieldAddress
   * @param asset
   * @param amount
   * @returns
   */
  public async getSharesForTokens(yieldAddress: string, asset: string, amount: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const liquidityTokenDecimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    await this.tokenManager.updateTokenDecimals(asset);
    const deopsitTokenDecimal = this.tokenManager.getTokenDecimals(asset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    const _temp: string = (
      await yieldContract.callStatic.getSharesForTokens(_amount.multipliedBy(new BigNumber(10).pow(deopsitTokenDecimal)).toFixed(0), asset)
    ).toString();
    return new BigNumber(_temp).div(new BigNumber(10).pow(liquidityTokenDecimal)).toFixed(2);
  }

  /**
   * @description returns strategies supported sublime-sdk
   * @returns
   */
  public getStrategies(): Strategy[] {
    return [
      {
        address: this.config.noStrategyAddress,
        type: StrategyType.NoYield,
      },
      {
        address: this.config.compoundStrategyContractAddress,
        type: StrategyType.CompounYield,
      },
    ];
  }

  /**
   * @description Get Strategy address from name
   * @param strategy
   * @returns null if invalid strategy name is given
   */
  public getStrategyAddress(strategy: StrategyType): string | undefined {
    if (strategy == StrategyType.NoYield) {
      return this.config.noStrategyAddress;
    } else if (strategy == StrategyType.CompounYield) {
      return this.config.compoundStrategyContractAddress;
    } else {
      return undefined;
    }
  }

  /**
   * @description Get Strategy name from given address,
   * @param address
   * @returns null if invalid strategy address is given in input
   */
  public getStrategy(address: string): StrategyType | undefined {
    address = address.toLowerCase();
    if (address == this.config.noStrategyAddress.toLowerCase()) {
      return StrategyType.NoYield;
    } else if (address == this.config.compoundStrategyContractAddress.toLowerCase()) {
      return StrategyType.CompounYield;
    } else {
      return undefined;
    }
  }
}
