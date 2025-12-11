[@ue-too/ecs](../globals.md) / ComponentManager

# Class: ComponentManager

Defined in: index.d.ts:32

## Constructors

### Constructor

> **new ComponentManager**(): `ComponentManager`

#### Returns

`ComponentManager`

## Methods

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

Defined in: index.d.ts:37

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

Defined in: index.d.ts:40

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T`

Defined in: index.d.ts:39

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

Defined in: index.d.ts:36

#### Parameters

##### componentName

`string`

#### Returns

`number`

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

Defined in: index.d.ts:35

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

Defined in: index.d.ts:38

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
