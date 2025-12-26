[@ue-too/ecs](../globals.md) / SystemManager

# Class: SystemManager

Defined in: [index.ts:428](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L428)

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

Defined in: [index.ts:452](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L452)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### entitySignatureChanged()

> **entitySignatureChanged**(`entity`, `signature`): `void`

Defined in: [index.ts:458](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L458)

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

Defined in: [index.ts:431](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L431)

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

Defined in: [index.ts:439](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L439)

#### Parameters

##### systemName

`string`

##### signature

`number`

#### Returns

`void`
