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
- [subgraph](tokenManager.TokenManager.md#subgraph)

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

[tokenManager.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L68)

## Properties

### addressMapper

• `Private` **addressMapper**: `Object` = `{}`

**`description`** used for mapping tokens logos of testnet

#### Defined in

[tokenManager.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L44)

___

### decimals

• `Private` **decimals**: `Object` = `{}`

**`description`** caches number of decimals for a token address

#### Defined in

[tokenManager.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L19)

___

### logoUrlTemplate

• `Private` **logoUrlTemplate**: `string` = `'https://tokens.1inch.io/ADDRESS.png'`

**`description`** Base path for logos

#### Defined in

[tokenManager.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L49)

___

### logos

• `Private` **logos**: `Object` = `{}`

**`description`** caches the token logo

#### Defined in

[tokenManager.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L39)

___

### names

• `Private` **names**: `Object` = `{}`

**`description`** caches name of token

#### Defined in

[tokenManager.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L24)

___

### priceLastUpdatedAt

• `Private` **priceLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the token price was updated

#### Defined in

[tokenManager.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L34)

___

### priceRefreshInterval

• `Private` **priceRefreshInterval**: `number` = `60000`

**`description`** interval at which prices are refreshed in the SDK

#### Defined in

[tokenManager.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L59)

___

### priceSubgraphUrl

• `Private` **priceSubgraphUrl**: `string`

**`description`** subgraph URL that fetches prices

#### Defined in

[tokenManager.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L54)

___

### prices

• `Private` **prices**: `Object` = `{}`

**`description`** cache the price of token, Updates every 1 min

#### Defined in

[tokenManager.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L29)

___

### signer

• `Private` **signer**: `Signer`

**`description`** web3 signer

#### Defined in

[tokenManager.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L64)

___

### subgraph

• `Private` **subgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

[tokenManager.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L66)

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

[tokenManager.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L206)

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

[tokenManager.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L192)

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

[tokenManager.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L166)

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

[tokenManager.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L179)

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

[tokenManager.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L84)

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

[tokenManager.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L148)

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

[tokenManager.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L129)

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

[tokenManager.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L97)

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

[tokenManager.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/e9ce839/src/tokenManager.ts#L113)
