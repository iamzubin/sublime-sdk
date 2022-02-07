[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/savingsAccount](../modules/api_savingsAccount.md) / SavingsAccountApi

# Class: SavingsAccountApi

[api/savingsAccount](../modules/api_savingsAccount.md).SavingsAccountApi

## Table of contents

### Constructors

- [constructor](api_savingsAccount.SavingsAccountApi.md#constructor)

### Properties

- [config](api_savingsAccount.SavingsAccountApi.md#config)
- [savingsAccount](api_savingsAccount.SavingsAccountApi.md#savingsaccount)
- [signer](api_savingsAccount.SavingsAccountApi.md#signer)
- [tokenManager](api_savingsAccount.SavingsAccountApi.md#tokenmanager)

### Methods

- [approve](api_savingsAccount.SavingsAccountApi.md#approve)
- [approveTokenForCreditLines](api_savingsAccount.SavingsAccountApi.md#approvetokenforcreditlines)
- [approveTokenForSavingsAccountDeposit](api_savingsAccount.SavingsAccountApi.md#approvetokenforsavingsaccountdeposit)
- [decreaseAllowance](api_savingsAccount.SavingsAccountApi.md#decreaseallowance)
- [deposit](api_savingsAccount.SavingsAccountApi.md#deposit)
- [getLiquidityTokenOfAssetForStrategy](api_savingsAccount.SavingsAccountApi.md#getliquiditytokenofassetforstrategy)
- [getShares](api_savingsAccount.SavingsAccountApi.md#getshares)
- [getStrategyAddress](api_savingsAccount.SavingsAccountApi.md#getstrategyaddress)
- [getTotalTokens](api_savingsAccount.SavingsAccountApi.md#gettotaltokens)
- [increaseAllowance](api_savingsAccount.SavingsAccountApi.md#increaseallowance)
- [switchStrategy](api_savingsAccount.SavingsAccountApi.md#switchstrategy)
- [transfer](api_savingsAccount.SavingsAccountApi.md#transfer)
- [transferFrom](api_savingsAccount.SavingsAccountApi.md#transferfrom)
- [withdraw](api_savingsAccount.SavingsAccountApi.md#withdraw)
- [withdrawAll](api_savingsAccount.SavingsAccountApi.md#withdrawall)
- [withdrawFrom](api_savingsAccount.SavingsAccountApi.md#withdrawfrom)

## Constructors

### constructor

• **new SavingsAccountApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | `any` |

#### Defined in

[api/savingsAccount.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L26)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/savingsAccount.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L23)

___

### savingsAccount

• `Private` **savingsAccount**: `SavingsAccount`

#### Defined in

[api/savingsAccount.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L22)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/savingsAccount.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L21)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/savingsAccount.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L24)

## Methods

### approve

▸ **approve**(`amount`, `token`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in the savings to be used to other address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` |  |
| `token` | `string` |  |
| `to` | `string` | : Address to which you want to approve |
| `options?` | `Overrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L228)

___

### approveTokenForCreditLines

▸ **approveTokenForCreditLines**(`token`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`@deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/savingsAccount.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L288)

___

### approveTokenForSavingsAccountDeposit

▸ **approveTokenForSavingsAccountDeposit**(`amount`, `asset`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in your wallet for depositing to a strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L40)

___

### decreaseAllowance

▸ **decreaseAllowance**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L268)

___

### deposit

▸ **deposit**(`amount`, `asset`, `strategy`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description:`** Deposit amount to strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L70)

___

### getLiquidityTokenOfAssetForStrategy

▸ **getLiquidityTokenOfAssetForStrategy**(`asset`, `strategy`): `Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

**`description`** Get the liquidity token for a given tokenb

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

Asset in detail

#### Defined in

[api/savingsAccount.ts:415](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L415)

___

### getShares

▸ **getShares**(`user`, `asset`, `strategy`): `Promise`<`string`\>

**`description`** Fet the specific liquidity shares in the savings account for a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<`string`\>

easy read number in string

#### Defined in

[api/savingsAccount.ts:397](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L397)

___

### getStrategyAddress

▸ `Private` **getStrategyAddress**(`strategy`): `string`

**`description`** Returns the contract address of a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`string`

#### Defined in

[api/savingsAccount.ts:433](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L433)

___

### getTotalTokens

▸ **getTotalTokens**(`user`, `asset`): `Promise`<`string`\>

**`description`** Get specific token asset locked in savings account. For ex; if asset=dai_address,
then call returns the amount of DAI stored in the savings account for that user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |

#### Returns

`Promise`<`string`\>

easy read number in string

#### Defined in

[api/savingsAccount.ts:382](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L382)

___

### increaseAllowance

▸ **increaseAllowance**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L247)

___

### switchStrategy

▸ **switchStrategy**(`currentStrategy`, `newStrategy`, `asset`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Switch amount from one strategy to another

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `newStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `asset` | `string` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L104)

___

### transfer

▸ **transfer**(`amount`, `token`, `strategy`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from one address to another, but within the same strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:313](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L313)

___

### transferFrom

▸ **transferFrom**(`amount`, `token`, `strategy`, `from`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from "from" address to another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:347](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L347)

___

### withdraw

▸ **withdraw**(`amount`, `token`, `strategy`, `to`, `withdrawShares`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `withdrawShares` | `boolean` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L144)

___

### withdrawAll

▸ **withdrawAll**(`asset`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw a particular tokens from all strategies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | / token address |
| `options?` | `Overrides` | - |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L217)

___

### withdrawFrom

▸ **withdrawFrom**(`amount`, `token`, `strategy`, `from`, `to`, `withdrawShares`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from another address i.e "from" address here

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `withdrawShares` | `boolean` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/savingsAccount.ts#L182)
