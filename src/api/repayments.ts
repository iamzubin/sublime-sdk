import { Signer, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Repayments } from '../wrappers/Repayments';
import { Repayments__factory } from '../wrappers/factories/Repayments__factory';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';
import { Options as Overrides } from '../types/Types';

/**
 * @class RepaymentApi
 */
export class RepaymentApi {
  private signer: Signer;
  private repayments: Repayments;
  private tokenManager: TokenManager;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.signer = signer;
    this.repayments = new Repayments__factory(this.signer).attach(config.repaymentContractAddress);

    this.tokenManager = tokenManager;
  }

  public async getInterestPerSecond(pool: string): Promise<string> {
    const poolConstants = await this.repayments.repayInfo(pool);
    await this.tokenManager.updateTokenDecimals(poolConstants.repayAsset);
    const decimal = this.tokenManager.getTokenDecimals(poolConstants.repayAsset);

    const interestPerPeriod = await (await this.repayments.getInterestPerSecond(pool)).toString();
    return new BigNumber(interestPerPeriod).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async getInstalmentsCompleted(pool: string): Promise<string> {
    return await (await this.repayments.getInstalmentsCompleted(pool)).toString();
  }

  public async getInterestDueTillInstalmentDeadline(pool: string): Promise<string> {
    const poolConstants = await this.repayments.repayInfo(pool);
    await this.tokenManager.updateTokenDecimals(poolConstants.repayAsset);
    const decimal = this.tokenManager.getTokenDecimals(poolConstants.repayAsset);

    const interestDueTillInstalmentDeadline = await (await this.repayments.getInterestDueTillInstalmentDeadline(pool)).toString();
    return new BigNumber(interestDueTillInstalmentDeadline).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async getNextInstalmentDeadline(pool: string): Promise<string> {
    return await (await this.repayments.getNextInstalmentDeadline(pool)).toString();
  }

  public async getCurrentInstalmentInterval(pool: string): Promise<string> {
    return await (await this.repayments.getCurrentInstalmentInterval(pool)).toString();
  }

  public async getCurrentLoanInterval(pool: string): Promise<string> {
    return await (await this.repayments.getCurrentLoanInterval(pool)).toString();
  }

  public async isGracePenaltyApplicable(pool: string): Promise<boolean> {
    return await this.repayments.isGracePenaltyApplicable(pool);
  }

  public async didBorrowerDefault(pool: string): Promise<boolean> {
    return await this.repayments.didBorrowerDefault(pool);
  }

  public async getInterestLeft(pool: string): Promise<string> {
    const poolConstants = await this.repayments.repayInfo(pool);
    await this.tokenManager.updateTokenDecimals(poolConstants.repayAsset);
    const decimal = this.tokenManager.getTokenDecimals(poolConstants.repayAsset);

    const interestLeft = await (await this.repayments.getInterestLeft(pool)).toString();
    return new BigNumber(interestLeft).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async getInterestOverdue(pool: string): Promise<string> {
    const poolConstants = await this.repayments.repayInfo(pool);
    await this.tokenManager.updateTokenDecimals(poolConstants.repayAsset);
    const decimal = this.tokenManager.getTokenDecimals(poolConstants.repayAsset);

    const interestOverdue = await (await this.repayments.getInterestOverdue(pool)).toString();
    return new BigNumber(interestOverdue).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async repayAmount(pool: string, amount: string, options: Overrides): Promise<ContractTransaction> {
    const poolConstants = await this.repayments.repayInfo(pool);
    await this.tokenManager.updateTokenDecimals(poolConstants.repayAsset);
    const decimal = this.tokenManager.getTokenDecimals(poolConstants.repayAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.repayments.repay(pool, _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0), { ...options });
  }

  public async repayPrincipal(pool: string, options?: Overrides): Promise<ContractTransaction> {
    return this.repayments.repayPrincipal(pool, { ...options });
  }

  public async getTotalRepaidAmount(pool: string): Promise<string> {
    const poolConstants = await this.repayments.repayInfo(pool);
    await this.tokenManager.updateTokenDecimals(poolConstants.repayAsset);
    const decimal = this.tokenManager.getTokenDecimals(poolConstants.repayAsset);

    const totalRepaidAmount = await (await this.repayments.getTotalRepaidAmount(pool)).toString();
    return new BigNumber(totalRepaidAmount).div(new BigNumber(10).pow(decimal)).toFixed(2);
  }

  public async getGracePeriodFraction(pool: string): Promise<string> {
    const graceFraction = await (await this.repayments.getGracePeriodFraction()).toString();
    return new BigNumber(graceFraction).div(new BigNumber(10).pow(28)).toFixed(2);
  }
}
