import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Signer } from 'ethers';

import { IYield } from '../wrappers';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';

import { StrategyRegistry } from '../wrappers/StrategyRegistry';
import { StrategyRegistry__factory } from '../wrappers/factories/StrategyRegistry__factory';

import { zeroAddress } from '../config/constants';
import { SublimeConfig } from '../config/sublimeConfig';

import { Strategy } from '../types/Types';

export class YieldAndStrategyApi {
  private signer: Signer;
  private strategyRegistry: StrategyRegistry;
  config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.config = config;
    this.strategyRegistry = new StrategyRegistry__factory(this.signer).attach(config.strategyRegistryContractAddress);
  }

  public async getTokensForShares(yieldAddress: string, asset: string, shares: BigNumberish): Promise<BigNumber> {
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const liquidityToken: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const liquidityTokenDecimal: BigNumberish = liquidityToken.address === zeroAddress ? 18 : await liquidityToken.decimals();

    const depositToken = new Token__factory(this.signer).attach(asset);
    const deopsitTokenDecimal: BigNumberish = depositToken.address === zeroAddress ? 18 : await depositToken.decimals();

    let _temp: BigNumber = await yieldContract.callStatic.getTokensForShares(
      BigNumber.from(shares).mul(BigNumber.from(10).pow(liquidityTokenDecimal)),
      asset
    );
    return _temp.div(BigNumber.from(10).pow(deopsitTokenDecimal));
  }

  public async getSharesForTokens(yieldAddress: string, asset: string, amount: BigNumberish): Promise<BigNumber> {
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    const liquidityToken: Token = new Token__factory(this.signer).attach(liquiditySharesAddress);
    const liquidityTokenDecimal: BigNumberish = liquidityToken.address === zeroAddress ? 18 : await liquidityToken.decimals();

    const depositToken = new Token__factory(this.signer).attach(asset);
    const deopsitTokenDecimal: BigNumberish = depositToken.address === zeroAddress ? 18 : await depositToken.decimals();

    let _temp: BigNumber = await yieldContract.callStatic.getSharesForTokens(
      BigNumber.from(amount).mul(BigNumber.from(10).pow(deopsitTokenDecimal)),
      asset
    );
    return _temp.div(BigNumber.from(10).pow(liquidityTokenDecimal));
  }

  public async getStrategies(): Promise<Strategy[]> {
    return [
      {
        address: this.config.noStrategyAddress,
        name: 'No Strategy',
      },
      {
        address: this.config.compoundStrategyContractAddress,
        name: 'Compound',
      },
      {
        address: this.config.yearnStrategyContractAddress,
        name: 'Yearn',
      },
    ];
  }
}
