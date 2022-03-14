/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { TwitterVerifier } from '../TwitterVerifier';

export class TwitterVerifier__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<TwitterVerifier> {
    return super.deploy(overrides || {}) as Promise<TwitterVerifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TwitterVerifier {
    return super.attach(address) as TwitterVerifier;
  }
  connect(signer: Signer): TwitterVerifier__factory {
    return super.connect(signer) as TwitterVerifier__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TwitterVerifier {
    return new Contract(address, _abi, signerOrProvider) as TwitterVerifier;
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'signerAddress',
        type: 'address',
      },
    ],
    name: 'SignerUpdated',
    type: 'event',
  },
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
        internalType: 'bool',
        name: 'isMasterLinked',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
    ],
    name: 'UserRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
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
        name: 'verification',
        type: 'address',
      },
    ],
    name: 'VerificationUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_admin',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_verification',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_signerAddress',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_version',
        type: 'string',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'bool',
        name: '_isMasterLinked',
        type: 'bool',
      },
      {
        internalType: 'uint8',
        name: '_v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_s',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: '_twitterId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_tweetId',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'registerSelf',
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
    inputs: [],
    name: 'signerAddress',
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
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'twitterIdMap',
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
    name: 'unregisterSelf',
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
    ],
    name: 'unregisterUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_signerAddress',
        type: 'address',
      },
    ],
    name: 'updateSignerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_verification',
        type: 'address',
      },
    ],
    name: 'updateVerification',
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
    name: 'userData',
    outputs: [
      {
        internalType: 'string',
        name: 'twitterId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'tweetId',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'verification',
    outputs: [
      {
        internalType: 'contract IVerification',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611cf2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063715018a61161008c5780638fa2a9f0116100665780638fa2a9f014610354578063c89109131461037a578063da0e273a1461047e578063f2fde38b146105c6576100cf565b8063715018a6146101fa57806383b43589146102025780638da5cb5b1461034c576100cf565b8063139b2011146100d457806321f2ca3b146101945780634714a411146101bc5780634ffe2a8b146101e25780635b7633d0146101ea5780636bafaa59146101f2575b600080fd5b610178600480360360208110156100ea57600080fd5b810190602081018135600160201b81111561010457600080fd5b82018360208201111561011657600080fd5b803590602001918460018302840111600160201b8311171561013757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105ec945050505050565b604080516001600160a01b039092168252519081900360200190f35b6101ba600480360360208110156101aa57600080fd5b50356001600160a01b0316610612565b005b6101ba600480360360208110156101d257600080fd5b50356001600160a01b03166108a5565b610178610913565b610178610922565b6101ba610931565b6101ba610b47565b6101ba600480360360a081101561021857600080fd5b6001600160a01b0382358116926020810135821692604082013590921691810190608081016060820135600160201b81111561025357600080fd5b82018360208201111561026557600080fd5b803590602001918460018302840111600160201b8311171561028657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156102d857600080fd5b8201836020820111156102ea57600080fd5b803590602001918460018302840111600160201b8311171561030b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bf3945050505050565b610178610cc7565b6101ba6004803603602081101561036a57600080fd5b50356001600160a01b0316610cd6565b6103a06004803603602081101561039057600080fd5b50356001600160a01b0316610d41565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156103e15781810151838201526020016103c9565b50505050905090810190601f16801561040e5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610441578181015183820152602001610429565b50505050905090810190601f16801561046e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6101ba600480360360e081101561049457600080fd5b813515159160ff6020820135169160408201359160608101359181019060a081016080820135600160201b8111156104cb57600080fd5b8201836020820111156104dd57600080fd5b803590602001918460018302840111600160201b831117156104fe57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561055057600080fd5b82018360208201111561056257600080fd5b803590602001918460018302840111600160201b8311171561058357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610e80915050565b6101ba600480360360208110156105dc57600080fd5b50356001600160a01b0316611333565b8051602081830181018051609c825292820191909301209152546001600160a01b031681565b61061a611436565b6001600160a01b031661062b610cc7565b6001600160a01b031614610674576040805162461bcd60e51b81526020600482018190526024820152600080516020611c9d833981519152604482015290519081900360640190fd5b6001600160a01b0381166000908152609b602090815260408083208054825160026001831615610100026000190190921691909104601f8101859004850282018501909352828152929091908301828280156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b50505050509050805160001415610755576040805162461bcd60e51b815260206004820152600360248201526255553160e81b604482015290519081900360640190fd5b609c816040518082805190602001908083835b602083106107875780518252601f199092019160209182019101610768565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820190942080546001600160a01b03191690556001600160a01b0386166000908152609b9091529283209291506107e890508282611b1f565b6107f6600183016000611b1f565b505060995460408051635a6ace8760e11b81526001600160a01b0385811660048301523060248301529151919092169163b4d59d0e91604480830192600092919082900301818387803b15801561084c57600080fd5b505af1158015610860573d6000803e3d6000fd5b5050604080516001600160a01b038616815290517f69c4cef1aa574ae7852ac8b784ab60926951c604b70049150e4091759ea980769350908190036020019150a15050565b6108ad611436565b6001600160a01b03166108be610cc7565b6001600160a01b031614610907576040805162461bcd60e51b81526020600482018190526024820152600080516020611c9d833981519152604482015290519081900360640190fd5b6109108161143a565b50565b6099546001600160a01b031681565b609a546001600160a01b031681565b336000908152609b602090815260408083208054825160026001831615610100026000190190921691909104601f8101859004850282018501909352828152929091908301828280156109c55780601f1061099a576101008083540402835291602001916109c5565b820191906000526020600020905b8154815290600101906020018083116109a857829003601f168201915b50505050509050805160001415610a0c576040805162461bcd60e51b815260206004808301919091526024820152635552533160e01b604482015290519081900360640190fd5b609c816040518082805190602001908083835b60208310610a3e5780518252601f199092019160209182019101610a1f565b51815160209384036101000a60001901801990921691161790529201948552506040805194859003820190942080546001600160a01b0319169055336000908152609b909152928320929150610a9690508282611b1f565b610aa4600183016000611b1f565b505060995460408051635a6ace8760e11b815233600482015230602482015290516001600160a01b039092169163b4d59d0e9160448082019260009290919082900301818387803b158015610af857600080fd5b505af1158015610b0c573d6000803e3d6000fd5b50506040805133815290517f69c4cef1aa574ae7852ac8b784ab60926951c604b70049150e4091759ea980769350908190036020019150a150565b610b4f611436565b6001600160a01b0316610b60610cc7565b6001600160a01b031614610ba9576040805162461bcd60e51b81526020600482018190526024820152600080516020611c9d833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b600054610100900460ff1680610c0c5750610c0c611484565b80610c1a575060005460ff16155b610c555760405162461bcd60e51b815260040180806020018281038252602e815260200180611c4d602e913960400191505060405180910390fd5b600054610100900460ff16158015610c80576000805460ff1961ff0019909116610100171660011790555b610c88611495565b610c9186611333565b610c9a8561143a565b610ca384611546565b610cad8383611596565b8015610cbf576000805461ff00191690555b505050505050565b6033546001600160a01b031690565b610cde611436565b6001600160a01b0316610cef610cc7565b6001600160a01b031614610d38576040805162461bcd60e51b81526020600482018190526024820152600080516020611c9d833981519152604482015290519081900360640190fd5b61091081611546565b609b6020908152600091825260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452909291839190830182828015610dd85780601f10610dad57610100808354040283529160200191610dd8565b820191906000526020600020905b815481529060010190602001808311610dbb57829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e765780601f10610e4b57610100808354040283529160200191610e76565b820191906000526020600020905b815481529060010190602001808311610e5957829003601f168201915b5050505050905082565b336000908152609b60205260409020546002600019610100600184161502019091160415610edb576040805162461bcd60e51b815260206004820152600360248201526252533160e81b604482015290519081900360640190fd5b60006001600160a01b0316609c846040518082805190602001908083835b60208310610f185780518252601f199092019160209182019101610ef9565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220546001600160a01b0316929092149150610f8c9050576040805162461bcd60e51b815260206004820152600360248201526229299960e91b604482015290519081900360640190fd5b8062015180014210610fcb576040805162461bcd60e51b815260206004820152600360248201526252533360e81b604482015290519081900360640190fd5b8251602080850191909120835184830120604080517f56ef4bbda8dd528d0295470092109d15b58bf7d66c01d8fb2955b8cd4a6361cd8186015280820193909352606083019190915233608083015260a08083018590528151808403909101815260c090920181528151918301919091206000818152609d9093529120546001600160a01b03161561108a576040805162461bcd60e51b81526020600482015260036024820152621494cd60ea1b604482015290519081900360640190fd5b600061109582611644565b905060006110a5828a8a8a611690565b609a549091506001600160a01b038083169116146110f0576040805162461bcd60e51b815260206004820152600360248201526252533560e81b604482015290519081900360640190fd5b6099546040805163a94413a160e01b81523360048201528c1515602482015290516001600160a01b039092169163a94413a19160448082019260009290919082900301818387803b15801561114457600080fd5b505af1158015611158573d6000803e3d6000fd5b505060408051808201825289815260208082018a9052336000908152609b82529290922081518051929550909350611194928492910190611b63565b5060208281015180516111ad9260018501920190611b63565b5090505033609c876040518082805190602001908083835b602083106111e45780518252601f1990920191602091820191016111c5565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555033609d600085815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055507fd0cc6197d4f74413f62e2cef7b4b43536e1965d8f11dcbf4c376ec1e85d2b22e338b8860405180846001600160a01b03168152602001831515815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112eb5781810151838201526020016112d3565b50505050905090810190601f1680156113185780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150505050505050505050565b61133b611436565b6001600160a01b031661134c610cc7565b6001600160a01b031614611395576040805162461bcd60e51b81526020600482018190526024820152600080516020611c9d833981519152604482015290519081900360640190fd5b6001600160a01b0381166113da5760405162461bcd60e51b8152600401808060200182810382526026815260200180611c056026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b609980546001600160a01b0319166001600160a01b0383169081179091556040517f338023d1a77245a8822dee6b9aa4282f63ead21a60f318249be250004ed8b93b90600090a250565b600061148f3061180e565b15905090565b600054610100900460ff16806114ae57506114ae611484565b806114bc575060005460ff16155b6114f75760405162461bcd60e51b815260040180806020018281038252602e815260200180611c4d602e913960400191505060405180910390fd5b600054610100900460ff16158015611522576000805460ff1961ff0019909116610100171660011790555b61152a611814565b6115326118b4565b8015610910576000805461ff001916905550565b609a80546001600160a01b0319166001600160a01b0383811691909117918290556040519116907f5553331329228fbd4123164423717a4a7539f6dfa1c3279a923b98fd681a6c7390600090a250565b600054610100900460ff16806115af57506115af611484565b806115bd575060005460ff16155b6115f85760405162461bcd60e51b815260040180806020018281038252602e815260200180611c4d602e913960400191505060405180910390fd5b600054610100900460ff16158015611623576000805460ff1961ff0019909116610100171660011790555b61162d83836119ad565b801561163f576000805461ff00191690555b505050565b600061164e611a6d565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156116f15760405162461bcd60e51b8152600401808060200182810382526022815260200180611c2b6022913960400191505060405180910390fd5b8360ff16601b148061170657508360ff16601c145b6117415760405162461bcd60e51b8152600401808060200182810382526022815260200180611c7b6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561179d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611805576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b3b151590565b600054610100900460ff168061182d575061182d611484565b8061183b575060005460ff16155b6118765760405162461bcd60e51b815260040180806020018281038252602e815260200180611c4d602e913960400191505060405180910390fd5b600054610100900460ff16158015611532576000805460ff1961ff0019909116610100171660011790558015610910576000805461ff001916905550565b600054610100900460ff16806118cd57506118cd611484565b806118db575060005460ff16155b6119165760405162461bcd60e51b815260040180806020018281038252602e815260200180611c4d602e913960400191505060405180910390fd5b600054610100900460ff16158015611941576000805460ff1961ff0019909116610100171660011790555b600061194b611436565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610910576000805461ff001916905550565b600054610100900460ff16806119c657506119c6611484565b806119d4575060005460ff16155b611a0f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611c4d602e913960400191505060405180910390fd5b600054610100900460ff16158015611a3a576000805460ff1961ff0019909116610100171660011790555b8251602080850191909120835191840191909120606591909155606655801561163f576000805461ff0019169055505050565b6000611aa87f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611a9b611aad565b611aa3611ab3565b611ab9565b905090565b60655490565b60665490565b6000838383611ac6611b1b565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b03168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b4690565b50805460018160011615610100020316600290046000825580601f10611b455750610910565b601f0160209004906000526020600020908101906109109190611bef565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611b995760008555611bdf565b82601f10611bb257805160ff1916838001178555611bdf565b82800160010185558215611bdf579182015b82811115611bdf578251825591602001919060010190611bc4565b50611beb929150611bef565b5090565b5b80821115611beb5760008155600101611bf056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c75654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122033d9c1faf2021e0039856f142d8ffb96f504bdd2673bce871f4f18e72de60b2164736f6c63430007060033';