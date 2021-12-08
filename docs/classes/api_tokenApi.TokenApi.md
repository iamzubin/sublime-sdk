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
- [allowance](api_tokenApi.TokenApi.md#allowance)
- [approve](api_tokenApi.TokenApi.md#approve)

## Constructors

### constructor

• **new TokenApi**(`signer`, `tokenAddress`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[api/tokenApi.ts:14](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L14)

## Properties

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/tokenApi.ts:11](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L11)

___

### tokenContract

• `Private` **tokenContract**: `Token`

#### Defined in

[api/tokenApi.ts:12](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L12)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/tokenApi.ts:13](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L13)

## Methods

### IncreaseAllowance

▸ **IncreaseAllowance**(`to`, `amount`): `Promise`<`ContractTransaction`\>

**`description`** Increase Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/tokenApi.ts:26](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L26)

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

[api/tokenApi.ts:61](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L61)

___

### approve

▸ **approve**(`to`, `amount`): `Promise`<`ContractTransaction`\>

**`description`** Approve Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/tokenApi.ts:43](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/tokenApi.ts#L43)
