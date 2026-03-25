[@ue-too/ecs](../../modules.md) / [index](../index.md) / deserializeComponentSchema

# Function: deserializeComponentSchema()

> **deserializeComponentSchema**(`serialized`): [`ComponentSchema`](../interfaces/ComponentSchema.md)

Defined in: [index.ts:437](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/ecs/src/index.ts#L437)

Deserialize a component schema from a JSON-compatible format.

## Parameters

### serialized

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

The serialized schema

## Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema with symbols restored
