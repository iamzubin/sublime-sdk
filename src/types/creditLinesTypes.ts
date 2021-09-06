import { BigNumberish } from '@ethersproject/bignumber';

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