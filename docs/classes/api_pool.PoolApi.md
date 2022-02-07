[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/pool](../modules/api_pool.md) / PoolApi

# Class: PoolApi

[api/pool](../modules/api_pool.md).PoolApi

## Table of contents

### Constructors

- [constructor](api_pool.PoolApi.md#constructor)

### Properties

- [config](api_pool.PoolApi.md#config)
- [poolFactory](api_pool.PoolApi.md#poolfactory)
- [signer](api_pool.PoolApi.md#signer)
- [tokenManager](api_pool.PoolApi.md#tokenmanager)

### Methods

- [calculateCurrentPeriod](api_pool.PoolApi.md#calculatecurrentperiod)
- [createPool](api_pool.PoolApi.md#createpool)
- [depositCollateral](api_pool.PoolApi.md#depositcollateral)
- [generatePoolAddress](api_pool.PoolApi.md#generatepooladdress)
- [getBalanceDetails](api_pool.PoolApi.md#getbalancedetails)
- [getCurrentCollateralRatio](api_pool.PoolApi.md#getcurrentcollateralratio)
- [getLoanStatus](api_pool.PoolApi.md#getloanstatus)
- [getMarginCallEndTime](api_pool.PoolApi.md#getmargincallendtime)
- [getPoolInfo](api_pool.PoolApi.md#getpoolinfo)
- [getTotalSupply](api_pool.PoolApi.md#gettotalsupply)
- [interestPerPeriod](api_pool.PoolApi.md#interestperperiod)
- [interestPerSecond](api_pool.PoolApi.md#interestpersecond)
- [interestTillNow](api_pool.PoolApi.md#interesttillnow)
- [liquidateLender](api_pool.PoolApi.md#liquidatelender)
- [liquidatePool](api_pool.PoolApi.md#liquidatepool)

## Constructors

### constructor

• **new PoolApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/pool.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L30)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/pool.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L25)

___

### poolFactory

• `Private` **poolFactory**: `PoolFactory`

#### Defined in

[src/api/pool.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L28)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/pool.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L24)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/pool.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L26)

## Methods

### calculateCurrentPeriod

▸ **calculateCurrentPeriod**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:194](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L194)

___

### createPool

▸ **createPool**(`params`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PoolGenerateParams`](../interfaces/types_poolGenerateParam.PoolGenerateParams.md) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L37)

___

### depositCollateral

▸ **depositCollateral**(`poolContract`, `amount`, `transferFromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |
| `transferFromSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L103)

___

### generatePoolAddress

▸ **generatePoolAddress**(`creator`, `salt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `salt` | `BytesLike` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L99)

___

### getBalanceDetails

▸ **getBalanceDetails**(`poolContract`, `lender`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L210)

___

### getCurrentCollateralRatio

▸ **getCurrentCollateralRatio**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L138)

___

### getLoanStatus

▸ **getLoanStatus**(`poolContract`): `Promise`<[`LoanStatus`](../enums/types_poolGenerateParam.LoanStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<[`LoanStatus`](../enums/types_poolGenerateParam.LoanStatus.md)\>

#### Defined in

[src/api/pool.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L204)

___

### getMarginCallEndTime

▸ **getMarginCallEndTime**(`poolContract`, `lender`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L199)

___

### getPoolInfo

▸ **getPoolInfo**(`poolContract`): `Promise`<[`PoolInfo`](../interfaces/types_poolInfo.PoolInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<[`PoolInfo`](../interfaces/types_poolInfo.PoolInfo.md)\>

#### Defined in

[src/api/pool.ts:232](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L232)

___

### getTotalSupply

▸ **getTotalSupply**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L222)

___

### interestPerPeriod

▸ **interestPerPeriod**(`poolContract`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L167)

___

### interestPerSecond

▸ **interestPerSecond**(`poolContract`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:180](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L180)

___

### interestTillNow

▸ **interestTillNow**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L127)

___

### liquidateLender

▸ **liquidateLender**(`poolContract`, `lender`, `fromSavingsAccount`, `toSavingsAccount`, `recieveLiquidityShare`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |
| `fromSavingsAccount` | `boolean` |
| `toSavingsAccount` | `boolean` |
| `recieveLiquidityShare` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L155)

___

### liquidatePool

▸ **liquidatePool**(`poolContract`, `fromSavingsAccount`, `toSavingsAccount`, `recieveLiquidityShare`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `fromSavingsAccount` | `boolean` |
| `toSavingsAccount` | `boolean` |
| `recieveLiquidityShare` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/a849f6d/src/api/pool.ts#L144)
