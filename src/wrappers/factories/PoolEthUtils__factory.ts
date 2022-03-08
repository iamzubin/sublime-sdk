/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { PoolEthUtils } from '../PoolEthUtils';

export class PoolEthUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_weth: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolEthUtils> {
    return super.deploy(_weth, overrides || {}) as Promise<PoolEthUtils>;
  }
  getDeployTransaction(_weth: string, overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(_weth, overrides || {});
  }
  attach(address: string): PoolEthUtils {
    return super.attach(address) as PoolEthUtils;
  }
  connect(signer: Signer): PoolEthUtils__factory {
    return super.connect(signer) as PoolEthUtils__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PoolEthUtils {
    return new Contract(address, _abi, signerOrProvider) as PoolEthUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lender',
        type: 'address',
      },
    ],
    name: 'addEthCollateralInMarginCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
    ],
    name: 'depositEthAsCollateralToPool',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_strategy',
        type: 'address',
      },
    ],
    name: 'ethLend',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'weth',
    outputs: [
      {
        internalType: 'contract IWETH9',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60a060405234801561001057600080fd5b506040516104593803806104598339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166103e8610071600039806101895280610299528061030d52506103e86000f3fe60806040526004361061003f5760003560e01c80630595b958146100445780633fc8cef31461007e57806340197a86146100af5780639df4e931146100d5575b600080fd5b61007c6004803603606081101561005a57600080fd5b506001600160a01b038135811691602081013582169160409091013516610103565b005b34801561008a57600080fd5b50610093610187565b604080516001600160a01b039092168252519081900360200190f35b61007c600480360360208110156100c557600080fd5b50356001600160a01b03166101ab565b61007c600480360360408110156100eb57600080fd5b506001600160a01b038135811691602001351661021c565b61010d8334610297565b60408051631046837b60e21b81526001600160a01b038481166004830152346024830152838116604483015260006064830181905292519086169263411a0dec926084808201939182900301818387803b15801561016a57600080fd5b505af115801561017e573d6000803e3d6000fd5b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6101b58134610297565b6040805163d2b93bfd60e01b815234600482015260006024820181905291516001600160a01b0384169263d2b93bfd926044808201939182900301818387803b15801561020157600080fd5b505af1158015610215573d6000803e3d6000fd5b5050505050565b6102268234610297565b6040805163c145fe6960e01b81526001600160a01b03838116600483015234602483015260006044830181905292519085169263c145fe69926064808201939182900301818387803b15801561027b57600080fd5b505af115801561028f573d6000803e3d6000fd5b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156102f257600080fd5b505af1158015610306573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561038257600080fd5b505af1158015610396573d6000803e3d6000fd5b505050506040513d60208110156103ac57600080fd5b5050505056fea26469706673582212207b687baedabd7d8fc647871676823f592d34750d5fe035fc1fd71caa05a58fc564736f6c63430007060033';
