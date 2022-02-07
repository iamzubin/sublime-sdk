import { BigNumber } from 'bignumber.js';
import { BigNumberish } from 'ethers';
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
  balance: Balance;
  balanceUSD: Balance;
  APR: string;
}
export interface SavingsAccountBalanceDisplay {
  token: Asset;
  balance: Balance;
  amountAllocatedToCreditLines: string;
  balanceUSD: Balance;
  strategyBalance: [SavingsAccountStrategyBalanceDisplay?];
  APR: string; // weighted average of all strategy APRs
}
export interface SavingAccountUserDetailDisplay {
  user: string;
  balances: [SavingsAccountBalanceDisplay?];
  totalBalance: Balance;
}

// ---------only for disaply ----------- removeLatter
export interface PoolDetail {
  name?: string; // refers to borrower name
  username?: string; // refers to borrower user name
  address: string; // refer to borrower address,
  borrowRate: string;
  borrowedAmount: Balance;
  lentAmount: Balance;
  nextPayment: string; // timestamp
  repaymentProgress: string;
  borrowAsset: Asset;
  collateralAsset: Asset;
  poolType: string;
  estimatedEndDate: string;
  lockedCollateral: string;
  collectionProgress: string;
  lent: Balance;
  profit: Balance;
  endedOn: string;
}

export interface PoolLender {
  name?: string; // refers to lender name
  username?: string; // refers to lender username
  address: string; // refers to lender address
  shareInPool: string;
  poolToken: Asset;
  suppliedToken: Asset;
  suppliedAmount: Balance;
}

export interface DashboardOverview {
  totalBorrowedAmount: Balance;
  totalLentAmount: Balance;
  totalBorrowRate: string;
  totalLentRate: string;
}

export interface CreditLinesOverview {
  creditGranted: Balance;
  interestAccrued: Balance;
  activeCredit: Balance;
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
  currentDebt: Balance;
  principal: Balance;
  interestAccrued: Balance;
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
  requestByLender: boolean;
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
  value: Balance;
}

export interface InternalTokenMap {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  iconMapping: string;
}

export interface TwitterDetails {
  id: string;
  metadata: string;
}

export interface Balance {
  value: BigNumberish;
  decimals: number;
}
