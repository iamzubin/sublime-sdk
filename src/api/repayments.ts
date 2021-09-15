import { Signer, BytesLike, BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Repayments } from '../wrappers/Repayments';
import { Repayments__factory } from '../wrappers/factories/Repayments__factory';

import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';
import { zeroAddress } from '../config/constants';

export class RepaymentApi {
  private signer: Signer;
  private repayments: Repayments;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.repayments = new Repayments__factory(this.signer).attach(config.repaymentContractAddress);
  }

  public async getInterestPerSecond(pool: string): Promise<BigNumber> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return (await this.repayments.getInterestPerSecond(pool)).div(BigNumber.from(10).pow(decimal));
  }

  public async getInstalmentsCompleted(pool: string): Promise<BigNumber> {
    return await this.repayments.getInstalmentsCompleted(pool);
  }

  public async getInterestDueTillInstalmentDeadline(pool: string): Promise<BigNumber> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return await (await this.repayments.getInstalmentsCompleted(pool)).div(BigNumber.from(10).pow(decimal));
  }

  public async getNextInstalmentDeadline(pool: string): Promise<BigNumber> {
    return await this.repayments.getNextInstalmentDeadline(pool);
  }

  public async getCurrentInstalmentInterval(pool: string): Promise<BigNumber> {
    return await this.repayments.getCurrentInstalmentInterval(pool);
  }

  public async getCurrentLoanInterval(pool: string): Promise<BigNumber> {
    return await this.repayments.getCurrentLoanInterval(pool);
  }

  public async isGracePenaltyApplicable(pool: string): Promise<boolean> {
    return await this.repayments.isGracePenaltyApplicable(pool);
  }

  public async didBorrowerDefault(pool: string): Promise<boolean> {
    return await this.repayments.didBorrowerDefault(pool);
  }

  public async getInterestLeft(pool: string): Promise<BigNumber> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return await (await this.repayments.getInterestLeft(pool)).div(BigNumber.from(10).pow(decimal));
  }

  public async getInterestOverdue(pool: string): Promise<BigNumber> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return await (await this.repayments.getInterestOverdue(pool)).div(BigNumber.from(10).pow(decimal));
  }

  public async repayAmount(pool: string, amount: BigNumberish): Promise<ContractTransaction> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.repayments.repayAmount(pool, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimal)));
  }

  public async repayPrincipal(pool: string, amount: BigNumberish): Promise<ContractTransaction> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return this.repayments.repayPrincipal(pool, BigNumber.from(amount).mul(BigNumber.from(10).pow(decimal)));
  }

  public async getTotalRepaidAmount(pool: string): Promise<BigNumber> {
    const poolConstants = await this.repayments.repaymentConstants(pool);
    const _token: Token = new Token__factory(this.signer).attach(poolConstants.repayAsset);
    const decimal: BigNumberish = _token.address === zeroAddress ? 18 : await _token.decimals();

    return await (await this.repayments.getTotalRepaidAmount(pool)).div(BigNumber.from(10).pow(decimal));
  }

  public async getGracePeriodFraction(pool: string): Promise<BigNumber> {
    return await (await this.repayments.getGracePeriodFraction()).div(BigNumber.from(10).pow(28));
  }
}
