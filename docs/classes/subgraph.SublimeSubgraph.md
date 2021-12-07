[sublime-sdk](../README.md) / [Modules](../modules.md) / [subgraph](../modules/subgraph.md) / SublimeSubgraph

# Class: SublimeSubgraph

[subgraph](../modules/subgraph.md).SublimeSubgraph

## Table of contents

### Constructors

- [constructor](subgraph.SublimeSubgraph.md#constructor)

### Properties

- [creditLineContract](subgraph.SublimeSubgraph.md#creditlinecontract)
- [signer](subgraph.SublimeSubgraph.md#signer)
- [subgraphUrl](subgraph.SublimeSubgraph.md#subgraphurl)
- [sublimeAddresses](subgraph.SublimeSubgraph.md#sublimeaddresses)
- [tokenManager](subgraph.SublimeSubgraph.md#tokenmanager)

### Methods

- [getAPR](subgraph.SublimeSubgraph.md#getapr)
- [getAllLendersOfPool](subgraph.SublimeSubgraph.md#getalllendersofpool)
- [getAllPoolsByPoolType](subgraph.SublimeSubgraph.md#getallpoolsbypooltype)
- [getAllowances](subgraph.SublimeSubgraph.md#getallowances)
- [getConfirmedCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph.SublimeSubgraph.md#getcreditline)
- [getCreditLineTimeline](subgraph.SublimeSubgraph.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph.SublimeSubgraph.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph.SublimeSubgraph.md#getdashboardoverview)
- [getPendingCreditLinesRequestedByBorrower](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph.SublimeSubgraph.md#getpool)
- [getPoolByBorrower](subgraph.SublimeSubgraph.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph.SublimeSubgraph.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph.SublimeSubgraph.md#getpoolbylender)
- [getPoolByLenderByType](subgraph.SublimeSubgraph.md#getpoolbylenderbytype)
- [getPools](subgraph.SublimeSubgraph.md#getpools)
- [getProfileOverview](subgraph.SublimeSubgraph.md#getprofileoverview)
- [getRandomInt](subgraph.SublimeSubgraph.md#getrandomint)
- [getSavingsAccountOverview](subgraph.SublimeSubgraph.md#getsavingsaccountoverview)
- [transformToCreditLine](subgraph.SublimeSubgraph.md#transformtocreditline)
- [transformToCreditLineOperations](subgraph.SublimeSubgraph.md#transformtocreditlineoperations)
- [transformToPoolDetail](subgraph.SublimeSubgraph.md#transformtopooldetail)
- [transformToSavingsAccountUserDetails](subgraph.SublimeSubgraph.md#transformtosavingsaccountuserdetails)

## Constructors

### constructor

• **new SublimeSubgraph**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[subgraph.ts:75](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L75)

## Properties

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

**`description`** instance of credit line contract

#### Defined in

[subgraph.ts:68](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L68)

___

### signer

• `Private` **signer**: `Signer`

**`description`** signer used to sign

#### Defined in

[subgraph.ts:58](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L58)

___

### subgraphUrl

• `Private` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Defined in

[subgraph.ts:53](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L53)

___

### sublimeAddresses

• `Private` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Defined in

[subgraph.ts:73](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L73)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Defined in

[subgraph.ts:63](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L63)

## Methods

### getAPR

▸ `Private` **getAPR**(`strategy`): `Promise`<`BigNumber`\>

**`@description`** calulcates the APR for a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[subgraph.ts:318](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L318)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(`poolAddress`): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolAddress` | `string` |

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Defined in

[subgraph.ts:154](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L154)

___

### getAllPoolsByPoolType

▸ **getAllPoolsByPoolType**(`poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolType` | `string` | (possible types of pools include: ACTIVE, CLOSED, REQUESTED, LIQUIDATED) |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of specific pool types

#### Defined in

[subgraph.ts:97](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L97)

___

### getAllowances

▸ **getAllowances**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[subgraph.ts:602](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L602)

___

### getConfirmedCreditLinesOfBorrower

▸ **getConfirmedCreditLinesOfBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `Number` |
| `skip` | `Number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:514](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L514)

___

### getConfirmedCreditLinesOfLender

▸ **getConfirmedCreditLinesOfLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `Number` |
| `skip` | `Number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:525](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L525)

___

### getCreditLine

▸ **getCreditLine**(`id`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)\>

**`description`** returns a detailed information of a single credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)\>

#### Defined in

[subgraph.ts:578](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L578)

___

### getCreditLineTimeline

▸ **getCreditLineTimeline**(`creditLine`): `Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

**`description`** returns the operations made on a credit line in time-wise order

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `string` |

#### Returns

`Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

#### Defined in

[subgraph.ts:592](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L592)

___

### getCreditLinesOverview

▸ **getCreditLinesOverview**(`address`): `Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

**`description`** Returns the credit lines overview of the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

#### Defined in

[subgraph.ts:480](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L480)

___

### getDashboardOverview

▸ **getDashboardOverview**(`address`): `Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

**`description`** Return the dashboard view type for a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

#### Defined in

[subgraph.ts:467](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L467)

___

### getPendingCreditLinesRequestedByBorrower

▸ **getPendingCreditLinesRequestedByBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of credit lines which have been requests by the borrower but not accpeted by any lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `Number` |
| `skip` | `Number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:547](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L547)

___

### getPendingCreditLinesRequestedToBorrower

▸ **getPendingCreditLinesRequestedToBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of poending credit lines which have requested to a borrower by all other lenders

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `Number` |
| `skip` | `Number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:569](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L569)

___

### getPendingCreditLinesRequestedToLender

▸ **getPendingCreditLinesRequestedToLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of poending credit lines which have requested to a lender by all other borrowers

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `Number` |
| `skip` | `Number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:558](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L558)

___

### getPendingCreditlinesRequestedByLender

▸ **getPendingCreditlinesRequestedByLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of credit lines which have been requested by the lender but not accepted by any borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `Number` |
| `skip` | `Number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:536](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L536)

___

### getPool

▸ **getPool**(`poolId`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)\>

pool data if the pool exists, else null

#### Defined in

[subgraph.ts:106](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L106)

___

### getPoolByBorrower

▸ **getPoolByBorrower**(`borrower`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pools for the corresponding borrower

#### Defined in

[subgraph.ts:116](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L116)

___

### getPoolByBorrowerByType

▸ **getPoolByBorrowerByType**(`borrower`, `poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `poolType` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool

#### Defined in

[subgraph.ts:145](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L145)

___

### getPoolByLender

▸ **getPoolByLender**(`lender`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool for the lender

#### Defined in

[subgraph.ts:125](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L125)

___

### getPoolByLenderByType

▸ **getPoolByLenderByType**(`lender`, `poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `poolType` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool

#### Defined in

[subgraph.ts:135](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L135)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Defined in

[subgraph.ts:87](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L87)

___

### getProfileOverview

▸ **getProfileOverview**(`address`): `Promise`<[`ProfileOverview`](../interfaces/types_Types.ProfileOverview.md)\>

**`description`** Return the profiel overview of the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`ProfileOverview`](../interfaces/types_Types.ProfileOverview.md)\>

#### Defined in

[subgraph.ts:493](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L493)

___

### getRandomInt

▸ `Private` **getRandomInt**(`max`): `number`

**`description`** Function to generate a random decimals in range (0, max)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`number`

#### Defined in

[subgraph.ts:632](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L632)

___

### getSavingsAccountOverview

▸ **getSavingsAccountOverview**(`address`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

**`description`** Returns savings account overview for a user address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Defined in

[subgraph.ts:456](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L456)

___

### transformToCreditLine

▸ `Private` **transformToCreditLine**(`data`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** transaform the data recevied from the subgraph to type

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Defined in

[subgraph.ts:188](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L188)

___

### transformToCreditLineOperations

▸ `Private` **transformToCreditLineOperations**(`cl`): `Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

**`description`** Transforms the data received from the subgraph into type

#### Parameters

| Name | Type |
| :------ | :------ |
| `cl` | `any` |

#### Returns

`Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

#### Defined in

[subgraph.ts:611](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L611)

___

### transformToPoolDetail

▸ `Private` **transformToPoolDetail**(`data`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

**`@description`** transforms the data received from the subgraph to pool detail

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Defined in

[subgraph.ts:268](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L268)

___

### transformToSavingsAccountUserDetails

▸ `Private` **transformToSavingsAccountUserDetails**(`address`, `data`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

**`description`** Tranforms the data received from the subgraph to type

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `data` | `any`[] |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Defined in

[subgraph.ts:339](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/subgraph.ts#L339)
