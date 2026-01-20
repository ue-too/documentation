[@ue-too/ecs](../globals.md) / deserializeComponentSchema

# Function: deserializeComponentSchema()

> **deserializeComponentSchema**(`serialized`): [`ComponentSchema`](../interfaces/ComponentSchema.md)

Defined in: [index.ts:423](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L423)

Deserialize a component schema from a JSON-compatible format.

## Parameters

### serialized

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

The serialized schema

## Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema with symbols restored
