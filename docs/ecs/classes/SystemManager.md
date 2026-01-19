[@ue-too/ecs](../globals.md) / SystemManager

# Class: SystemManager

Defined in: [index.ts:1068](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L1068)

Manages system registration and entity-system matching.

## Remarks

The SystemManager handles:
- Registering systems with their component signature requirements
- Maintaining the set of entities that match each system's signature
- Automatically adding/removing entities from systems when signatures change
- Cleaning up system entity sets when entities are destroyed

When an entity's component signature changes (components added/removed),
the SystemManager checks all registered systems and updates their entity sets.
An entity is added to a system's set if its signature contains all components
required by the system's signature.

## Constructors

### Constructor

> **new SystemManager**(): `SystemManager`

#### Returns

`SystemManager`

## Methods

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: [index.ts:1092](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L1092)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### entitySignatureChanged()

> **entitySignatureChanged**(`entity`, `signature`): `void`

Defined in: [index.ts:1098](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L1098)

#### Parameters

##### entity

`number`

##### signature

`number`

#### Returns

`void`

***

### getSystem()

> **getSystem**\<`T`\>(`systemName`): `T` \| `null`

Defined in: [index.ts:1109](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L1109)

#### Type Parameters

##### T

`T` *extends* [`System`](../interfaces/System.md)

#### Parameters

##### systemName

`symbol`

#### Returns

`T` \| `null`

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

Defined in: [index.ts:1071](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L1071)

#### Parameters

##### systemName

`symbol`

##### system

[`System`](../interfaces/System.md)

#### Returns

`void`

***

### setSignature()

> **setSignature**(`systemName`, `signature`): `void`

Defined in: [index.ts:1079](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L1079)

#### Parameters

##### systemName

`symbol`

##### signature

`number`

#### Returns

`void`
