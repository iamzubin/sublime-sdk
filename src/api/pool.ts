import { BytesLike, ContractTransaction, ethers, Signer } from 'ethers';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { SublimeConfig } from '../types/sublimeConfig';
import { abi as PoolAbi } from '../artifacts/contracts/Pool/Pool.sol/Pool.json';
import { bytecode as SublimeProxyByteCode } from '../artifacts/contracts/Proxy.sol/SublimeProxy.json';

import { LoanStatus, PoolGenerateParams } from '../types/poolGenerateParam';
import { PoolInfo } from '../types/poolInfo';
import { PoolFactory } from '../wrappers';
import { PoolFactory__factory } from '../wrappers/factories/PoolFactory__factory';

import { Pool } from '../wrappers/Pool';
import { Pool__factory } from '../wrappers/factories/Pool__factory';

import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';

import { zeroAddress } from '../config/constants';
const _interface = new ethers.utils.Interface(PoolAbi);
const initializeFragement = _interface.getFunction('initialize');

export class PoolApi {
  private signer: Signer;
  private config: SublimeConfig;

  private poolFactory: PoolFactory;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.poolFactory = new PoolFactory__factory(this.signer).attach(config.poolFactoryContractAddress);
  }

  public async createPool(params: PoolGenerateParams): Promise<ContractTransaction> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(params.borrowToken);
    const CollateralToken: Token = new Token__factory(this.signer).attach(params.collateralToken);

    const borrowDecimal: BigNumberish = params.borrowToken === zeroAddress ? 18 : await BorrowToken.decimals();
    const collateralDecimal: BigNumberish = params.collateralToken === zeroAddress ? 18 : await CollateralToken.decimals();

    return await this.poolFactory.createPool(
      params.poolSize,
      BigNumber.from(params.minborrowAmount).mul(BigNumber.from(10).pow(borrowDecimal)).toString(),
      params.borrowToken,
      params.collateralToken,
      BigNumber.from(params.collateralRatio).mul(BigNumber.from(10).pow(28)).toString(),
      BigNumber.from(params.borrowRate).mul(BigNumber.from(10).pow(28)).toString(),
      params.repaymentInterval,
      params.noOfRepaymentIntervals,
      params.strategy,
      BigNumber.from(params.collateralAmount).mul(BigNumber.from(10).pow(collateralDecimal)).toString(),
      params.transferFromSavingsAccount,
      params.salt,
      {
        value:
          params.collateralToken === zeroAddress
            ? BigNumber.from(params.collateralAmount)
                .mul(BigNumber.from(10).pow(await CollateralToken.decimals()))
                .toString()
            : 0,
      }
    );
  }

  public async generatePoolAddress(params: PoolGenerateParams): Promise<string> {
    const BorrowToken: Token = new Token__factory(this.signer).attach(params.borrowToken);
    const CollateralToken: Token = new Token__factory(this.signer).attach(params.collateralToken);

    const borrowDecimal: BigNumberish = params.borrowToken === zeroAddress ? 18 : await BorrowToken.decimals();
    const collateralDecimal: BigNumberish = params.collateralToken === zeroAddress ? 18 : await CollateralToken.decimals();

    const poolData = _interface.encodeFunctionData(initializeFragement, [
      params.poolSize,
      BigNumber.from(params.minborrowAmount).mul(BigNumber.from(10).pow(borrowDecimal)).toString(),
      params.borrower,
      params.borrowToken,
      params.collateralToken,
      BigNumber.from(params.collateralRatio).mul(BigNumber.from(10).pow(28)).toString(),
      BigNumber.from(params.borrowRate).mul(BigNumber.from(10).pow(28)).toString(),
      params.repaymentInterval,
      params.noOfRepaymentIntervals,
      params.strategy,
      BigNumber.from(params.collateralAmount).mul(BigNumber.from(10).pow(collateralDecimal)).toString(),
      params.transferFromSavingsAccount,
      params.loanWithdrawDuration,
      params.collectionPeriod,
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

  public async depositCollateral(
    poolContract: string,
    amount: BigNumberish,
    transferFromSavingsAccount: boolean
  ): Promise<ContractTransaction> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const CollateralToken: Token = new Token__factory(this.signer).attach(await (await pool.poolConstants()).collateralAsset);

    const collateralDecimal: BigNumberish = CollateralToken.address === zeroAddress ? 18 : await CollateralToken.decimals();

    return pool.depositCollateral(BigNumber.from(amount).mul(BigNumber.from(10).pow(collateralDecimal)), transferFromSavingsAccount);
  }

  public async interestTillNow(poolContract: string): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const BorrowToken: Token = new Token__factory(this.signer).attach(await (await pool.poolConstants()).borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return await (await pool.interestTillNow()).div(BigNumber.from(10).pow(borrowDecimal));
  }

  public async getCurrentCollateralRatio(poolContract: string): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return await (await pool.interestTillNow()).div(BigNumber.from(10).pow(28));
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

  public async interestPerPeriod(poolContract: string, amount: BigNumberish): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const BorrowToken: Token = new Token__factory(this.signer).attach(await (await pool.poolConstants()).borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    return await (await pool.interestPerPeriod(amount)).div(BigNumber.from(10).pow(borrowDecimal));
  }

  public async interestPerSecond(poolContract: string, amount: BigNumberish): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const BorrowToken: Token = new Token__factory(this.signer).attach(await (await pool.poolConstants()).borrowAsset);

    return await (await pool.interestPerSecond(amount)).div(BigNumber.from(10).pow(await BorrowToken.decimals()));
  }

  public async calculateCurrentPeriod(poolContract: string): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return pool.calculateCurrentPeriod();
  }

  public async getMarginCallEndTime(poolContract: string, lender: string): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    return pool.getMarginCallEndTime(lender);
  }

  public async getLoanStatus(poolContract: string): Promise<LoanStatus> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    let _status = (await pool.getLoanStatus()).toString();
    return LoanStatus[_status];
  }

  public async getBalanceDetails(poolContract: string, lender: string): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const _token: Token = new Token__factory(this.signer).attach(poolContract);
    const _decimal = await _token.decimals();
    const details = await (await pool.getBalanceDetails(lender)).map((a) => a.div(BigNumber.from(10).pow(_decimal)));
    return details[0];
  }

  public async getTotalSupply(poolContract: string): Promise<BigNumber> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const _token: Token = new Token__factory(this.signer).attach(poolContract);

    return (await pool.getTotalSupply()).div(BigNumber.from(10).mul(await _token.decimals()));
  }

  public async getPoolInfo(poolContract: string): Promise<PoolInfo> {
    const pool: Pool = new Pool__factory(this.signer).attach(poolContract);
    const result = {} as PoolInfo;
    const poolConstants = await pool.poolConstants();
    const BorrowToken: Token = new Token__factory(this.signer).attach(poolConstants.borrowAsset);
    const borrowDecimal: BigNumberish = BorrowToken.address === zeroAddress ? 18 : await BorrowToken.decimals();

    result.borrower = poolConstants.borrower;
    result.borrowAmountRequested = BigNumber.from(poolConstants.borrowAmountRequested).div(BigNumber.from(10).pow(borrowDecimal));
    result.minborrowAmount = BigNumber.from(poolConstants.minborrowAmount).div(BigNumber.from(10).pow(borrowDecimal));
    result.loanStartTime = poolConstants.loanStartTime;
    result.loanWithdrawalDeadline = poolConstants.loanWithdrawalDeadline;
    result.borrowAsset = poolConstants.borrowAsset;
    result.idealCollateralRatio = BigNumber.from(poolConstants.idealCollateralRatio).div(BigNumber.from(10).pow(28));
    result.borrowRate = BigNumber.from(poolConstants.borrowRate).div(BigNumber.from(10).pow(28));
    result.noOfRepaymentIntervals = poolConstants.noOfRepaymentIntervals;
    result.repaymentInterval = poolConstants.repaymentInterval;
    result.collateralAsset = poolConstants.collateralAsset;
    result.poolSavingsStrategy = poolConstants.poolSavingsStrategy;

    const poolVars = await pool.poolVars();

    result.baseLiquidityShares = poolVars.baseLiquidityShares;
    result.extraLiquidityShares = poolVars.extraLiquidityShares;
    result.loanStatus = LoanStatus[poolVars.loanStatus.toString()];
    result.penalityLiquidityAmount = poolVars.penalityLiquidityAmount;
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
