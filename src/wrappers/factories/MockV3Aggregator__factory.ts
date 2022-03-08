/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { MockV3Aggregator } from '../MockV3Aggregator';

export class MockV3Aggregator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MockV3Aggregator> {
    return super.deploy(overrides || {}) as Promise<MockV3Aggregator>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockV3Aggregator {
    return super.attach(address) as MockV3Aggregator;
  }
  connect(signer: Signer): MockV3Aggregator__factory {
    return super.connect(signer) as MockV3Aggregator__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockV3Aggregator {
    return new Contract(address, _abi, signerOrProvider) as MockV3Aggregator;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'description',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint80',
        name: '_roundId',
        type: 'uint80',
      },
    ],
    name: 'getRoundData',
    outputs: [
      {
        internalType: 'uint80',
        name: 'roundId',
        type: 'uint80',
      },
      {
        internalType: 'int256',
        name: 'answer',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'startedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint80',
        name: 'answeredInRound',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      {
        internalType: 'uint80',
        name: 'roundId',
        type: 'uint80',
      },
      {
        internalType: 'int256',
        name: 'answer',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'startedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint80',
        name: 'answeredInRound',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: '_temp',
        type: 'int256',
      },
    ],
    name: 'setAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610252806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063313ce5671461006757806354fd4d50146100855780637284e4161461009f57806399213cd81461011c5780639a6fc8f51461013b578063feaf968c146101ae575b600080fd5b61006f6101b6565b6040805160ff9092168252519081900360200190f35b61008d6101bb565b60408051918252519081900360200190f35b6100a76101c0565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100e15781810151838201526020016100c9565b50505050905090810190601f16801561010e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101396004803603602081101561013257600080fd5b50356101e8565b005b6101646004803603602081101561015157600080fd5b503569ffffffffffffffffffff166101ed565b604051808669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1681526020019550505050505060405180910390f35b610164610205565b601290565b600a90565b60408051808201909152600e81526d2737902232b9b1b934b83a34b7b760911b602082015290565b600055565b50600054600191621e1808906288e3eb906296a3c390565b600054600191621e1808906288e3eb906296a3c39056fea264697066735822122087111d32cf0cbfb8e801618e586a7bc9b6a694cc28ea9c8e2d1974f65f57f27e64736f6c63430007060033';
