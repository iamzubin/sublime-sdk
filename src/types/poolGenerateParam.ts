import { BytesLike } from 'ethers';

export interface PoolGenerateParams {
  poolSize: string;
  minborrowAmount: string;
  borrower: string;
  borrowToken: string;
  collateralToken: string;
  collateralRatio: string;
  borrowRate: string;
  repaymentInterval: string;
  noOfRepaymentIntervals: string;
  strategy: string;
  collateralAmount: string;
  transferFromSavingsAccount: boolean;
  // loanWithdrawDuration: string;
  // collectionPeriod: string;
  salt: BytesLike;
}

export enum LoanStatus {
  COLLECTION,
  ACTIVE,
  CLOSED,
  CANCELLED,
  DEFAULTED,
  TERMINATED,
}
