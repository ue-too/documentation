[@ue-too/ecs](../../modules.md) / [index](../index.md) / SerializedECSState

# インターフェイス: SerializedECSState

定義: [index.ts:370](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L370)

Serialized representation of the entire ECS state.

## プロパティ

### entities

> **entities**: [`SerializedEntity`](SerializedEntity.md)[]

定義: [index.ts:372](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L372)

Array of all entities with their component data

***

### schemas?

> `optional` **schemas**: [`SerializedComponentSchema`](SerializedComponentSchema.md)[]

定義: [index.ts:374](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L374)

Optional: Array of component schemas (if using schema-based components)
