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

[api/creditLines.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L23)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/creditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L21)

___

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

#### Defined in

[api/creditLines.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L19)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/creditLines.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L20)

## Methods

### acceptCreditLine

▸ **acceptCreditLine**(`creditLine`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Accpeting a credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `BigNumberish` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L104)

___

### borrowFromCreditLine

▸ **borrowFromCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Borrow tokens from credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L267)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the total amount that can be borrowed from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

borrowable amount in borrow tokens (easy readable)

#### Defined in

[api/creditLines.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L141)

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

[api/creditLines.ts:155](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L155)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calcualte the total debt for a credit line till now

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

debt in borrow tokens

#### Defined in

[api/creditLines.ts:127](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L127)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculated the total accrued till now for a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

debt in borrow tokens (easy readable)

#### Defined in

[api/creditLines.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L113)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the total collateral tokens held against a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral tokens number (easy readable)

#### Defined in

[api/creditLines.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L165)

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

[api/creditLines.ts:317](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L317)

___

### depositCollateral

▸ **depositCollateral**(`creditLineNumber`, `amount`, `strategy`, `fromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Deposit Collateral to a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `fromSavingsAccount` | `boolean` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:228](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L228)

___

### liquidateCreditLine

▸ **liquidateCreditLine**(`creditLineNumber`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Liquidate a credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |
| `options?` | `Overrides` | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:327](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L327)

___

### repayCreditLine

▸ **repayCreditLine**(`creditLineNumber`, `amount`, `fromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Repay the amount to credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `fromSavingsAccount` | `boolean` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:289](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L289)

___

### requestCreditLineToBorrower

▸ **requestCreditLineToBorrower**(`request`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[api/creditLines.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L69)

___

### requestCreditLineToLender

▸ **requestCreditLineToLender**(`request`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[api/creditLines.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L34)

___

### withdrawCollateralFromCreditLine

▸ **withdrawCollateralFromCreditLine**(`creditLineNumber`, `amount`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraws the collateral from the credit line

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |  |
| `amount` | `string` | `undefined` |  |
| `toSavingsAccount` | `boolean` | `false` | - |
| `options?` | `Overrides` | `undefined` | transaction options directly transferred from credit line to user's savings account |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/creditLines.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L197)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the amount the collateral that can be withdrawn from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral tokens (easy readable)

#### Defined in

[api/creditLines.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/creditLines.ts#L179)
