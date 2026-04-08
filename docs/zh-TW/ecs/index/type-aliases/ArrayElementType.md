[@ue-too/ecs](../../modules.md) / [index](../index.md) / ArrayElementType

# 型別別名: ArrayElementType

> **ArrayElementType** = \{ `kind`: `"builtin"`; `type`: `Exclude`\<[`ComponentFieldType`](ComponentFieldType.md), `"array"`\>; \} \| \{ `kind`: `"custom"`; `typeName`: [`ComponentName`](ComponentName.md); \}

定義於: [index.ts:158](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L158)

Discriminated union for array element types.
Supports both built-in types and custom component types.
