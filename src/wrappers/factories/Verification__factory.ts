/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { Verification } from '../Verification';

export class Verification__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Verification> {
    return super.deploy(overrides || {}) as Promise<Verification>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verification {
    return super.attach(address) as Verification;
  }
  connect(signer: Signer): Verification__factory {
    return super.connect(signer) as Verification__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Verification {
    return new Contract(address, _abi, signerOrProvider) as Verification;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'linkedAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'masterAddress',
        type: 'address',
      },
    ],
    name: 'AddressLinked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'linkedAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'masterAddress',
        type: 'address',
      },
    ],
    name: 'AddressUnlinked',
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
        indexed: true,
        internalType: 'address',
        name: 'masterAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'verifier',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'isMasterLinked',
        type: 'bool',
      },
    ],
    name: 'UserRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'masterAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'verifier',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'unregisteredBy',
        type: 'address',
      },
    ],
    name: 'UserUnregistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'verifier',
        type: 'address',
      },
    ],
    name: 'VerifierAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'verifier',
        type: 'address',
      },
    ],
    name: 'VerifierRemoved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_verifier',
        type: 'address',
      },
    ],
    name: 'addVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_admin',
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
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_verifier',
        type: 'address',
      },
    ],
    name: 'isUser',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_approval',
        type: 'bytes',
      },
    ],
    name: 'linkAddress',
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
    name: 'linkedAddresses',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'masterAddresses',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
        internalType: 'address',
        name: '_masterAddress',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_isMasterLinked',
        type: 'bool',
      },
    ],
    name: 'registerMasterAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_verifier',
        type: 'address',
      },
    ],
    name: 'removeVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'address',
        name: '_linkedAddress',
        type: 'address',
      },
    ],
    name: 'unlinkAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_masterAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_verifier',
        type: 'address',
      },
    ],
    name: 'unregisterMasterAddress',
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
    name: 'verifiers',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506113cf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a21dae471161008c578063b59284ac11610066578063b59284ac14610301578063c4d66de814610327578063ca2dfd0a1461034d578063f2fde38b14610373576100ea565b8063a21dae471461027f578063a94413a1146102a5578063b4d59d0e146102d3576100ea565b8063715018a6116100c8578063715018a6146101ff5780638da5cb5b146102075780639000b3d61461022b5780639a5f0e3f14610251576100ea565b806302d43dc8146100ef57806308d04d4f146101315780636c824487146101d9575b600080fd5b61011d6004803603604081101561010557600080fd5b506001600160a01b0381358116916020013516610399565b604080519115158252519081900360200190f35b6101d76004803603602081101561014757600080fd5b81019060208101813564010000000081111561016257600080fd5b82018360208201111561017457600080fd5b8035906020019184600183028401116401000000008311171561019657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610404945050505050565b005b61011d600480360360208110156101ef57600080fd5b50356001600160a01b031661057a565b6101d761058f565b61020f61063b565b604080516001600160a01b039092168252519081900360200190f35b6101d76004803603602081101561024157600080fd5b50356001600160a01b031661064a565b61011d6004803603604081101561026757600080fd5b506001600160a01b03813581169160200135166107b8565b61020f6004803603602081101561029557600080fd5b50356001600160a01b03166107d8565b6101d7600480360360408110156102bb57600080fd5b506001600160a01b03813516906020013515156107f3565b6101d7600480360360408110156102e957600080fd5b506001600160a01b038135811691602001351661095f565b6101d76004803603602081101561031757600080fd5b50356001600160a01b0316610a60565b6101d76004803603602081101561033d57600080fd5b50356001600160a01b0316610b7f565b6101d76004803603602081101561036357600080fd5b50356001600160a01b0316610c33565b6101d76004803603602081101561038957600080fd5b50356001600160a01b0316610d4b565b6001600160a01b038083166000908152606760205260408120549091168015806103e957506001600160a01b0380821660009081526066602090815260408083209387168352929052205460ff16155b156103f85760009150506103fe565b60019150505b92915050565b336000908152606760205260409020546001600160a01b03161561046f576040805162461bcd60e51b815260206004820152601b60248201527f563a4c412d4164647265737320616c7265616479206c696e6b65640000000000604482015290519081900360640190fd5b60006040518060600160405280602f815260200161136b602f9139336040516020018083805190602001908083835b602083106104bd5780518252601f19909201916020918201910161049e565b6001836020036101000a038019825116818451168082178552505050505050905001826001600160a01b031660601b8152601401925050506040516020818303038152906040529050600081805190602001209050600061051e8285610e4e565b3360008181526067602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051939450927f45d23c6988be4dfee1d2401434ead52a4881a9e9396b7a2c348241d43e2891bd9190a350505050565b60656020526000908152604090205460ff1681565b610597610ece565b6001600160a01b03166105a861063b565b6001600160a01b0316146105f1576040805162461bcd60e51b8152602060048201819052602482015260008051602061134b833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6033546001600160a01b031690565b610652610ece565b6001600160a01b031661066361063b565b6001600160a01b0316146106ac576040805162461bcd60e51b8152602060048201819052602482015260008051602061134b833981519152604482015290519081900360640190fd5b6001600160a01b038116610707576040805162461bcd60e51b815260206004820152601f60248201527f563a41562d56657269666965722063616e742062652030206164647265737300604482015290519081900360640190fd5b6001600160a01b03811660009081526065602052604090205460ff161561076c576040805162461bcd60e51b8152602060048201526014602482015273563a41562d56657269666965722065786973747360601b604482015290519081900360640190fd5b6001600160a01b038116600081815260656020526040808220805460ff19166001179055517f6d05492139c5ea989514a5d2150c028041e5c087e2a39967f67dc7d2655adb819190a250565b606660209081526000928352604080842090915290825290205460ff1681565b6067602052600090815260409020546001600160a01b031681565b3360009081526065602052604090205460ff1661084a576040805162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2103b32b934b334b2b960811b604482015290519081900360640190fd5b6001600160a01b038216600090815260666020908152604080832033845290915290205460ff16156108c3576040805162461bcd60e51b815260206004820152601860248201527f563a524d412d416c726561647920726567697374657265640000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526066602090815260408083203384529091529020805460ff191660011790558015610921576001600160a01b038216600081815260676020526040902080546001600160a01b03191690911790555b6040518115159033906001600160a01b038516907f859d113797d39f050d937c356ae6c65cef56740d5748fdbe2766c43aab2f543890600090a45050565b61096761063b565b6001600160a01b0316336001600160a01b031614610a03576001600160a01b038216600090815260666020908152604080832033845290915290205460ff16806109b95750336001600160a01b038216145b610a03576040805162461bcd60e51b81526020600482015260166024820152752b1d2aa6a096a4b73b30b634b2103b32b934b334b2b960511b604482015290519081900360640190fd5b6001600160a01b03808316600081815260666020908152604080832094861680845294909152808220805460ff1916905551339392917f5eafa2f9e2a450ef3572e53b30967abce55adc77273307c9a17059eb0084614d91a45050565b6001600160a01b038082166000908152606760205260409020541680610acd576040805162461bcd60e51b815260206004820152601760248201527f563a55412d41646472657373206e6f74206c696e6b6564000000000000000000604482015290519081900360640190fd5b6001600160a01b0381163314610b2a576040805162461bcd60e51b815260206004820152601960248201527f563a55412d4e6f74206c696e6b656420746f2073656e64657200000000000000604482015290519081900360640190fd5b6001600160a01b0380831660008181526067602052604080822080546001600160a01b031916905551928416927f67bbb4b5639f2d9759f69355063b269dd691fa4504cf0f789c9bd3c1a8c28d949190a35050565b600054610100900460ff1680610b985750610b98610ed2565b80610ba6575060005460ff16155b610be15760405162461bcd60e51b815260040180806020018281038252602e8152602001806112fb602e913960400191505060405180910390fd5b600054610100900460ff16158015610c0c576000805460ff1961ff0019909116610100171660011790555b610c14610ee3565b610c1d82610d4b565b8015610c2f576000805461ff00191690555b5050565b610c3b610ece565b6001600160a01b0316610c4c61063b565b6001600160a01b031614610c95576040805162461bcd60e51b8152602060048201819052602482015260008051602061134b833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526065602052604090205460ff16610d02576040805162461bcd60e51b815260206004820152601a60248201527f563a41562d566572696669657220646f65736e74206578697374000000000000604482015290519081900360640190fd5b6001600160a01b038116600081815260656020526040808220805460ff19169055517f44a3cd4eb5cc5748f6169df057b1cb2ae4c383e87cd94663c430e095d4cba4249190a250565b610d53610ece565b6001600160a01b0316610d6461063b565b6001600160a01b031614610dad576040805162461bcd60e51b8152602060048201819052602482015260008051602061134b833981519152604482015290519081900360640190fd5b6001600160a01b038116610df25760405162461bcd60e51b81526004018080602001828103825260268152602001806112b36026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60008151604114610ea6576040805162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a610ec486828585610f95565b9695505050505050565b3390565b6000610edd30611113565b15905090565b600054610100900460ff1680610efc5750610efc610ed2565b80610f0a575060005460ff16155b610f455760405162461bcd60e51b815260040180806020018281038252602e8152602001806112fb602e913960400191505060405180910390fd5b600054610100900460ff16158015610f70576000805460ff1961ff0019909116610100171660011790555b610f78611119565b610f806111b9565b8015610f92576000805461ff00191690555b50565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610ff65760405162461bcd60e51b81526004018080602001828103825260228152602001806112d96022913960400191505060405180910390fd5b8360ff16601b148061100b57508360ff16601c145b6110465760405162461bcd60e51b81526004018080602001828103825260228152602001806113296022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156110a2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661110a576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b3b151590565b600054610100900460ff16806111325750611132610ed2565b80611140575060005460ff16155b61117b5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112fb602e913960400191505060405180910390fd5b600054610100900460ff16158015610f80576000805460ff1961ff0019909116610100171660011790558015610f92576000805461ff001916905550565b600054610100900460ff16806111d257506111d2610ed2565b806111e0575060005460ff16155b61121b5760405162461bcd60e51b815260040180806020018281038252602e8152602001806112fb602e913960400191505060405180910390fd5b600054610100900460ff16158015611246576000805460ff1961ff0019909116610100171660011790555b6000611250610ece565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610f92576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c75654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572415050524f56494e47204144445245535320544f204245204c494e4b454420544f204d45204f4e205355424c494d45a26469706673582212203380b23f424556c450de39dd6aeb58409bbc3378152d9290366d4a5a4c8c189664736f6c63430007060033';
