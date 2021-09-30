// result.borrower = poolConstants.borrower;
// result.borrowAmountRequested = BigNumber.from(poolConstants.borrowAmountRequested).div(BigNumber.from(10).pow(borrowDecimal));
// result.minborrowAmount = BigNumber.from(poolConstants.minborrowAmount).div(BigNumber.from(10).pow(borrowDecimal));
// result.loanStartTime = poolConstants.loanStartTime;
// result.loanWithdrawalDeadline = poolConstants.loanWithdrawalDeadline;
// result.borrowAsset = poolConstants.borrowAsset;
// result.idealCollateralRatio = BigNumber.from(poolConstants.idealCollateralRatio).div(BigNumber.from(10).pow(28));
// result.borrowRate = BigNumber.from(poolConstants.borrowRate).div(BigNumber.from(10).pow(28));
// result.noOfRepaymentIntervals = poolConstants.noOfRepaymentIntervals;
// result.repaymentInterval = poolConstants.repaymentInterval;
// result.collateralAsset = poolConstants.collateralAsset;
// result.poolSavingsStrategy = poolConstants.poolSavingsStrategy;

// const poolVars = await pool.poolVars();
// result.baseLiquidityShares = poolVars.baseLiquidityShares;
// result.extraLiquidityShares = poolVars.extraLiquidityShares;
// result.loanStatus = poolVars.loanStatus;
// result.penalityLiquidityAmount = poolVars.penalityLiquidityAmount;
import { LoanStatus } from './poolGenerateParam';
import { Asset } from './Types';
export interface PoolInfo {
  borrower: string;
  borrowAmountRequested: string;
  minborrowAmount: string;
  loanStartTime: string;
  loanWithdrawalDeadline: string;
  borrowAsset: Asset;
  idealCollateralRatio: string;
  borrowRate: string;
  noOfRepaymentIntervals: string;
  repaymentInterval: string;
  collateralAsset: Asset;
  poolSavingsStrategy: string;
  baseLiquidityShares: string;
  extraLiquidityShares: string;
  loanStatus: LoanStatus;
  penaltyLiquidityAmount: string;
}
