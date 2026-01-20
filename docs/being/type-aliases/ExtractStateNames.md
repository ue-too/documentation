[@ue-too/being](../globals.md) / ExtractStateNames

# Type Alias: ExtractStateNames\<StatesArray\>

> **ExtractStateNames**\<`StatesArray`\> = `StatesArray` *extends* readonly infer S[] ? `S` *extends* `string` ? `S` : `string` : `StatesArray` *extends* infer S[] ? `S` *extends* `string` ? `S` : `string` : `string`

Defined in: [schema-factory.ts:172](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/schema-factory.ts#L172)

Helper type to extract state names from a states array.
If the array is a readonly tuple of string literals, it extracts the union type.
Otherwise, it falls back to string.

## Type Parameters

### StatesArray

`StatesArray`

The states array type
