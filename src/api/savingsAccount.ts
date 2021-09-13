import { SublimeConfig } from '../config/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { SavingsAccount } from '../wrappers/SavingsAccount';
import { SavingsAccount__factory } from '../wrappers/factories/SavingsAccount__factory';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

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

  public async depositTo(amount: BigNumberish, asset: string, strategy: string, to: string): Promise<ContractTransaction> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(asset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return this.savingsAccount.depositTo(BigNumber.from(amount).mul(BigNumber.from(10).pow(borrowDecimal)), asset, strategy, to);
  }

  public async switchStrategy(
    currentStrategy: string,
    newStrategy: string,
    asset: string,
    amount: BigNumberish
  ): Promise<ContractTransaction> {
    const yieldContract: IYield = IYield__factory.connect(currentStrategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.switchStrategy(
      currentStrategy,
      newStrategy,
      asset,
      BigNumber.from(amount).mul(BigNumber.from(10).pow(decimal))
    );
  }

  public async withdraw(
    withdrawTo: string,
    shares: BigNumberish,
    asset: string,
    strategy: string,
    withdrawShares: boolean
  ): Promise<ContractTransaction> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.withdraw(
      withdrawTo,
      BigNumber.from(shares).mul(BigNumber.from(10).pow(decimal)),
      asset,
      strategy,
      withdrawShares
    );
  }

  public async withdrawFrom(
    from: string,
    to: string,
    shares: BigNumberish,
    asset: string,
    strategy: string,
    withdrawShares: boolean
  ): Promise<ContractTransaction> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.withdrawFrom(
      from,
      to,
      BigNumber.from(shares).mul(BigNumber.from(10).pow(decimal)),
      asset,
      strategy,
      withdrawShares
    );
  }

  public async withdrawAll(asset: string): Promise<ContractTransaction> {
    return this.savingsAccount.withdrawAll(asset);
  }

  public async approve(token: string, to: string, amount: BigNumberish): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.approve(token, to, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals)));
  }

  public async increaseAllowace(token: string, to: string, amount: BigNumberish): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.increaseAllowance(token, to, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals)));
  }

  public async decreaseAllowance(token: string, to: string, amount: BigNumberish): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.decreaseAllowance(token, to, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals)));
  }

  public async approveFromToCreditLine(token: string, from: string, amount: BigNumberish): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.approveFromToCreditLine(token, from, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals)));
  }

  public async transfer(token: string, to: string, strategy: string, amount: BigNumberish): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.transfer(token, to, strategy, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals)));
  }

  public async transferFrom(token: string, from: string, to: string, strategy: string, amount: BigNumberish): Promise<ContractTransaction> {
    const _token: Token = new Token__factory(this.signer).attach(token);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.savingsAccount.transferFrom(token, from, to, strategy, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals)));
  }

  public async getTotalAsset(user: string, asset: string): Promise<BigNumber> {
    const _token: Token = new Token__factory(this.signer).attach(asset);
    const decimals: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return (await this.savingsAccount.callStatic.getTotalAsset(user, asset)).div(BigNumber.from(10).pow(decimals));
  }

  public async getShares(user: string, asset: string, strategy: string): Promise<BigNumber> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const _token: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    const value = await (await this.savingsAccount.userLockedBalance(user, asset, strategy)).div(BigNumber.from(10).pow(decimal));
    return value;
  }

  public async getLiquidityTokenOfAssetForStrategy(asset: string, strategy: string): Promise<string> {
    const yieldContract: IYield = IYield__factory.connect(strategy, this.signer);
    return await yieldContract.liquidityToken(asset);
  }
}
