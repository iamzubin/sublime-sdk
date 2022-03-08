/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { Repayments } from '../Repayments';

export class Repayments__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Repayments> {
    return super.deploy(overrides || {}) as Promise<Repayments>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Repayments {
    return super.attach(address) as Repayments;
  }
  connect(signer: Signer): Repayments__factory {
    return super.connect(signer) as Repayments__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Repayments {
    return new Contract(address, _abi, signerOrProvider) as Repayments;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gracePenaltyRate',
        type: 'uint256',
      },
    ],
    name: 'GracePenaltyRateUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'GracePenaltyRepaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gracePeriodFraction',
        type: 'uint256',
      },
    ],
    name: 'GracePeriodFractionUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'InterestRepaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'InterestRepaymentComplete',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolFactory',
        type: 'address',
      },
    ],
    name: 'PoolFactoryUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'poolID',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'PrincipalRepaid',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_poolID',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_nextInstalmentDeadline',
        type: 'uint256',
      },
    ],
    name: '_getInterestDueTillInstalmentDeadline',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'didBorrowerDefault',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getCurrentInstalmentInterval',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getCurrentLoanInterval',
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
        name: '_poolID',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'getDuration',
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
    name: 'getGracePeriodFraction',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getInstalmentsCompleted',
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
        name: '_poolID',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_scaledUpTime',
        type: 'uint256',
      },
    ],
    name: 'getInterest',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getInterestCalculationVars',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getInterestDueTillInstalmentDeadline',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getInterestLeft',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getInterestPerSecond',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getNextInstalmentDeadline',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'getTotalRepaidAmount',
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
    name: 'gracePenaltyRate',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gracePeriodFraction',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_poolFactory',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: '_gracePenaltyRate',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: '_gracePeriodFraction',
        type: 'uint128',
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
        internalType: 'uint64',
        name: 'numberOfTotalRepayments',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'repaymentInterval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'borrowRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loanStartTime',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'lentAsset',
        type: 'address',
      },
    ],
    name: 'initializeRepayment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'isGracePenaltyApplicable',
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
        name: '_poolID',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'repay',
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
    name: 'repayConstants',
    outputs: [
      {
        internalType: 'uint64',
        name: 'numberOfTotalRepayments',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'repayAsset',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'gracePenaltyRate',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'gracePeriodFraction',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'borrowRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'repaymentInterval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loanDuration',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loanStartTime',
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
        name: '_poolID',
        type: 'address',
      },
    ],
    name: 'repayPrincipal',
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
    name: 'repayVariables',
    outputs: [
      {
        internalType: 'uint256',
        name: 'repaidAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'loanDurationCovered',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: '_gracePenaltyRate',
        type: 'uint128',
      },
    ],
    name: 'updateGracePenaltyRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: '_gracePeriodFraction',
        type: 'uint128',
      },
    ],
    name: 'updateGracePeriodFraction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_poolFactory',
        type: 'address',
      },
    ],
    name: 'updatePoolFactory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061214b806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80636de6ad0b116100de578063d6cf57e611610097578063f2a8a80611610071578063f2a8a8061461058b578063fa249a89146105b1578063fb780e89146105d7578063ffe90fd5146105fd5761018e565b8063d6cf57e614610531578063dfcc8ce71461055d578063eeb69a24146105655761018e565b80636de6ad0b146103a95780638af7cad4146103e6578063900253551461040c578063bf3b8e4b1461044b578063c006c52914610471578063d2144951146104f75761018e565b80631d58f55a1161014b57806335e3c8011161012557806335e3c801146102f157806345f8f010146103155780634bbf20471461033b57806369a4a097146103615761018e565b80631d58f55a1461027357806322867d781461029f5780632c7f475a146102cb5761018e565b8063040ca2eb146101935780630d3a4ef8146101bb5780631466e3ea146101f35780631928570b146102195780631953c3f9146102215780631a34ae181461024d575b600080fd5b6101b9600480360360208110156101a957600080fd5b50356001600160a01b0316610623565b005b6101e1600480360360208110156101d157600080fd5b50356001600160a01b03166108a7565b60408051918252519081900360200190f35b6101e16004803603602081101561020957600080fd5b50356001600160a01b03166108c8565b6101e16108e3565b6101e16004803603604081101561023757600080fd5b506001600160a01b0381351690602001356108f9565b6101e16004803603602081101561026357600080fd5b50356001600160a01b03166109b8565b6101e16004803603604081101561028957600080fd5b506001600160a01b038135169060200135610a04565b6101b9600480360360408110156102b557600080fd5b506001600160a01b038135169060200135610a5b565b6101e1600480360360208110156102e157600080fd5b50356001600160a01b0316610b69565b6102f9610b89565b604080516001600160801b039092168252519081900360200190f35b6101b96004803603602081101561032b57600080fd5b50356001600160a01b0316610b98565b6101e16004803603602081101561035157600080fd5b50356001600160a01b0316610c60565b6101b9600480360360a081101561037757600080fd5b50803567ffffffffffffffff1690602081013590604081013590606081013590608001356001600160a01b0316610ca1565b6101b9600480360360608110156103bf57600080fd5b506001600160a01b03813516906001600160801b0360208201358116916040013516610e40565b6101b9600480360360208110156103fc57600080fd5b50356001600160801b0316610f08565b6104326004803603602081101561042257600080fd5b50356001600160a01b0316610fcd565b6040805192835260208301919091528051918290030190f35b6101e16004803603602081101561046157600080fd5b50356001600160a01b0316610fe6565b6104976004803603602081101561048757600080fd5b50356001600160a01b03166110ba565b6040805167ffffffffffffffff90991689526001600160a01b0390971660208901526001600160801b0395861688880152939094166060870152608086019190915260a085015260c084019190915260e083015251908190036101000190f35b61051d6004803603602081101561050d57600080fd5b50356001600160a01b031661111c565b604080519115158252519081900360200190f35b6101e16004803603604081101561054757600080fd5b506001600160a01b038135169060200135611134565b6102f96111dd565b61051d6004803603602081101561057b57600080fd5b50356001600160a01b03166111f3565b6101e1600480360360208110156105a157600080fd5b50356001600160a01b03166112a6565b6101b9600480360360208110156105c757600080fd5b50356001600160801b0316611312565b6101e1600480360360208110156105ed57600080fd5b50356001600160a01b03166113d7565b6104326004803603602081101561061357600080fd5b50356001600160a01b0316611480565b6002600154141561067b576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001556001600160a01b038116600090815260366020526040902054819067ffffffffffffffff166106df576040805162461bcd60e51b815260206004808301919091526024820152634950493160e01b604482015290519081900360640190fd5b6001600160a01b03808316600090815260366020526040812054600160401b90049091169061071484600160801b60016114b3565b6001600160a01b03851660009081526035602090815260408083206001015460369092529091206004015491925085911461077c576040805162461bcd60e51b815260206004820152600360248201526229281960e91b604482015290519081900360640190fd5b6000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107b757600080fd5b505afa1580156107cb573d6000803e3d6000fd5b505050506040513d60208110156107e157600080fd5b5051905060006107f18285611631565b90506108086001600160a01b03861633898461168b565b6040805183815290516001600160a01b038916917f2c80036a7bf5dfea806c41e229a15333df8725344a4d1d03926f1f0b3cab22c6919081900360200190a2826001600160a01b031663232fa7336040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561088257600080fd5b505af1158015610896573d6000803e3d6000fd5b505060018055505050505050505050565b6000806108b383610fe6565b90506108bf8382610a04565b9150505b919050565b6001600160a01b031660009081526035602052604090205490565b603454600160801b90046001600160801b031690565b600080836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561093557600080fd5b505afa158015610949573d6000803e3d6000fd5b505050506040513d602081101561095f57600080fd5b50516001600160a01b0385166000908152603660205260409020600201549091506109ae906109a8670de0b6b3a76400006109a2858383838b6301e133806116e5565b906116e5565b9061173e565b9150505b92915050565b6001600160a01b038116600090815260356020908152604080832060010154603690925282206004015482916109ee91906117a5565b905060006109fc8483611134565b949350505050565b6001600160a01b03821660009081526035602090815260408083206001015460369092528220600501548290610a52908690610a4d908590610a479089906117a5565b906117a5565b611134565b95945050505050565b60026001541415610ab3576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001556001600160a01b038216600090815260366020526040902054829067ffffffffffffffff16610b17576040805162461bcd60e51b815260206004808301919091526024820152634950493160e01b604482015290519081900360640190fd5b6001600160a01b03808416600090815260366020526040812054600160401b900490911690610b478585836114b3565b9050610b5e6001600160a01b03831633878461168b565b505060018055505050565b600080610b7583610c60565b90506108bf81670de0b6b3a7640000611631565b6034546001600160801b031681565b603360009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610be657600080fd5b505afa158015610bfa573d6000803e3d6000fd5b505050506040513d6020811015610c1057600080fd5b50516001600160a01b03163314610c54576040805162461bcd60e51b81526020600482015260036024820152624f4f3160e81b604482015290519081900360640190fd5b610c5d81611802565b50565b6001600160a01b038116600090815260366020908152604080832060030154603590925282206001015482610a52670de0b6b3a76400006109a2848661173e565b6033546040805163edf7ae2160e01b815233600482015290516001600160a01b039092169163edf7ae2191602480820192602092909190829003018186803b158015610cec57600080fd5b505afa158015610d00573d6000803e3d6000fd5b505050506040513d6020811015610d1657600080fd5b5051610d52576040805162461bcd60e51b815260206004808301919091526024820152634f56503160e01b604482015290519081900360640190fd5b336000908152603660205260409020603480546001830180546001600160801b0319166001600160801b03928316178082559254600160801b9081900483160292909116919091179055805467ffffffffffffffff871667ffffffffffffffff1990911681178255610dd390670de0b6b3a7640000906109a29088906116e5565b6004820155610dea85670de0b6b3a76400006116e5565b600382015560028101849055610e0883670de0b6b3a76400006116e5565b600582015580546001600160a01b03909216600160401b0268010000000000000000600160e01b031990921691909117905550505050565b600054610100900460ff1680610e595750610e5961188f565b80610e67575060005460ff16155b610ea25760405162461bcd60e51b815260040180806020018281038252602e81526020018061209d602e913960400191505060405180910390fd5b600054610100900460ff16158015610ecd576000805460ff1961ff0019909116610100171660011790555b610ed56118a0565b610ede84611802565b610ee783611949565b610ef082611993565b8015610f02576000805461ff00191690555b50505050565b603360009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f5657600080fd5b505afa158015610f6a573d6000803e3d6000fd5b505050506040513d6020811015610f8057600080fd5b50516001600160a01b03163314610fc4576040805162461bcd60e51b81526020600482015260036024820152624f4f3160e81b604482015290519081900360640190fd5b610c5d81611993565b6035602052600090815260409020805460019091015482565b600080610ff283610c60565b6001600160a01b03841660009081526036602052604090205490915061102a9067ffffffffffffffff16670de0b6b3a76400006116e5565b811415611067576040805162461bcd60e51b81526020600482015260066024820152651c995c185a5960d21b604482015290519081900360640190fd5b6001600160a01b0383166000908152603660205260408120600381015460059091015490916110b0826110aa670de0b6b3a76400006109a8876109a28a84611631565b90611631565b9695505050505050565b60366020526000908152604090208054600182015460028301546003840154600485015460059095015467ffffffffffffffff851695600160401b9095046001600160a01b0316946001600160801b0380861695600160801b90041693929188565b60008061112883610fe6565b90506108bf83826119dd565b600080836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561117057600080fd5b505afa158015611184573d6000803e3d6000fd5b505050506040513d602081101561119a57600080fd5b50516001600160a01b038516600090815260366020526040902060020154909150610a52670de0b6b3a76400006109a86301e1338081886109a285838a8a6116e5565b603454600160801b90046001600160801b031681565b6001600160a01b0381166000908152603660205260408120600301548161122242670de0b6b3a76400006116e5565b6001600160a01b038516600090815260366020526040812060010154919250600160801b9091046001600160801b03169061125c86610fe6565b90506000611280611279670de0b6b3a76400006109a886896116e5565b8390611631565b905080841115611298576001955050505050506108c3565b6000955050505050506108c3565b6001600160a01b038116600090815260366020526040812060050154816112d542670de0b6b3a76400006116e5565b6001600160a01b0385166000908152603660205260408120600301549192506110b0670de0b6b3a76400006110aa846109a8836109a2898b6117a5565b603360009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561136057600080fd5b505afa158015611374573d6000803e3d6000fd5b505050506040513d602081101561138a57600080fd5b50516001600160a01b031633146113ce576040805162461bcd60e51b81526020600482015260036024820152624f4f3160e81b604482015290519081900360640190fd5b610c5d81611949565b600080826001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561141357600080fd5b505afa158015611427573d6000803e3d6000fd5b505050506040513d602081101561143d57600080fd5b50516001600160a01b038416600090815260366020526040812060020154919250906109fc90670de0b6b3a7640000906109a8906301e1338090829087906116e5565b600080600061148e846113d7565b6001600160a01b03949094166000908152603560205260409020600101549492505050565b60008382156114c457600160801b93505b6000816001600160a01b031663acc1ab136040518163ffffffff1660e01b815260040160206040518083038186803b1580156114ff57600080fd5b505afa158015611513573d6000803e3d6000fd5b505050506040513d602081101561152957600080fd5b5051905060018114611568576040805162461bcd60e51b815260206004820152600360248201526249523160e81b604482015290519081900360640190fd5b84600061157488611abd565b90506115a6816040518060400160405280600381526020016224a91960e91b81525089611b839092919063ffffffff16565b965060006115b5898989611c1a565b90506115e7816040518060400160405280600381526020016212548d60ea1b8152508a611b839092919063ffffffff16565b97506116228961161d8a6040518060400160405280600381526020016249523560e81b81525087611b839092919063ffffffff16565b611d6c565b955050505050505b9392505050565b60008282018381101561162a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610f02908590611db0565b6000826116f4575060006109b2565b8282028284828161170157fe5b041461162a5760405162461bcd60e51b81526004018080602001828103825260218152602001806120cb6021913960400191505060405180910390fd5b6000808211611794576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161179d57fe5b049392505050565b6000828211156117fc576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6001600160a01b038116611845576040805162461bcd60e51b8152602060048201526005602482015264495550463160d81b604482015290519081900360640190fd5b603380546001600160a01b0319166001600160a01b0383169081179091556040517f1c7678eaee5fa898fb56c2cae0f73cba66bd4eee97d2df577030caea131dd9a590600090a250565b600061189a30611e66565b15905090565b600054610100900460ff16806118b957506118b961188f565b806118c7575060005460ff16155b6119025760405162461bcd60e51b815260040180806020018281038252602e81526020018061209d602e913960400191505060405180910390fd5b600054610100900460ff1615801561192d576000805460ff1961ff0019909116610100171660011790555b611935611e6c565b8015610c5d576000805461ff001916905550565b603480546001600160801b0319166001600160801b0383169081179091556040517f191bb9be3a644dcc5e81bffa96f90a666c848d5bdef6c138be9e2909f683c13690600090a250565b603480546001600160801b03808416600160801b810291909216179091556040517fb9d9ff4c2f033fddd2d79ede90ed4b266a4b14f2fb7a53b65f841f782ab732f790600090a250565b6001600160a01b03821660009081526036602052604081206003015481611a0c42670de0b6b3a76400006116e5565b6001600160a01b038616600090815260366020526040812060010154919250600160801b9091046001600160801b031690611a5d611a56670de0b6b3a76400006109a885886116e5565b8790611631565b905080831115611a9c576040805162461bcd60e51b8152602060048201526005602482015264494750413160d81b604482015290519081900360640190fd5b858311611ab05760009450505050506109b2565b60019450505050506109b2565b600080611ac983610fe6565b90506000611ad784836119dd565b90508015611b78576000611aeb8584610a04565b6001600160a01b03861660009081526036602052604081206001015491925090611b2c90670de0b6b3a7640000906109a8906001600160801b0316856116e5565b6040805182815290519192506001600160a01b038816917fb205a9ea9862b64f9b6c381b807a47e7c2ddf5f8ab907fb47de93f700aa1a5a39181900360200190a293506108c392505050565b6000925050506108c3565b60008184841115611c125760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bd7578181015183820152602001611bbf565b50505050905090810190601f168015611c045780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600080611c26856109b8565b90508084108315151415611c6a576040805162461bcd60e51b815260206004808301919091526024820152634952493160e01b604482015290519081900360640190fd5b80841015611d06576000611c7e86866108f9565b6001600160a01b038716600090815260356020526040902060010154909150611ca79082611631565b6001600160a01b038716600081815260356020908152604091829020600101939093558051888152905191927feff139234683b4c380101256c460e14460d28453ed77503b5eb3364e9d9b92c592918290030190a2849250505061162a565b6001600160a01b038516600081815260366020908152604080832060040154603583529281902060010192909255815184815291517fc3e8d495d2888e99975640847a1ceb9831a2348f3cd1d9fa339afdb28bbff1399281900390910190a2905061162a565b6001600160a01b038216600090815260356020526040812054611d8f9083611631565b6001600160a01b038416600090815260356020526040902055508092915050565b6000611e05826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611f119092919063ffffffff16565b805190915015611e6157808060200190516020811015611e2457600080fd5b5051611e615760405162461bcd60e51b815260040180806020018281038252602a8152602001806120ec602a913960400191505060405180910390fd5b505050565b3b151590565b600054610100900460ff1680611e855750611e8561188f565b80611e93575060005460ff16155b611ece5760405162461bcd60e51b815260040180806020018281038252602e81526020018061209d602e913960400191505060405180910390fd5b600054610100900460ff16158015611ef9576000805460ff1961ff0019909116610100171660011790555b600180558015610c5d576000805461ff001916905550565b60606109fc848460008585611f2585611e66565b611f76576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611fb45780518252601f199092019160209182019101611f95565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612016576040519150601f19603f3d011682016040523d82523d6000602084013e61201b565b606091505b509150915061202b828286612036565b979650505050505050565b6060831561204557508161162a565b8251156120555782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315611bd7578181015183820152602001611bbf56fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220315855816b883b12b814538eeeeecdd323e2f95434c0e43b11dd8ea6bc972dbd64736f6c63430007060033';
