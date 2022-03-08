import { BytesLike, ContractTransaction, Signer } from 'ethers';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { SublimeConfig } from '../types/sublimeConfig';

import { LoanStatus, PoolGenerateParams } from '../types/poolGenerateParam';
import { PoolInfo } from '../types/poolInfo';
import { PoolFactory } from '../wrappers/PoolFactory';
import { PoolFactory__factory } from '../wrappers/factories/PoolFactory__factory';

import { Pool } from '../wrappers/Pool';
import { Pool__factory } from '../wrappers/factories/Pool__factory';

import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { zeroAddress } from '../config/constants';

import { TokenManager } from '../tokenManager';

import { Options as Overrides } from '../types/Types';
import { PoolEthUtils } from './utils/poolEthUtils';

export class PoolApi {
  private signer: Signer;
  private config: SublimeConfig;
  private tokenManager: TokenManager;

  private poolFactory: PoolFactory;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.signer = signer;
    this.config = config;
    this.tokenManager = tokenManager;
    this.poolFactory = new PoolFactory__factory(this.signer).attach(config.poolFactoryContractAddress);
  }

  PoolUtils(): PoolEthUtils {
    return new PoolEthUtils(this.signer, this.config, this.tokenManager);
  }

  public async createPool(params: PoolGenerateParams, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(params.borrowToken);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(params.borrowToken);

    await this.tokenManager.updateTokenDecimals(params.collateralToken);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(params.collateralToken);

    const borrowAmountRequests = new BigNumber(params.borrowAmountRequests);
    if (borrowAmountRequests.isNaN() || borrowAmountRequests.isZero() || borrowAmountRequests.isNegative()) {
      throw new Error('borrowAmountRequests should be a valid number');
    }

    const collateralVolatilityThreshold = new BigNumber(params.collateralVolatilityThreshold);
    if (collateralVolatilityThreshold.isNaN() || collateralVolatilityThreshold.isZero() || collateralVolatilityThreshold.isNegative()) {
      throw new Error('collateralVolatilityThreshold should be a valid number');
    }

    const collateralRatio = new BigNumber(params.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    const borrowRate = new BigNumber(params.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }

    const repaymentInterval = new BigNumber(params.repaymentInterval);
    if (repaymentInterval.isNaN() || repaymentInterval.isZero() || repaymentInterval.isNegative()) {
      throw new Error('repaymentInterval should be a valid number');
    }

    const noOfRepaymentIntervals = new BigNumber(params.noOfRepaymentIntervals);
    if (noOfRepaymentIntervals.isNaN() || noOfRepaymentIntervals.isZero() || noOfRepaymentIntervals.isNegative()) {
      throw new Error('noOfRepaymentIntervals should be a valid number');
    }

    const collateralAmount = new BigNumber(params.collateralAmount);
    if (collateralAmount.isNaN() || collateralAmount.isZero() || collateralAmount.isNegative()) {
      throw new Error('collateralAmount should be a valid number');
    }

    return await this.poolFactory.createPool(
      borrowAmountRequests.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      params.borrowToken,
      params.collateralToken,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      repaymentInterval.toFixed(0),
      noOfRepaymentIntervals.toFixed(0),
      params.strategy,
      collateralAmount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      params.transferFromSavingsAccount,
      params.salt,
      this.config.twitterVerifierContractAddress,
      params.lenderVerifier,
      {
        ...options,
      }
    );
  }

  public async generatePoolAddress(creator: string, salt: BytesLike): Promise<string> {
    return this.poolFactory.connect(this.signer).preComputeAddress(creator, salt);
  }

  public async depositCollateral(
    poolContract: string,
    amount: string,
    transferFromSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const collateralAsset = (await pool.poolConstants()).collateralAsset;

    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return pool.depositCollateral(
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal.toString())).toFixed(0),
      transferFromSavingsAccount,
      { ...options }
    );
  }

  public async interestTillNow(poolContract: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const borrowAsset = (await pool.poolConstants()).borrowAsset;

    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const interestTillNow = await (await pool.interestToPay()).toString();
    return new BigNumber(interestTillNow).div(new BigNumber(10).pow(borrowDecimal.toFixed(0))).toFixed(2);
  }

  public async getCurrentCollateralRatio(poolContract: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const ccr = await (await pool.callStatic['getCurrentCollateralRatio()']()).toString();
    return new BigNumber(ccr).div(new BigNumber(10).pow(28)).toFixed(2);
  }

  public async liquidatePool(
    poolContract: string,
    fromSavingsAccount: boolean,
    toSavingsAccount: boolean,
    recieveLiquidityShare: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return await pool.liquidatePool(fromSavingsAccount, toSavingsAccount, recieveLiquidityShare, { ...options });
  }

  public async liquidateLender(
    poolContract: string,
    lender: string,
    fromSavingsAccount: boolean,
    toSavingsAccount: boolean,
    recieveLiquidityShare: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return await pool.liquidateForLender(lender, fromSavingsAccount, toSavingsAccount, recieveLiquidityShare, { ...options });
  }

  public async interestPerPeriod(poolContract: string, amount: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const borrowAsset = (await pool.poolConstants()).borrowAsset;

    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const _amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(borrowDecimal));
    const interestPerPeriod = await (await pool.interestPerPeriod(_amount.toFixed(0))).toString();
    const value = new BigNumber(interestPerPeriod).div(new BigNumber(10).pow(borrowDecimal));
    return value.div(new BigNumber(10).pow(30)).toFixed(2);
  }

  public async interestPerSecond(poolContract: string, amount: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const borrowAsset = (await pool.poolConstants()).borrowAsset;

    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    const _amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(borrowDecimal));
    const interestPerSecond = await (await pool.interestPerSecond(_amount.toFixed(0))).toString();

    const value = new BigNumber(interestPerSecond).div(new BigNumber(10).pow(borrowDecimal));
    return value.div(new BigNumber(10).pow(30)).toFixed(2);
  }

  public async calculateCurrentPeriod(poolContract: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return (await pool.calculateCurrentPeriod()).toString();
  }

  public async getMarginCallEndTime(poolContract: string, lender: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return (await pool.getMarginCallEndTime(lender)).toString();
  }

  public async getLoanStatus(poolContract: string): Promise<LoanStatus> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const _status = (await pool.getLoanStatus()).toString();
    return LoanStatus[_status];
  }

  public async getBalanceDetails(poolContract: string, lender: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);

    await this.tokenManager.updateTokenDecimals(poolContract);
    const _decimal: BigNumberish = this.tokenManager.getTokenDecimals(poolContract);

    const details = await (
      await pool.getBalanceDetails(lender)
    ).map((a) => new BigNumber(a.toString()).div(new BigNumber(10).pow(_decimal)));
    return details[0].toFixed(2);
  }

  public async getTotalSupply(poolContract: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);

    await this.tokenManager.updateTokenDecimals(poolContract);
    const _decimal: BigNumberish = this.tokenManager.getTokenDecimals(poolContract);

    const totalSupply = await pool.totalSupply();
    return new BigNumber(totalSupply.toString()).div(new BigNumber(10).pow(_decimal)).toFixed(2);
  }

  public async getPoolInfo(poolContract: string): Promise<PoolInfo> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const result = {} as PoolInfo;
    const poolConstants = await pool.poolConstants();

    let liquidityToken: string;
    const poolSavingsStrategy = poolConstants.poolSavingsStrategy;
    if (poolSavingsStrategy === zeroAddress) {
      liquidityToken = zeroAddress;
    } else {
      liquidityToken = await IYield__factory.connect(poolSavingsStrategy, this.signer).liquidityToken(poolConstants.collateralAsset);
    }

    const allTokens = [poolConstants.borrowAsset, poolConstants.collateralAsset, liquidityToken].filter(
      (value, index, array) => array.indexOf(value) === index
    );
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    const minBorrowFraction = await this.poolFactory.minBorrowFraction();

    result.borrowAmountRequested = new BigNumber(poolConstants.borrowAmountRequested.toString())
      .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(poolConstants.borrowAsset.toLowerCase())))
      .toFixed(2);
    result.minborrowAmount = new BigNumber(poolConstants.borrowAmountRequested.toString())
      .multipliedBy(minBorrowFraction.toString())
      .div(new BigNumber(10).pow(28))
      .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(poolConstants.borrowAsset.toLowerCase())))
      .toFixed(2);
    result.loanStartTime = poolConstants.loanStartTime.toString();
    result.loanWithdrawalDeadline = poolConstants.loanWithdrawalDeadline.toString();
    result.borrowAsset = {
      address: poolConstants.borrowAsset,
      name: this.tokenManager.getTokenName(poolConstants.borrowAsset.toLowerCase()),
      pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(poolConstants.borrowAsset)).toString(),
      logo: this.tokenManager.getLogo(poolConstants.borrowAsset),
    };
    result.idealCollateralRatio = new BigNumber(poolConstants.idealCollateralRatio.toString()).div(new BigNumber(10).pow(28)).toFixed(2);
    result.borrowRate = new BigNumber(poolConstants.borrowRate.toString()).div(new BigNumber(10).pow(28)).toFixed(2);
    result.noOfRepaymentIntervals = poolConstants.noOfRepaymentIntervals.toString();
    result.repaymentInterval = poolConstants.repaymentInterval.toString();
    result.collateralAsset = {
      address: poolConstants.collateralAsset,
      name: this.tokenManager.getTokenName(poolConstants.collateralAsset),
      pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(poolConstants.collateralAsset)).toString(),
      logo: this.tokenManager.getLogo(poolConstants.collateralAsset),
    };
    result.poolSavingsStrategy = poolConstants.poolSavingsStrategy;

    const poolVars = await pool.poolVars();

    result.baseLiquidityShares = new BigNumber(poolVars.baseLiquidityShares.toString())
      .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(liquidityToken.toLowerCase())))
      .toFixed(2);
    result.extraLiquidityShares = new BigNumber(poolVars.extraLiquidityShares.toString())
      .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(liquidityToken.toLowerCase())))
      .toFixed(2);
    result.loanStatus = LoanStatus[poolVars.loanStatus.toString()];
    result.penaltyLiquidityAmount = new BigNumber(poolVars.penaltyLiquidityAmount.toString())
      .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(poolConstants.collateralAsset.toLowerCase())))
      .toFixed(2);
    return result;
  }
}
