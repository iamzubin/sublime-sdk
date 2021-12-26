import { BigNumber } from 'bignumber.js';
import { BindingName } from 'typescript';

export interface Asset {
  name: string;
  address: string;
  logo: string;
  pricePerAssetInUSD: string;
}

export enum StrategyType {
  NoYield = 'NoYield',
  CompounYield = 'CompoundYield',
  YearnYield = 'YearnYield',
  AaveYield = 'AaveYield',
}

export enum Operation {
  NOT_CREATED = 'NOT_CREATED',
  REQUESTED = 'REQUESTED',
  ACTIVE = 'ACTIVE',
  DEPOSIT_COLLATERAL = 'DEPOSIT_COLLATERAL',
  BORROW = 'BORROW',
  REPAY = 'REPAY',
  WITHDRAW_COLLATERAL = 'WITHDRAW_COLLATERAL',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
  RESET = 'RESET',
  LIQUIDATED = 'LIQUIDATED',
}
export interface CreditLineOperation {
  amount: string;
  creditLineOperation: Operation;
  liquidator?: string;
  strategy?: string;
  timestamp: string;
  id: string;
}
export interface Strategy {
  type: StrategyType;
  address: string;
  token?: Asset;
  liquidityToken?: Asset;
}
export interface CreditLineRequest {
  address: string;
  borrowLimit: string;
  borrowRate: string;
  autoLiquidation: boolean;
  collateralRatio: string;
  borrowAsset: string;
  collateralAsset: string;
}

export interface SavingsAccountStrategyBalance {
  strategy: string;
  balance: BigNumber;
  balanceUSD: BigNumber;
  APR: BigNumber;
}

export interface SavingsAccountBalance {
  token: Asset;
  balance: BigNumber;
  amountAllocatedToCreditLines: BigNumber;
  balanceUSD: BigNumber;
  strategyBalance: [SavingsAccountStrategyBalance?];
  APR: BigNumber; // weighted average of all strategy APRs
}

export interface SavingsAccountUserDetails {
  user: string;
  balances: [SavingsAccountBalance?];
  totalBalance: BigNumber;
}

// ---------only for disaply ----------- removeLatter
export interface SavingsAccountStrategyBalanceDisplay {
  strategy: Strategy;
  balance: string;
  balanceUSD: string;
  APR: string;
}
export interface SavingsAccountBalanceDisplay {
  token: Asset;
  balance: string;
  amountAllocatedToCreditLines: string;
  balanceUSD: string;
  strategyBalance: [SavingsAccountStrategyBalanceDisplay?];
  APR: string; // weighted average of all strategy APRs
}
export interface SavingAccountUserDetailDisplay {
  user: string;
  balances: [SavingsAccountBalanceDisplay?];
  totalBalance: string;
}

// ---------only for disaply ----------- removeLatter
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
  autoLiquidate: boolean;
  lender: CreditLineUser;
  borrower: CreditLineUser;
  type: string;
  lastPrincipalUpdateTime: string;
  id: string;
}
export interface CreditLineUser {
  address: string;
  name?: string;
  username?: string;
  otherData: object;
}
export interface CreditLineHistory {
  title: string;
  description: string;
  value: string;
}

export interface InternalTokenMap {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  iconMapping: string;
}
