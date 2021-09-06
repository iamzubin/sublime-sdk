import { BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from 'ethers';

export interface PoolGenerateParams {
  poolSize: BigNumberish;
  minborrowAmount: BigNumberish;
  borrower: string;
  borrowToken: string;
  collateralToken: string;
  collateralRatio: BigNumberish;
  borrowRate: BigNumberish;
  repaymentInterval: BigNumberish;
  noOfRepaymentIntervals: BigNumberish;
  strategy: string;
  collateralAmount: BigNumberish;
  transferFromSavingsAccount: boolean;
  loanWithdrawDuration: BigNumberish;
  collectionPeriod: BigNumberish;
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
