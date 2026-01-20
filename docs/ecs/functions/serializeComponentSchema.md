[@ue-too/ecs](../globals.md) / serializeComponentSchema

# Function: serializeComponentSchema()

> **serializeComponentSchema**(`schema`): [`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

Defined in: [index.ts:381](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L381)

Serialize a component schema to a JSON-compatible format.
Note: Only works with global symbols (created via Symbol.for).

## Parameters

### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema to serialize

## Returns

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

A serializable representation of the schema

## Throws

Error if component name is not a global symbol
