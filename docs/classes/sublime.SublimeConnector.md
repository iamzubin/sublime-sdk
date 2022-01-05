[sublime-sdk](../README.md) / [Modules](../modules.md) / [sublime](../modules/sublime.md) / SublimeConnector

# Class: SublimeConnector

[sublime](../modules/sublime.md).SublimeConnector

## Table of contents

### Constructors

- [constructor](sublime.SublimeConnector.md#constructor)

### Properties

- [config](sublime.SublimeConnector.md#config)
- [provider](sublime.SublimeConnector.md#provider)
- [signer](sublime.SublimeConnector.md#signer)
- [tokenManager](sublime.SublimeConnector.md#tokenmanager)

### Methods

- [Address](sublime.SublimeConnector.md#address)
- [CreditLinesApi](sublime.SublimeConnector.md#creditlinesapi)
- [ExtensionApi](sublime.SublimeConnector.md#extensionapi)
- [PoolApi](sublime.SublimeConnector.md#poolapi)
- [PriceOracleApi](sublime.SublimeConnector.md#priceoracleapi)
- [RepaymentApi](sublime.SublimeConnector.md#repaymentapi)
- [SavingsAccountApi](sublime.SublimeConnector.md#savingsaccountapi)
- [TokenApi](sublime.SublimeConnector.md#tokenapi)
- [VerificationApi](sublime.SublimeConnector.md#verificationapi)
- [YieldAndStrategyApi](sublime.SublimeConnector.md#yieldandstrategyapi)
- [getBalance](sublime.SublimeConnector.md#getbalance)
- [getChainId](sublime.SublimeConnector.md#getchainid)
- [waitForTransaction](sublime.SublimeConnector.md#waitfortransaction)

## Constructors

### constructor

• **new SublimeConnector**(`provider`, `signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

<<<<<<< HEAD
[sublime.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L27)
=======
[sublime.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L27)
>>>>>>> main

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L24)
=======
[sublime.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L24)
>>>>>>> main

___

### provider

• `Private` **provider**: `Provider`

#### Defined in

<<<<<<< HEAD
[sublime.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L22)
=======
[sublime.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L22)
>>>>>>> main

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

<<<<<<< HEAD
[sublime.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L23)
=======
[sublime.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L23)
>>>>>>> main

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L25)
=======
[sublime.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L25)
>>>>>>> main

## Methods

### Address

▸ **Address**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The current address of the signer

#### Defined in

<<<<<<< HEAD
[sublime.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L50)
=======
[sublime.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L50)
>>>>>>> main

___

### CreditLinesApi

▸ **CreditLinesApi**(): [`CreditLineApi`](api_creditLines.CreditLineApi.md)

#### Returns

[`CreditLineApi`](api_creditLines.CreditLineApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L38)
=======
[sublime.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L38)
>>>>>>> main

___

### ExtensionApi

▸ **ExtensionApi**(): [`ExtensionApi`](api_extension.ExtensionApi.md)

#### Returns

[`ExtensionApi`](api_extension.ExtensionApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L54)
=======
[sublime.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L54)
>>>>>>> main

___

### PoolApi

▸ **PoolApi**(): [`PoolApi`](api_pool.PoolApi.md)

#### Returns

[`PoolApi`](api_pool.PoolApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L34)
=======
[sublime.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L34)
>>>>>>> main

___

### PriceOracleApi

▸ **PriceOracleApi**(): [`PriceOracleApi`](api_priceOracle.PriceOracleApi.md)

#### Returns

[`PriceOracleApi`](api_priceOracle.PriceOracleApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L74)
=======
[sublime.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L74)
>>>>>>> main

___

### RepaymentApi

▸ **RepaymentApi**(): [`RepaymentApi`](api_repayments.RepaymentApi.md)

#### Returns

[`RepaymentApi`](api_repayments.RepaymentApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L58)
=======
[sublime.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L58)
>>>>>>> main

___

### SavingsAccountApi

▸ **SavingsAccountApi**(): [`SavingsAccountApi`](api_savingsAccount.SavingsAccountApi.md)

#### Returns

[`SavingsAccountApi`](api_savingsAccount.SavingsAccountApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L42)
=======
[sublime.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L42)
>>>>>>> main

___

### TokenApi

▸ **TokenApi**(`tokenAddress`): [`TokenApi`](api_tokenApi.TokenApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

[`TokenApi`](api_tokenApi.TokenApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L70)
=======
[sublime.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L70)
>>>>>>> main

___

### VerificationApi

▸ **VerificationApi**(): [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Returns

[`VerificationAPI`](api_verification.VerificationAPI.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L62)
=======
[sublime.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L62)
>>>>>>> main

___

### YieldAndStrategyApi

▸ **YieldAndStrategyApi**(): [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Returns

[`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

<<<<<<< HEAD
[sublime.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L66)
=======
[sublime.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L66)
>>>>>>> main

___

### getBalance

▸ **getBalance**(`address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

balance in ethers (decimals included)

#### Defined in

<<<<<<< HEAD
[sublime.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L87)
=======
[sublime.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L87)
>>>>>>> main

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

<<<<<<< HEAD
[sublime.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L78)
=======
[sublime.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L78)
>>>>>>> main

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

transaction receipt after waiting for the specified number oif blocks

#### Defined in

<<<<<<< HEAD
[sublime.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/sublime.ts#L99)
=======
[sublime.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/sublime.ts#L99)
>>>>>>> main
