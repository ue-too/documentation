[@ue-too/ecs](../globals.md) / Coordinator

# Class: Coordinator

Defined in: [index.ts:512](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L512)

Main ECS coordinator that manages entities, components, and systems.

## Remarks

The Coordinator is the central API for working with the ECS. It provides a unified
interface for:
- Creating and destroying entities
- Registering and managing components
- Registering and configuring systems
- Querying component data

The Coordinator automatically keeps entity signatures up-to-date and notifies
systems when entities match their component requirements.

## Example

Complete ECS workflow
```typescript
const ecs = new Coordinator();

// Setup
ecs.registerComponent<Position>('Position');
ecs.registerComponent<Velocity>('Velocity');

// Create entity
const entity = ecs.createEntity();
ecs.addComponentToEntity('Position', entity, { x: 0, y: 0 });
ecs.addComponentToEntity('Velocity', entity, { x: 1, y: 0 });

// Update
const pos = ecs.getComponentFromEntity<Position>('Position', entity);
const vel = ecs.getComponentFromEntity<Velocity>('Velocity', entity);
if (pos && vel) {
  pos.x += vel.x;
  pos.y += vel.y;
}

// Cleanup
ecs.destroyEntity(entity);
```

## Constructors

### Constructor

> **new Coordinator**(): `Coordinator`

Defined in: [index.ts:517](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L517)

#### Returns

`Coordinator`

## Methods

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

Defined in: [index.ts:537](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L537)

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

### createEntity()

> **createEntity**(): `number`

Defined in: [index.ts:523](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L523)

#### Returns

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

Defined in: [index.ts:527](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L527)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

Defined in: [index.ts:568](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L568)

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

Defined in: [index.ts:572](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L572)

#### Parameters

##### componentName

`string`

#### Returns

`number` \| `null`

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

Defined in: [index.ts:533](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L533)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`string`

#### Returns

`void`

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

Defined in: [index.ts:576](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L576)

#### Parameters

##### systemName

`string`

##### system

[`System`](../interfaces/System.md)

#### Returns

`void`

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

Defined in: [index.ts:553](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L553)

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

***

### setSystemSignature()

> **setSystemSignature**(`systemName`, `signature`): `void`

Defined in: [index.ts:580](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/ecs/src/index.ts#L580)

#### Parameters

##### systemName

`string`

##### signature

`number`

#### Returns

`void`
