import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { SavingsAccount } from '../wrappers/SavingsAccount';
import { SavingsAccount__factory } from '../wrappers/factories/SavingsAccount__factory';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { zeroAddress } from '../config/constants';
import { IYield } from '../wrappers';
import { IYield__factory } from '../wrappers/factories/IYield__factory';
import { TokenManager } from '../tokenManager';
import { Asset } from '../types/Types';

export class SavingsAccountApi {
  private signer: Signer;
  private savingsAccount: SavingsAccount;
  private config: SublimeConfig;
  private tokenManager: TokenManager;

  constructor(signer: Signer, config: SublimeConfig, tokenManager) {
    this.signer = signer;
    this.config = config;
    this.savingsAccount = new SavingsAccount__factory(signer).attach(config.savingsAccountContractAddress);
    this.tokenManager = tokenManager;
  }

  public async deposit(amount: string, asset: string, strategy: string, to: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(asset);
    const assetDecimals = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.deposit(_amount.multipliedBy(new BigNumber(10).pow(assetDecimals)).toFixed(0), asset, strategy, to);
  }

  public async switchStrategy(currentStrategy: string, newStrategy: string, asset: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(asset);
    const decimal = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.switchStrategy(
      currentStrategy,
      newStrategy,
      asset,
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0)
    );
  }

  public async withdraw(
    withdrawTo: string,
    shares: string,
    asset: string,
    strategy: string,
    withdrawShares: boolean
  ): Promise<ContractTransaction> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const decimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    let _shares = new BigNumber(shares);
    if (_shares.isNaN() || _shares.isZero() || _shares.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    return this.savingsAccount.withdraw(
      withdrawTo,
      _shares.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      asset,
      strategy,
      withdrawShares
    );
  }

  public async withdrawFrom(
    from: string,
    to: string,
    shares: string,
    asset: string,
    strategy: string,
    withdrawShares: boolean
  ): Promise<ContractTransaction> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const decimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    let _shares = new BigNumber(shares);
    if (_shares.isNaN() || _shares.isZero() || _shares.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    return this.savingsAccount.withdrawFrom(
      from,
      to,
      _shares.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      asset,
      strategy,
      withdrawShares
    );
  }

  public async withdrawAll(asset: string): Promise<ContractTransaction> {
    return this.savingsAccount.withdrawAll(asset);
  }

  public async approve(token: string, to: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approve(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async increaseAllowace(token: string, to: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.increaseAllowance(_amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), token, to);
  }

  public async decreaseAllowance(token: string, to: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.decreaseAllowance(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async approveFromToCreditLine(token: string, from: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approveFromToCreditLine(token, from, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async transfer(token: string, to: string, strategy: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transfer(token, to, strategy, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async transferFrom(token: string, from: string, to: string, strategy: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transferFrom(token, from, to, strategy, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async getTotalTokens(user: string, asset: string): Promise<string> {
    await this.tokenManager.updateTokenDecimals(asset);
    const decimals = this.tokenManager.getTokenDecimals(asset);

    let getTotalTokens = await (await this.savingsAccount.callStatic.getTotalTokens(user, asset)).toString();
    return new BigNumber(getTotalTokens).div(new BigNumber(10).pow(decimals)).toFixed(2);
  }

  public async getShares(user: string, asset: string, strategy: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const decimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    let userShares = await (await this.savingsAccount.userLockedBalance(user, asset, strategy)).toString();
    return new BigNumber(userShares).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async getLiquidityTokenOfAssetForStrategy(asset: string, strategy: string): Promise<Asset> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    let liquidityToken: string = await yieldContract.liquidityToken(asset);
    await this.tokenManager.updateAll(liquidityToken);
    return {
      address: liquidityToken,
      name: this.tokenManager.getTokenName(liquidityToken),
      pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(liquidityToken)).toString(),
      logo: this.tokenManager.getLogo(liquidityToken),
    };
  }
}
