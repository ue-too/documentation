[@ue-too/ecs](../globals.md) / ComponentManager

# Class: ComponentManager

Defined in: [index.ts:316](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L316)

Manages component registration and component data storage.

## Remarks

The ComponentManager handles:
- Registering new component types and assigning unique type IDs
- Creating ComponentArray storage for each component type
- Adding, removing, and querying component data for entities
- Cleaning up component data when entities are destroyed

Each component type gets a unique ID (0-31) and its own ComponentArray
for efficient storage and retrieval.

## Constructors

### Constructor

> **new ComponentManager**(): `ComponentManager`

#### Returns

`ComponentManager`

## Methods

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

Defined in: [index.ts:334](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L334)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`string`

##### entity

`number`

##### component

`T`

#### Returns

`void`

***

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: [index.ts:358](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L358)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

Defined in: [index.ts:350](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L350)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`string`

##### entity

`number`

#### Returns

`T` \| `null`

***

### getComponentType()

> **getComponentType**(`componentName`): `number` \| `null`

Defined in: [index.ts:330](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L330)

#### Parameters

##### componentName

`string`

#### Returns

`number` \| `null`

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

Defined in: [index.ts:321](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L321)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`string`

#### Returns

`void`

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

Defined in: [index.ts:342](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L342)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`string`

##### entity

`number`

#### Returns

`void`
