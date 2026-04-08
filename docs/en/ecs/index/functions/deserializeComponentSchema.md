[@ue-too/ecs](../../modules.md) / [index](../index.md) / deserializeComponentSchema

# Function: deserializeComponentSchema()

> **deserializeComponentSchema**(`serialized`): [`ComponentSchema`](../interfaces/ComponentSchema.md)

Defined in: [index.ts:437](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L437)

Deserialize a component schema from a JSON-compatible format.

## Parameters

### serialized

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

The serialized schema

## Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema with symbols restored
