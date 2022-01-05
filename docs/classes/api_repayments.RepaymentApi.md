[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/repayments](../modules/api_repayments.md) / RepaymentApi

# Class: RepaymentApi

[api/repayments](../modules/api_repayments.md).RepaymentApi

## Table of contents

### Constructors

- [constructor](api_repayments.RepaymentApi.md#constructor)

### Properties

- [repayments](api_repayments.RepaymentApi.md#repayments)
- [signer](api_repayments.RepaymentApi.md#signer)
- [tokenManager](api_repayments.RepaymentApi.md#tokenmanager)

### Methods

- [didBorrowerDefault](api_repayments.RepaymentApi.md#didborrowerdefault)
- [getCurrentInstalmentInterval](api_repayments.RepaymentApi.md#getcurrentinstalmentinterval)
- [getCurrentLoanInterval](api_repayments.RepaymentApi.md#getcurrentloaninterval)
- [getGracePeriodFraction](api_repayments.RepaymentApi.md#getgraceperiodfraction)
- [getInstalmentsCompleted](api_repayments.RepaymentApi.md#getinstalmentscompleted)
- [getInterestDueTillInstalmentDeadline](api_repayments.RepaymentApi.md#getinterestduetillinstalmentdeadline)
- [getInterestLeft](api_repayments.RepaymentApi.md#getinterestleft)
- [getInterestOverdue](api_repayments.RepaymentApi.md#getinterestoverdue)
- [getInterestPerSecond](api_repayments.RepaymentApi.md#getinterestpersecond)
- [getNextInstalmentDeadline](api_repayments.RepaymentApi.md#getnextinstalmentdeadline)
- [getTotalRepaidAmount](api_repayments.RepaymentApi.md#gettotalrepaidamount)
- [isGracePenaltyApplicable](api_repayments.RepaymentApi.md#isgracepenaltyapplicable)
- [repayAmount](api_repayments.RepaymentApi.md#repayamount)
- [repayPrincipal](api_repayments.RepaymentApi.md#repayprincipal)

## Constructors

### constructor

• **new RepaymentApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L18)
=======
[api/repayments.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L18)
>>>>>>> main

## Properties

### repayments

• `Private` **repayments**: `Repayments`

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L15)
=======
[api/repayments.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L15)
>>>>>>> main

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L14)
=======
[api/repayments.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L14)
>>>>>>> main

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L16)
=======
[api/repayments.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L16)
>>>>>>> main

## Methods

### didBorrowerDefault

▸ **didBorrowerDefault**(`pool`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L63)
=======
[api/repayments.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L63)
>>>>>>> main

___

### getCurrentInstalmentInterval

▸ **getCurrentInstalmentInterval**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L51)
=======
[api/repayments.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L51)
>>>>>>> main

___

### getCurrentLoanInterval

▸ **getCurrentLoanInterval**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L55)
=======
[api/repayments.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L55)
>>>>>>> main

___

### getGracePeriodFraction

▸ **getGracePeriodFraction**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L111)
=======
[api/repayments.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L111)
>>>>>>> main

___

### getInstalmentsCompleted

▸ **getInstalmentsCompleted**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L34)
=======
[api/repayments.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L34)
>>>>>>> main

___

### getInterestDueTillInstalmentDeadline

▸ **getInterestDueTillInstalmentDeadline**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L38)
=======
[api/repayments.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L38)
>>>>>>> main

___

### getInterestLeft

▸ **getInterestLeft**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L67)
=======
[api/repayments.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L67)
>>>>>>> main

___

### getInterestOverdue

▸ **getInterestOverdue**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L76)
=======
[api/repayments.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L76)
>>>>>>> main

___

### getInterestPerSecond

▸ **getInterestPerSecond**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L25)
=======
[api/repayments.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L25)
>>>>>>> main

___

### getNextInstalmentDeadline

▸ **getNextInstalmentDeadline**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L47)
=======
[api/repayments.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L47)
>>>>>>> main

___

### getTotalRepaidAmount

▸ **getTotalRepaidAmount**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L102)
=======
[api/repayments.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L102)
>>>>>>> main

___

### isGracePenaltyApplicable

▸ **isGracePenaltyApplicable**(`pool`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L59)
=======
[api/repayments.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L59)
>>>>>>> main

___

### repayAmount

▸ **repayAmount**(`pool`, `amount`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L85)
=======
[api/repayments.ts:85](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L85)
>>>>>>> main

___

### repayPrincipal

▸ **repayPrincipal**(`pool`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

<<<<<<< HEAD
[api/repayments.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/repayments.ts#L98)
=======
[api/repayments.ts:98](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/repayments.ts#L98)
>>>>>>> main
