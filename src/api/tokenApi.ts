import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';
import { ContractTransaction, Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';

export class TokenApi {
  private signer: Signer;
  private tokenContract: Token;
  constructor(signer: Signer, tokenAddress: string) {
    this.signer = signer;
    this.tokenContract = new Token__factory(signer).attach(tokenAddress);
  }

  public async IncreaseAllowance(to: string, amount: string): Promise<ContractTransaction> {
    let _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }
    let decimal = await this.tokenContract.decimals();

    return this.tokenContract.increaseAllowance(to, _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0));
  }
}
