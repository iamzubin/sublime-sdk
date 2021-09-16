import { SublimeConnector } from './sublime';
import { SublimeSubgraph } from './subgraph';

import { Provider, TransactionReceipt } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { SublimeConfig } from './types/sublimeConfig';

export class SublimeSdk {
  private sublimeConnector: SublimeConnector;
  private sublimeSubgraph: SublimeSubgraph;

  constructor(provider: Provider, signer: Signer, subgraphUrl: string, config: SublimeConfig) {
    this.sublimeConnector = new SublimeConnector(provider, signer, config);
    this.sublimeSubgraph = new SublimeSubgraph(subgraphUrl, signer);
  }

  Connector(): SublimeConnector {
    return this.sublimeConnector;
  }

  Subgraph(): SublimeSubgraph {
    return this.sublimeSubgraph;
  }
}
