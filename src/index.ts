import { SublimeConnector } from './sublime';
import { SublimeSubgraph } from './subgraph';
import { TokenManager } from './tokenManager';

import { Provider, TransactionReceipt } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { SublimeConfig } from './types/sublimeConfig';

export class SublimeSdk {
  private sublimeConnector: SublimeConnector;
  private sublimeSubgraph: SublimeSubgraph;

  constructor(provider: Provider, signer: Signer, subgraphUrl: string, priceSubgraphUrl: string, config: SublimeConfig) {
    let tokenManager = new TokenManager(signer, priceSubgraphUrl);
    this.sublimeConnector = new SublimeConnector(provider, signer, config, tokenManager);
    this.sublimeSubgraph = new SublimeSubgraph(subgraphUrl, signer, tokenManager, config);
  }

  Connector(): SublimeConnector {
    return this.sublimeConnector;
  }

  Subgraph(): SublimeSubgraph {
    return this.sublimeSubgraph;
  }
}
