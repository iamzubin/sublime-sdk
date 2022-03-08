import { SublimeConfig } from '../../types/sublimeConfig';
import { ContractTransaction, Signer, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';

import { CreditLineEthUtils as CreditLineUtils } from '../../wrappers/CreditLineEthUtils';
import { CreditLineEthUtils__factory as CreditLineUtils__factory } from '../../wrappers/factories/CreditLineEthUtils__factory';

import { TokenManager } from '../../tokenManager';
import { StrategyType, Options as Overrides } from '../../types/Types';

export class CreditLineEthUtils {
  private creditLineUtils: CreditLineUtils;
  private tokenManager: TokenManager;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    if (config.creditLineEthHelperAddress) {
      this.creditLineUtils = new CreditLineUtils__factory(signer).attach(config.creditLineEthHelperAddress);
      this.config = config;
      this.tokenManager = tokenManager;
    } else {
      throw new Error('creditLineEthHelperAddress is not defined in the sublime config');
    }
  }

  /**
   * @description The function should only be used when native ETH is used deposit collateral to a credit line
   * @param creditLineNumber credit line ID
   * @param amount amount of ETH to be deposited as collateral
   * @param strategy strategy to which the collateral must be deposited
   * @param options transaction parameters
   * @returns Contract Transaction
   */
  public async depositEthAsCollateralToTheCreditLine(
    creditLineNumber: BigNumberish,
    amount: string,
    strategy: StrategyType,
    options?: Overrides
  ): Promise<ContractTransaction> {
    let decimals = 18;
    let strategyAddress: string;
    if (strategy == StrategyType.NoYield) {
      strategyAddress = this.config.noStrategyAddress;
    } else if (strategy == StrategyType.CompounYield) {
      strategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      strategyAddress = this.config.yearnStrategyContractAddress;
    }

    const _amount = new BigNumber(amount);
    let value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);

    return this.creditLineUtils.depositEthAsCollateralToCreditLine(creditLineNumber, strategyAddress, { ...options, value });
  }

  /**
   * @description The function should be used
   * @param creditLineNumber id of the credit line
   * @param amount amount of ETH that needs to be repaid to the credit line
   * @param options transaction parameters
   * @returns Contract Transaction
   */
  public async repayEthToCreditLine(creditLineNumber: BigNumberish, amount: string, options?: Overrides): Promise<ContractTransaction> {
    let decimals = 18;
    const _amount = new BigNumber(amount);
    let value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);

    return this.creditLineUtils.repayEthToCreditLines(creditLineNumber, { ...options, value });
  }
}
