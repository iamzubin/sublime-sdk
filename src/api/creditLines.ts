import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { CreditLine } from '../wrappers/CreditLine';
import { CreditLine__factory } from '../wrappers/factories/CreditLine__factory';
import { CreditLineRequest, StrategyType } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';

import { Balance, Options as Overrides } from '../types/Types';
import { CreditLineEthUtils } from './utils/creditLineEthUtils';

/**
 * @class CreditLineApi
 */
export class CreditLineApi {
  private creditLineContract: CreditLine;
  private tokenManager: TokenManager;
  private config: SublimeConfig;
  private signer: Signer;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
    this.config = config;
    this.tokenManager = tokenManager;
    this.signer = signer;
  }

  /**
   * @description The returned object helps interact with polls that have ETH as collateral or borrow token
   * @returns Instance of Credit line Eth Utils.
   */
  CreditLineEthUtils(): CreditLineEthUtils {
    return new CreditLineEthUtils(this.signer, this.config, this.tokenManager);
  }

  /**
   * @description Requests a new credit line to lender
   * @param request details of the credit line to request
   * @param options transaction options
   * @returns contract transaction
   */
  public async requestCreditLineToLender(request: CreditLineRequest, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(request.borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(request.borrowAsset);

    const borrowLimit = new BigNumber(request.borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }
    const borrowRate = new BigNumber(request.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }
    const collateralRatio = new BigNumber(request.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    let strategyAddress: string;
    if (request.strategyType == StrategyType.NoYield) {
      strategyAddress = this.config.noStrategyAddress;
    } else if (request.strategyType == StrategyType.CompounYield) {
      strategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      throw new Error('Unsupported strategy');
    }

    return await this.creditLineContract.request(
      request.address,
      borrowLimit.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
      request.autoLiquidation,
      collateralRatio.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
      request.borrowAsset,
      request.collateralAsset,
      strategyAddress,
      false,
      { ...options }
    );
  }

  /**
   * @description Requests a new credit line to borrower
   * @param request: details of the credit line to request
   * @returns contract transaction
   */
  public async requestCreditLineToBorrower(request: CreditLineRequest, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(request.borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(request.borrowAsset);

    const borrowLimit = new BigNumber(request.borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }
    const borrowRate = new BigNumber(request.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }
    const collateralRatio = new BigNumber(request.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    let strategyAddress: string;
    if (request.strategyType == StrategyType.NoYield) {
      strategyAddress = this.config.noStrategyAddress;
    } else if (request.strategyType == StrategyType.CompounYield) {
      strategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      throw new Error('Unsupported strategy');
    }

    return await this.creditLineContract.request(
      request.address,
      borrowLimit.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
      request.autoLiquidation,
      collateralRatio.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
      request.borrowAsset,
      request.collateralAsset,
      strategyAddress,
      true,
      { ...options }
    );
  }

  /**
   * @description Accpeting a credit line.
   * @param creditLine
   * @returns Contract Transaction
   */
  public async acceptCreditLine(creditLine: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return await this.creditLineContract.accept(creditLine, { ...options });
  }

  /**
   * @description Calculated the total accrued till now for a credit line
   * @param creditLineNumber
   * @returns debt in borrow tokens (easy readable)
   */
  public async calculateInterestAccrued(creditLineNumber: BigNumberish): Promise<Balance> {
    const _value = await this.creditLineContract.calculateInterestAccrued(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return { value: _value.toString(), decimals: borrowDecimal };
  }

  /**
   * @description Calcualte the total debt for a credit line till now
   * @param creditLineNumber
   * @returns debt in borrow tokens
   */
  public async calculateCurrentDebt(creditLineNumber: BigNumberish): Promise<Balance> {
    const _value = await this.creditLineContract.calculateCurrentDebt(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return { value: _value.toString(), decimals: borrowDecimal };
  }

  /**
   * @description Calculate the total amount that can be borrowed from the credit line
   * @param creditLineNumber
   * @returns borrowable amount in borrow tokens (easy readable)
   */
  public async calculateBorrowableAmount(creditLineNumber: BigNumberish): Promise<Balance> {
    const _value: BigNumberish = await this.creditLineContract.callStatic.calculateBorrowableAmount(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return { value: _value.toString(), decimals: borrowDecimal };
  }

  /**
   * @description Calcualte the current collateral ratio of a credit line
   * @param creditLineNumber
   * @returns collateral ratio (easy readable)
   */
  public async calculateCurrentCollateralRatio(creditLineNumber: BigNumberish): Promise<string> {
    const [_value]: BigNumberish[] = await this.creditLineContract.callStatic.calculateCurrentCollateralRatio(creditLineNumber);
    return new BigNumber(_value.toString()).div(new BigNumber(10).div(16)).toFixed(2);
  }

  /**
   * @description Calculate the total collateral tokens held against a credit line
   * @param creditLineNumber
   * @returns collateral tokens number (easy readable)
   */
  public async calculateTotalCollateralTokens(creditLineNumber: BigNumberish): Promise<Balance> {
    const _value: BigNumberish = await this.creditLineContract.callStatic.calculateTotalCollateralTokens(creditLineNumber);
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    return { value: _value.toString(), decimals: collateralDecimal };
  }

  /**
   * @description Calculate the amount the collateral that can be withdrawn from the credit line
   * @param creditLineNumber
   * @returns collateral tokens (easy readable)
   */
  public async withdrawableCollateral(creditLineNumber: BigNumberish): Promise<Balance> {
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    const result = await this.creditLineContract.callStatic.withdrawableCollateral(creditLineNumber);
    return { value: result.toString(), decimals: collateralDecimal };
  }

  /**
   * @description Withdraws the collateral from the credit line
   * @param creditLineNumber
   * @param amount
   * @param toSavingsAccount: boolean params that enables with withdrawn collateral to be. False by default
   * @param options transaction options
   * directly transferred from credit line to user's savings account
   * @returns Contract Transaction
   */
  public async withdrawCollateralFromCreditLine(
    creditLineNumber: BigNumberish,
    amount: string,
    toSavingsAccount: boolean = false,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.withdrawCollateral(
      creditLineNumber,
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      toSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description Deposit Collateral to a credit line
   * @param creditLineNumber
   * @param amount
   * @param fromSavingsAccount: when set to true, the collateral is transfered directly from savings account to credit line
   * @returns Contract Transaction
   */
  public async depositCollateral(
    creditLineNumber: BigNumberish,
    amount: string,
    fromSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.depositCollateral(
      creditLineNumber,
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      fromSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description Borrow tokens from credit line
   * @param creditLineNumber
   * @param amount
   * @returns Contract Transaction
   */
  public async borrowFromCreditLine(creditLineNumber: BigNumberish, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.borrow(creditLineNumber, _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0), {
      ...options,
    });
  }

  /**
   * @description Repay the amount to credit line
   * @param creditLineNumber
   * @param amount
   * @returns Contract Transaction
   */
  public async repayCreditLine(creditLineNumber: BigNumberish, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.repay(creditLineNumber, _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0), {
      ...options,
    });
  }

  /**
   * @description Close a credit line
   * @param creditLineNumber
   * @returns Contract Transaction
   */
  public async closeCreditLine(creditLineNumber: BigNumberish): Promise<ContractTransaction> {
    return this.creditLineContract.close(creditLineNumber);
  }

  /**
   * @description Liquidate a credit line
   * @param creditLineNumber
   * @param toSavingsAccount: when true, the collateral liquidated will be sent to savings account directly
   * @returns Contract Transaction
   */
  public async liquidateCreditLine(
    creditLineNumber: BigNumberish,
    toSavingsAccount: boolean = false,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.creditLineContract.liquidate(creditLineNumber, toSavingsAccount, { ...options });
  }
}
