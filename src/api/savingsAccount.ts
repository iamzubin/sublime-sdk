import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { SavingsAccount } from '../wrappers/SavingsAccount';
import { SavingsAccount__factory } from '../wrappers/factories/SavingsAccount__factory';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';
import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';

import { zeroAddress } from '../config/constants';
import { IYield } from '../wrappers';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

export class SavingsAccountApi {
  private signer: Signer;
  private savingsAccount: SavingsAccount;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.config = config;
    this.savingsAccount = new SavingsAccount__factory(signer).attach(config.savingsAccountContractAddress);
  }

  public async depositTo(amount: string, asset: string, strategy: string, to: string): Promise<ContractTransaction> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(asset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.depositTo(_amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0), asset, strategy, to);
  }

  public async switchStrategy(currentStrategy: string, newStrategy: string, asset: string, amount: string): Promise<ContractTransaction> {
    const yieldContract: IYield = IYield__factory.connect(currentStrategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

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

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(shares);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    return this.savingsAccount.withdraw(
      withdrawTo,
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
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

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(shares);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    return this.savingsAccount.withdrawFrom(
      from,
      to,
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      asset,
      strategy,
      withdrawShares
    );
  }

  public async withdrawAll(asset: string): Promise<ContractTransaction> {
    return this.savingsAccount.withdrawAll(asset);
  }

  public async approve(token: string, to: string, amount: string): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approve(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async increaseAllowace(token: string, to: string, amount: string): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.increaseAllowance(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async decreaseAllowance(token: string, to: string, amount: string): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.decreaseAllowance(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async approveFromToCreditLine(token: string, from: string, amount: string): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approveFromToCreditLine(token, from, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async transfer(token: string, to: string, strategy: string, amount: string): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transfer(token, to, strategy, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async transferFrom(token: string, from: string, to: string, strategy: string, amount: string): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transferFrom(token, from, to, strategy, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0));
  }

  public async getTotalAsset(user: string, asset: string): Promise<string> {
    const _token: Token = new Token__factory(this.signer).attach(asset);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let totalAsset = await (await this.savingsAccount.callStatic.getTotalAsset(user, asset)).toString();
    return new BigNumber(totalAsset).div(new BigNumber(10).pow(decimals)).toFixed(2);
  }

  public async getShares(user: string, asset: string, strategy: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    let userShares = await (await this.savingsAccount.userLockedBalance(user, asset, strategy)).toString();
    return new BigNumber(userShares).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async getLiquidityTokenOfAssetForStrategy(asset: string, strategy: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    return await yieldContract.liquidityToken(asset);
  }
}
