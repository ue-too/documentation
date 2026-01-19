[@ue-too/ecs](../globals.md) / ArrayElementType

# Type Alias: ArrayElementType

> **ArrayElementType** = \{ `kind`: `"builtin"`; `type`: `Exclude`\<[`ComponentFieldType`](ComponentFieldType.md), `"array"`\>; \} \| \{ `kind`: `"custom"`; `typeName`: [`ComponentName`](ComponentName.md); \}

Defined in: [index.ts:158](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L158)

Discriminated union for array element types.
Supports both built-in types and custom component types.
