[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/verification](../modules/api_verification.md) / VerificationAPI

# Class: VerificationAPI

[api/verification](../modules/api_verification.md).VerificationAPI

## Table of contents

### Constructors

- [constructor](api_verification.VerificationAPI.md#constructor)

### Properties

- [adminVerifier](api_verification.VerificationAPI.md#adminverifier)
- [signer](api_verification.VerificationAPI.md#signer)
- [verification](api_verification.VerificationAPI.md#verification)

### Methods

- [addVerifier](api_verification.VerificationAPI.md#addverifier)
- [isUser](api_verification.VerificationAPI.md#isuser)
- [isVerifier](api_verification.VerificationAPI.md#isverifier)
- [registerMasterAddress](api_verification.VerificationAPI.md#registermasteraddress)
- [registerUserByAdminVerifier](api_verification.VerificationAPI.md#registeruserbyadminverifier)

## Constructors

### constructor

• **new VerificationAPI**(`signer`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

<<<<<<< HEAD
[api/verification.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L15)
=======
[api/verification.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L15)
>>>>>>> main

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

#### Defined in

<<<<<<< HEAD
[api/verification.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L13)
=======
[api/verification.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L13)
>>>>>>> main

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

<<<<<<< HEAD
[api/verification.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L11)
=======
[api/verification.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L11)
>>>>>>> main

___

### verification

• `Private` **verification**: `Verification`

#### Defined in

<<<<<<< HEAD
[api/verification.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L12)
=======
[api/verification.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L12)
>>>>>>> main

## Methods

### addVerifier

▸ **addVerifier**(`verifier?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `verifier` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

<<<<<<< HEAD
[api/verification.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L37)
=======
[api/verification.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L37)
>>>>>>> main

___

### isUser

▸ **isUser**(`user`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD
[api/verification.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L21)
=======
[api/verification.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L21)
>>>>>>> main

___

### isVerifier

▸ **isVerifier**(`verifier?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `verifier` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD
[api/verification.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L33)
=======
[api/verification.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L33)
>>>>>>> main

___

### registerMasterAddress

▸ **registerMasterAddress**(`_masterAddress`, `_isMasterLinked`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_masterAddress` | `string` |
| `_isMasterLinked` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

<<<<<<< HEAD
[api/verification.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L41)
=======
[api/verification.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L41)
>>>>>>> main

___

### registerUserByAdminVerifier

▸ **registerUserByAdminVerifier**(`address`, `isMasterLinked?`, `metaData?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `isMasterLinked` | `boolean` | `false` |
| `metaData` | `string` | `'added from sdk'` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

<<<<<<< HEAD
[api/verification.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/verification.ts#L25)
=======
[api/verification.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/api/verification.ts#L25)
>>>>>>> main
