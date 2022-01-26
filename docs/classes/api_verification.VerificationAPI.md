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
- [registerSelfUsingAdminVerifier](api_verification.VerificationAPI.md#registerselfusingadminverifier)
- [unregisterSelfUsingAdminVerifier](api_verification.VerificationAPI.md#unregisterselfusingadminverifier)
- [updateSignerAddress](api_verification.VerificationAPI.md#updatesigneraddress)
- [updateVerification](api_verification.VerificationAPI.md#updateverification)

## Constructors

### constructor

• **new VerificationAPI**(`signer`, `config`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `Signer` | Signer |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) | SublimeConfig |

#### Defined in

[api/verification.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L24)

## Properties

### adminVerifier

• `Private` **adminVerifier**: `AdminVerifier`

#### Defined in

[api/verification.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L18)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/verification.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L16)

___

### verification

• `Private` **verification**: `Verification`

#### Defined in

[api/verification.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L17)

## Methods

### addVerifier

▸ **addVerifier**(`verifier?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract. (Default is the admin verifier) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/verification.ts:51](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L51)

___

### isUser

▸ **isUser**(`user`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | Address to check |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/verification.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L34)

___

### isVerifier

▸ **isVerifier**(`verifier`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/verification.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L43)

___

### registerMasterAddress

▸ **registerMasterAddress**(`_masterAddress`, `_isMasterLinked`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_masterAddress` | `string` | Master Address |
| `_isMasterLinked` | `boolean` | True if the master address is linked |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/verification.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L60)

___

### registerSelfUsingAdminVerifier

▸ **registerSelfUsingAdminVerifier**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_deadline`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_isMasterLinked` | `boolean` | True if the master address is linked |
| `_v` | `BigNumberish` | V component of the signature |
| `_r` | `BytesLike` | R component of the signature |
| `_s` | `BytesLike` | S component of the signature |
| `_twitterId` | `string` | Twitter ID of the user |
| `_deadline` | `BigNumberish` | Deadline for the registration |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/verification.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L73)

___

### unregisterSelfUsingAdminVerifier

▸ **unregisterSelfUsingAdminVerifier**(): `Promise`<`ContractTransaction`\>

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/verification.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L87)

___

### updateSignerAddress

▸ **updateSignerAddress**(`_signerAddress`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_signerAddress` | `string` | Address of the signer |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/verification.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L105)

___

### updateVerification

▸ **updateVerification**(`_verification`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_verification` | `string` | Address of the verification contract |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/verification.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/8d25170/src/api/verification.ts#L96)
