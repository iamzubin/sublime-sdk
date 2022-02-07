import { Signer, ContractTransaction } from 'ethers';
import { SublimeConfig } from '../types/sublimeConfig';

import { Extension } from '../wrappers/Extension';
import { Extension__factory } from '../wrappers/factories/Extension__factory';

import { Options as Overrides } from '../types/Types';

export class ExtensionApi {
  private extenstion: Extension;
  private signer: Signer;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.extenstion = new Extension__factory(this.signer).attach(config.extensionContractAddress);
  }

  public async requestExtenstion(pool: string, options: Overrides): Promise<ContractTransaction> {
    return this.extenstion.requestExtension(pool, { ...options });
  }

  public async voteOnExtension(pool: string, options: Overrides): Promise<ContractTransaction> {
    return this.extenstion.voteOnExtension(pool, { ...options });
  }

  public async closeExtension(options: Overrides): Promise<ContractTransaction> {
    return this.extenstion.closePoolExtension({ ...options });
  }
}
