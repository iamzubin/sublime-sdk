import {
  CreditLineDetail,
  CreditLinesOverview,
  DashboardOverview,
  PoolDetail,
  ProfileOverview,
  SavingsAccountOverview,
  SavingsAccountTokenDetail,
  PoolLender,
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
  getConfirmedCreditLinesOfBorrower,
  getConfirmedCreditLinesOfLender,
  getPendingCreditLinesRequestedByBorrower,
  getPendingCreditLinesRequestedToBorrower,
  getPendingCreditLinesRequestedToLender,
  getPendingCreditlinesRequestedByLender,
} from './queries';

import { Signer } from '@ethersproject/abstract-signer';

import { BigNumber } from 'bignumber.js';
import { sha256 } from '@ethersproject/sha2';

import { TokenManager } from './tokenManager';
export class SublimeSubgraph {
  private subgraphUrl: string;
  private signer: Signer;
  private tokenManager: TokenManager;

  constructor(url: string, signer: Signer, tokenManager: TokenManager) {
    this.subgraphUrl = url;
    this.signer = signer;
    this.tokenManager = tokenManager;
  }

  async getPools(): Promise<PoolDetail[]> {
    let result = await getAllPools(this.subgraphUrl);
    return this.transformToPoolDetail(result);
  }

  async getAllPoolsByPoolType(poolType: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByPoolType(this.subgraphUrl, poolType);
    return this.transformToPoolDetail(result);
  }

  async getPool(poolId): Promise<PoolDetail> {
    let result = await getPool(this.subgraphUrl, poolId);
    let poolDetails: PoolDetail[] = await this.transformToPoolDetail(result);
    return poolDetails[0];
  }

  async getPoolByBorrower(borrower): Promise<PoolDetail[]> {
    let result = await getAllPoolsByBorrower(this.subgraphUrl, borrower);
    return this.transformToPoolDetail(result);
  }

  async getPoolByLender(lender): Promise<PoolDetail[]> {
    let result = await getAllPoolsByLender(this.subgraphUrl, lender);
    return this.transformToPoolDetail(result);
  }

  async getPoolByLenderByType(lender, poolType): Promise<PoolDetail[]> {
    let result = await getAllPoolsByLenderByType(this.subgraphUrl, lender, poolType);
    return this.transformToPoolDetail(result);
  }

  async getPoolByBorrowerByType(borrower, poolType): Promise<PoolDetail[]> {
    let result = await getAllPoolsByBorrowerByType(this.subgraphUrl, borrower, poolType);
    return this.transformToPoolDetail(result);
  }

