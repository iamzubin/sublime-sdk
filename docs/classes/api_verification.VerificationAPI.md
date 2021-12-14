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

[api/verification.ts:15](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L15)

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

#### Defined in

[api/verification.ts:13](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L13)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/verification.ts:11](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L11)

___

### verification

• `Private` **verification**: `Verification`

#### Defined in

[api/verification.ts:12](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L12)

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

[api/verification.ts:37](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L37)

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

[api/verification.ts:21](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L21)

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

[api/verification.ts:33](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L33)

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

[api/verification.ts:41](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L41)

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

[api/verification.ts:25](https://github.com/akshay111meher/sublime-sdk/blob/25ef7a9/src/api/verification.ts#L25)
