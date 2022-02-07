import { SublimeConfig } from '../../types/sublimeConfig';
import { ContractTransaction, Signer, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';

import { PoolUtils } from '../../wrappers/PoolUtils';
import { PoolUtils__factory } from '../../wrappers/factories/PoolUtils__factory';

import { TokenManager } from '../../tokenManager';
import { Options as Overrides, StrategyType } from '../../types/Types';

export class PoolEthUtils {
  private poolUtils: PoolUtils;
  private tokenManager: TokenManager;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    if (config.poolUtilsAddress) {
      this.poolUtils = new PoolUtils__factory(signer).attach(config.poolUtilsAddress);
      this.tokenManager = tokenManager;
      this.config = config;
    } else {
      throw new Error('poolUtilsAddress is not defined in the sublime config');
    }
  }

  /**
   * @description Use this function call to deposit ETH directly to a pool. The function call will automatically convert ETH to WETH and deposit to the pool
   * @param poolAddress Address of the pool
   * @param amount Amount of ETH to deposit
   * @param options transaction options
   * @returns
   */
  public async depositEthAsCollateralToPool(poolAddress: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const decimals = 18;
    const _amount = new BigNumber(amount);
    let value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);
    return this.poolUtils.depositEthAsCollateralToPool(poolAddress, { ...options, value });
  }

  /**
   * @description Use this function to all margin call to a lender address when eth is the collateral
   * @param poolAddress Address of the pool
   * @param amount Amount of ETH to deposit
   * @param options transaction options
   * @returns
   */
  public async addEthCollateralInMarginCall(
    poolAddress: string,
    lender: string,
    amount: string,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const decimals = 18;
    const _amount = new BigNumber(amount);
    let value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);

    return this.poolUtils.addEthCollateralInMarginCall(poolAddress, lender, { ...options, value });
  }

  /**
   * @description Use this function to lend ETH to the pool
   * @param poolAddress Address of the pool
   * @param lender Address of the lender to deposit on behalf of. (pass your own address if you want to deposit on behalf of your own address)
   * @param amount Amount of ETH to deposit
   * @param strategy Strategy to which the collateral is deposit
   * @param options transaction options
   * @returns
   */
  public async ethLend(
    poolAddress: string,
    lender: string,
    amount: string,
    strategy: StrategyType,
    options?: Overrides
  ): Promise<ContractTransaction> {
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

    return this.poolUtils.ethLend(poolAddress, lender, strategyAddress, { ...options, value });
  }
}
