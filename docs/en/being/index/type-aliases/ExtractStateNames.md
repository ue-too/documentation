[@ue-too/being](../../modules.md) / [index](../index.md) / ExtractStateNames

# Type Alias: ExtractStateNames\<StatesArray\>

> **ExtractStateNames**\<`StatesArray`\> = `StatesArray` *extends* readonly infer S[] ? `S` *extends* `string` ? `S` : `string` : `StatesArray` *extends* infer S[] ? `S` *extends* `string` ? `S` : `string` : `string`

Defined in: [schema-factory.ts:202](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/being/src/schema-factory.ts#L202)

Helper type to extract state names from a states array.
If the array is a readonly tuple of string literals, it extracts the union type.
Otherwise, it falls back to string.

## Type Parameters

### StatesArray

`StatesArray`

The states array type
