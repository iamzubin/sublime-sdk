[sublime-sdk](../README.md) / [Modules](../modules.md) / [tokenManager](../modules/tokenManager.md) / TokenManager

# Class: TokenManager

[tokenManager](../modules/tokenManager.md).TokenManager

**`description`** An token manager stores, retrieves and caches the data like token name, decimals, logos and prices.

## Table of contents

### Constructors

- [constructor](tokenManager.TokenManager.md#constructor)

### Properties

- [addressMapper](tokenManager.TokenManager.md#addressmapper)
- [decimals](tokenManager.TokenManager.md#decimals)
- [logoUrlTemplate](tokenManager.TokenManager.md#logourltemplate)
- [logos](tokenManager.TokenManager.md#logos)
- [names](tokenManager.TokenManager.md#names)
- [priceLastUpdatedAt](tokenManager.TokenManager.md#pricelastupdatedat)
- [priceRefreshInterval](tokenManager.TokenManager.md#pricerefreshinterval)
- [priceSubgraphUrl](tokenManager.TokenManager.md#pricesubgraphurl)
- [prices](tokenManager.TokenManager.md#prices)
- [signer](tokenManager.TokenManager.md#signer)

### Methods

- [getLogo](tokenManager.TokenManager.md#getlogo)
- [getPricePerAsset](tokenManager.TokenManager.md#getpriceperasset)
- [getTokenDecimals](tokenManager.TokenManager.md#gettokendecimals)
- [getTokenName](tokenManager.TokenManager.md#gettokenname)
- [updateAll](tokenManager.TokenManager.md#updateall)
- [updateLogo](tokenManager.TokenManager.md#updatelogo)
- [updatePricePerAsset](tokenManager.TokenManager.md#updatepriceperasset)
- [updateTokenDecimals](tokenManager.TokenManager.md#updatetokendecimals)
- [updateTokenName](tokenManager.TokenManager.md#updatetokenname)

## Constructors

### constructor

• **new TokenManager**(`signer`, `priceSubgraphUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `priceSubgraphUrl` | `string` |

#### Defined in

[tokenManager.ts:64](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L64)

## Properties

### addressMapper

• `Private` **addressMapper**: `Object` = `{}`

**`description`** used for mapping tokens logos of testnet

#### Defined in

[tokenManager.ts:42](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L42)

___

### decimals

• `Private` **decimals**: `Object` = `{}`

**`description`** caches number of decimals for a token address

#### Defined in

[tokenManager.ts:17](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L17)

___

### logoUrlTemplate

• `Private` **logoUrlTemplate**: `string` = `'https://tokens.1inch.io/ADDRESS.png'`

**`description`** Base path for logos

#### Defined in

[tokenManager.ts:47](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L47)

___

### logos

• `Private` **logos**: `Object` = `{}`

**`description`** caches the token logo

#### Defined in

[tokenManager.ts:37](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L37)

___

### names

• `Private` **names**: `Object` = `{}`

**`description`** caches name of token

#### Defined in

[tokenManager.ts:22](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L22)

___

### priceLastUpdatedAt

• `Private` **priceLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the token price was updated

#### Defined in

[tokenManager.ts:32](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L32)

___

### priceRefreshInterval

• `Private` **priceRefreshInterval**: `number` = `60000`

**`description`** interval at which prices are refreshed in the SDK

#### Defined in

[tokenManager.ts:57](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L57)

___

### priceSubgraphUrl

• `Private` **priceSubgraphUrl**: `string`

**`description`** subgraph URL that fetches prices

#### Defined in

[tokenManager.ts:52](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L52)

___

### prices

• `Private` **prices**: `Object` = `{}`

**`description`** cache the price of token, Updates every 1 min

#### Defined in

[tokenManager.ts:27](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L27)

___

### signer

• `Private` **signer**: `Signer`

**`description`** web3 signer

#### Defined in

[tokenManager.ts:62](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L62)

## Methods

### getLogo

▸ **getLogo**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

return url which renders the logo/pic of the token

#### Defined in

[tokenManager.ts:202](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L202)

___

### getPricePerAsset

▸ **getPricePerAsset**(`tokenAddress`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`BigNumber`\>

price of asset

#### Defined in

[tokenManager.ts:188](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L188)

___

### getTokenDecimals

▸ **getTokenDecimals**(`tokenAddress`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`number`

number of token decimals

#### Defined in

[tokenManager.ts:162](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L162)

___

### getTokenName

▸ **getTokenName**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

token name

#### Defined in

[tokenManager.ts:175](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L175)

___

### updateAll

▸ **updateAll**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates the token meta data

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tokenManager.ts:80](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L80)

___

### updateLogo

▸ **updateLogo**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token Logo

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tokenManager.ts:144](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L144)

___

### updatePricePerAsset

▸ **updatePricePerAsset**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token price

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tokenManager.ts:125](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L125)

___

### updateTokenDecimals

▸ **updateTokenDecimals**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updated the token decimals

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tokenManager.ts:93](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L93)

___

### updateTokenName

▸ **updateTokenName**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token name

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[tokenManager.ts:109](https://github.com/akshay111meher/sublime-sdk/blob/6aef92b/src/tokenManager.ts#L109)
