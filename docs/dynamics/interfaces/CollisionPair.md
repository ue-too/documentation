[@ue-too/dynamics](../globals.md) / CollisionPair

# Interface: CollisionPair

Defined in: [pair-manager.ts:13](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L13)

Represents a collision pair between two bodies.

## Remarks

Tracks collision information across multiple frames, enabling
detection of collision start, update, and end events.

## Properties

### bodyA

> **bodyA**: [`RigidBody`](RigidBody.md)

Defined in: [pair-manager.ts:14](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L14)

***

### bodyB

> **bodyB**: [`RigidBody`](RigidBody.md)

Defined in: [pair-manager.ts:15](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L15)

***

### contactPoints

> **contactPoints**: `Point`[]

Defined in: [pair-manager.ts:18](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L18)

***

### depth?

> `optional` **depth**: `number`

Defined in: [pair-manager.ts:20](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L20)

***

### frameCreated

> **frameCreated**: `number`

Defined in: [pair-manager.ts:21](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L21)

***

### frameUpdated

> **frameUpdated**: `number`

Defined in: [pair-manager.ts:22](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L22)

***

### id

> **id**: `string`

Defined in: [pair-manager.ts:16](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L16)

***

### isActive

> **isActive**: `boolean`

Defined in: [pair-manager.ts:17](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L17)

***

### normal?

> `optional` **normal**: `Point`

Defined in: [pair-manager.ts:19](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/dynamics/src/pair-manager.ts#L19)