  async getAllLendersOfPool(poolAddress: string): Promise<PoolLender[]> {
    let totalNumberOfLenders = 1 + this.getRandomInt(100);
    let lenders: PoolLender[] = [];
    let date = new Date().valueOf();
    let poolToken = sha256(Buffer.from(date + 'poolToken')).slice(0, 40);
    let suppliedToken = sha256(Buffer.from(date + 'suppliedToken')).slice(0, 40);

    for (let index = 0; index < totalNumberOfLenders; index++) {
      lenders.push({
        address: sha256(Buffer.from(date + '' + index)).slice(0, 40),
        shareInPool: new BigNumber(this.getRandomInt(3000)).div(100).toFixed(2),
        suppliedAmount: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2),
        poolToken: {
          address: poolToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
        },
        suppliedToken: {
          address: suppliedToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
        },
      });
    }
    return lenders;
  }

  // currentDebt: new BigNumber(a.collateralAmount)
  //         .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
  //         .toFixed(2),
  //       principal: new BigNumber(a.principal).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset))).toFixed(2),
  //       interestAccrued: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
  //       collateralAsset: {
  //         address: a.collateralAsset,
  //         name: this.tokenManager.getTokenName(a.collateralAsset),
  //         pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.collateralAsset),
  //         logo: this.tokenManager.getLogo(a.collateralAsset),
  //       },
  //       collateralRatio: new BigNumber(this.getRandomInt(50000)).div(100).toFixed(2),
  //       creditLimit: new BigNumber(a.BorrowLimit).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.BorrowAsset))).toFixed(2),
  //       interestRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(28)).toFixed(2),
  //       idealCollateralRatio: new BigNumber(a.idealCollateralRatio).div(new BigNumber(10).pow(28)).toFixed(2),
  //       borrowAsset: {
  //         address: a.BorrowAsset,
  //         name: this.tokenManager.getTokenName(a.BorrowAsset),
  //         pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.BorrowAsset),
  //         logo: this.tokenManager.getLogo(a.BorrowAsset),
  //       },
  //       liquidationThreshold: new BigNumber(a.liquidationThreshold).div(new BigNumber(10).pow(28)).toFixed(2),
  //       autoLiquidate: a.autoLiquidation,
  //       lender: { address: a.lender },
  //       borrower: { address: a.Borrower },
  //       type: a.creditLineStatus,

  private async transformToCreditLine(data: any[]): Promise<CreditLineDetail[]> {
    let borrowTokens: string[] = data.map((a) => a.collateralAsset);
    let collateralTokens: string[] = data.map((a) => a.borrowAsset);
    let allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    return data.map((a) => {
      return {
        currentDebt: new BigNumber(a.principal)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
          .toFixed(2),
        principal: new BigNumber(a.principal).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset))).toFixed(2),
        interestAccrued: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
        collateralRatio: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
        creditLimit: new BigNumber(a.borrowLimit).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset))).toFixed(2),
        interestRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(28)).toFixed(2),
        idealCollateralRatio: new BigNumber(a.idealCollateralRatio).div(new BigNumber(10).pow(28)).toFixed(2),
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.borrowAsset),
          logo: this.tokenManager.getLogo(a.borrowAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.collateralAsset),
          logo: this.tokenManager.getLogo(a.collateralAsset),
        },
        autoLiquidate: a.autoLiquidation,
        lender: { address: a.lender },
        borrower: { address: a.borrower },
        type: a.status,
      };
    });
  }

  private async transformToPoolDetail(data: any[]): Promise<PoolDetail[]> {
    let borrowTokens: string[] = data.map((a) => a.collateralAsset);
    let collateralTokens: string[] = data.map((a) => a.borrowAsset);
    let allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }
    let transformedData: PoolDetail[] = data.map((a) => {
      return {
        address: a.id,
        poolType: a.loanStatus,
        borrowedAmount: new BigNumber(a.borrowAmountRequested)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset)))
          .toFixed(2),
        lentAmount: new BigNumber(a.lentAmount)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
          .toFixed(2),
        borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(28)).toFixed(2),
        nextPayment: new BigNumber(a.nextRepayTime).toString(),
        repaymentProgress: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.borrowAsset),
          logo: this.tokenManager.getLogo(a.borrowAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.collateralAsset),
          logo: this.tokenManager.getLogo(a.collateralAsset),
        },
        estimatedEndDate: new BigNumber(this.getRandomInt(1000000)).multipliedBy(new BigNumber(10).pow(4)).toString(),
        lockedCollateral: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        collectionProgress: new BigNumber(this.getRandomInt(100)).toFixed(2),
        lent: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
        profit: new BigNumber(this.getRandomInt(100000)).div(100).toFixed(2),
        endedOn: new BigNumber(this.getRandomInt(1000000)).multipliedBy(1000).toString(),
      };
    });
    // console.log({transformedData});
    return transformedData;
  }

  // to-do
  async getSavingsAccountOverview(address: string): Promise<SavingsAccountOverview> {
    return {
      deposited: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2),
      interestEarned: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
      interestRate: new BigNumber(this.getRandomInt(100)).div(100).toFixed(2),
    };
  }

  async getDashboardOverview(address: string): Promise<DashboardOverview> {
    return {
      totalBorrowedAmount: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2),
      totalLentAmount: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2),
      totalBorrowRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
      totalLentRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
    };
  }

  async getCreditLinesOverview(address: string): Promise<CreditLinesOverview> {
    return {
      creditGranted: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2),
      interestAccrued: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
      activeCredit: new BigNumber(this.getRandomInt(5000000)).div(100).toFixed(2),
      interestRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
    };
  }

  async getSavingsAccountTokenDetail(address: string): Promise<SavingsAccountTokenDetail[]> {
    let result = await getSavingsAccountTokenDetails(this.subgraphUrl, address);
    let collateralTokens: string[] = result.map((a) => a.asset);
    let allTokens = [...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    return result.map((a) => {
      return {
        token: {
          address: a.asset,
          name: this.tokenManager.getTokenName(a.asset),
          pricePerAssetInUSD: this.tokenManager.getPricePerAsset(a.asset),
          logo: this.tokenManager.getLogo(a.asset),
        },
        deposited: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2),
        interestEarned: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
        interestRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
      };
    });
  }

  async getProfileOverview(address: string): Promise<ProfileOverview> {
    let pools = await this.getPoolByBorrower(address);
    let poolsCreated = pools.length;
    let activePools = pools.filter((a) => a.poolType === 'Active').length;
    let timesDefaulted = pools.filter((a) => a.poolType === 'Defaulted').length;
    let totalAmountInBorrow = new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2);

    return {
      poolsCreated: poolsCreated.toString(),
      activePools: activePools.toString(),
      timesDefaulted: timesDefaulted.toString(),
      totalAmountInBorrow,
    };
  }

  async getConfirmedCreditLinesOfBorrower(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  async getConfirmedCreditLinesOfLender(lender: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getConfirmedCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  async getPendingCreditlinesRequestedByLender(lender: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditlinesRequestedByLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  async getPendingCreditLinesRequestedByBorrower(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditLinesRequestedByBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  async getPendingCreditLinesRequestedToLender(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditLinesRequestedToLender(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  async getPendingCreditLinesRequestedToBorrower(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditLinesRequestedToBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
