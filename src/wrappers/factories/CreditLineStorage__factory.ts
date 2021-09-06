/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { CreditLineStorage } from '../CreditLineStorage';

export class CreditLineStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CreditLineStorage> {
    return super.deploy(overrides || {}) as Promise<CreditLineStorage>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CreditLineStorage {
    return super.attach(address) as CreditLineStorage;
  }
  connect(signer: Signer): CreditLineStorage__factory {
    return super.connect(signer) as CreditLineStorage__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CreditLineStorage {
    return new Contract(address, _abi, signerOrProvider) as CreditLineStorage;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CreditLineCounter',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'creditLineInfo',
    outputs: [
      {
        internalType: 'bool',
        name: 'exists',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'lender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'borrowLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'idealCollateralRatio',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'liquidationThreshold',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'borrowRate',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'borrowAsset',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'collateralAsset',
        type: 'address',
      },
      {
        internalType: 'enum CreditLineStorage.creditLineStatus',
        name: 'currentStatus',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: 'autoLiquidation',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'requestByLender',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'creditLineUsage',
    outputs: [
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalInterestRepaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastPrincipalUpdateTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestAccruedTillPrincipalUpdate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'collateralAmount',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'yearInSeconds',
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
  '0x608060405234801561001057600080fd5b506104eb806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ae578063a164b423146100d2578063ae974ff61461011a578063f2fde38b146101cf5761007d565b80630fb40d83146100825780634059d5961461009c578063715018a6146100a4575b600080fd5b61008a6101f5565b60408051918252519081900360200190f35b61008a6101fb565b6100ac610203565b005b6100b66102c1565b604080516001600160a01b039092168252519081900360200190f35b6100ef600480360360208110156100e857600080fd5b50356102d0565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b6101376004803603602081101561013057600080fd5b50356102ff565b604051808d151581526020018c6001600160a01b031681526020018b6001600160a01b031681526020018a8152602001898152602001888152602001878152602001866001600160a01b03168152602001856001600160a01b031681526020018460058111156101a357fe5b8152602001831515815260200182151581526020019c5050505050505050505050505060405180910390f35b6100ac600480360360208110156101e557600080fd5b50356001600160a01b0316610376565b60655481565b6301e1338081565b61020b61048b565b6001600160a01b031661021c6102c1565b6001600160a01b031614610277576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6033546001600160a01b031690565b606760205260009081526040902080546001820154600283015460038401546004909401549293919290919085565b6068602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015460ff808816986001600160a01b03610100909904891698978816979081169290811691600160a01b8204811691600160a81b8104821691600160b01b909104168c565b61037e61048b565b6001600160a01b031661038f6102c1565b6001600160a01b0316146103ea576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811661042f5760405162461bcd60e51b81526004018080602001828103825260268152602001806104906026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26469706673582212207101e9e9827d9901fe58225c2a4e44909a3681468e6395e9f459eab7c93a6a4b64736f6c63430007000033';
