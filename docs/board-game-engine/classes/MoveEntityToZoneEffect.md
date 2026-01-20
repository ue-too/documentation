[@ue-too/board-game-engine](../globals.md) / MoveEntityToZoneEffect

# Class: MoveEntityToZoneEffect

Defined in: [zone-system/effect.ts:5](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/zone-system/effect.ts#L5)

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new MoveEntityToZoneEffect**(`coordinator`, `entity`, `zoneEntity`, `addToIfZoneOrdered`): `MoveEntityToZoneEffect`

Defined in: [zone-system/effect.ts:11](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/zone-system/effect.ts#L11)

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

Defined in: [zone-system/effect.ts:18](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-game-engine/src/zone-system/effect.ts#L18)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
