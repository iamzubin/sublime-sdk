import { SublimeConfig } from '../types/sublimeConfig';
import { Signer } from 'ethers';

import { PriceOracle } from '../wrappers/PriceOracle';
import { PriceOracle__factory } from '../wrappers/factories/PriceOracle__factory';
import { BigNumber } from '@ethersproject/bignumber';

/**
 * @class PriceOracle
 */
export class PriceOracleApi {
  private priceOracleContract: PriceOracle;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig) {
    this.priceOracleContract = new PriceOracle__factory(signer).attach(config.priceOracleContractAddress);
    config = this.config;
  }

  /**
   * @description Returns the
   * @param num: first token address
   * @param den: second token address
   * @returns price of token1 in terms of token2
   */
  public async getLatestPrice(num: string, den: string): Promise<string> {
    const [ratio, decimals] = await this.priceOracleContract.getLatestPrice(num, den);
    return ratio.div(BigNumber.from(10).pow(decimals)).toString();
  }
}
