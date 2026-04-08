[@ue-too/ecs](../../modules.md) / [index](../index.md) / SerializedEntity

# Interface: SerializedEntity

Defined in: [index.ts:359](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L359)

Serialized representation of an entity's component data.

## Properties

### components

> **components**: `Record`\<`string`, `unknown`\>

Defined in: [index.ts:363](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L363)

Map of component names (as strings) to their serialized data

***

### entity

> **entity**: `number`

Defined in: [index.ts:361](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L361)

The entity ID
