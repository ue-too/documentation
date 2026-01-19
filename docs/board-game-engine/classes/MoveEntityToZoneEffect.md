[@ue-too/board-game-engine](../globals.md) / MoveEntityToZoneEffect

# Class: MoveEntityToZoneEffect

Defined in: [zone-system/effect.ts:5](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/effect.ts#L5)

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new MoveEntityToZoneEffect**(`coordinator`, `entity`, `zoneEntity`, `addToIfZoneOrdered`): `MoveEntityToZoneEffect`

Defined in: [zone-system/effect.ts:11](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/effect.ts#L11)

#### Parameters

##### coordinator

`Coordinator`

##### entity

`number`

##### zoneEntity

`number`

##### addToIfZoneOrdered

`"top"` | `"bottom"`

#### Returns

`MoveEntityToZoneEffect`

## Methods

### apply()

> **apply**(): `void`

Defined in: [zone-system/effect.ts:18](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/effect.ts#L18)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
