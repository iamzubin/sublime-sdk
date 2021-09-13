import {
  CreditLineDetail,
  CreditLinesOverview,
  DashboardOverview,
  PoolDetail,
  ProfileOverview,
  SavingsAccountOverview,
  SavingsAccountTokenDetail,
} from './types/Types';
import {
  getAllPools,
  getPool,
  getAllPoolsByPoolType,
  getAllPoolsByBorrower,
  getAllPoolsByLender,
  getAllPoolsByBorrowerByType,
  getAllPoolsByLenderByType,
  getSavingsAccountTokenDetails,
  getCreditLinesByBorrower,
  getCreditLinesLender,
} from './queries';
import { BigNumber } from '@ethersproject/bignumber';

export class SublimeSubgraph {
  private subgraphUrl;

  constructor(url: string) {
    this.subgraphUrl = url;
  }

  async getPools(): Promise<PoolDetail[]> {
    let result = await getAllPools(this.subgraphUrl);
    return this.transforToPoolDetail(result);
  }

  async getAllPoolsByPoolType(poolType: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByPoolType(this.subgraphUrl, poolType);
    return this.transforToPoolDetail(result);
  }

  async getPool(poolId): Promise<PoolDetail> {
    let result = await getPool(this.subgraphUrl, poolId);
    return this.transforToPoolDetail(result)[0];
  }

  async getPoolByBorrower(borrower): Promise<PoolDetail[]> {
    let result = await getAllPoolsByBorrower(this.subgraphUrl, borrower);
    return this.transforToPoolDetail(result);
  }

  async getPoolByLender(lender): Promise<PoolDetail[]> {
    let result = await getAllPoolsByLender(this.subgraphUrl, lender);
    return this.transforToPoolDetail(result);
  }

  async getPoolByLenderByType(lender, poolType): Promise<PoolDetail[]> {
    let result = await getAllPoolsByLenderByType(this.subgraphUrl, lender, poolType);
    return this.transforToPoolDetail(result);
  }

  async getPoolByBorrowerByType(borrower, poolType): Promise<PoolDetail[]> {
    let result = await getAllPoolsByBorrowerByType(this.subgraphUrl, borrower, poolType);
    return this.transforToPoolDetail(result);
  }

  private transforToPoolDetail(data: any[]): PoolDetail[] {
    return data.map((a) => {
      return {
        address: a.id,
        poolType: a.loanStatus,
        borrowRate: BigNumber.from(a.borrowRate).div(BigNumber.from(10).pow(28)),
        nextPayment: BigNumber.from(a.nextRepayTime),
        repaymentProgress: BigNumber.from(0),
        borrowAsset: { address: a.borrowAsset },
        collateralAsset: { address: a.collateralAsset },
      } as PoolDetail;
    });
  }

  // to-do
  async getSavingsAccountOverview(address: string): Promise<SavingsAccountOverview> {
    return {
      deposited: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      interestEarned: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      interestRate: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
    };
  }

  async getDashboardOverview(address: string): Promise<DashboardOverview> {
    return {
      totalBorrowedAmount: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      totalLentAmount: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      totalBorrowRate: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
      totalLentRate: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
    };
  }

  async getCreditLinesOverview(address: string): Promise<CreditLinesOverview> {
    return {
      creditGranted: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      interestAccrued: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      activeCredit: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
      interestRate: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
    };
  }

  async getSavingsAccountTokenDetail(address: string): Promise<SavingsAccountTokenDetail[]> {
    let result = await getSavingsAccountTokenDetails(this.subgraphUrl, address);
    return result.map((a) => {
      return {
        token: {
          address: a.asset,
        },
        deposited: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
        interestEarned: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
        interestRate: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
      };
    });
  }

  async getProfileOverview(address: string): Promise<ProfileOverview> {
    let pools = await this.getPoolByBorrower(address);
    let poolsCreated = pools.length;
    let activePools = pools.filter((a) => a.poolType === 'Active').length;
    let timesDefaulted = pools.filter((a) => a.poolType === 'Defaulted').length;
    let totalAmountInBorrow = BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8));

    return {
      poolsCreated,
      activePools,
      timesDefaulted,
      totalAmountInBorrow,
    };
  }

  async getCreditLinesByBorrower(address: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getCreditLinesByBorrower(this.subgraphUrl, address, count, skip);
    return result.map((a) => {
      return {
        currentDebt: BigNumber.from(a.collateralAmount),
        principal: BigNumber.from(a.principal),
        interestAccrued: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
        collateralAsset: {
          address: a.collateralAsset,
        },
        collateralRatio: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
        creditLimit: BigNumber.from(a.BorrowLimit),
        interestRate: BigNumber.from(a.borrowRate).div(BigNumber.from(10).pow(28)),
        idealCollateralRatio: BigNumber.from(a.idealCollateralRatio).div(BigNumber.from(10).pow(28)),
        borrowAsset: {
          address: a.BorrowAsset,
        },
        liquidationThreshold: BigNumber.from(a.liquidationThreshold).div(BigNumber.from(10).pow(28)),
        autoLiquidate: a.autoLiquidation,
      };
    });
  }

  async getCreditLinesByLender(address: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getCreditLinesLender(this.subgraphUrl, address, count, skip);
    return result.map((a) => {
      return {
        currentDebt: BigNumber.from(a.collateralAmount),
        principal: BigNumber.from(a.principal),
        interestAccrued: BigNumber.from(this.getRandomInt(100)).mul(BigNumber.from(10).pow(8)),
        collateralAsset: {
          address: a.collateralAsset,
        },
        collateralRatio: BigNumber.from(this.getRandomInt(10)).mul(BigNumber.from(10).pow(1)),
        creditLimit: BigNumber.from(a.BorrowLimit),
        interestRate: BigNumber.from(a.borrowRate).div(BigNumber.from(10).pow(28)),
        idealCollateralRatio: BigNumber.from(a.idealCollateralRatio).div(BigNumber.from(10).pow(28)),
        borrowAsset: {
          address: a.BorrowAsset,
        },
        liquidationThreshold: BigNumber.from(a.liquidationThreshold).div(BigNumber.from(10).pow(28)),
        autoLiquidate: a.autoLiquidation,
      };
    });
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
