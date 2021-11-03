import { BytesLike } from 'ethers';

export interface PoolGenerateParams {
  borrowAmountRequests: string;
  borrowRate: string;
  borrower: string;
  borrowToken: string;
  collateralToken: string;
  collateralRatio: string;
  collateralVolatilityThreshold: string;
  repaymentInterval: string;
  noOfRepaymentIntervals: string;
  strategy: string;
  collateralAmount: string;
  transferFromSavingsAccount: boolean;
  salt: BytesLike;
  lenderVerifier: string;
}

export enum LoanStatus {
  COLLECTION = 'COLLECTION',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
  DEFAULTED = 'DEFAULTED',
  TERMINATED = 'TERMINATED',
}
