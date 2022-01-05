[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/creditLines](../modules/api_creditLines.md) / CreditLineApi

# Class: CreditLineApi

[api/creditLines](../modules/api_creditLines.md).CreditLineApi

## Table of contents

### Constructors

- [constructor](api_creditLines.CreditLineApi.md#constructor)

### Properties

- [config](api_creditLines.CreditLineApi.md#config)
- [creditLineContract](api_creditLines.CreditLineApi.md#creditlinecontract)
- [tokenManager](api_creditLines.CreditLineApi.md#tokenmanager)

### Methods

- [acceptCreditLine](api_creditLines.CreditLineApi.md#acceptcreditline)
- [borrowFromCreditLine](api_creditLines.CreditLineApi.md#borrowfromcreditline)
- [calculateBorrowableAmount](api_creditLines.CreditLineApi.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](api_creditLines.CreditLineApi.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](api_creditLines.CreditLineApi.md#calculatecurrentdebt)
- [calculateInterestAccrued](api_creditLines.CreditLineApi.md#calculateinterestaccrued)
- [calculateTotalCollateralTokens](api_creditLines.CreditLineApi.md#calculatetotalcollateraltokens)
- [closeCreditLine](api_creditLines.CreditLineApi.md#closecreditline)
- [depositCollateral](api_creditLines.CreditLineApi.md#depositcollateral)
- [liquidateCreditLine](api_creditLines.CreditLineApi.md#liquidatecreditline)
- [repayCreditLine](api_creditLines.CreditLineApi.md#repaycreditline)
- [requestCreditLineToBorrower](api_creditLines.CreditLineApi.md#requestcreditlinetoborrower)
- [requestCreditLineToLender](api_creditLines.CreditLineApi.md#requestcreditlinetolender)
- [withdrawCollateralFromCreditLine](api_creditLines.CreditLineApi.md#withdrawcollateralfromcreditline)
- [withdrawableCollateral](api_creditLines.CreditLineApi.md#withdrawablecollateral)

## Constructors

### constructor

• **new CreditLineApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[api/creditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L21)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/creditLines.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L19)

___

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

#### Defined in

[api/creditLines.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L17)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/creditLines.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L18)

## Methods

### acceptCreditLine

▸ **acceptCreditLine**(`creditLine`): `Promise`<`ContractTransaction`\>

**`description`** Accpeting a credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `BigNumberish` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L100)

___

### borrowFromCreditLine

▸ **borrowFromCreditLine**(`creditLineNumber`, `amount`): `Promise`<`ContractTransaction`\>

**`description`** Borrow tokens from credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L264)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calculate the total amount that can be borrowed from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

borrowable amount in borrow tokens (easy readable)

#### Defined in

[api/creditLines.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L137)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calcualte the current collateral ratio of a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

collateral ratio (easy readable)

#### Defined in

[api/creditLines.ts:151](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L151)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calcualte the total debt for a credit line till now

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

debt in borrow tokens (easy readable)

#### Defined in

[api/creditLines.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L123)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calculated the total accrued till now for a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

debt in borrow tokens (easy readable)

#### Defined in

[api/creditLines.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L109)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calculate the total collateral tokens held against a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

collateral tokens number (easy readable)

#### Defined in

[api/creditLines.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L161)

___

### closeCreditLine

▸ **closeCreditLine**(`creditLineNumber`): `Promise`<`ContractTransaction`\>

**`description`** Close a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:311](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L311)

___

### depositCollateral

▸ **depositCollateral**(`creditLineNumber`, `amount`, `strategy`, `fromSavingsAccount`): `Promise`<`ContractTransaction`\>

**`description`** Deposit Collateral to a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `fromSavingsAccount` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:221](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L221)

___

### liquidateCreditLine

▸ **liquidateCreditLine**(`creditLineNumber`, `toSavingsAccount?`): `Promise`<`ContractTransaction`\>

**`description`** Liquidate a credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:321](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L321)

___

### repayCreditLine

▸ **repayCreditLine**(`creditLineNumber`, `amount`, `fromSavingsAccount`): `Promise`<`ContractTransaction`\>

**`description`** Repay the amount to credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `fromSavingsAccount` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L284)

___

### requestCreditLineToBorrower

▸ **requestCreditLineToBorrower**(`request`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[api/creditLines.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L66)

___

### requestCreditLineToLender

▸ **requestCreditLineToLender**(`request`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[api/creditLines.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L32)

___

### withdrawCollateralFromCreditLine

▸ **withdrawCollateralFromCreditLine**(`creditLineNumber`, `amount`, `toSavingsAccount?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraws the collateral from the credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `amount` | `string` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L192)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(`creditLineNumber`): `Promise`<`string`\>

**`description`** Calculate the amount the collateral that can be withdrawn from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

collateral tokens (easy readable)

#### Defined in

[api/creditLines.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/b302b75/src/api/creditLines.ts#L175)
