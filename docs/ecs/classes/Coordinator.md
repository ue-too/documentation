[@ue-too/ecs](../globals.md) / Coordinator

# Class: Coordinator

Defined in: [index.ts:1160](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1160)

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

Defined in: [index.ts:1165](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1165)

#### Returns

`Coordinator`

## Methods

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

Defined in: [index.ts:1185](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1185)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

##### entity

`number`

##### component

`T`

#### Returns

`void`

***

### addComponentToEntityWithSchema()

> **addComponentToEntityWithSchema**(`componentName`, `entity`, `component`, `validate`): `void`

Defined in: [index.ts:1397](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1397)

Add a component to an entity with schema validation.

#### Parameters

##### componentName

`symbol`

The name of the component type

##### entity

`number`

The entity to add the component to

##### component

`Record`\<`string`, `unknown`\>

The component data

##### validate

`boolean` = `true`

Whether to validate against schema (default: true)

#### Returns

`void`

#### Throws

Error if validation fails

***

### createComponentFromSchema()

> **createComponentFromSchema**(`componentName`, `overrides`): `Record`\<`string`, `unknown`\>

Defined in: [index.ts:1373](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1373)

Create a component instance from a schema with default values.

#### Parameters

##### componentName

`symbol`

The name of the component type

##### overrides

`Record`\<`string`, `unknown`\> = `{}`

Optional values to override defaults

#### Returns

`Record`\<`string`, `unknown`\>

A component instance with all fields initialized

#### Throws

Error if component is not registered with a schema

#### Example

```typescript
// Create component with all defaults
const component1 = coordinator.createComponentFromSchema('PlayerStats');

// Create component with some overrides
const component2 = coordinator.createComponentFromSchema('PlayerStats', {
  health: 200,
  name: 'SuperPlayer'
});
```

***

### createEntity()

> **createEntity**(): `number`

Defined in: [index.ts:1171](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1171)

#### Returns

`number`

***

### deserialize()

> **deserialize**(`serialized`, `options`): `void`

Defined in: [index.ts:1587](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1587)

Deserialize an ECS state from a JSON-compatible format.
This will restore all entities and their components.

#### Parameters

##### serialized

[`SerializedECSState`](../interfaces/SerializedECSState.md)

The serialized ECS state

##### options

Options for deserialization

###### clearExisting?

`boolean`

Whether to clear existing entities before deserializing (default: false)

#### Returns

`void`

#### Throws

Error if component names cannot be resolved or components are not registered

#### Example

```typescript
const json = fs.readFileSync('state.json', 'utf-8');
const serialized = JSON.parse(json);
coordinator.deserialize(serialized, { clearExisting: true });
```

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

Defined in: [index.ts:1175](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1175)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### entityExists()

> **entityExists**(`entity`): `boolean`

Defined in: [index.ts:1445](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1445)

Check if an entity exists in the coordinator.

#### Parameters

##### entity

`number`

The entity ID to check

#### Returns

`boolean`

true if the entity exists, false otherwise

#### Example

```typescript
const entity = coordinator.createEntity();
if (coordinator.entityExists(entity)) {
  console.log('Entity exists');
}

coordinator.destroyEntity(entity);
if (!coordinator.entityExists(entity)) {
  console.log('Entity no longer exists');
}
```

***

### getAllComponentSchemas()

