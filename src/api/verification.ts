import { Signer, BytesLike, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Verification } from '../wrappers/Verification';
import { Verification__factory } from '../wrappers/factories/Verification__factory';

import { AdminVerifier } from '../wrappers/AdminVerifier';
import { AdminVerifier__factory } from '../wrappers/factories/AdminVerifier__factory';

export class VerificationAPI {
  private signer: Signer;
  private verification: Verification;
  private adminVerifier: AdminVerifier;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.verification = new Verification__factory(this.signer).attach(config.verificationContractAddress);
    this.adminVerifier = new AdminVerifier__factory(this.signer).attach(config.adminVerifierContractAddress);
  }

  public async isUser(user: string): Promise<boolean> {
    return this.verification.isUser(user, this.adminVerifier.address);
  }

  public async registerUserByAdminVerifier(
    address: string,
    isMasterLinked = false,
    metaData = 'added from sdk'
  ): Promise<ContractTransaction> {
    return this.adminVerifier.registerUser(address, metaData, isMasterLinked);
  }

  public async isVerifier(verifier = this.adminVerifier.address): Promise<boolean> {
    return this.verification.verifiers(verifier);
  }

  public async addVerifier(verifier = this.adminVerifier.address): Promise<ContractTransaction> {
    return this.verification.addVerifier(verifier);
  }

  public async registerMasterAddress(_masterAddress: string, _isMasterLinked: boolean): Promise<ContractTransaction> {
    return this.verification.registerMasterAddress(_masterAddress, _isMasterLinked);
  }
}
