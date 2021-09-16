import { SublimeConfig } from '../types/sublimeConfig';
import { BytesLike, ContractTransaction, Signer } from 'ethers';

import { CreditLine } from '../wrappers/CreditLine';
import { CreditLine__factory } from '../wrappers/factories/CreditLine__factory';
import { CreditLineRequest } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';
import { zeroAddress } from '../config/constants';

export class CreditLineApi {
  private signer: Signer;
  private creditLineContract: CreditLine;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
  }

  public async requestCreditLineToLender(request: CreditLineRequest): Promise<ContractTransaction> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(request.borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    let borrowLimit = new BigNumber(request.borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }
    let liquidationThreshold = new BigNumber(request.liquidationThreshold);
    if (liquidationThreshold.isNaN() || liquidationThreshold.isZero() || liquidationThreshold.isNegative()) {
      throw new Error('liquidationThreshold should be a valid number');
    }
    let borrowRate = new BigNumber(request.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }
    let collateralRatio = new BigNumber(request.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    return await this.creditLineContract.requestCreditLineToLender(
      request.address,
      borrowLimit.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      liquidationThreshold.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.autoLiquidation,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.borrowAsset,
      request.collateralAsset
    );
  }

  public async requestCreditLineToBorrower(request: CreditLineRequest): Promise<ContractTransaction> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(request.borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    let borrowLimit = new BigNumber(request.borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }
    let liquidationThreshold = new BigNumber(request.liquidationThreshold);
    if (liquidationThreshold.isNaN() || liquidationThreshold.isZero() || liquidationThreshold.isNegative()) {
      throw new Error('liquidationThreshold should be a valid number');
    }
    let borrowRate = new BigNumber(request.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }
    let collateralRatio = new BigNumber(request.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    return await this.creditLineContract.requestCreditLineToBorrower(
      request.address,
      borrowLimit.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      liquidationThreshold.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.autoLiquidation,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      request.borrowAsset,
      request.collateralAsset
    );
  }

  public async calculateInterestAccrued(creditLineHash: BytesLike): Promise<string> {
    let _value = await this.creditLineContract.calculateInterestAccrued(creditLineHash);
    let borrowAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).borrowAsset;
    const BorrowToken: Token = new Token__factory(this.signer).attach(borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
  }

  public async calculateCurrentDebt(creditLineHash: BytesLike): Promise<string> {
    let _value = await this.creditLineContract.calculateCurrentDebt(creditLineHash);
    let borrowAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).borrowAsset;
    const BorrowToken: Token = new Token__factory(this.signer).attach(borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
  }

  public async calculateBorrowableAmount(creditLineHash: BytesLike): Promise<string> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateBorrowableAmount(creditLineHash);
    let borrowAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).borrowAsset;
    const BorrowToken: Token = new Token__factory(this.signer).attach(borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
  }

  public async calculateCurrentCollateralRatio(creditLineHash: BytesLike): Promise<string> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateCurrentCollateralRatio(creditLineHash);
    return new BigNumber(_value.toString()).div(new BigNumber(10).div(28)).toFixed(2);
  }

  public async calculateTotalCollateralTokens(creditLineHash: BytesLike): Promise<string> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateTotalCollateralTokens(creditLineHash);
    let collateralAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).collateralAsset;
    const CollateralToken: Token = new Token__factory(this.signer).attach(collateralAsset);
    const collateralDecimal: BigNumberish = CollateralToken.address === zeroAddress ? 18 : await CollateralToken.decimals();

    return new BigNumber(_value.toString()).div(new BigNumber(10).pow(collateralDecimal)).toFixed(2);
  }

  public async withdrawCollateralFromCreditLine(creditLineHash: BytesLike, amount: string): Promise<ContractTransaction> {
    let collateralAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).collateralAsset;
    const CollateralToken: Token = new Token__factory(this.signer).attach(collateralAsset);
    const collateralDecimal: BigNumberish = CollateralToken.address === zeroAddress ? 18 : await CollateralToken.decimals();

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.creditLineContract.withdrawCollateralFromCreditLine(
      creditLineHash,
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0)
    );
  }
}
