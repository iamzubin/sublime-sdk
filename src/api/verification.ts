import { Signer, BytesLike, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Verification } from '../wrappers/Verification';
import { Verification__factory } from '../wrappers/factories/Verification__factory';

import { TwitterVerifier } from '../wrappers/TwitterVerifier';
import { TwitterVerifier__factory } from '../wrappers/factories/TwitterVerifier__factory';

import { BigNumberish } from '@ethersproject/bignumber';
import { Options as Overrides } from '../types/Types';

/**
 * @class VerificationAPI
 */
export class VerificationAPI {
  private signer: Signer;
  private verification: Verification;
  private twitterVerifier: TwitterVerifier;

  /**
   * @param signer Signer
   * @param config SublimeConfig
   */
  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.verification = new Verification__factory(this.signer).attach(config.verificationContractAddress);
    this.twitterVerifier = new TwitterVerifier__factory(this.signer).attach(config.twitterVerifierContractAddress);
  }

  /**
   * @param user Address to check
   * @returns
   */
  public async isUser(user: string): Promise<boolean> {
    return this.verification.isUser(user, this.twitterVerifier.address);
  }

  /**
   *
   * @param verifier Address of the verifier contract
   * @returns
   */
  public async isVerifier(verifier: string): Promise<boolean> {
    return this.verification.verifiers(verifier);
  }

  /**
   * @param verifier Address of the verifier contract. (Default is the admin verifier)
   * @returns
   */
  public async addVerifier(verifier: string = this.twitterVerifier.address, options?: Overrides): Promise<ContractTransaction> {
    return this.verification.addVerifier(verifier, { ...options });
  }
  /**
   *
   * @param _masterAddress Master Address
   * @param _isMasterLinked True if the master address is linked
   * @returns
   */
  public async registerMasterAddress(_masterAddress: string, _isMasterLinked: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.verification.registerMasterAddress(_masterAddress, _isMasterLinked, { ...options });
  }

  /**
   * @param _isMasterLinked True if the master address is linked
   * @param _v V component of the signature
   * @param _r R component of the signature
   * @param _s S component of the signature
   * @param _twitterId Twitter ID of the user
   * @param _deadline Deadline for the registration
   * @returns
   */
  public registerSelfUsingAdminVerifier(
    _isMasterLinked: boolean,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    _twitterId: string,
    _tweetId: string,
    _deadline: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransaction> {
    return this.twitterVerifier.registerSelf(_isMasterLinked, _v, _r, _s, _twitterId, _tweetId, _deadline, { ...options });
  }

  /**
   * @returns
   */
  public unregisterSelfUsingAdminVerifier(options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.unregisterSelf({ ...options });
  }

  /**
   *
   * @param _verification Address of the verification contract
   * @returns
   */
  public updateVerification(_verification: string, options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.updateVerification(_verification, { ...options });
  }

  /**
   *
   * @param _signerAddress Address of the signer
   * @returns
   */
  public updateSignerAddress(_signerAddress: string, options?: Overrides): Promise<ContractTransaction> {
    return this.twitterVerifier.updateSignerAddress(_signerAddress, { ...options });
  }
}
