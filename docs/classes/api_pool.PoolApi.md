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

[api/pool.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L28)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/pool.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L23)

___

### poolFactory

• `Private` **poolFactory**: `PoolFactory`

#### Defined in

[api/pool.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L26)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/pool.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L22)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/pool.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L24)

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

[api/pool.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L192)

___

### createPool

▸ **createPool**(`params`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PoolGenerateParams`](../interfaces/types_poolGenerateParam.PoolGenerateParams.md) |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L35)

___

### depositCollateral

▸ **depositCollateral**(`poolContract`, `amount`, `transferFromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |
| `transferFromSavingsAccount` | `boolean` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:101](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L101)

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

[api/pool.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L97)

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

[api/pool.ts:208](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L208)

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

[api/pool.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L136)

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

[api/pool.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L202)

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

[api/pool.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L197)

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

[api/pool.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L230)

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

[api/pool.ts:220](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L220)

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

[api/pool.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L165)

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

[api/pool.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L178)

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

[api/pool.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L125)

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
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L153)

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
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/pool.ts#L142)
