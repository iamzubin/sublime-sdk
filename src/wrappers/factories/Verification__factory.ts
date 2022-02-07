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
        indexed: false,
        internalType: 'uint256',
        name: 'activationDelay',
        type: 'uint256',
      },
    ],
    name: 'ActivationDelayUpdated',
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
      {
        indexed: false,
        internalType: 'uint256',
        name: 'activatesAt',
        type: 'uint256',
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
    name: 'AddressLinkingRequestCancelled',
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
    name: 'AddressLinkingRequested',
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
        indexed: false,
        internalType: 'uint256',
        name: 'activatesAt',
        type: 'uint256',
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
    inputs: [],
    name: 'activationDelay',
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
        name: '_linkedAddress',
        type: 'address',
      },
    ],
    name: 'cancelAddressLinkingRequest',
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
      {
        internalType: 'uint256',
        name: '_activationDelay',
        type: 'uint256',
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
        internalType: 'address',
        name: '_masterAddress',
        type: 'address',
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
        internalType: 'uint64',
        name: 'activatesAt',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'masterAddress',
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
    name: 'pendingLinkAddresses',
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
        name: '_linkedAddress',
        type: 'address',
      },
    ],
    name: 'requestAddressLinking',
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
        internalType: 'uint256',
        name: '_activationDelay',
        type: 'uint256',
      },
    ],
    name: 'updateActivationDelay',
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
  '0x608060405234801561001057600080fd5b5061150f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063a21dae47116100ad578063c5fa092611610071578063c5fa09261461036f578063c7097f6214610395578063ca2dfd0a146103bb578063cd6dc687146103e1578063f2fde38b1461040d57610121565b8063a21dae471461027e578063a94413a1146102d0578063b4d59d0e146102fe578063b59284ac1461032c578063c5b0202f1461035257610121565b80636c824487116100f45780636c824487146101d8578063715018a6146101fe5780638da5cb5b146102065780639000b3d61461022a5780639a5f0e3f1461025057610121565b806302d43dc814610126578063247305fb146101685780633a8c07861461019657806340f65fe9146101b0575b600080fd5b6101546004803603604081101561013c57600080fd5b506001600160a01b0381358116916020013516610433565b604080519115158252519081900360200190f35b6101546004803603604081101561017e57600080fd5b506001600160a01b03813581169160200135166104da565b61019e6104fa565b60408051918252519081900360200190f35b6101d6600480360360208110156101c657600080fd5b50356001600160a01b0316610500565b005b610154600480360360208110156101ee57600080fd5b50356001600160a01b03166105cd565b6101d66105e2565b61020e61068e565b604080516001600160a01b039092168252519081900360200190f35b6101d66004803603602081101561024057600080fd5b50356001600160a01b031661069d565b61019e6004803603604081101561026657600080fd5b506001600160a01b038135811691602001351661080b565b6102a46004803603602081101561029457600080fd5b50356001600160a01b0316610828565b6040805167ffffffffffffffff90931683526001600160a01b0390911660208301528051918290030190f35b6101d6600480360360408110156102e657600080fd5b506001600160a01b0381351690602001351515610856565b6101d66004803603604081101561031457600080fd5b506001600160a01b038135811691602001351661099e565b6101d66004803603602081101561034257600080fd5b50356001600160a01b0316610a9a565b6101d66004803603602081101561036857600080fd5b5035610b65565b6101d66004803603602081101561038557600080fd5b50356001600160a01b0316610bd3565b6101d6600480360360208110156103ab57600080fd5b50356001600160a01b0316610ca1565b6101d6600480360360208110156103d157600080fd5b50356001600160a01b0316610e08565b6101d6600480360360408110156103f757600080fd5b506001600160a01b038135169060200135610f20565b6101d66004803603602081101561042357600080fd5b50356001600160a01b0316610fdd565b6001600160a01b03808316600090815260686020908152604080832081518083018352905467ffffffffffffffff81168252600160401b90048516818401818152908552606784528285208787168652909352908320549151929390921615806104aa575042826000015167ffffffffffffffff16115b806104b3575080155b806104bd57504281115b156104cd576000925050506104d4565b6001925050505b92915050565b606960209081526000928352604080842090915290825290205460ff1681565b60655481565b6001600160a01b03818116600090815260686020526040902054600160401b90041615610574576040805162461bcd60e51b815260206004820152601b60248201527f563a4c412d4164647265737320616c7265616479206c696e6b65640000000000604482015290519081900360640190fd5b6001600160a01b0381166000818152606960209081526040808320338085529252808320805460ff19166001179055519092917f025e4e7b4881ece376d141005e5e06c09bbd68a6926c294a01b949fd73ecc37f91a350565b60666020526000908152604090205460ff1681565b6105ea6110e0565b6001600160a01b03166105fb61068e565b6001600160a01b031614610644576040805162461bcd60e51b8152602060048201819052602482015260008051602061148e833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6033546001600160a01b031690565b6106a56110e0565b6001600160a01b03166106b661068e565b6001600160a01b0316146106ff576040805162461bcd60e51b8152602060048201819052602482015260008051602061148e833981519152604482015290519081900360640190fd5b6001600160a01b03811661075a576040805162461bcd60e51b815260206004820152601f60248201527f563a41562d56657269666965722063616e742062652030206164647265737300604482015290519081900360640190fd5b6001600160a01b03811660009081526066602052604090205460ff16156107bf576040805162461bcd60e51b8152602060048201526014602482015273563a41562d56657269666965722065786973747360601b604482015290519081900360640190fd5b6001600160a01b038116600081815260666020526040808220805460ff19166001179055517f6d05492139c5ea989514a5d2150c028041e5c087e2a39967f67dc7d2655adb819190a250565b606760209081526000928352604080842090915290825290205481565b60686020526000908152604090205467ffffffffffffffff811690600160401b90046001600160a01b031682565b3360009081526066602052604090205460ff166108ad576040805162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2103b32b934b334b2b960811b604482015290519081900360640190fd5b6001600160a01b038216600090815260676020908152604080832033845290915290205415610923576040805162461bcd60e51b815260206004820152601860248201527f563a524d412d416c726561647920726567697374657265640000000000000000604482015290519081900360640190fd5b6065546001600160a01b038316600081815260676020908152604080832033808552908352928190204290950194859055805185815290519293927f05345a91f639184e946e5aac384b1e9f74ae9ab08d775a7deddb3180cebecb23929181900390910190a381156109995761099983846110e4565b505050565b6109a661068e565b6001600160a01b0316336001600160a01b031614610a42576001600160a01b0382166000908152606760209081526040808320338452909152902054158015906109f85750336001600160a01b038216145b610a42576040805162461bcd60e51b81526020600482015260166024820152752b1d2aa6a096a4b73b30b634b2103b32b934b334b2b960511b604482015290519081900360640190fd5b6001600160a01b0380831660008181526067602090815260408083209486168084529490915280822082905551339392917f5eafa2f9e2a450ef3572e53b30967abce55adc77273307c9a17059eb0084614d91a45050565b6001600160a01b03808216600090815260686020526040902054600160401b900416338114610b10576040805162461bcd60e51b815260206004820152601960248201527f563a55412d4e6f74206c696e6b656420746f2073656e64657200000000000000604482015290519081900360640190fd5b6001600160a01b0380831660008181526068602052604080822080546001600160e01b031916905551928416927f67bbb4b5639f2d9759f69355063b269dd691fa4504cf0f789c9bd3c1a8c28d949190a35050565b610b6d6110e0565b6001600160a01b0316610b7e61068e565b6001600160a01b031614610bc7576040805162461bcd60e51b8152602060048201819052602482015260008051602061148e833981519152604482015290519081900360640190fd5b610bd08161119d565b50565b6001600160a01b038116600090815260696020908152604080832033845290915290205460ff16610c4b576040805162461bcd60e51b815260206004820152601960248201527f563a43414c522d4e6f2070656e64696e67207265717565737400000000000000604482015290519081900360640190fd5b6001600160a01b0381166000818152606960209081526040808320338085529252808320805460ff19169055519092917f823547ba70bd5aa799deaf684be6ada2057d59203eb67a515e15780427c1475491a350565b6001600160a01b038116610ce65760405162461bcd60e51b815260040180806020018281038252602c8152602001806114ae602c913960400191505060405180910390fd5b33600090815260686020526040902054600160401b90046001600160a01b031615610d58576040805162461bcd60e51b815260206004820152601b60248201527f563a4c412d4164647265737320616c7265616479206c696e6b65640000000000604482015290519081900360640190fd5b3360009081526069602090815260408083206001600160a01b038516845290915290205460ff16610dd0576040805162461bcd60e51b815260206004820152601760248201527f563a4c412d4e6f2070656e64696e672072657175657374000000000000000000604482015290519081900360640190fd5b610dda33826110e4565b3360009081526069602090815260408083206001600160a01b0394909416835292905220805460ff19169055565b610e106110e0565b6001600160a01b0316610e2161068e565b6001600160a01b031614610e6a576040805162461bcd60e51b8152602060048201819052602482015260008051602061148e833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526066602052604090205460ff16610ed7576040805162461bcd60e51b815260206004820152601a60248201527f563a41562d566572696669657220646f65736e74206578697374000000000000604482015290519081900360640190fd5b6001600160a01b038116600081815260666020526040808220805460ff19169055517f44a3cd4eb5cc5748f6169df057b1cb2ae4c383e87cd94663c430e095d4cba4249190a250565b600054610100900460ff1680610f395750610f396111d8565b80610f47575060005460ff16155b610f825760405162461bcd60e51b815260040180806020018281038252602e815260200180611460602e913960400191505060405180910390fd5b600054610100900460ff16158015610fad576000805460ff1961ff0019909116610100171660011790555b610fb56111e9565b610fbe83610fdd565b610fc78261119d565b8015610999576000805461ff0019169055505050565b610fe56110e0565b6001600160a01b0316610ff661068e565b6001600160a01b03161461103f576040805162461bcd60e51b8152602060048201819052602482015260008051602061148e833981519152604482015290519081900360640190fd5b6001600160a01b0381166110845760405162461bcd60e51b815260040180806020018281038252602681526020018061143a6026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6065546040805180820182524290920167ffffffffffffffff8181168085526001600160a01b0386811660208088018281528a841660008181526068845289902099518a54925167ffffffffffffffff1990931697169690961768010000000000000000600160e01b031916600160401b9190941602929092179096558451918252935192949391927ff10c503146261f617db6e85ab6fe93a4657ce2ac77a5a432bc0b4b8b80c5c78f929181900390910190a3505050565b60658190556040805182815290517fcfd56fca4ec82d4c89101bf0a5ee9a1f2aef268815f6e092b01df47fb48555869181900360200190a150565b60006111e33061129a565b15905090565b600054610100900460ff168061120257506112026111d8565b80611210575060005460ff16155b61124b5760405162461bcd60e51b815260040180806020018281038252602e815260200180611460602e913960400191505060405180910390fd5b600054610100900460ff16158015611276576000805460ff1961ff0019909116610100171660011790555b61127e6112a0565b611286611340565b8015610bd0576000805461ff001916905550565b3b151590565b600054610100900460ff16806112b957506112b96111d8565b806112c7575060005460ff16155b6113025760405162461bcd60e51b815260040180806020018281038252602e815260200180611460602e913960400191505060405180910390fd5b600054610100900460ff16158015611286576000805460ff1961ff0019909116610100171660011790558015610bd0576000805461ff001916905550565b600054610100900460ff168061135957506113596111d8565b80611367575060005460ff16155b6113a25760405162461bcd60e51b815260040180806020018281038252602e815260200180611460602e913960400191505060405180910390fd5b600054610100900460ff161580156113cd576000805460ff1961ff0019909116610100171660011790555b60006113d76110e0565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610bd0576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572566572696669636174696f6e3a3a205f6d6173746572416464726573732063616e6e6f74206265207a65726fa26469706673582212206726ee073432afa4484825120cde7741bb866516c04875d281f9816041e5953364736f6c63430007060033';
