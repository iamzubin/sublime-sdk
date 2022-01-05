[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/yieldAndStrategy](../modules/api_yieldAndStrategy.md) / YieldAndStrategyApi

# Class: YieldAndStrategyApi

[api/yieldAndStrategy](../modules/api_yieldAndStrategy.md).YieldAndStrategyApi

## Table of contents

### Constructors

- [constructor](api_yieldAndStrategy.YieldAndStrategyApi.md#constructor)

### Properties

- [config](api_yieldAndStrategy.YieldAndStrategyApi.md#config)
- [signer](api_yieldAndStrategy.YieldAndStrategyApi.md#signer)
- [tokenManager](api_yieldAndStrategy.YieldAndStrategyApi.md#tokenmanager)

### Methods

- [getSharesForTokens](api_yieldAndStrategy.YieldAndStrategyApi.md#getsharesfortokens)
- [getStrategies](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategies)
- [getStrategy](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategy)
- [getStrategyAddress](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategyaddress)
- [getTokensForShares](api_yieldAndStrategy.YieldAndStrategyApi.md#gettokensforshares)

## Constructors

### constructor

• **new YieldAndStrategyApi**(`signer`, `config`, `tokenManger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManger` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L26)
=======
[api/yieldAndStrategy.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L26)
>>>>>>> main

## Properties

### config

• **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L23)
=======
[api/yieldAndStrategy.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L23)
>>>>>>> main

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L22)
=======
[api/yieldAndStrategy.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L22)
>>>>>>> main

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L24)
=======
[api/yieldAndStrategy.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L24)
>>>>>>> main

## Methods

### getSharesForTokens

▸ **getSharesForTokens**(`yieldAddress`, `asset`, `amount`): `Promise`<`string`\>

**`description`** returns the number shares that will be generated for given number of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldAddress` | `string` |
| `asset` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L77)
=======
[api/yieldAndStrategy.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L77)
>>>>>>> main

___

### getStrategies

▸ **getStrategies**(): [`Strategy`](../interfaces/types_Types.Strategy.md)[]

**`description`** returns strategies supported sublime-sdk

#### Returns

[`Strategy`](../interfaces/types_Types.Strategy.md)[]

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L102)
=======
[api/yieldAndStrategy.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L102)
>>>>>>> main

___

### getStrategy

▸ **getStrategy**(`address`): [`StrategyType`](../enums/types_Types.StrategyType.md)

**`description`** Get Strategy name from given address,

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`StrategyType`](../enums/types_Types.StrategyType.md)

null if invalid strategy address is given in input

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L135)
=======
[api/yieldAndStrategy.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L135)
>>>>>>> main

___

### getStrategyAddress

▸ **getStrategyAddress**(`strategy`): `string`

**`description`** Get Strategy address from name

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`string`

null if invalid strategy name is given

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L120)
=======
[api/yieldAndStrategy.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L120)
>>>>>>> main

___

### getTokensForShares

▸ **getTokensForShares**(`yieldAddress`, `asset`, `shares`, `sharesInLowestUnits?`): `Promise`<`BigNumber`\>

**`description`** Returns the number of tokens that will be redeemed for given number of shares

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldAddress` | `string` |
| `asset` | `string` |
| `shares` | `BigNumber` |
| `sharesInLowestUnits?` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

<<<<<<< HEAD
[api/yieldAndStrategy.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/yieldAndStrategy.ts#L40)
=======
[api/yieldAndStrategy.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/yieldAndStrategy.ts#L40)
>>>>>>> main
