[sublime-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SublimeSdk

# Class: SublimeSdk

[index](../modules/index.md).SublimeSdk

## Table of contents

### Constructors

- [constructor](index.SublimeSdk.md#constructor)

### Properties

- [sublimeConnector](index.SublimeSdk.md#sublimeconnector)
- [sublimeSubgraph](index.SublimeSdk.md#sublimesubgraph)

### Methods

- [Connector](index.SublimeSdk.md#connector)
- [Subgraph](index.SublimeSdk.md#subgraph)
- [types](index.SublimeSdk.md#types)

## Constructors

### constructor

• **new SublimeSdk**(`provider`, `signer`, `subgraphUrl`, `priceSubgraphUrl`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `signer` | `Signer` |
| `subgraphUrl` | `string` |
| `priceSubgraphUrl` | `string` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/index.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/index.ts#L18)

## Properties

### sublimeConnector

• `Private` **sublimeConnector**: [`SublimeConnector`](sublime.SublimeConnector.md)

#### Defined in

[src/index.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/index.ts#L15)

___

### sublimeSubgraph

• `Private` **sublimeSubgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

[src/index.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/index.ts#L16)

## Methods

### Connector

▸ **Connector**(): [`SublimeConnector`](sublime.SublimeConnector.md)

#### Returns

[`SublimeConnector`](sublime.SublimeConnector.md)

Instance of SublimeConnector

#### Defined in

[src/index.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/index.ts#L25)

___

### Subgraph

▸ **Subgraph**(): [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Returns

[`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

Instance of SublimeSubgraph

#### Defined in

[src/index.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/index.ts#L30)

___

### types

▸ `Static` **types**(): `any`

#### Returns

`any`

types used in the SDK

#### Defined in

[src/index.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/index.ts#L37)
