/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { NoYield } from '../NoYield';

export class NoYield__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<NoYield> {
    return super.deploy(overrides || {}) as Promise<NoYield>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NoYield {
    return super.attach(address) as NoYield;
  }
  connect(signer: Signer): NoYield__factory {
    return super.connect(signer) as NoYield__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NoYield {
    return new Contract(address, _abi, signerOrProvider) as NoYield;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
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
        indexed: true,
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
        indexed: true,
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
        indexed: true,
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
    stateMutability: 'pure',
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
    stateMutability: 'pure',
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
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'liquidityToken',
    outputs: [
      {
        internalType: 'address',
        name: '_tokenAddress',
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
        name: 'tokensReceived',
        type: 'uint256',
      },
    ],
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5060016065556112b6806100256000396000f3fe6080604052600436106100c25760003560e01c8063715018a61161007f578063934a525211610059578063934a52521461019b5780639d564d9a14610257578063ecced623146102a5578063f2fde38b146102ba576100c2565b8063715018a61461024257806376467da0146102575780638da5cb5b14610290576100c2565b80631391abc7146100c75780634767ceee14610116578063485cc9551461015e57806359846d291461019b5780636382d9ad146101d45780636cf14f9d1461020f575b600080fd5b3480156100d357600080fd5b506100fa600480360360208110156100ea57600080fd5b50356001600160a01b03166102ed565b604080516001600160a01b039092168252519081900360200190f35b61014c6004803603606081101561012c57600080fd5b506001600160a01b038135811691602081013590911690604001356102f0565b60408051918252519081900360200190f35b34801561016a57600080fd5b506101996004803603604081101561018157600080fd5b506001600160a01b03813581169160200135166104b8565b005b3480156101a757600080fd5b5061014c600480360360408110156101be57600080fd5b50803590602001356001600160a01b0316610576565b3480156101e057600080fd5b5061014c600480360360408110156101f757600080fd5b506001600160a01b038135811691602001351661057a565b34801561021b57600080fd5b506101996004803603602081101561023257600080fd5b50356001600160a01b03166106bd565b34801561024e57600080fd5b5061019961072b565b34801561026357600080fd5b5061014c6004803603604081101561027a57600080fd5b506001600160a01b0381351690602001356107d7565b34801561029c57600080fd5b506100fa6108a6565b3480156102b157600080fd5b506100fa6108b5565b3480156102c657600080fd5b50610199600480360360208110156102dd57600080fd5b50356001600160a01b03166108c4565b90565b6066546000906001600160a01b03166103076109c7565b6001600160a01b03161461034c5760405162461bcd60e51b81526004018080602001828103825260278152602001806111bc6027913960400191505060405180910390fd5b600260655414156103a4576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002606555816103ec576040805162461bcd60e51b815260206004820152600e60248201526d125b9d995cdd0e88185b5bdd5b9d60921b604482015290519081900360640190fd5b6001600160a01b03831615610415576104106001600160a01b0384168530856109cb565b61045e565b81341461045e576040805162461bcd60e51b8152602060048201526012602482015271125b9d995cdd0e8811551208185b5bdd5b9d60721b604482015290519081900360640190fd5b819050826001600160a01b0316846001600160a01b03167f71538b5e30c18b86003771476b5887a8f118d796b2a4a2a5960e0ac1b10962d3836040518082815260200191505060405180910390a360016065559392505050565b600054610100900460ff16806104d157506104d1610a2b565b806104df575060005460ff16155b61051a5760405162461bcd60e51b815260040180806020018281038252602e815260200180611209602e913960400191505060405180910390fd5b600054610100900460ff16158015610545576000805460ff1961ff0019909116610100171660011790555b61054d610a3c565b610556836108c4565b61055f82610aed565b8015610571576000805461ff00191690555b505050565b5090565b60006105846109c7565b6001600160a01b03166105956108a6565b6001600160a01b0316146105de576040805162461bcd60e51b81526020600482018190526024820152600080516020611237833981519152604482015290519081900360640190fd5b6001600160a01b038216610625576040805162461bcd60e51b815260206004820152600960248201526831b0b73a10313ab93760b91b604482015290519081900360640190fd5b6000836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561067457600080fd5b505afa158015610688573d6000803e3d6000fd5b505050506040513d602081101561069e57600080fd5b505190506106b66001600160a01b0385168484610b89565b9392505050565b6106c56109c7565b6001600160a01b03166106d66108a6565b6001600160a01b03161461071f576040805162461bcd60e51b81526020600482018190526024820152600080516020611237833981519152604482015290519081900360640190fd5b61072881610aed565b50565b6107336109c7565b6001600160a01b03166107446108a6565b6001600160a01b03161461078d576040805162461bcd60e51b81526020600482018190526024820152600080516020611237833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b6066546000906001600160a01b03166107ee6109c7565b6001600160a01b0316146108335760405162461bcd60e51b81526004018080602001828103825260278152602001806111bc6027913960400191505060405180910390fd5b6002606554141561088b576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260655561089a8383610bdb565b60016065559392505050565b6033546001600160a01b031690565b6066546001600160a01b031681565b6108cc6109c7565b6001600160a01b03166108dd6108a6565b6001600160a01b031614610926576040805162461bcd60e51b81526020600482018190526024820152600080516020611237833981519152604482015290519081900360640190fd5b6001600160a01b03811661096b5760405162461bcd60e51b81526004018080602001828103825260268152602001806111966026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610a25908590610d2f565b50505050565b6000610a3630610de0565b15905090565b600054610100900460ff1680610a555750610a55610a2b565b80610a63575060005460ff16155b610a9e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611209602e913960400191505060405180910390fd5b600054610100900460ff16158015610ac9576000805460ff1961ff0019909116610100171660011790555b610ad1610de6565b610ad9610e86565b8015610728576000805461ff001916905550565b6001600160a01b038116610b3f576040805162461bcd60e51b8152602060048201526014602482015273496e766573743a207a65726f206164647265737360601b604482015290519081900360640190fd5b606680546001600160a01b0319166001600160a01b0383169081179091556040517f5e8a3d56d9512a62f643367551a65727148c2516dce6b54956df80926dd2536c90600090a250565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610571908490610d2f565b600081610c20576040805162461bcd60e51b815260206004820152600e60248201526d125b9d995cdd0e88185b5bdd5b9d60921b604482015290519081900360640190fd5b50806001600160a01b038316610cd0576066546040516000916001600160a01b03169083908381818185875af1925050503d8060008114610c7d576040519150601f19603f3d011682016040523d82523d6000602084013e610c82565b606091505b5050905080610cca576040805162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015290519081900360640190fd5b50610cea565b606654610cea906001600160a01b03858116911683610b89565b6040805182815290516001600160a01b038516917faf08a4db36432bb5cbbfdfcf5af1040246483dc0dae8a9616cc79816c432fee9919081900360200190a292915050565b6000610d84826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f7f9092919063ffffffff16565b80519091501561057157808060200190516020811015610da357600080fd5b50516105715760405162461bcd60e51b815260040180806020018281038252602a815260200180611257602a913960400191505060405180910390fd5b3b151590565b600054610100900460ff1680610dff5750610dff610a2b565b80610e0d575060005460ff16155b610e485760405162461bcd60e51b815260040180806020018281038252602e815260200180611209602e913960400191505060405180910390fd5b600054610100900460ff16158015610ad9576000805460ff1961ff0019909116610100171660011790558015610728576000805461ff001916905550565b600054610100900460ff1680610e9f5750610e9f610a2b565b80610ead575060005460ff16155b610ee85760405162461bcd60e51b815260040180806020018281038252602e815260200180611209602e913960400191505060405180910390fd5b600054610100900460ff16158015610f13576000805460ff1961ff0019909116610100171660011790555b6000610f1d6109c7565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610728576000805461ff001916905550565b6060610f8e8484600085610f96565b949350505050565b606082471015610fd75760405162461bcd60e51b81526004018080602001828103825260268152602001806111e36026913960400191505060405180910390fd5b610fe085610de0565b611031576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b6020831061106f5780518252601f199092019160209182019101611050565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146110d1576040519150601f19603f3d011682016040523d82523d6000602084013e6110d6565b606091505b50915091506110e68282866110f1565b979650505050505050565b606083156111005750816106b6565b8251156111105782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561115a578181015183820152602001611142565b50505050905090810190601f1680156111875780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e766573743a204f6e6c7920736176696e6773206163636f756e742063616e20696e766f6b65416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122010089f1801954d141970b0064e62671c126c9cd343487ba693085a0d1f64b7df64736f6c63430007060033';
