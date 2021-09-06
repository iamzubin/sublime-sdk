/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { CompoundYield } from '../CompoundYield';

export class CompoundYield__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CompoundYield> {
    return super.deploy(overrides || {}) as Promise<CompoundYield>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CompoundYield {
    return super.attach(address) as CompoundYield;
  }
  connect(signer: Signer): CompoundYield__factory {
    return super.connect(signer) as CompoundYield__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CompoundYield {
    return new Contract(address, _abi, signerOrProvider) as CompoundYield;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'investedTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lpTokensReceived',
        type: 'uint256',
      },
    ],
    name: 'LockedTokens',
    type: 'event',
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'protocolToken',
        type: 'address',
      },
    ],
    name: 'ProtocolAddressesUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'savingsAccount',
        type: 'address',
      },
    ],
    name: 'SavingsAccountUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sharesReleased',
        type: 'uint256',
      },
    ],
    name: 'UnlockedShares',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'investedTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralReceived',
        type: 'uint256',
      },
    ],
    name: 'UnlockedTokens',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'emergencyWithdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'received',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getSharesForTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getTokensForShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_savingsAccount',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'liquidityToken',
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
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'lockTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesReceived',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
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
    inputs: [],
    name: 'savingsAccount',
    outputs: [
      {
        internalType: 'address payable',
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
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'unlockShares',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'unlockTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: 'received',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'updateProtocolAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_savingsAccount',
        type: 'address',
      },
    ],
    name: 'updateSavingsAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506001606555611f4d806100256000396000f3fe6080604052600436106100e15760003560e01c8063715018a61161007f578063934a525211610059578063934a5252146103065780639d564d9a1461033f578063ecced62314610378578063f2fde38b1461038d576100e8565b8063715018a6146102a357806376467da0146102b85780638da5cb5b146102f1576100e8565b8063485cc955116100bb578063485cc955146101c157806359846d29146101fc5780636382d9ad146102355780636cf14f9d14610270576100e8565b8063050470f1146100ed5780631391abc71461012a5780634767ceee14610179576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b506101286004803603604081101561011057600080fd5b506001600160a01b03813581169160200135166103c0565b005b34801561013657600080fd5b5061015d6004803603602081101561014d57600080fd5b50356001600160a01b031661048f565b604080516001600160a01b039092168252519081900360200190f35b6101af6004803603606081101561018f57600080fd5b506001600160a01b038135811691602081013590911690604001356104aa565b60408051918252519081900360200190f35b3480156101cd57600080fd5b50610128600480360360408110156101e457600080fd5b506001600160a01b038135811691602001351661069c565b34801561020857600080fd5b506101af6004803603604081101561021f57600080fd5b50803590602001356001600160a01b031661075a565b34801561024157600080fd5b506101af6004803603604081101561025857600080fd5b506001600160a01b0381358116916020013516610880565b34801561027c57600080fd5b506101286004803603602081101561029357600080fd5b50356001600160a01b0316610a4b565b3480156102af57600080fd5b50610128610ab9565b3480156102c457600080fd5b506101af600480360360408110156102db57600080fd5b506001600160a01b038135169060200135610b65565b3480156102fd57600080fd5b5061015d610cdc565b34801561031257600080fd5b506101af6004803603604081101561032957600080fd5b50803590602001356001600160a01b0316610ceb565b34801561034b57600080fd5b506101af6004803603604081101561036257600080fd5b506001600160a01b038135169060200135610d1b565b34801561038457600080fd5b5061015d610f60565b34801561039957600080fd5b50610128600480360360208110156103b057600080fd5b50356001600160a01b0316610f6f565b6103c8611072565b6001600160a01b03166103d9610cdc565b6001600160a01b031614610422576040805162461bcd60e51b81526020600482018190526024820152600080516020611ece833981519152604482015290519081900360640190fd5b6001600160a01b0382811660008181526067602090815260409182902080546001600160a01b0319169486169485179055815192835282019290925281517f56f1579ee95049fdf09d13a9dff4ee7dceb865ba851790c867e5e43938ccdcaa929181900390910190a15050565b6067602052600090815260409020546001600160a01b031681565b6066546000906001600160a01b03166104c1611072565b6001600160a01b0316146105065760405162461bcd60e51b8152600401808060200182810382526027815260200180611e326027913960400191505060405180910390fd5b6002606554141561055e576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002606555816105a6576040805162461bcd60e51b815260206004820152600e60248201526d125b9d995cdd0e88185b5bdd5b9d60921b604482015290519081900360640190fd5b6001600160a01b038084166000818152606760205260409020549091169061062257823414610611576040805162461bcd60e51b8152602060048201526012602482015271125b9d995cdd0e8811551208185b5bdd5b9d60721b604482015290519081900360640190fd5b61061b8184611076565b9150610645565b6106376001600160a01b0385168630866111d4565b610642848285611234565b91505b604080516001600160a01b0380881682528316602082015280820184905290517f71538b5e30c18b86003771476b5887a8f118d796b2a4a2a5960e0ac1b10962d39181900360600190a15060016065559392505050565b600054610100900460ff16806106b557506106b5611453565b806106c3575060005460ff16155b6106fe5760405162461bcd60e51b815260040180806020018281038252602e815260200180611e7f602e913960400191505060405180910390fd5b600054610100900460ff16158015610729576000805460ff1961ff0019909116610100171660011790555b610731611464565b61073a83610f6f565b61074382611515565b8015610755576000805461ff00191690555b505050565b6000826107695750600061087a565b6001600160a01b038083166000908152606760209081526040918290205482516370a0823160e01b815230600482015292519316926108769284926370a0823192602480840193829003018186803b1580156107c457600080fd5b505afa1580156107d8573d6000803e3d6000fd5b505050506040513d60208110156107ee57600080fd5b505160408051633af9e66960e01b815230600482015290516108709188916001600160a01b03871691633af9e6699160248083019260209291908290030181600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050506040513d602081101561086857600080fd5b5051906115bb565b90611614565b9150505b92915050565b600061088a611072565b6001600160a01b031661089b610cdc565b6001600160a01b0316146108e4576040805162461bcd60e51b81526020600482018190526024820152600080516020611ece833981519152604482015290519081900360640190fd5b6001600160a01b0380841660009081526067602090815260408083205481516370a0823160e01b8152306004820152915194169384926370a082319260248082019391829003018186803b15801561093b57600080fd5b505afa15801561094f573d6000803e3d6000fd5b505050506040513d602081101561096557600080fd5b505190506001600160a01b038516610a2257610981828261167b565b6040519093506000906001600160a01b0386169085908381818185875af1925050503d80600081146109cf576040519150601f19603f3d011682016040523d82523d6000602084013e6109d4565b606091505b5050905080610a1c576040805162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b50610a43565b610a2d858383611745565b9250610a436001600160a01b03861685856118d3565b505092915050565b610a53611072565b6001600160a01b0316610a64610cdc565b6001600160a01b031614610aad576040805162461bcd60e51b81526020600482018190526024820152600080516020611ece833981519152604482015290519081900360640190fd5b610ab681611515565b50565b610ac1611072565b6001600160a01b0316610ad2610cdc565b6001600160a01b031614610b1b576040805162461bcd60e51b81526020600482018190526024820152600080516020611ece833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6066546000906001600160a01b0316610b7c611072565b6001600160a01b031614610bc15760405162461bcd60e51b8152600401808060200182810382526027815260200180611e326027913960400191505060405180910390fd5b60026065541415610c19576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260655581610c2b57506000610cd1565b6001600160a01b038316610c705760405162461bcd60e51b8152600401808060200182810382526022815260200180611e106022913960400191505060405180910390fd5b606654610c8a906001600160a01b038581169116846118d3565b604080516001600160a01b03851681526020810184905281517f176b3c3d1f486b4519305078c763e6ca126c940ea1a8a024bdb0316c08ad6ede929181900390910190a150805b600160655592915050565b6033546001600160a01b031690565b6000610d14610d02670de0b6b3a76400008461075a565b61087085670de0b6b3a76400006115bb565b9392505050565b6066546000906001600160a01b0316610d32611072565b6001600160a01b031614610d775760405162461bcd60e51b8152600401808060200182810382526027815260200180611e326027913960400191505060405180910390fd5b60026065541415610dcf576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260655581610e17576040805162461bcd60e51b815260206004820152600e60248201526d125b9d995cdd0e88185b5bdd5b9d60921b604482015290519081900360640190fd5b6001600160a01b0380841660008181526067602052604090205490911690610ee857610e43818461167b565b6066546040519193506000916001600160a01b039091169084908381818185875af1925050503d8060008114610e95576040519150601f19603f3d011682016040523d82523d6000602084013e610e9a565b606091505b5050905080610ee2576040805162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b50610f10565b610ef3848285611745565b606654909250610f10906001600160a01b038681169116846118d3565b604080516001600160a01b03861681526020810184905281517faf08a4db36432bb5cbbfdfcf5af1040246483dc0dae8a9616cc79816c432fee9929181900390910190a150600160655592915050565b6066546001600160a01b031681565b610f77611072565b6001600160a01b0316610f88610cdc565b6001600160a01b031614610fd1576040805162461bcd60e51b81526020600482018190526024820152600080516020611ece833981519152604482015290519081900360640190fd5b6001600160a01b0381166110165760405162461bcd60e51b8152600401808060200182810382526026815260200180611dea6026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b600080836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156110c657600080fd5b505afa1580156110da573d6000803e3d6000fd5b505050506040513d60208110156110f057600080fd5b505160408051631249c58b60e01b815290519192506001600160a01b03861691631249c58b918691600480830192600092919082900301818588803b15801561113857600080fd5b505af115801561114c573d6000803e3d6000fd5b505050505061087681856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156111a257600080fd5b505afa1580156111b6573d6000803e3d6000fd5b505050506040513d60208110156111cc57600080fd5b505190611925565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261122e908590611982565b50505050565b600080836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561128457600080fd5b505afa158015611298573d6000803e3d6000fd5b505050506040513d60208110156112ae57600080fd5b50516040805163095ea7b360e01b81526001600160a01b0387811660048301526024820187905291519293509087169163095ea7b3916044808201926020929091908290030181600087803b15801561130657600080fd5b505af115801561131a573d6000803e3d6000fd5b505050506040513d602081101561133057600080fd5b50506040805163140e25ad60e31b81526004810185905290516001600160a01b0386169163a0712d689160248083019260209291908290030181600087803b15801561137b57600080fd5b505af115801561138f573d6000803e3d6000fd5b505050506040513d60208110156113a557600080fd5b5051156113f9576040805162461bcd60e51b815260206004820152601760248201527f4572726f7220696e206d696e74696e6720746f6b656e73000000000000000000604482015290519081900360640190fd5b61144a81856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156111a257600080fd5b95945050505050565b600061145e30611a33565b15905090565b600054610100900460ff168061147d575061147d611453565b8061148b575060005460ff16155b6114c65760405162461bcd60e51b815260040180806020018281038252602e815260200180611e7f602e913960400191505060405180910390fd5b600054610100900460ff161580156114f1576000805460ff1961ff0019909116610100171660011790555b6114f9611a39565b611501611ad9565b8015610ab6576000805461ff001916905550565b6001600160a01b038116611567576040805162461bcd60e51b8152602060048201526014602482015273496e766573743a207a65726f206164647265737360601b604482015290519081900360640190fd5b606680546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f5e8a3d56d9512a62f643367551a65727148c2516dce6b54956df80926dd2536c9181900360200190a150565b6000826115ca5750600061087a565b828202828482816115d757fe5b0414610d145760405162461bcd60e51b8152600401808060200182810382526021815260200180611ead6021913960400191505060405180910390fd5b600080821161166a576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161167357fe5b049392505050565b600080479050836001600160a01b031663db006a75846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156116c757600080fd5b505af11580156116db573d6000803e3d6000fd5b505050506040513d60208110156116f157600080fd5b50511561173b576040805162461bcd60e51b81526020600482015260136024820152724572726f7220696e20756e7772617070696e6760681b604482015290519081900360640190fd5b6108764782611925565b600080846001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561179557600080fd5b505afa1580156117a9573d6000803e3d6000fd5b505050506040513d60208110156117bf57600080fd5b50516040805163db006a7560e01b81526004810186905290519192506001600160a01b0386169163db006a75916024808201926020929091908290030181600087803b15801561180e57600080fd5b505af1158015611822573d6000803e3d6000fd5b505050506040513d602081101561183857600080fd5b505115611882576040805162461bcd60e51b81526020600482015260136024820152724572726f7220696e20756e7772617070696e6760681b604482015290519081900360640190fd5b61144a81866001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156111a257600080fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610755908490611982565b60008282111561197c576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60606119d7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611bd29092919063ffffffff16565b805190915015610755578080602001905160208110156119f657600080fd5b50516107555760405162461bcd60e51b815260040180806020018281038252602a815260200180611eee602a913960400191505060405180910390fd5b3b151590565b600054610100900460ff1680611a525750611a52611453565b80611a60575060005460ff16155b611a9b5760405162461bcd60e51b815260040180806020018281038252602e815260200180611e7f602e913960400191505060405180910390fd5b600054610100900460ff16158015611501576000805460ff1961ff0019909116610100171660011790558015610ab6576000805461ff001916905550565b600054610100900460ff1680611af25750611af2611453565b80611b00575060005460ff16155b611b3b5760405162461bcd60e51b815260040180806020018281038252602e815260200180611e7f602e913960400191505060405180910390fd5b600054610100900460ff16158015611b66576000805460ff1961ff0019909116610100171660011790555b6000611b70611072565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610ab6576000805461ff001916905550565b6060611be18484600085611be9565b949350505050565b606082471015611c2a5760405162461bcd60e51b8152600401808060200182810382526026815260200180611e596026913960400191505060405180910390fd5b611c3385611a33565b611c84576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611cc35780518252601f199092019160209182019101611ca4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611d25576040519150601f19603f3d011682016040523d82523d6000602084013e611d2a565b606091505b5091509150611d3a828286611d45565b979650505050505050565b60608315611d54575081610d14565b825115611d645782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611dae578181015183820152602001611d96565b50505050905090810190601f168015611ddb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373417373657420616464726573732063616e6e6f742062652061646472657373283029496e766573743a204f6e6c7920736176696e6773206163636f756e742063616e20696e766f6b65416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220b23b0e06a2ff42a625ab35f72e4ddf2f1445624742571ebd9d47c14b61f338d264736f6c63430007000033';
