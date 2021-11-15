import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { PriceOracle } from '../wrappers/PriceOracle';
import { PriceOracle__factory } from '../wrappers/factories/PriceOracle__factory';
import { CreditLineRequest, StrategyType } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';
import { zeroAddress } from '../config/constants';

export class PriceOracleApi {
  private priceOracleContract: PriceOracle;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig) {
    this.priceOracleContract = new PriceOracle__factory(signer).attach(config.priceOracleContractAddress);
    config = this.config;
  }

  public async getLatestPrice(num: string, den: string): Promise<string> {
    return (await this.priceOracleContract.getLatestPrice(num, den)).toString();
  }
}
