/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { Migrations } from '../Migrations';

export class Migrations__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Migrations> {
    return super.deploy(overrides || {}) as Promise<Migrations>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Migrations {
    return super.attach(address) as Migrations;
  }
  connect(signer: Signer): Migrations__factory {
    return super.connect(signer) as Migrations__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Migrations {
    return new Contract(address, _abi, signerOrProvider) as Migrations;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'last_completed_migration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'completed',
        type: 'uint256',
      },
    ],
    name: 'setCompleted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x6080604052600080546001600160a01b0319163317905534801561002257600080fd5b5061016f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610060578063fdacd57614610084575b600080fd5b61004e6100a3565b60408051918252519081900360200190f35b6100686100a9565b604080516001600160a01b039092168252519081900360200190f35b6100a16004803603602081101561009a57600080fd5b50356100b8565b005b60015481565b6000546001600160a01b031681565b6000546001600160a01b031633146101015760405162461bcd60e51b81526004018080602001828103825260338152602001806101076033913960400191505060405180910390fd5b60015556fe546869732066756e6374696f6e206973207265737472696374656420746f2074686520636f6e74726163742773206f776e6572a2646970667358221220a1376f8cf158af1be0df0bcbe316a77b59c470176118ff6c85f7775f3ff39a8c64736f6c63430007060033';
