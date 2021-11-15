import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { CreditLine } from '../wrappers/CreditLine';
import { CreditLine__factory } from '../wrappers/factories/CreditLine__factory';
import { CreditLineRequest, StrategyType } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';
import { zeroAddress } from '../config/constants';
export class CreditLineApi {
  private creditLineContract: CreditLine;
  private tokenManager: TokenManager;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
    this.config = config;
    this.tokenManager = tokenManager;
  }

  public async requestCreditLineToLender(request: CreditLineRequest): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(request.borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(request.borrowAsset);

    let borrowLimit = new BigNumber(request.borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }
    let borrowRate = new BigNumber(request.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }
    let collateralRatio = new BigNumber(request.collateralRatio);
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

  public async requestCreditLineToBorrower(request: CreditLineRequest): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(request.borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(request.borrowAsset);

    let borrowLimit = new BigNumber(request.borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }
    let borrowRate = new BigNumber(request.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }
    let collateralRatio = new BigNumber(request.collateralRatio);
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

  public async acceptCreditLine(creditLine: BigNumberish): Promise<ContractTransaction> {
    return await this.creditLineContract.accept(creditLine);
  }

  public async calculateInterestAccrued(creditLineNumber: BigNumberish): Promise<string> {
    let _value = await this.creditLineContract.calculateInterestAccrued(creditLineNumber);
    let borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
  }

  public async calculateCurrentDebt(creditLineNumber: BigNumberish): Promise<string> {
    let _value = await this.creditLineContract.calculateCurrentDebt(creditLineNumber);
    let borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(borrowDecimal);
  }

  public async calculateBorrowableAmount(creditLineNumber: BigNumberish): Promise<string> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateBorrowableAmount(creditLineNumber);
    let borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(borrowDecimal);
  }

  public async calculateCurrentCollateralRatio(creditLineNumber: BigNumberish): Promise<string> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateCurrentCollateralRatio(creditLineNumber);
    return new BigNumber(_value.toString()).div(new BigNumber(10).div(28)).toFixed(2);
  }

  public async calculateTotalCollateralTokens(creditLineNumber: BigNumberish): Promise<string> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateTotalCollateralTokens(creditLineNumber);
    let collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(collateralDecimal)).toFixed(2);
  }

  public async withdrawableCollateral(creditLineNumber: BigNumberish): Promise<string> {
    let collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    let result = await this.creditLineContract.callStatic.withdrawableCollateral(creditLineNumber);
    return new BigNumber(result.toString()).div(new BigNumber(10).pow(collateralDecimal)).toFixed(4);
  }

  public async withdrawCollateralFromCreditLine(
    creditLineNumber: BigNumberish,
    amount: string,
    toSavingsAccount: boolean = false
  ): Promise<ContractTransaction> {
    let collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.withdrawCollateral(
      creditLineNumber,
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      toSavingsAccount
    );
  }

  public async depositCollateral(
    creditLineNumber: BigNumberish,
    amount: string,
    strategy: StrategyType,
    fromSavingsAccount: boolean
  ): Promise<ContractTransaction> {
    let collateralAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).collateralAsset;
    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    let _amount = new BigNumber(amount);
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

  public async borrowFromCreditLine(creditLineNumber: BigNumberish, amount: string): Promise<ContractTransaction> {
    let borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.borrow(creditLineNumber, _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0));
  }

  public async repayCreditLine(creditLineNumber: BigNumberish, amount: string, fromSavingsAccount: boolean): Promise<ContractTransaction> {
    let borrowAsset: string = await (await this.creditLineContract.creditLineConstants(creditLineNumber)).borrowAsset;
    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.repay(
      creditLineNumber,
      _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      fromSavingsAccount
    );
  }

  public async closeCreditLine(creditLineNumber: BigNumberish): Promise<ContractTransaction> {
    return this.creditLineContract.close(creditLineNumber);
  }

  public async liquidateCreditLine(creditLineNumber: BigNumberish, toSavingsAccount: boolean = false): Promise<ContractTransaction> {
    return this.creditLineContract.liquidate(creditLineNumber, toSavingsAccount);
  }
}
