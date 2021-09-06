import { Provider, TransactionReceipt } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { SublimeConfig } from './config/sublimeConfig';
import { PoolApi } from './api/pool';
import { CreditLineApi } from './api/creditLines';
import { SavingsAccountApi } from './api/savingsAccount';

import { ethers } from 'ethers';

export class SublimeConnector {
  private provider: Provider;
  private signer: Signer;
  private config: SublimeConfig;

  constructor(provider: Provider, signer: Signer, config: SublimeConfig) {
    this.provider = provider;
    this.signer = signer;
    this.config = config;
  }

  PoolApi() {
    return new PoolApi(this.signer, this.config);
  }

  CreditLinesApi() {
    return new CreditLineApi(this.signer, this.config);
  }

  SavingsAccountApi() {
    return new SavingsAccountApi(this.signer, this.config);
  }

  public async getBalance(address: string): Promise<string> {
    const balance = await this.provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  }

  public async waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<TransactionReceipt> {
    return await this.provider.waitForTransaction(transactionHash, confirmations, timeout);
  }
}
