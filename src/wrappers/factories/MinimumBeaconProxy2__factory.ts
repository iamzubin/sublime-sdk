/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { MinimumBeaconProxy2 } from '../MinimumBeaconProxy2';

export class MinimumBeaconProxy2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_beacon: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<MinimumBeaconProxy2> {
    return super.deploy(_beacon, overrides || {}) as Promise<MinimumBeaconProxy2>;
  }
  getDeployTransaction(_beacon: string, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(_beacon, overrides || {});
  }
  attach(address: string): MinimumBeaconProxy2 {
    return super.attach(address) as MinimumBeaconProxy2;
  }
  connect(signer: Signer): MinimumBeaconProxy2__factory {
    return super.connect(signer) as MinimumBeaconProxy2__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MinimumBeaconProxy2 {
    return new Contract(address, _abi, signerOrProvider) as MinimumBeaconProxy2;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beacon',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    stateMutability: 'nonpayable',
    type: 'fallback',
  },
];

const _bytecode =
  '0x60a060405234801561001057600080fd5b506040516101603803806101608339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031660fc610064600039806041525060fc6000f3fe6080604052348015600f57600080fd5b5060006018603d565b90503660008037600080366000845af43d6000803e8080156038573d6000f35b3d6000fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015609757600080fd5b505afa15801560aa573d6000803e3d6000fd5b505050506040513d602081101560bf57600080fd5b505190509056fea2646970667358221220fa6abb8af5c09af1be418e62fe5227a3b2a4cb74461f3316f746dfe9efdfc38c64736f6c63430007060033';