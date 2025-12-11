[@ue-too/ecs](../globals.md) / SystemManager

# Class: SystemManager

Defined in: index.d.ts:46

## Constructors

### Constructor

> **new SystemManager**(): `SystemManager`

#### Returns

`SystemManager`

## Methods

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: index.d.ts:50

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### entitySignatureChanged()

> **entitySignatureChanged**(`entity`, `signature`): `void`

Defined in: index.d.ts:51

#### Parameters

##### entity

`number`

##### signature

`number`

#### Returns

`void`

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

Defined in: index.d.ts:48

#### Parameters

##### systemName

`string`

##### system

[`System`](../interfaces/System.md)

#### Returns

`void`

***

### setSignature()

> **setSignature**(`systemName`, `signature`): `void`

Defined in: index.d.ts:49

#### Parameters

##### systemName

`string`

##### signature

`number`

#### Returns

`void`