> **getAllComponentSchemas**(): [`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Defined in: [index.ts:1349](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1349)

Get all registered component schemas.

#### Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Array of all component schemas

***

### getAllEntities()

> **getAllEntities**(): `number`[]

Defined in: [index.ts:1423](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1423)

Get all living entities in the ECS.

#### Returns

`number`[]

Array of all entity IDs that are currently active

#### Example

```typescript
const entities = coordinator.getAllEntities();
console.log(`Total entities: ${entities.length}`);
```

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

Defined in: [index.ts:1216](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1216)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

##### entity

`number`

#### Returns

`T` \| `null`

***

### getComponentPropertyNames()

> **getComponentPropertyNames**(`componentName`): `string`[]

Defined in: [index.ts:1317](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1317)

Get the property field names of a component.

This method works in two ways:
1. If the component was registered with a schema, returns field names from the schema
2. If no schema exists, attempts to extract property names from an actual component instance
   (requires at least one entity to have an instance of the component)

#### Parameters

##### componentName

`symbol`

The name of the component type

#### Returns

`string`[]

Array of property field names, or empty array if component has no schema and no instances exist

#### Example

```typescript
const coordinator = new Coordinator();

// Method 1: Using schema
coordinator.registerComponentWithSchema({
  componentName: 'PlayerStats',
  fields: [
    { name: 'health', type: 'number', defaultValue: 100 },
    { name: 'name', type: 'string', defaultValue: 'Player' },
    { name: 'isAlive', type: 'boolean', defaultValue: true }
  ]
});
const fieldNames1 = coordinator.getComponentPropertyNames('PlayerStats');
console.log(fieldNames1); // ['health', 'name', 'isAlive']

// Method 2: From component instance
type LocationComponent = { location: Entity; sortIndex: number };
coordinator.registerComponent<LocationComponent>('LocationComponent');
const entity = coordinator.createEntity();
coordinator.addComponentToEntity('LocationComponent', entity, { 
  location: otherEntity, 
  sortIndex: 0 
});
const fieldNames2 = coordinator.getComponentPropertyNames('LocationComponent');
console.log(fieldNames2); // ['location', 'sortIndex']
```

***

### getComponentSchema()

> **getComponentSchema**(`componentName`): [`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

Defined in: [index.ts:1274](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1274)

Get the schema for a component type, if it was registered with a schema.

#### Parameters

##### componentName

`symbol`

The name of the component type

#### Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

The component schema or null if not found

***

### getComponentType()

> **getComponentType**(`componentName`): `number` \| `null`

Defined in: [index.ts:1220](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1220)

#### Parameters

##### componentName

`symbol`

#### Returns

`number` \| `null`

***

### getEntityComponents()

> **getEntityComponents**(`entity`): `Map`\<`symbol`, `unknown`\> \| `null`

Defined in: [index.ts:1462](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1462)

Get all components for a specific entity.

#### Parameters

##### entity

`number`

The entity ID

#### Returns

`Map`\<`symbol`, `unknown`\> \| `null`

Map of component names to their data, or null if entity doesn't exist

#### Example

```typescript
const components = coordinator.getEntityComponents(entity);
if (components) {
  console.log('Entity components:', components);
}
```

***

### getFullState()

> **getFullState**(): `object`

Defined in: [index.ts:1502](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1502)

Get the entire state of the ECS: all entities with all their component values.

#### Returns

`object`

Object containing all entities and their components

##### entities

> **entities**: `object`[]

#### Example

```typescript
const state = coordinator.getFullState();
console.log(`Total entities: ${state.entities.length}`);
state.entities.forEach(entityData => {
  console.log(`Entity ${entityData.entity} has ${Object.keys(entityData.components).length} components`);
});
```

***

### getSystem()

> **getSystem**\<`T`\>(`systemName`): `T` \| `null`

Defined in: [index.ts:1232](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1232)

#### Type Parameters

##### T

`T` *extends* [`System`](../interfaces/System.md)

#### Parameters

##### systemName

`symbol`

#### Returns

`T` \| `null`

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

Defined in: [index.ts:1181](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1181)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

#### Returns

`void`

***

### registerComponentWithSchema()

> **registerComponentWithSchema**(`schema`): `void`

Defined in: [index.ts:1264](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1264)

Register a component with a runtime-defined schema.
This allows components to be defined dynamically (e.g., through a GUI).

#### Parameters

##### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema definition

#### Returns

`void`

#### Throws

Error if schema validation fails

#### Example

```typescript
const coordinator = new Coordinator();

// Define a component schema at runtime
coordinator.registerComponentWithSchema({
  componentName: 'PlayerStats',
  fields: [
    { name: 'health', type: 'number', defaultValue: 100 },
    { name: 'name', type: 'string', defaultValue: 'Player' },
    { name: 'isAlive', type: 'boolean', defaultValue: true },
    { name: 'inventory', type: 'array', defaultValue: [] }
  ]
});

// Create an entity with the component
const entity = coordinator.createEntity();
const component = coordinator.createComponentFromSchema('PlayerStats', { health: 150 });
coordinator.addComponentToEntityWithSchema('PlayerStats', entity, component);
```

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

Defined in: [index.ts:1224](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1224)

#### Parameters

##### systemName

`symbol`

##### system

[`System`](../interfaces/System.md)

#### Returns

`void`

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

Defined in: [index.ts:1201](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1201)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

##### entity

`number`

#### Returns

`void`

***

### serialize()

> **serialize**(): [`SerializedECSState`](../interfaces/SerializedECSState.md)

Defined in: [index.ts:1526](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1526)

Serialize the entire ECS state to a JSON-compatible format.
Note: Only works with global symbols (created via Symbol.for or createGlobalComponentName).

#### Returns

[`SerializedECSState`](../interfaces/SerializedECSState.md)

A serializable representation of the ECS state

#### Throws

Error if any component name is not a global symbol

#### Example

```typescript
const serialized = coordinator.serialize();
const json = JSON.stringify(serialized);
// Save to file or send over network
```

***

### setSystemSignature()

> **setSystemSignature**(`systemName`, `signature`): `void`

Defined in: [index.ts:1228](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1228)

#### Parameters

##### systemName

`symbol`

##### signature

`number`

#### Returns

`void`

***

### validateComponentData()

> **validateComponentData**(`componentName`, `data`): `boolean`

Defined in: [index.ts:1384](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L1384)

Validate component data against its schema.

#### Parameters

##### componentName

`symbol`

The name of the component type

##### data

`unknown`

The component data to validate

#### Returns

`boolean`

true if valid, false otherwise
