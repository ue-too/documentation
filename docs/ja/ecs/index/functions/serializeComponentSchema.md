[@ue-too/ecs](../../modules.md) / [index](../index.md) / serializeComponentSchema

# 関数: serializeComponentSchema()

> **serializeComponentSchema**(`schema`): [`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

定義: [index.ts:387](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/ecs/src/index.ts#L387)

Serialize a component schema to a JSON-compatible format.
Note: Only works with global symbols (created via Symbol.for).

## パラメータ

### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema to serialize

## 戻り値

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

A serializable representation of the schema

## Throws

Error if component name is not a global symbol
