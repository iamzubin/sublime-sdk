import { SublimeConfig } from '../../types/sublimeConfig';
import { ContractTransaction, Signer, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';

import { SavingsAccountEthUtils } from '../../wrappers/SavingsAccountEthUtils';
import { SavingsAccountEthUtils__factory } from '../../wrappers/factories/SavingsAccountEthUtils__factory';

import { TokenManager } from '../../tokenManager';
import { Options as Overrides, StrategyType } from '../../types/Types';

export class SavingAccountsEthUtils {
  private savingsAccountEthUtils: SavingsAccountEthUtils;
  private tokenManager: TokenManager;
  private config: SublimeConfig;

  /**
   * @param signer 
   * @param config 
   * @param tokenManager 
   */
  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    if (config.savingsAccountEthUtilsAddress) {
      this.savingsAccountEthUtils = new SavingsAccountEthUtils__factory(signer).attach(config.savingsAccountEthUtilsAddress);
      this.tokenManager = tokenManager;
      this.config = config;
      throw new Error('savingsAccountEthUtilsAddress is not defined in the sublime config');
    } else {
    }
  }

  /**
   * @description Use this function to deposit ETH to savings account directly
   * @param strategy strategy
   * @param amount amount of ETH to deposit
   * @param options transaction options
   * @returns 
   */
  public async depositEthToSavingsAccount(strategy: StrategyType, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const decimals = 18;
    const _amount = new BigNumber(amount);
    let value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);
    let strategyAddress: string;
    if (strategy == StrategyType.NoYield) {
      strategyAddress = this.config.noStrategyAddress;
    } else if (strategy == StrategyType.CompounYield) {
      strategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      strategyAddress = this.config.yearnStrategyContractAddress;
    }

    return this.savingsAccountEthUtils.depositEth(strategyAddress, { ...options, value });
  }
}
