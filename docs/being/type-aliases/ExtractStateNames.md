[@ue-too/being](../globals.md) / ExtractStateNames

# Type Alias: ExtractStateNames\<StatesArray\>

> **ExtractStateNames**\<`StatesArray`\> = `StatesArray` *extends* readonly infer S[] ? `S` *extends* `string` ? `S` : `string` : `StatesArray` *extends* infer S[] ? `S` *extends* `string` ? `S` : `string` : `string`

Defined in: [schema-factory.ts:172](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/being/src/schema-factory.ts#L172)

Helper type to extract state names from a states array.
If the array is a readonly tuple of string literals, it extracts the union type.
Otherwise, it falls back to string.

## Type Parameters

### StatesArray

`StatesArray`

The states array type
