[@ue-too/ecs](../globals.md) / SerializedECSState

# Interface: SerializedECSState

Defined in: [index.ts:364](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L364)

Serialized representation of the entire ECS state.

## Properties

### entities

> **entities**: [`SerializedEntity`](SerializedEntity.md)[]

Defined in: [index.ts:366](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L366)

Array of all entities with their component data

***

### schemas?

> `optional` **schemas**: [`SerializedComponentSchema`](SerializedComponentSchema.md)[]

Defined in: [index.ts:368](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L368)

Optional: Array of component schemas (if using schema-based components)
