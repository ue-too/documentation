[@ue-too/board-game-engine](../globals.md) / LocationSystem

# Class: LocationSystem

Defined in: [zone-system/zone-component.ts:47](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L47)

## Implements

- `System`

## Constructors

### Constructor

> **new LocationSystem**(`coordinator`): `LocationSystem`

Defined in: [zone-system/zone-component.ts:51](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L51)

#### Parameters

##### coordinator

`Coordinator`

#### Returns

`LocationSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [zone-system/zone-component.ts:48](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L48)

#### Implementation of

`System.entities`

## Methods

### addEntityToZone()

> **addEntityToZone**(`zoneEntity`, `entity`, `direction`): `void`

Defined in: [zone-system/zone-component.ts:131](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L131)

#### Parameters

##### zoneEntity

`number`

##### entity

`number`

##### direction

`"top"` | `"bottom"`

#### Returns

`void`

***

### getEntitiesInZone()

> **getEntitiesInZone**(`zoneEntity`): `number`[]

Defined in: [zone-system/zone-component.ts:66](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L66)

#### Parameters

##### zoneEntity

`number`

#### Returns

`number`[]

***

### isZoneEmpty()

> **isZoneEmpty**(`zoneEntity`): `boolean`

Defined in: [zone-system/zone-component.ts:158](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L158)

#### Parameters

##### zoneEntity

`number`

#### Returns

`boolean`

***

### offsetZoneSortIndex()

> **offsetZoneSortIndex**(`zoneEntity`, `offset`): `void`

Defined in: [zone-system/zone-component.ts:89](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L89)

#### Parameters

##### zoneEntity

`number`

##### offset

`number`

#### Returns

`void`

***

### organizeZoneSortIndex()

> **organizeZoneSortIndex**(`zoneEntity`): `number`

Defined in: [zone-system/zone-component.ts:101](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L101)

#### Parameters

##### zoneEntity

`number`

#### Returns

`number`

***

### shuffleZone()

> **shuffleZone**(`zoneEntity`): `void`

Defined in: [zone-system/zone-component.ts:115](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-game-engine/src/zone-system/zone-component.ts#L115)

#### Parameters

##### zoneEntity

`number`

#### Returns

`void`
