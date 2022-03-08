/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { Admin } from '../Admin';

export class Admin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Admin> {
    return super.deploy(overrides || {}) as Promise<Admin>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Admin {
    return super.attach(address) as Admin;
  }
  connect(signer: Signer): Admin__factory {
    return super.connect(signer) as Admin__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Admin {
    return new Contract(address, _abi, signerOrProvider) as Admin;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'strategyRegistry',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'strategy',
        type: 'address',
      },
    ],
    name: 'addStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'priceOracle',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
    ],
    name: 'setChainlinkPriceFeed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'priceOracleAddress',
        type: 'address',
      },
    ],
    name: 'setUpAllOracles',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'priceOracleAddress',
        type: 'address',
      },
    ],
    name: 'setUpChainlinkOracles',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'priceOracleAddress',
        type: 'address',
      },
    ],
    name: 'setUpUniswapOracles',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'priceOracleAddress',
        type: 'address',
      },
    ],
    name: 'setUp_USDC_ETH_oracles',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'creditLine',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'noYield',
        type: 'address',
      },
    ],
    name: 'updateDefaultStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pooledCreditLineAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'savingsAccount',
        type: 'address',
      },
    ],
    name: 'updatePooledCLSavingsAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'creditLine',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'savingsAccount',
        type: 'address',
      },
    ],
    name: 'updateSavingsAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'strategyRegistry',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'oldStrategy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newStrategy',
        type: 'address',
      },
    ],
    name: 'updateStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610e9b806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c84f2c9211610066578063c84f2c9214610189578063d10b6bcc1461015b578063dbab15ca146101af578063dc964a79146101e7578063e4f106fb146102155761009e565b80631388ae2e146100a357806318066943146100cb5780632089dc08146100f95780636caed82e146101355780637bfb73f71461015b575b600080fd5b6100c9600480360360208110156100b957600080fd5b50356001600160a01b031661023b565b005b6100c9600480360360408110156100e157600080fd5b506001600160a01b0381358116916020013516610437565b6100c96004803603608081101561010f57600080fd5b506001600160a01b03813581169160208101359160408201358116916060013516610486565b6100c96004803603602081101561014b57600080fd5b50356001600160a01b031661050c565b6100c96004803603604081101561017157600080fd5b506001600160a01b038135811691602001351661097f565b6100c96004803603602081101561019f57600080fd5b50356001600160a01b03166109ce565b6100c9600480360360608110156101c557600080fd5b506001600160a01b038135811691602081013582169160409091013516610bed565b6100c9600480360360408110156101fd57600080fd5b506001600160a01b0381358116916020013516610c6a565b6100c96004803603602081101561022b57600080fd5b50356001600160a01b0316610cb9565b60408051630626a92b60e01b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201527388e6a0c2ddd26feeb64f039a2c41296fcb3f56406044820152905182916001600160a01b03831691630626a92b9160648082019260009290919082900301818387803b1580156102cd57600080fd5b505af11580156102e1573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2602482015273cbcdf9626bc03e24f779434178a73a0b4bad62ed604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561037457600080fd5b505af1158015610388573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c5996004820152736b175474e89094c44da98b954eedeac495271d0f602482015273391e8501b626c623d39474afca6f9e46c2686649604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561041b57600080fd5b505af115801561042f573d6000803e3d6000fd5b505050505050565b816001600160a01b031663223e5479826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561041b57600080fd5b836001600160a01b03166376ba717b8484846040518463ffffffff1660e01b815260040180848152602001836001600160a01b03168152602001826001600160a01b031681526020019350505050600060405180830381600087803b1580156104ee57600080fd5b505af1158015610502573d6000803e3d6000fd5b5050505050505050565b60408051630fa6fc4360e41b815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26004820152735f4ec3df9cbd43714fe2740f5e3616155c5b84196024820152905182916001600160a01b0383169163fa6fc4309160448082019260009290919082900301818387803b15801561058457600080fd5b505af1158015610598573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152736b175474e89094c44da98b954eedeac495271d0f600482015273aed0c38402a5d19df6e4c03f4e2dced6e29c1ee9602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505060408051630fa6fc4360e41b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486004820152738fffffd4afb6115b954bd326cbe7b4ba576818f6602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561069e57600080fd5b505af11580156106b2573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273f4030086522a5beea4988f8ca5b36dbc97bee88c602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561072b57600080fd5b505af115801561073f573d6000803e3d6000fd5b505060408051630626a92b60e01b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201527388e6a0c2ddd26feeb64f039a2c41296fcb3f5640604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b1580156107d257600080fd5b505af11580156107e6573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2602482015273cbcdf9626bc03e24f779434178a73a0b4bad62ed604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561087957600080fd5b505af115801561088d573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c5996004820152736b175474e89094c44da98b954eedeac495271d0f602482015273391e8501b626c623d39474afca6f9e46c2686649604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561092057600080fd5b505af1158015610934573d6000803e3d6000fd5b50505050806001600160a01b031663252a62c1600a6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561041b57600080fd5b816001600160a01b0316636cf14f9d826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561041b57600080fd5b60408051630fa6fc4360e41b815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26004820152735f4ec3df9cbd43714fe2740f5e3616155c5b84196024820152905182916001600160a01b0383169163fa6fc4309160448082019260009290919082900301818387803b158015610a4657600080fd5b505af1158015610a5a573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152736b175474e89094c44da98b954eedeac495271d0f600482015273aed0c38402a5d19df6e4c03f4e2dced6e29c1ee9602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b158015610ad357600080fd5b505af1158015610ae7573d6000803e3d6000fd5b505060408051630fa6fc4360e41b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486004820152738fffffd4afb6115b954bd326cbe7b4ba576818f6602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b158015610b6057600080fd5b505af1158015610b74573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273f4030086522a5beea4988f8ca5b36dbc97bee88c602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561041b57600080fd5b826001600160a01b031663fa6fc43083836040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b158015610c4d57600080fd5b505af1158015610c61573d6000803e3d6000fd5b50505050505050565b816001600160a01b03166356f421d0826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561041b57600080fd5b60408051630fa6fc4360e41b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486004820152738fffffd4afb6115b954bd326cbe7b4ba576818f66024820152905182916001600160a01b0383169163fa6fc4309160448082019260009290919082900301818387803b158015610d3157600080fd5b505af1158015610d45573d6000803e3d6000fd5b505060408051630fa6fc4360e41b815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26004820152735f4ec3df9cbd43714fe2740f5e3616155c5b8419602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b158015610dbe57600080fd5b505af1158015610dd2573d6000803e3d6000fd5b505060408051630626a92b60e01b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201527388e6a0c2ddd26feeb64f039a2c41296fcb3f5640604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561041b57600080fdfea264697066735822122007c088e04ed1180569b9361a1bf10db06ad01d87eda99ca92a3487fc18a1021c64736f6c63430007060033';
