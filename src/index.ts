import { SublimeConnector } from './sublime';
import { SublimeSubgraph } from './subgraph';
import { TokenManager } from './tokenManager';

import { Provider, TransactionReceipt } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { SublimeConfig } from './types/sublimeConfig';

import * as types from './types/Types';

/**
 * @class SublimeSdk
 */
export class SublimeSdk {
  private sublimeConnector: SublimeConnector;
  private sublimeSubgraph: SublimeSubgraph;

  constructor(provider: Provider, signer: Signer, subgraphUrl: string, priceSubgraphUrl: string, config: SublimeConfig) {
    const tokenManager = new TokenManager(signer, priceSubgraphUrl);
    this.sublimeConnector = new SublimeConnector(provider, signer, config, tokenManager);
    this.sublimeSubgraph = new SublimeSubgraph(subgraphUrl, signer, tokenManager, config);
  }

  /**@returns Instance of SublimeConnector */
  Connector(): SublimeConnector {
    return this.sublimeConnector;
  }

  /**@returns Instance of SublimeSubgraph */
  Subgraph(): SublimeSubgraph {
    return this.sublimeSubgraph;
  }

  /**
   * @returns types used in the SDK
   */
  public static types(): any {
    return types;
  }
}
