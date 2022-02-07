[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/tokenApi](../modules/api_tokenApi.md) / TokenApi

# Class: TokenApi

[api/tokenApi](../modules/api_tokenApi.md).TokenApi

## Table of contents

### Constructors

- [constructor](api_tokenApi.TokenApi.md#constructor)

### Properties

- [signer](api_tokenApi.TokenApi.md#signer)
- [tokenContract](api_tokenApi.TokenApi.md#tokencontract)
- [tokenManager](api_tokenApi.TokenApi.md#tokenmanager)

### Methods

- [IncreaseAllowance](api_tokenApi.TokenApi.md#increaseallowance)
- [\_getBalance](api_tokenApi.TokenApi.md#_getbalance)
- [allowance](api_tokenApi.TokenApi.md#allowance)
- [approve](api_tokenApi.TokenApi.md#approve)
- [getTokenBalance](api_tokenApi.TokenApi.md#gettokenbalance)
- [getUserTokenBalance](api_tokenApi.TokenApi.md#getusertokenbalance)

## Constructors

### constructor

• **new TokenApi**(`signer`, `tokenAddress`, `tokenManager`)

**`description`** if tokenAddress is any invalid token address, the APIs of the class object will fail

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/tokenApi.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L22)

## Properties

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/tokenApi.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L12)

___

### tokenContract

• `Private` **tokenContract**: `Token`

#### Defined in

[src/api/tokenApi.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L13)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/tokenApi.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L14)

## Methods

### IncreaseAllowance

▸ **IncreaseAllowance**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/tokenApi.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L34)

___

### \_getBalance

▸ `Private` **_getBalance**(`user`, `prettified`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `prettified` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L104)

___

### allowance

▸ **allowance**(`owner`, `spender`, `prettified?`): `Promise`<`string`\>

**`description`** Returns the allowance of spender by owner

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `owner` | `string` | `undefined` |
| `spender` | `string` | `undefined` |
| `prettified` | `boolean` | `false` |

#### Returns

`Promise`<`string`\>

number

#### Defined in

[src/api/tokenApi.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L73)

___

### approve

▸ **approve**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/tokenApi.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L53)

___

### getTokenBalance

▸ **getTokenBalance**(`prettified?`): `Promise`<`string`\>

**`description`** return the current signers token balance.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L90)

___

### getUserTokenBalance

▸ **getUserTokenBalance**(`user`, `prettified?`): `Promise`<`string`\>

**`description`** return any user token balance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `user` | `string` | `undefined` |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/tokenApi.ts#L100)
