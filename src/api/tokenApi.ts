import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';
import { ContractTransaction, Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { TokenManager } from '../tokenManager';

export class TokenApi {
  private signer: Signer;
  private tokenContract: Token;
  private tokenManager: TokenManager;
  constructor(signer: Signer, tokenAddress: string, tokenManager: TokenManager) {
    this.signer = signer;
    this.tokenContract = new Token__factory(signer).attach(tokenAddress);
    this.tokenManager = tokenManager;
  }

  public async IncreaseAllowance(to: string, amount: string): Promise<ContractTransaction> {
    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }
    await this.tokenManager.updateTokenDecimals(this.tokenContract.address);
    let decimal = await this.tokenManager.getTokenDecimals(this.tokenContract.address);

    return this.tokenContract.connect(this.signer).increaseAllowance(to, _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0));
  }

  public async approve(to: string, amount: string): Promise<ContractTransaction> {
    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }
    await this.tokenManager.updateTokenDecimals(this.tokenContract.address);
    let decimal = await this.tokenManager.getTokenDecimals(this.tokenContract.address);

    return this.tokenContract.connect(this.signer).approve(to, _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0));
  }
}
