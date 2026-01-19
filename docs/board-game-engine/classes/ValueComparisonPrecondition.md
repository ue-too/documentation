[@ue-too/board-game-engine](../globals.md) / ValueComparisonPrecondition

# Class: ValueComparisonPrecondition\<T\>

Defined in: [action-system/precondition.ts:26](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/precondition.ts#L26)

Unified value comparison precondition that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## Example

```typescript
// With custom schema component
const precondition1 = new ValueComparisonPrecondition(
    100, '>', coordinator, HEALTH_COMPONENT, entity, 'health'
);

// With typed component (type-safe)
type HealthComponent = { health: number; maxHealth: number };
const precondition2 = new ValueComparisonPrecondition<HealthComponent>(
    coordinator, HEALTH_COMPONENT, entity, 'health', 100, '>'
);
```

## Type Parameters

### T

`T` = `Record`\<`string`, `unknown`\>

## Implements

- [`Precondition`](../interfaces/Precondition.md)

## Constructors

### Constructor

> **new ValueComparisonPrecondition**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `value`, `operator`): `ValueComparisonPrecondition`\<`T`\>

Defined in: [action-system/precondition.ts:35](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/precondition.ts#L35)

#### Parameters

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

keyof `T`

##### value

`number`

##### operator

`">"` | `"<"` | `">="` | `"<="` | `"=="` | `"!="`

#### Returns

`ValueComparisonPrecondition`\<`T`\>

### Constructor

> **new ValueComparisonPrecondition**\<`T`\>(`value`, `operator`, `coordinator`, `componentName`, `entity`, `valuePath`): `ValueComparisonPrecondition`\<`T`\>

Defined in: [action-system/precondition.ts:37](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/precondition.ts#L37)

#### Parameters

##### value

`number`

##### operator

`">"` | `"<"` | `">="` | `"<="` | `"=="` | `"!="`

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

#### Returns

`ValueComparisonPrecondition`\<`T`\>

## Methods

### check()

> **check**(): `boolean`

Defined in: [action-system/precondition.ts:67](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/action-system/precondition.ts#L67)

#### Returns

`boolean`

#### Implementation of

[`Precondition`](../interfaces/Precondition.md).[`check`](../interfaces/Precondition.md#check)
