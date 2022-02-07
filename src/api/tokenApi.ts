import { Token } from '../wrappers/Token';
import { Token__factory } from '../wrappers/factories/Token__factory';
import { ContractTransaction, Signer } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { TokenManager } from '../tokenManager';
import { Options as Overrides } from '../types/Types';

/**
 * @class TokenApi
 */
export class TokenApi {
  private signer: Signer;
  private tokenContract: Token;
  private tokenManager: TokenManager;

  /**
   * @description if tokenAddress is any invalid token address, the APIs of the class object will fail
   * @param signer
   * @param tokenAddress
   * @param tokenManager
   */
  constructor(signer: Signer, tokenAddress: string, tokenManager: TokenManager) {
    this.signer = signer;
    this.tokenContract = new Token__factory(signer).attach(tokenAddress);
    this.tokenManager = tokenManager;
  }

  /**
   * @description Increase Allowance to a another address
   * @param to
   * @param amount
   * @returns Contract Transaction
   */
  public async IncreaseAllowance(to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }
    await this.tokenManager.updateTokenDecimals(this.tokenContract.address);
    const decimal = await this.tokenManager.getTokenDecimals(this.tokenContract.address);

    return this.tokenContract
      .connect(this.signer)
      .increaseAllowance(to, _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0), { ...options });
  }

  /**
   * @description Approve Allowance to a another address
   * @param to
   * @param amount
   * @returns Contract Transaction
   */
  public async approve(to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }
    await this.tokenManager.updateTokenDecimals(this.tokenContract.address);
    const decimal = await this.tokenManager.getTokenDecimals(this.tokenContract.address);

    return this.tokenContract
      .connect(this.signer)
      .approve(to, _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0), { ...options });
  }

  /**
   * @description Returns the allowance of spender by owner
   * @param owner
   * @param spender
   * @param prettified, if true, the result will be in easy readable form
   * @returns number
   */
  public async allowance(owner: string, spender: string, prettified = false): Promise<string> {
    await this.tokenManager.updateTokenDecimals(this.tokenContract.address);
    const decimal = await this.tokenManager.getTokenDecimals(this.tokenContract.address);

    const allowance = await this.tokenContract.connect(this.signer).allowance(owner, spender);
    if (prettified) {
      return new BigNumber(allowance.toString()).div(new BigNumber(10).pow(decimal)).toFixed(2);
    } else {
      return allowance.toString();
    }
  }

  /**
   * @description return the current signers token balance.
   * @param prettified
   * @returns
   */
  public async getTokenBalance(prettified = true): Promise<string> {
    return this._getBalance(await this.signer.getAddress(), prettified);
  }

  /**
   * @description return any user token balance
   * @param user
   * @param prettified
   * @returns
   */
  public async getUserTokenBalance(user: string, prettified = true): Promise<string> {
    return this._getBalance(user, prettified);
  }

  private async _getBalance(user: string, prettified): Promise<string> {
    await this.tokenManager.updateTokenDecimals(this.tokenContract.address);
    const decimal = await this.tokenManager.getTokenDecimals(this.tokenContract.address);

    const balance = await this.tokenContract.balanceOf(user);
    if (prettified) {
      return new BigNumber(balance.toString()).div(new BigNumber(10).pow(decimal)).toFixed(2);
    } else {
      return balance.toString();
    }
  }
}
