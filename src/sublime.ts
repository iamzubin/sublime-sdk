import { Provider, TransactionReceipt } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { SublimeConfig } from './types/sublimeConfig';

import { PoolApi } from './api/pool';
import { CreditLineApi } from './api/creditLines';
import { YieldAndStrategyApi } from './api/yieldAndStrategy';
import { SavingsAccountApi } from './api/savingsAccount';
import { ExtensionApi } from './api/extension';
import { RepaymentApi } from './api/repayments';
import { VerificationAPI } from './api/verification';
import { TokenApi } from './api/tokenApi';
import { PriceOracleApi } from './api/priceOracle';

import { ethers } from 'ethers';
import { TokenManager } from './tokenManager';

export class SublimeConnector {
  private provider: Provider;
  private signer: Signer;
  private config: SublimeConfig;
  private tokenManager: TokenManager;

  constructor(provider: Provider, signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.provider = provider;
    this.signer = signer;
    this.config = config;
    this.tokenManager = tokenManager;
  }

  PoolApi() {
    return new PoolApi(this.signer, this.config, this.tokenManager);
  }

  CreditLinesApi() {
    return new CreditLineApi(this.signer, this.config, this.tokenManager);
  }

  SavingsAccountApi() {
    return new SavingsAccountApi(this.signer, this.config, this.tokenManager);
  }

  Address(): Promise<string> {
    return this.signer.getAddress();
  }

  ExtensionApi() {
    return new ExtensionApi(this.signer, this.config);
  }

  RepaymentApi() {
    return new RepaymentApi(this.signer, this.config, this.tokenManager);
  }

  VerificationApi() {
    return new VerificationAPI(this.signer, this.config);
  }

  YieldAndStrategyApi() {
    return new YieldAndStrategyApi(this.signer, this.config, this.tokenManager);
  }

  TokenApi(tokenAddress: string) {
    return new TokenApi(this.signer, tokenAddress, this.tokenManager);
  }

  PriceOracleApi() {
    return new PriceOracleApi(this.signer, this.config);
  }

  public async getChainId(): Promise<number> {
    return this.signer.getChainId();
  }

  public async getBalance(address: string): Promise<string> {
    const balance = await this.provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  }

  public async waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<TransactionReceipt> {
    return await this.provider.waitForTransaction(transactionHash, confirmations, timeout);
  }
}
