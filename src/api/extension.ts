import { Signer, BytesLike, BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Extension } from '../wrappers/Extension';
import { Extension__factory } from '../wrappers/factories/Extension__factory';

export class ExtensionApi {
  private extenstion: Extension;
  private signer: Signer;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.extenstion = new Extension__factory(this.signer).attach(config.extensionContractAddress);
  }

  public async requestExtenstion(pool: string): Promise<ContractTransaction> {
    return this.extenstion.requestExtension(pool);
  }

  public async voteOnExtension(pool: string): Promise<ContractTransaction> {
    return this.extenstion.voteOnExtension(pool);
  }

  public async closeExtension(): Promise<ContractTransaction> {
    return this.extenstion.closePoolExtension();
  }
}
