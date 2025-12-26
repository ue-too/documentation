[@ue-too/math](../globals.md) / approximatelyTheSame

# Function: approximatelyTheSame()

> **approximatelyTheSame**(`a`, `b`, `precision?`): `boolean`

Defined in: [index.ts:741](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/math/src/index.ts#L741)

Checks if two numbers are approximately equal within a tolerance.

## Parameters

### a

`number`

First number

### b

`number`

Second number

### precision?

`number`

Optional tolerance (defaults to 0.000001)

## Returns

`boolean`

True if the absolute difference is within the precision threshold

## Remarks

Useful for floating-point comparisons where exact equality is unreliable.

## Example

```typescript
approximatelyTheSame(1.0, 1.0000001); // true (within default epsilon)
approximatelyTheSame(1.0, 1.1); // false
approximatelyTheSame(1.0, 1.01, 0.02); // true (within custom precision)
```
