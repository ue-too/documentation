[@ue-too/ecs](../globals.md) / ComponentFieldDefinition

# Type Alias: ComponentFieldDefinition

> **ComponentFieldDefinition** = [`ComponentPrimitiveField`](../interfaces/ComponentPrimitiveField.md) \| [`ComponentArrayField`](../interfaces/ComponentArrayField.md)

Defined in: [index.ts:204](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L204)

Discriminated union for field definitions in a component schema.
Use type guards to distinguish between primitive and array fields.
