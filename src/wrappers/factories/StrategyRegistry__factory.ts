/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { StrategyRegistry } from "../StrategyRegistry";

export class StrategyRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StrategyRegistry> {
    return super.deploy(overrides || {}) as Promise<StrategyRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StrategyRegistry {
    return super.attach(address) as StrategyRegistry;
  }
  connect(signer: Signer): StrategyRegistry__factory {
    return super.connect(signer) as StrategyRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StrategyRegistry {
    return new Contract(address, _abi, signerOrProvider) as StrategyRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "StrategyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "StrategyRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "addStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStrategies",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxStrategies",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxStrategies",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "registry",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_strategyIndex",
        type: "uint256",
      },
    ],
    name: "removeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "strategies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxStrategies",
        type: "uint256",
      },
    ],
    name: "updateMaxStrategies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_strategyIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_oldStrategy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newStrategy",
        type: "address",
      },
    ],
    name: "updateStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061117c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c0cbbca611610071578063c0cbbca6146101d3578063c79c21b7146101f0578063cd6dc6871461020a578063d574ea3d14610236578063f2fde38b14610253578063f50d498414610279576100b4565b8063038defd7146100b9578063223e5479146100f3578063715018a61461011b57806376ba717b146101235780638da5cb5b14610157578063b49a60bb1461017b575b600080fd5b6100df600480360360208110156100cf57600080fd5b50356001600160a01b0316610296565b604080519115158252519081900360200190f35b6101196004803603602081101561010957600080fd5b50356001600160a01b03166102ab565b005b610119610484565b6101196004803603606081101561013957600080fd5b508035906001600160a01b0360208201358116916040013516610530565b61015f6106b8565b604080516001600160a01b039092168252519081900360200190f35b6101836106c7565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101bf5781810151838201526020016101a7565b505050509050019250505060405180910390f35b610119600480360360208110156101e957600080fd5b5035610729565b6101f86108bc565b60408051918252519081900360200190f35b6101196004803603604081101561022057600080fd5b506001600160a01b0381351690602001356108c2565b61015f6004803603602081101561024c57600080fd5b50356109b8565b6101196004803603602081101561026957600080fd5b50356001600160a01b03166109e2565b6101196004803603602081101561028f57600080fd5b5035610ae5565b60676020526000908152604090205460ff1681565b6102b3610b88565b6001600160a01b03166102c46106b8565b6001600160a01b03161461030d576040805162461bcd60e51b81526020600482018190526024820152600080516020611041833981519152604482015290519081900360640190fd5b60665460655461031e906001610b8c565b111561035b5760405162461bcd60e51b81526004018080602001828103825260398152602001806110616039913960400191505060405180910390fd5b6001600160a01b03811660009081526067602052604090205460ff16156103b35760405162461bcd60e51b8152600401808060200182810382526037815260200180610f4b6037913960400191505060405180910390fd5b6001600160a01b0381166103f85760405162461bcd60e51b815260040180806020018281038252603e815260200180610f0d603e913960400191505060405180910390fd5b6001600160a01b038116600081815260676020526040808220805460ff1916600190811790915560658054918201815583527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c70180546001600160a01b03191684179055517f3f008fd510eae7a9e7bee13513d7b83bef8003d488b5a3d0b0da4de71d6846f19190a250565b61048c610b88565b6001600160a01b031661049d6106b8565b6001600160a01b0316146104e6576040805162461bcd60e51b81526020600482018190526024820152600080516020611041833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b610538610b88565b6001600160a01b03166105496106b8565b6001600160a01b031614610592576040805162461bcd60e51b81526020600482018190526024820152600080516020611041833981519152604482015290519081900360640190fd5b816001600160a01b0316606584815481106105a957fe5b6000918252602090912001546001600160a01b0316146105fa5760405162461bcd60e51b8152600401808060200182810382526053815260200180610f826053913960600191505060405180910390fd5b6001600160a01b03811660009081526067602052604090205460ff16156106525760405162461bcd60e51b815260040180806020018281038252603e815260200180611109603e913960400191505060405180910390fd5b806065848154811061066057fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055938216815260679093526040808420805460ff199081169091559290911683529091208054909116600117905550565b6033546001600160a01b031690565b6060606580548060200260200160405190810160405280929190818152602001828054801561071f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610701575b5050505050905090565b610731610b88565b6001600160a01b03166107426106b8565b6001600160a01b03161461078b576040805162461bcd60e51b81526020600482018190526024820152600080516020611041833981519152604482015290519081900360640190fd5b60006065828154811061079a57fe5b9060005260206000200160009054906101000a90046001600160a01b0316905060656107e4600160405180606001604052806036815260200161109a603691396065549190610bed565b815481106107ee57fe5b600091825260209091200154606580546001600160a01b03909216918490811061081457fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550606580548061084d57fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03831680835260679091526040808320805460ff191690555190917f09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea491a25050565b60665481565b600054610100900460ff16806108db57506108db610c84565b806108e9575060005460ff16155b6109245760405162461bcd60e51b815260040180806020018281038252602e815260200180610fd5602e913960400191505060405180910390fd5b600054610100900460ff1615801561094f576000805460ff1961ff0019909116610100171660011790555b8161098b5760405162461bcd60e51b81526004018080602001828103825260398152602001806110d06039913960400191505060405180910390fd5b610993610c95565b61099c836109e2565b606682905580156109b3576000805461ff00191690555b505050565b606581815481106109c857600080fd5b6000918252602090912001546001600160a01b0316905081565b6109ea610b88565b6001600160a01b03166109fb6106b8565b6001600160a01b031614610a44576040805162461bcd60e51b81526020600482018190526024820152600080516020611041833981519152604482015290519081900360640190fd5b6001600160a01b038116610a895760405162461bcd60e51b8152600401808060200182810382526026815260200180610ee76026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b610aed610b88565b6001600160a01b0316610afe6106b8565b6001600160a01b031614610b47576040805162461bcd60e51b81526020600482018190526024820152600080516020611041833981519152604482015290519081900360640190fd5b80610b835760405162461bcd60e51b815260040180806020018281038252603e815260200180611003603e913960400191505060405180910390fd5b606655565b3390565b600082820183811015610be6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008184841115610c7c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c41578181015183820152602001610c29565b50505050905090810190601f168015610c6e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610c8f30610d47565b15905090565b600054610100900460ff1680610cae5750610cae610c84565b80610cbc575060005460ff16155b610cf75760405162461bcd60e51b815260040180806020018281038252602e815260200180610fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610d22576000805460ff1961ff0019909116610100171660011790555b610d2a610d4d565b610d32610ded565b8015610d44576000805461ff00191690555b50565b3b151590565b600054610100900460ff1680610d665750610d66610c84565b80610d74575060005460ff16155b610daf5760405162461bcd60e51b815260040180806020018281038252602e815260200180610fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610d32576000805460ff1961ff0019909116610100171660011790558015610d44576000805461ff001916905550565b600054610100900460ff1680610e065750610e06610c84565b80610e14575060005460ff16155b610e4f5760405162461bcd60e51b815260040180806020018281038252602e815260200180610fd5602e913960400191505060405180910390fd5b600054610100900460ff16158015610e7a576000805460ff1961ff0019909116610100171660011790555b6000610e84610b88565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610d44576000805461ff00191690555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373537472617465677952656769737472793a3a6164645374726174656779202d205f73747261746567792063616e6e6f742062652061646472657373283029537472617465677952656769737472793a3a6164645374726174656779202d20537472617465677920616c726561647920657869737473537472617465677952656769737472793a3a7570646174655374726174656779202d20696e64657820746f2075706461746520616e64207374726174656779206164647265737320646f6e2774206d61746368496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564537472617465677952656769737472793a3a7570646174654d6178537472617465676965732073686f756c64206265206d6f7265207468616e207a65726f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572537472617465677952656769737472793a3a6164645374726174656779202d2043616e277420616464206d6f72652073747261746567696573537472617465677952656769737472793a3a72656d6f76655374726174656779202d204e6f2073747261746567696573206578697374537472617465677952656769737472793a3a696e697469616c697a65206d6178537472617465676965732063616e6e6f74206265207a65726f537472617465677952656769737472793a3a7570646174655374726174656779202d204e657720737472617465677920616c726561647920657869737473a264697066735822122052b0c18bad2fd750c6bf767cdffaf398f92704f484a2b47463c8ae758aeba3f764736f6c63430007060033";
