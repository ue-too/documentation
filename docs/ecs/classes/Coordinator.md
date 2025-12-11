[@ue-too/ecs](../globals.md) / Coordinator

# Class: Coordinator

Defined in: index.d.ts:53

## Constructors

### Constructor

> **new Coordinator**(): `Coordinator`

Defined in: index.d.ts:57

#### Returns

`Coordinator`

## Methods

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

Defined in: index.d.ts:61

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

Defined in: index.d.ts:58

#### Returns

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

Defined in: index.d.ts:59

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T`

Defined in: index.d.ts:63

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`string`

##### entity

`number`

#### Returns

`T`

***

### getComponentType()

> **getComponentType**(`componentName`): `number`

Defined in: index.d.ts:64

#### Parameters

##### componentName

`string`

#### Returns

`number`

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

Defined in: index.d.ts:60

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

Defined in: index.d.ts:65

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

Defined in: index.d.ts:62

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

Defined in: index.d.ts:66

#### Parameters

##### systemName

`string`

##### signature

`number`

#### Returns

`void`
