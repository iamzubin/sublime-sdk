import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { CreditLine } from '../wrappers/CreditLine';
import { CreditLine__factory } from '../wrappers/factories/CreditLine__factory';
import { CreditLineRequest, StrategyType } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';
import { zeroAddress } from '../config/constants';

/**
 * @class CreditLineApi
 */
export class CreditLineApi {
  private creditLineContract: CreditLine;
  private tokenManager: TokenManager;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
    this.config = config;
    this.tokenManager = tokenManager;
  }

  /**
   * @description Requests a new credit line to lender
   * @param request: details of the credit line to request
   * @returns contract transaction
   */
  public async requestCreditLineToLender(request: CreditLineRequest): Promise<ContractTransaction> {
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

    return await this.creditLineContract.request(
      request.address,
      borrowLimit.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.autoLiquidation,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.borrowAsset,
      request.collateralAsset,
      false
    );
  }

  /**
   * @description Requests a new credit line to borrower
   * @param request: details of the credit line to request
   * @returns contract transaction
   */
  public async requestCreditLineToBorrower(request: CreditLineRequest): Promise<ContractTransaction> {
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

    return await this.creditLineContract.request(
      request.address,
      borrowLimit.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.autoLiquidation,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.borrowAsset,
      request.collateralAsset,
      true
    );
  }

  /**
   * @description Accpeting a credit line.
   * @param creditLine
   * @returns Contract Transaction
   */
  public async acceptCreditLine(creditLine: BigNumberish): Promise<ContractTransaction> {
    return await this.creditLineContract.accept(creditLine);
  }

  /**
   * @description Calculated the total accrued till now for a credit line
   * @param creditLineNumber
   * @returns debt in borrow tokens (easy readable)
   */
  public async calculateInterestAccrued(creditLineNumber: BigNumberish): Promise<string> {
    const _value = await this.creditLineContract.calculateInterestAccrued(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
  }

  /**
   * @description Calcualte the total debt for a credit line till now
   * @param creditLineNumber
   * @returns debt in borrow tokens (easy readable)
   */
  public async calculateCurrentDebt(creditLineNumber: BigNumberish): Promise<string> {
    const _value = await this.creditLineContract.calculateCurrentDebt(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(borrowDecimal);
  }

  /**
   * @description Calculate the total amount that can be borrowed from the credit line
   * @param creditLineNumber
   * @returns borrowable amount in borrow tokens (easy readable)
   */
  public async calculateBorrowableAmount(creditLineNumber: BigNumberish): Promise<string> {
    const _value: BigNumberish = await this.creditLineContract.callStatic.calculateBorrowableAmount(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(borrowDecimal);
  }

  /**
   * @description Calcualte the current collateral ratio of a credit line
   * @param creditLineNumber
   * @returns collateral ratio (easy readable)
   */
  public async calculateCurrentCollateralRatio(creditLineNumber: BigNumberish): Promise<string> {
    const _value: BigNumberish = await this.creditLineContract.callStatic.calculateCurrentCollateralRatio(creditLineNumber);
    return new BigNumber(_value.toString()).div(new BigNumber(10).div(28)).toFixed(2);
  }

  /**
   * @description Calculate the total collateral tokens held against a credit line
   * @param creditLineNumber
   * @returns collateral tokens number (easy readable)
   */
  public async calculateTotalCollateralTokens(creditLineNumber: BigNumberish): Promise<string> {
    const _value: BigNumberish = await this.creditLineContract.callStatic.calculateTotalCollateralTokens(creditLineNumber);
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(collateralDecimal)).toFixed(2);
  }

  /**
   * @description Calculate the amount the collateral that can be withdrawn from the credit line
   * @param creditLineNumber
   * @returns collateral tokens (easy readable)
   */
  public async withdrawableCollateral(creditLineNumber: BigNumberish): Promise<string> {
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    const result = await this.creditLineContract.callStatic.withdrawableCollateral(creditLineNumber);
    return new BigNumber(result.toString()).div(new BigNumber(10).pow(collateralDecimal)).toFixed(4);
  }

  /**
   * @description Withdraws the collateral from the credit line
   * @param creditLineNumber
   * @param amount
   * @param toSavingsAccount: boolean params that enables with withdrawn collateral to be
   * directly transferred from credit line to user's savings account
   * @returns Contract Transaction
   */
  public async withdrawCollateralFromCreditLine(
    creditLineNumber: BigNumberish,
    amount: string,
    toSavingsAccount: boolean = false
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
      toSavingsAccount
    );
  }

  /**
   * @description Deposit Collateral to a credit line
   * @param creditLineNumber
   * @param amount
   * @param strategy
   * @param fromSavingsAccount: when set to true, the collateral is transfered directly from savings account to credit line
   * @returns Contract Transaction
   */
  public async depositCollateral(
    creditLineNumber: BigNumberish,
    amount: string,
    strategy: StrategyType,
    fromSavingsAccount: boolean
  ): Promise<ContractTransaction> {
    const collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    let strategyAddress;
    if (strategy == StrategyType.NoYield) {
      strategyAddress = this.config.noStrategyAddress;
    } else if (strategy == StrategyType.CompounYield) {
      strategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      strategyAddress = this.config.yearnStrategyContractAddress;
    }

    let msgValue = new BigNumber(0);
    if (fromSavingsAccount == false && collateralAsset == zeroAddress) {
      msgValue = _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal));
    }

    return this.creditLineContract.depositCollateral(
      creditLineNumber,
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      strategyAddress,
      fromSavingsAccount,
      { value: msgValue.toString() }
    );
  }

  /**
   * @description Borrow tokens from credit line
   * @param creditLineNumber
   * @param amount
   * @returns Contract Transaction
   */
  public async borrowFromCreditLine(creditLineNumber: BigNumberish, amount: string): Promise<ContractTransaction> {
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.borrow(creditLineNumber, _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0));
  }

  /**
   * @description Repay the amount to credit line
   * @param creditLineNumber
   * @param amount
   * @param fromSavingsAccount
   * @returns Contract Transaction
   */
  public async repayCreditLine(creditLineNumber: BigNumberish, amount: string, fromSavingsAccount: boolean): Promise<ContractTransaction> {
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    let value = new BigNumber(0);
    if (borrowAsset === zeroAddress) {
      value = new BigNumber(amount);
    }
    return this.creditLineContract.repay(
      creditLineNumber,
      _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      fromSavingsAccount,
      { value: value.toString() }
    );
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
  public async liquidateCreditLine(creditLineNumber: BigNumberish, toSavingsAccount: boolean = false): Promise<ContractTransaction> {
    const debt = await this.creditLineContract.calculateCurrentDebt(creditLineNumber);
    const borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;

    let value = new BigNumber(0);
    if (borrowAsset == zeroAddress) {
      value = new BigNumber(debt.toString()).multipliedBy(4).div(3);
    }

    return this.creditLineContract.liquidate(creditLineNumber, toSavingsAccount, { value: value.toString() });
  }
}
