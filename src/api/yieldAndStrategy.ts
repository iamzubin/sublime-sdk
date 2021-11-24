import { BigNumberish } from '@ethersproject/bignumber';
import { Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { IYield } from '../wrappers';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { StrategyRegistry } from '../wrappers/StrategyRegistry';
import { StrategyRegistry__factory } from '../wrappers/factories/StrategyRegistry__factory';

import { zeroAddress } from '../config/constants';
import { SublimeConfig } from '../types/sublimeConfig';

import { Strategy, StrategyType } from '../types/Types';
import { TokenManager } from '../tokenManager';

export class YieldAndStrategyApi {
  private signer: Signer;
  private strategyRegistry: StrategyRegistry;
  config: SublimeConfig;
  private tokenManager: TokenManager;

  constructor(signer: Signer, config: SublimeConfig, tokenManger: TokenManager) {
    this.signer = signer;
    this.config = config;
    this.strategyRegistry = new StrategyRegistry__factory(this.signer).attach(config.strategyRegistryContractAddress);
    this.tokenManager = tokenManger;
  }

  public async getTokensForShares(yieldAddress: string, asset: string, shares: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const liquidityTokenDecimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    await this.tokenManager.updateTokenDecimals(asset);
    const deopsitTokenDecimal = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(shares);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    let _temp: string = (
      await yieldContract.callStatic.getTokensForShares(
        _amount.multipliedBy(new BigNumber(10).pow(liquidityTokenDecimal)).toFixed(0),
        asset
      )
    ).toString();
    return new BigNumber(_temp).div(new BigNumber(10).pow(deopsitTokenDecimal)).toFixed(2);
  }

  public async getSharesForTokens(yieldAddress: string, asset: string, amount: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const liquidityTokenDecimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    await this.tokenManager.updateTokenDecimals(asset);
    const deopsitTokenDecimal = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    let _temp: string = (
      await yieldContract.callStatic.getSharesForTokens(_amount.multipliedBy(new BigNumber(10).pow(deopsitTokenDecimal)).toFixed(0), asset)
    ).toString();
    return new BigNumber(_temp).div(new BigNumber(10).pow(liquidityTokenDecimal)).toFixed(2);
  }

  public getStrategies(): Strategy[] {
    return [
      {
        address: this.config.noStrategyAddress,
        name: StrategyType.NoYield,
      },
      {
        address: this.config.compoundStrategyContractAddress,
        name: StrategyType.CompounYield,
      },
    ];
  }
}
