import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { SavingsAccount } from '../wrappers/SavingsAccount';
import { SavingsAccount__factory } from '../wrappers/factories/SavingsAccount__factory';
import { BigNumber } from 'bignumber.js';

import { IYield } from '../wrappers/IYield';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { ERC20Detailed, ERC20Detailed__factory } from '../wrappers';

import { TokenManager } from '../tokenManager';
import { Asset, StrategyType } from '../types/Types';
import { zeroAddress } from '../config/constants';

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

  public async approveTokenForSavingsAccountDeposit(amount: string, asset: string, strategy: StrategyType): Promise<ContractTransaction> {
    let _strategyContractAddress: string = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(asset);
    const borrowDecimal = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    let tokenContract: ERC20Detailed = new ERC20Detailed__factory(this.signer).attach(asset);
    return tokenContract.approve(_strategyContractAddress, _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0));
  }

  public async deposit(amount: string, asset: string, strategy: StrategyType, to: string): Promise<ContractTransaction> {
    let _strategyContractAddress: string = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(asset);
    const assetDecimals = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.deposit(
      _amount.multipliedBy(new BigNumber(10).pow(assetDecimals)).toFixed(0),
      asset,
      _strategyContractAddress,
      to,
      { value: asset === zeroAddress ? _amount.multipliedBy(new BigNumber(10).pow(assetDecimals)).toFixed(0) : '0' }
    );
  }

  public async switchStrategy(
    currentStrategy: StrategyType,
    newStrategy: StrategyType,
    asset: string,
    amount: string
  ): Promise<ContractTransaction> {
    if (currentStrategy === newStrategy) {
      throw new Error('Current Strategy and new strategy can not be same');
    }

    let _currentStrategyAddress = this.getStrategyAddress(currentStrategy);
    let _newStrategyAddress = this.getStrategyAddress(newStrategy);

    await this.tokenManager.updateTokenDecimals(asset);
    const decimal = this.tokenManager.getTokenDecimals(asset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.switchStrategy(
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      asset,
      _currentStrategyAddress,
      _newStrategyAddress
    );
  }

  public async withdraw(
    amount: string,
    token: string,
    strategy: StrategyType,
    to: string,
    withdrawShares: boolean
  ): Promise<ContractTransaction> {
    let _strategyContractAddress = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(token);
    const decimal = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.withdraw(
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      token,
      _strategyContractAddress,
      to,
      withdrawShares
    );
  }

  public async withdrawFrom(
    amount: string,
    token: string,
    strategy: StrategyType,
    from: string,
    to: string,
    withdrawShares: boolean
  ): Promise<ContractTransaction> {
    let _strategyContractAddress = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(token);
    const decimal = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('_amount should be a valid number');
    }

    return this.savingsAccount.withdrawFrom(
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      token,
      _strategyContractAddress,
      from,
      to,
      withdrawShares,
      {}
    );
  }

  public async withdrawAll(asset: string): Promise<ContractTransaction> {
    return this.savingsAccount.withdrawAll(asset);
  }

  public async approve(amount: string, token: string, to: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approve(_amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), token, to);
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

  public async approveTokenForCreditLines(token: string, amount: string): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approve(
      token,
      _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      this.config.creditLineContractAddress
    );
  }

  public async transfer(amount: string, token: string, strategy: StrategyType, to: string): Promise<ContractTransaction> {
    let _strategyContractAddress = this.getStrategyAddress(strategy);
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transfer(
      _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      token,
      _strategyContractAddress,
      to
    );
  }

  public async transferFrom(amount: string, token: string, strategy: StrategyType, from: string, to: string): Promise<ContractTransaction> {
    let _strategyContractAddress = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transferFrom(
      _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      token,
      _strategyContractAddress,
      from,
      to
    );
  }

  public async getTotalTokens(user: string, asset: string): Promise<string> {
    await this.tokenManager.updateTokenDecimals(asset);
    const decimals = this.tokenManager.getTokenDecimals(asset);

    let getTotalTokens = await (await this.savingsAccount.callStatic.getTotalTokens(user, asset)).toString();
    return new BigNumber(getTotalTokens).div(new BigNumber(10).pow(decimals)).toFixed(2);
  }

  public async getShares(user: string, asset: string, strategy: StrategyType): Promise<string> {
    let _strategyContractAddress = this.getStrategyAddress(strategy);
    const yieldContract: IYield = IYield__factory.connect(_strategyContractAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const decimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    let userShares = await (await this.savingsAccount.balanceInShares(user, asset, _strategyContractAddress)).toString();
    return new BigNumber(userShares).div(new BigNumber(10).pow(decimal)).toFixed(6);
  }

  public async getLiquidityTokenOfAssetForStrategy(asset: string, strategy: StrategyType): Promise<Asset> {
    let _strategyContractAddress = this.getStrategyAddress(strategy);
    const yieldContract: IYield = IYield__factory.connect(_strategyContractAddress, this.signer);
    let liquidityToken: string = await yieldContract.liquidityToken(asset);
    await this.tokenManager.updateAll(liquidityToken);
    return {
      address: liquidityToken,
      name: this.tokenManager.getTokenName(liquidityToken),
      pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(liquidityToken)).toString(),
      logo: this.tokenManager.getLogo(liquidityToken),
    };
  }

  private getStrategyAddress(strategy: StrategyType): string {
    if (strategy === StrategyType.NoYield) {
      return this.config.noStrategyAddress;
    } else if (strategy === StrategyType.CompounYield) {
      return this.config.compoundStrategyContractAddress;
    } else {
      throw new Error(`${strategy} strategy is not supported`);
    }
  }
}
