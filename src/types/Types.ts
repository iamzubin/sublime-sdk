import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

export interface Asset {
  name?: string;
  address: string;
  logo?: string;
  pricePerAssetInUSD?: BigNumberish;
}

export interface Strategy {
  name: string;
  address: string;
  token?: Asset;
  liquidityToken?: Asset;
}
export interface CreditLineRequest {
  address: string;
  borrowLimit: BigNumberish;
  liquidationThreshold: BigNumberish;
  borrowRate: BigNumberish;
  autoLiquidation: boolean;
  collateralRatio: BigNumberish;
  borrowAsset: string;
  collateralAsset: string;
}
export interface SavingsAccountTokenDetail {
  token: Asset;
  deposited: BigNumberish;
  interestRate: BigNumberish;
  interestEarned: BigNumberish;
}

export interface PoolDetail {
  name?: string; // refers to borrower name
  username?: string; // refers to borrower user name
  address: string; // refer to borrower address,
  borrowRate: BigNumberish;
  borrowedAmount: BigNumberish;
  nextPayment: BigNumberish; // timestamp
  repaymentProgress: BigNumberish;
  borrowAsset: Asset;
  collateralAsset: Asset;
  poolType: string;
}

export interface PoolLender {
  name?: string; // refers to lender name
  username?: string; // refers to lender username
  address: string; // refers to lender address
  shareInPool: BigNumberish;
  poolToken: Asset;
  suppliedToken: Asset;
  suppliedAmount: string;
}

export interface DashboardOverview {
  totalBorrowedAmount: BigNumberish;
  totalLentAmount: BigNumberish;
  totalBorrowRate: BigNumberish;
  totalLentRate: BigNumberish;
}

export interface SavingsAccountOverview {
  deposited: BigNumberish;
  interestEarned: BigNumberish;
  interestRate: BigNumberish;
}

export interface CreditLinesOverview {
  creditGranted: BigNumberish;
  interestAccrued: BigNumberish;
  activeCredit: BigNumberish;
  interestRate: BigNumberish;
}

export interface ProfileOverview {
  name?: string;
  username?: string;
  poolsCreated: BigNumberish;
  activePools: BigNumberish;
  timesDefaulted: BigNumberish;
  totalAmountInBorrow: BigNumberish;
}
export interface SavingsAccountDetail {
  asset: Asset;
  amount: BigNumberish;
  interestRate: BigNumberish;
  interestEarned: BigNumberish;
}

export interface CreditLineDetail {
  currentDebt: BigNumberish;
  principal: BigNumberish;
  interestAccrued: BigNumberish;
  collateralRatio: BigNumberish;
  creditLimit: BigNumberish;
  interestRate: BigNumberish;
  idealCollateralRatio: BigNumberish;
  collateralAsset: Asset;
  borrowAsset: Asset;
  liquidationThreshold: BigNumberish;
  autoLiquidate: boolean;
}

export interface CreditLineHistory {
  title: string;
  description: string;
  value: string;
}
