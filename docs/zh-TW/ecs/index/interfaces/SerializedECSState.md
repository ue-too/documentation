[@ue-too/ecs](../../modules.md) / [index](../index.md) / SerializedECSState

# 介面: SerializedECSState

定義於: [index.ts:370](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L370)

Serialized representation of the entire ECS state.

## 屬性

### entities

> **entities**: [`SerializedEntity`](SerializedEntity.md)[]

定義於: [index.ts:372](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L372)

Array of all entities with their component data

***

### schemas?

> `optional` **schemas**: [`SerializedComponentSchema`](SerializedComponentSchema.md)[]

定義於: [index.ts:374](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L374)

Optional: Array of component schemas (if using schema-based components)
