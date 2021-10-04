export interface Asset {
  name: string;
  address: string;
  logo: string;
  pricePerAssetInUSD: string;
}

export interface Strategy {
  name: string;
  address: string;
  token?: Asset;
  liquidityToken?: Asset;
}
export interface CreditLineRequest {
  address: string;
  borrowLimit: string;
  liquidationThreshold: string;
  borrowRate: string;
  autoLiquidation: boolean;
  collateralRatio: string;
  borrowAsset: string;
  collateralAsset: string;
}
export interface SavingsAccountTokenDetail {
  token: Asset;
  deposited: string;
  interestRate: string;
  interestEarned: string;
}

export interface PoolDetail {
  name?: string; // refers to borrower name
  username?: string; // refers to borrower user name
  address: string; // refer to borrower address,
  borrowRate: string;
  borrowedAmount: string;
  lentAmount: string;
  nextPayment: string; // timestamp
  repaymentProgress: string;
  borrowAsset: Asset;
  collateralAsset: Asset;
  poolType: string;
  estimatedEndDate: string;
  lockedCollateral: string;
  collectionProgress: string;
  lent: string;
  profit: string;
  endedOn: string;
}

export interface PoolLender {
  name?: string; // refers to lender name
  username?: string; // refers to lender username
  address: string; // refers to lender address
  shareInPool: string;
  poolToken: Asset;
  suppliedToken: Asset;
  suppliedAmount: string;
}

export interface DashboardOverview {
  totalBorrowedAmount: string;
  totalLentAmount: string;
  totalBorrowRate: string;
  totalLentRate: string;
}

export interface SavingsAccountOverview {
  deposited: string;
  interestEarned: string;
  interestRate: string;
}

export interface CreditLinesOverview {
  creditGranted: string;
  interestAccrued: string;
  activeCredit: string;
  interestRate: string;
}

export interface ProfileOverview {
  name?: string;
  username?: string;
  poolsCreated: string;
  activePools: string;
  timesDefaulted: string;
  totalAmountInBorrow: string;
}
export interface SavingsAccountDetail {
  asset: Asset;
  amount: string;
  interestRate: string;
  interestEarned: string;
}

export interface CreditLineDetail {
  currentDebt: string;
  principal: string;
  interestAccrued: string;
  collateralRatio: string;
  creditLimit: string;
  interestRate: string;
  idealCollateralRatio: string;
  collateralAsset: Asset;
  borrowAsset: Asset;
  liquidationThreshold: string;
  autoLiquidate: boolean;
  lender: CreditLineUser;
  borrower: CreditLineUser;
  type: string;
}
export interface CreditLineUser {
  address: string;
  name?: string;
  username?: string;
}
export interface CreditLineHistory {
  title: string;
  description: string;
  value: string;
}
