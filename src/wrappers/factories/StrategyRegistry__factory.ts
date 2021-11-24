/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { StrategyRegistry } from '../StrategyRegistry';

export class StrategyRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<StrategyRegistry> {
    return super.deploy(overrides || {}) as Promise<StrategyRegistry>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StrategyRegistry {
    return super.attach(address) as StrategyRegistry;
  }
  connect(signer: Signer): StrategyRegistry__factory {
    return super.connect(signer) as StrategyRegistry__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): StrategyRegistry {
    return new Contract(address, _abi, signerOrProvider) as StrategyRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxStrategies',
        type: 'uint256',
      },
    ],
    name: 'MaxStrategiesUpdated',
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
        name: 'strategy',
        type: 'address',
      },
    ],
    name: 'StrategyAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'strategy',
        type: 'address',
      },
    ],
    name: 'StrategyRemoved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_strategy',
        type: 'address',
      },
    ],
    name: 'addStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getStrategies',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
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
        internalType: 'uint256',
        name: '_maxStrategies',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxStrategies',
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
    ],
    name: 'registry',
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
        internalType: 'uint256',
        name: '_strategyIndex',
        type: 'uint256',
      },
    ],
    name: 'removeStrategy',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'strategies',
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
        internalType: 'uint256',
        name: '_maxStrategies',
        type: 'uint256',
      },
    ],
    name: 'updateMaxStrategies',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_strategyIndex',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_oldStrategy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newStrategy',
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
  '0x608060405234801561001057600080fd5b5061121c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c0cbbca611610071578063c0cbbca6146101d3578063c79c21b7146101f0578063cd6dc6871461020a578063d574ea3d14610236578063f2fde38b14610253578063f50d498414610279576100b4565b8063038defd7146100b9578063223e5479146100f3578063715018a61461011b57806376ba717b146101235780638da5cb5b14610157578063b49a60bb1461017b575b600080fd5b6100df600480360360208110156100cf57600080fd5b50356001600160a01b0316610296565b604080519115158252519081900360200190f35b6101196004803603602081101561010957600080fd5b50356001600160a01b03166102ab565b005b610119610484565b6101196004803603606081101561013957600080fd5b508035906001600160a01b0360208201358116916040013516610530565b61015f610713565b604080516001600160a01b039092168252519081900360200190f35b610183610722565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101bf5781810151838201526020016101a7565b505050509050019250505060405180910390f35b610119600480360360208110156101e957600080fd5b5035610784565b6101f8610917565b60408051918252519081900360200190f35b6101196004803603604081101561022057600080fd5b506001600160a01b03813516906020013561091d565b61015f6004803603602081101561024c57600080fd5b5035610a17565b6101196004803603602081101561026957600080fd5b50356001600160a01b0316610a41565b6101196004803603602081101561028f57600080fd5b5035610b44565b60676020526000908152604090205460ff1681565b6102b3610bb2565b6001600160a01b03166102c4610713565b6001600160a01b03161461030d576040805162461bcd60e51b815260206004820181905260248201526000805160206110e1833981519152604482015290519081900360640190fd5b60665460655461031e906001610bb6565b111561035b5760405162461bcd60e51b81526004018080602001828103825260398152602001806111016039913960400191505060405180910390fd5b6001600160a01b03811660009081526067602052604090205460ff16156103b35760405162461bcd60e51b8152600401808060200182810382526037815260200180610feb6037913960400191505060405180910390fd5b6001600160a01b0381166103f85760405162461bcd60e51b815260040180806020018281038252603e815260200180610fad603e913960400191505060405180910390fd5b6001600160a01b038116600081815260676020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517f3f008fd510eae7a9e7bee13513d7b83bef8003d488b5a3d0b0da4de71d6846f19190a250565b61048c610bb2565b6001600160a01b031661049d610713565b6001600160a01b0316146104e6576040805162461bcd60e51b815260206004820181905260248201526000805160206110e1833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b610538610bb2565b6001600160a01b0316610549610713565b6001600160a01b031614610592576040805162461bcd60e51b815260206004820181905260248201526000805160206110e1833981519152604482015290519081900360640190fd5b816001600160a01b0316606584815481106105a957fe5b6000918252602090912001546001600160a01b0316146105fa5760405162461bcd60e51b81526004018080602001828103825260538152602001806110226053913960600191505060405180910390fd5b6001600160a01b03811660009081526067602052604090205460ff16156106525760405162461bcd60e51b815260040180806020018281038252603e8152602001806111a9603e913960400191505060405180910390fd5b806065848154811061066057fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b0394851617905591841680825260679092526040808220805460ff19169055517f09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea49190a26001600160a01b038116600081815260676020526040808220805460ff19166001179055517f3f008fd510eae7a9e7bee13513d7b83bef8003d488b5a3d0b0da4de71d6846f19190a2505050565b6033546001600160a01b031690565b6060606580548060200260200160405190810160405280929190818152602001828054801561077a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161075c575b5050505050905090565b61078c610bb2565b6001600160a01b031661079d610713565b6001600160a01b0316146107e6576040805162461bcd60e51b815260206004820181905260248201526000805160206110e1833981519152604482015290519081900360640190fd5b6000606582815481106107f557fe5b9060005260206000200160009054906101000a90046001600160a01b03169050606561083f600160405180606001604052806036815260200161113a603691396065549190610c17565b8154811061084957fe5b600091825260209091200154606580546001600160a01b03909216918490811061086f57fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060658054806108a857fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03831680835260679091526040808320805460ff191690555190917f09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea491a25050565b60665481565b600054610100900460ff16806109365750610936610cae565b80610944575060005460ff16155b61097f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611075602e913960400191505060405180910390fd5b600054610100900460ff161580156109aa576000805460ff1961ff0019909116610100171660011790555b816109e65760405162461bcd60e51b81526004018080602001828103825260398152602001806111706039913960400191505060405180910390fd5b6109ee610cbf565b6109f783610a41565b610a0082610d70565b8015610a12576000805461ff00191690555b505050565b60658181548110610a2757600080fd5b6000918252602090912001546001600160a01b0316905081565b610a49610bb2565b6001600160a01b0316610a5a610713565b6001600160a01b031614610aa3576040805162461bcd60e51b815260206004820181905260248201526000805160206110e1833981519152604482015290519081900360640190fd5b6001600160a01b038116610ae85760405162461bcd60e51b8152600401808060200182810382526026815260200180610f876026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b610b4c610bb2565b6001600160a01b0316610b5d610713565b6001600160a01b031614610ba6576040805162461bcd60e51b815260206004820181905260248201526000805160206110e1833981519152604482015290519081900360640190fd5b610baf81610d70565b50565b3390565b600082820183811015610c10576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008184841115610ca65760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c6b578181015183820152602001610c53565b50505050905090810190601f168015610c985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610cb930610de7565b15905090565b600054610100900460ff1680610cd85750610cd8610cae565b80610ce6575060005460ff16155b610d215760405162461bcd60e51b815260040180806020018281038252602e815260200180611075602e913960400191505060405180910390fd5b600054610100900460ff16158015610d4c576000805460ff1961ff0019909116610100171660011790555b610d54610ded565b610d5c610e8d565b8015610baf576000805461ff001916905550565b80610dac5760405162461bcd60e51b815260040180806020018281038252603e8152602001806110a3603e913960400191505060405180910390fd5b60668190556040805182815290517fd59e44bf8aa1c1d7491eb52429bbdce9f1fe3bbb314b1786e509c58bf76365b79181900360200190a150565b3b151590565b600054610100900460ff1680610e065750610e06610cae565b80610e14575060005460ff16155b610e4f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611075602e913960400191505060405180910390fd5b600054610100900460ff16158015610d5c576000805460ff1961ff0019909116610100171660011790558015610baf576000805461ff001916905550565b600054610100900460ff1680610ea65750610ea6610cae565b80610eb4575060005460ff16155b610eef5760405162461bcd60e51b815260040180806020018281038252602e815260200180611075602e913960400191505060405180910390fd5b600054610100900460ff16158015610f1a576000805460ff1961ff0019909116610100171660011790555b6000610f24610bb2565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610baf576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373537472617465677952656769737472793a3a6164645374726174656779202d205f73747261746567792063616e6e6f742062652061646472657373283029537472617465677952656769737472793a3a6164645374726174656779202d20537472617465677920616c726561647920657869737473537472617465677952656769737472793a3a7570646174655374726174656779202d20696e64657820746f2075706461746520616e64207374726174656779206164647265737320646f6e2774206d61746368496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564537472617465677952656769737472793a3a7570646174654d6178537472617465676965732073686f756c64206265206d6f7265207468616e207a65726f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572537472617465677952656769737472793a3a6164645374726174656779202d2043616e277420616464206d6f72652073747261746567696573537472617465677952656769737472793a3a72656d6f76655374726174656779202d204e6f2073747261746567696573206578697374537472617465677952656769737472793a3a696e697469616c697a65206d6178537472617465676965732063616e6e6f74206265207a65726f537472617465677952656769737472793a3a7570646174655374726174656779202d204e657720737472617465677920616c726561647920657869737473a264697066735822122075014706d9595fb8c2ed367250da6deaa0cbb9aa7898db97a2831dde09a6baf864736f6c63430007060033';
