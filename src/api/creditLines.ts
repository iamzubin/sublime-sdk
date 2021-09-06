import { SublimeConfig } from '../types/sublimeConfig';
import { BytesLike, ContractTransaction, Signer } from 'ethers';

import { CreditLine } from '../wrappers/CreditLine';
import { CreditLine__factory } from '../wrappers/factories/CreditLine__factory';
import { CreditLineRequest } from 'creditLinesTypes';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

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

    return await this.creditLineContract.requestCreditLineToLender(
      request.address,
      BigNumber.from(request.borrowLimit).mul(BigNumber.from(10).pow(borrowDecimal)),
      BigNumber.from(request.liquidationThreshold).mul(BigNumber.from(10).pow(28)),
      BigNumber.from(request.borrowRate).mul(BigNumber.from(10).pow(28)),
      request.autoLiquidation,
      BigNumber.from(request.collateralRatio).mul(BigNumber.from(10).pow(28)),
      request.borrowAsset,
      request.collateralAsset
    );
  }

  public async requestCreditLineToBorrower(request: CreditLineRequest): Promise<ContractTransaction> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(request.borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return await this.creditLineContract.requestCreditLineToBorrower(
      request.address,
      BigNumber.from(request.borrowLimit).mul(BigNumber.from(10).pow(borrowDecimal)),
      BigNumber.from(request.liquidationThreshold).mul(BigNumber.from(10).pow(28)),
      BigNumber.from(request.borrowRate).mul(BigNumber.from(10).pow(28)),
      request.autoLiquidation,
      BigNumber.from(request.collateralRatio).mul(BigNumber.from(10).pow(28)),
      request.borrowAsset,
      request.collateralAsset
    );
  }

  public async calculateInterestAccrued(creditLineHash: BytesLike): Promise<BigNumber> {
    let _value = await this.creditLineContract.calculateInterestAccrued(creditLineHash);
    let borrowAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).borrowAsset;
    const BorrowToken: Token = new Token__factory(this.signer).attach(borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return _value.div(BigNumber.from(10).div(borrowDecimal));
  }

  public async calculateCurrentDebt(creditLineHash: BytesLike): Promise<BigNumber> {
    let _value = await this.creditLineContract.calculateCurrentDebt(creditLineHash);
    let borrowAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).borrowAsset;
    const BorrowToken: Token = new Token__factory(this.signer).attach(borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return _value.div(BigNumber.from(10).div(borrowDecimal));
  }

  public async calculateBorrowableAmount(creditLineHash: BytesLike): Promise<BigNumber> {
    let _value: BigNumberish = await this.creditLineContract.callStatic.calculateBorrowableAmount(creditLineHash);
    let borrowAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).borrowAsset;
    const BorrowToken: Token = new Token__factory(this.signer).attach(borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return _value.div(BigNumber.from(10).div(borrowDecimal));
  }

  public async calculateCurrentCollateralRatio(creditLineHash: BytesLike): Promise<BigNumber> {
    let _value: BigNumberish = await this.creditLineContract.callstatic.calculateCurrentCollateralRatio(creditLineHash);
    return BigNumber.from(_value).div(BigNumber.from(10).div(28));
  }

  public async calculateTotalCollateralTokens(creditLineHash: BytesLike): Promise<BigNumber> {
    let _value: BigNumberish = await this.creditLineContract.callstatic.calculateTotalCollateralTokens(creditLineHash);
    let collateralAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).collateralAsset;
    const CollateralToken: Token = new Token__factory(this.signer).attach(collateralAsset);
    const collateralDecimal: BigNumberish = CollateralToken.address === zeroAddress ? 18 : await CollateralToken.decimals();

    return BigNumber.from(_value).div(BigNumber.from(10).div(collateralDecimal));
  }

  public async withdrawCollateralFromCreditLine(creditLineHash: BytesLike, amount: BigNumberish): Promise<ContractTransaction> {
    let collateralAsset: string = await (await this.creditLineContract.creditLineInfo(creditLineHash)).collateralAsset;
    const CollateralToken: Token = new Token__factory(this.signer).attach(collateralAsset);
    const collateralDecimal: BigNumberish = CollateralToken.address === zeroAddress ? 18 : await CollateralToken.decimals();

    return this.creditLineContract.withdrawCollateralFromCreditLine(
      creditLineHash,
      BigNumber.from(amount).mul(BigNumber.from(10).pow(collateralDecimal))
    );
  }
}
