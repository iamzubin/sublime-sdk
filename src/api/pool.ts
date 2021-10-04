import { BytesLike, ContractTransaction, ethers, Signer } from 'ethers';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { SublimeConfig } from '../types/sublimeConfig';
import { abi as PoolAbi } from '../artifacts/contracts/Pool/Pool.sol/Pool.json';
import { bytecode as SublimeProxyByteCode } from '../artifacts/contracts/Proxy.sol/SublimeProxy.json';

import { LoanStatus, PoolGenerateParams } from '../types/poolGenerateParam';
import { PoolInfo } from '../types/poolInfo';
import { PoolFactory } from '../wrappers';
import { PoolFactory__factory } from '../wrappers/factories/PoolFactory__factory';

import { Pool } from '../wrappers/Pool';
import { Pool__factory } from '../wrappers/factories/Pool__factory';

import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { zeroAddress } from '../config/constants';
const _interface = new ethers.utils.Interface(PoolAbi);
const initializeFragement = _interface.getFunction('initialize');

import { TokenManager } from '../tokenManager';

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

  public async createPool(params: PoolGenerateParams): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(params.borrowToken);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(params.borrowToken);

    await this.tokenManager.updateTokenDecimals(params.collateralToken);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(params.collateralToken);

    let borrowAmountRequests = new BigNumber(params.borrowAmountRequests);
    if (borrowAmountRequests.isNaN() || borrowAmountRequests.isZero() || borrowAmountRequests.isNegative()) {
      throw new Error('borrowAmountRequests should be a valid number');
    }

    let collateralVolatilityThreshold = new BigNumber(params.collateralVolatilityThreshold);
    if (collateralVolatilityThreshold.isNaN() || collateralVolatilityThreshold.isZero() || collateralVolatilityThreshold.isNegative()) {
      throw new Error('collateralVolatilityThreshold should be a valid number');
    }

    let collateralRatio = new BigNumber(params.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    let borrowRate = new BigNumber(params.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }

    let repaymentInterval = new BigNumber(params.repaymentInterval);
    if (repaymentInterval.isNaN() || repaymentInterval.isZero() || repaymentInterval.isNegative()) {
      throw new Error('repaymentInterval should be a valid number');
    }

    let noOfRepaymentIntervals = new BigNumber(params.noOfRepaymentIntervals);
    if (noOfRepaymentIntervals.isNaN() || noOfRepaymentIntervals.isZero() || noOfRepaymentIntervals.isNegative()) {
      throw new Error('noOfRepaymentIntervals should be a valid number');
    }

    let collateralAmount = new BigNumber(params.collateralAmount);
    if (collateralAmount.isNaN() || collateralAmount.isZero() || collateralAmount.isNegative()) {
      throw new Error('collateralAmount should be a valid number');
    }

    return await this.poolFactory.createPool(
      borrowAmountRequests.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      params.borrowToken,
      params.collateralToken,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      collateralVolatilityThreshold.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      repaymentInterval.toFixed(0),
      noOfRepaymentIntervals.toFixed(0),
      params.strategy,
      collateralAmount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      params.transferFromSavingsAccount,
      params.salt,
      this.config.adminVerifierContractAddress,
      params.lenderVerifier,
      {
        value:
          params.collateralToken === zeroAddress ? collateralAmount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0) : 0,
      }
    );
  }

  public async generatePoolAddress(params: PoolGenerateParams): Promise<string> {
    await this.tokenManager.updateTokenDecimals(params.borrowToken);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(params.borrowToken);

    await this.tokenManager.updateTokenDecimals(params.collateralToken);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(params.collateralToken);

    let borrowAmountRequests = new BigNumber(params.borrowAmountRequests);
    if (borrowAmountRequests.isNaN() || borrowAmountRequests.isZero() || borrowAmountRequests.isNegative()) {
      throw new Error('borrowAmountRequests should be a valid number');
    }

    let collateralVolatilityThreshold = new BigNumber(params.collateralVolatilityThreshold);
    if (collateralVolatilityThreshold.isNaN() || collateralVolatilityThreshold.isZero() || collateralVolatilityThreshold.isNegative()) {
      throw new Error('collateralVolatilityThreshold should be a valid number');
    }

    let collateralRatio = new BigNumber(params.collateralRatio);
    if (collateralRatio.isNaN() || collateralRatio.isZero() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    let borrowRate = new BigNumber(params.borrowRate);
    if (borrowRate.isNaN() || borrowRate.isZero() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }

    let repaymentInterval = new BigNumber(params.repaymentInterval);
    if (repaymentInterval.isNaN() || repaymentInterval.isZero() || repaymentInterval.isNegative()) {
      throw new Error('repaymentInterval should be a valid number');
    }

    let noOfRepaymentIntervals = new BigNumber(params.noOfRepaymentIntervals);
    if (noOfRepaymentIntervals.isNaN() || noOfRepaymentIntervals.isZero() || noOfRepaymentIntervals.isNegative()) {
      throw new Error('noOfRepaymentIntervals should be a valid number');
    }

    let collateralAmount = new BigNumber(params.collateralAmount);
    if (collateralAmount.isNaN() || collateralAmount.isZero() || collateralAmount.isNegative()) {
      throw new Error('collateralAmount should be a valid number');
    }

    let loanWithdrawDuration = await this.poolFactory.matchCollateralRatioInterval();
    let collectionPeriod = await this.poolFactory.collectionPeriod();

    const poolData = _interface.encodeFunctionData(initializeFragement, [
      borrowAmountRequests.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0),
      borrowRate.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      params.borrower,
      params.borrowToken,
      params.collateralToken,
      collateralRatio.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      collateralVolatilityThreshold.multipliedBy(new BigNumber(10).pow(28)).toFixed(0),
      repaymentInterval.toFixed(0),
      noOfRepaymentIntervals.toFixed(0),
      params.strategy,
      collateralAmount.multipliedBy(new BigNumber(10).pow(collateralDecimal)).toFixed(0),
      params.transferFromSavingsAccount,
      loanWithdrawDuration,
      collectionPeriod,
    ]);

    const poolAddress = ethers.utils.getCreate2Address(
      this.config.poolFactoryContractAddress,
      this.getSalt(params.borrower, params.salt),
      this.getInitCodehash(
        SublimeProxyByteCode,
        this.config.poolLogicContractAddress,
        poolData,
        '0x0000000000000000000000000000000000000001'
      )
    );

    return poolAddress;
  }

  public async depositCollateral(poolContract: string, amount: string, transferFromSavingsAccount: boolean): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const collateralAsset = (await pool.poolConstants()).collateralAsset;

    await this.tokenManager.updateTokenDecimals(collateralAsset);
    const collateralDecimal: BigNumberish = this.tokenManager.getTokenDecimals(collateralAsset);

    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return pool.depositCollateral(
      _amount.multipliedBy(new BigNumber(10).pow(collateralDecimal.toString())).toFixed(0),
      transferFromSavingsAccount
    );
  }

  public async interestTillNow(poolContract: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const borrowAsset = (await pool.poolConstants()).borrowAsset;

    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    let interestTillNow = await (await pool.interestTillNow()).toString();
    return new BigNumber(interestTillNow).div(new BigNumber(10).pow(borrowDecimal.toFixed(0))).toFixed(2);
  }

  public async getCurrentCollateralRatio(poolContract: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    let ccr = await (await pool.callStatic['getCurrentCollateralRatio()']()).toString();
    return new BigNumber(ccr).div(new BigNumber(10).pow(28)).toFixed(2);
  }

  public async liquidatePool(
    poolContract: string,
    fromSavingsAccount: boolean,
    toSavingsAccount: boolean,
    recieveLiquidityShare: boolean
  ): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return await pool.liquidatePool(fromSavingsAccount, toSavingsAccount, recieveLiquidityShare);
  }

  public async liquidateLender(
    poolContract: string,
    lender: string,
    fromSavingsAccount: boolean,
    toSavingsAccount: boolean,
    recieveLiquidityShare: boolean
  ): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return await pool.liquidateLender(lender, fromSavingsAccount, toSavingsAccount, recieveLiquidityShare);
  }

  public async interestPerPeriod(poolContract: string, amount: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const borrowAsset = (await pool.poolConstants()).borrowAsset;

    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    let _amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(borrowDecimal));
    let interestPerPeriod = await (await pool.interestPerPeriod(_amount.toFixed(0))).toString();
    return new BigNumber(interestPerPeriod).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
  }

  public async interestPerSecond(poolContract: string, amount: string): Promise<string> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const borrowAsset = (await pool.poolConstants()).borrowAsset;

    await this.tokenManager.updateTokenDecimals(borrowAsset);
    const borrowDecimal: BigNumberish = this.tokenManager.getTokenDecimals(borrowAsset);

    let _amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(borrowDecimal));
    let interestPerSecond = await (await pool.interestPerSecond(_amount.toFixed(0))).toString();

    return new BigNumber(interestPerSecond).div(new BigNumber(10).pow(borrowDecimal)).toFixed(2);
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
    let _status = (await pool.getLoanStatus()).toString();
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

    let totalSupply = await pool.getTotalSupply();
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

    let allTokens = [poolConstants.borrowAsset, poolConstants.collateralAsset, liquidityToken].filter(
      (value, index, array) => array.indexOf(value) === index
    );
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    let minBorrowFraction = await this.poolFactory.minBorrowFraction();

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
      pricePerAssetInUSD: this.tokenManager.getPricePerAsset(poolConstants.borrowAsset),
      logo: this.tokenManager.getLogo(poolConstants.borrowAsset),
    };
    result.idealCollateralRatio = new BigNumber(poolConstants.idealCollateralRatio.toString()).div(new BigNumber(10).pow(28)).toFixed(2);
    result.borrowRate = new BigNumber(poolConstants.borrowRate.toString()).div(new BigNumber(10).pow(28)).toFixed(2);
    result.noOfRepaymentIntervals = poolConstants.noOfRepaymentIntervals.toString();
    result.repaymentInterval = poolConstants.repaymentInterval.toString();
    result.collateralAsset = {
      address: poolConstants.collateralAsset,
      name: this.tokenManager.getTokenName(poolConstants.collateralAsset),
      pricePerAssetInUSD: this.tokenManager.getPricePerAsset(poolConstants.collateralAsset),
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

  private getSalt(address: string, salt: BytesLike) {
    return ethers.utils.solidityKeccak256(['bytes32', 'address'], [salt, address]);
  }

  private getInitCodehash(proxyBytecode: BytesLike, poolImplAddr: string, poolData: BytesLike, admin: string) {
    const initialize = ethers.utils.defaultAbiCoder.encode(['address', 'address', 'bytes'], [poolImplAddr, admin, poolData]);
    const encodedData = proxyBytecode + initialize.replace('0x', '');
    return ethers.utils.keccak256(encodedData);
  }
}
