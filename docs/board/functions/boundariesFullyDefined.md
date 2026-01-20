[@ue-too/board](../globals.md) / boundariesFullyDefined

# Function: boundariesFullyDefined()

> **boundariesFullyDefined**(`boundaries`): `boolean`

Defined in: [packages/board/src/camera/utils/position.ts:176](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board/src/camera/utils/position.ts#L176)

Checks if boundaries have all four constraints (min/max for both x and y) defined.

## Parameters

### boundaries

The boundaries to check

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`boolean`

True if all four constraints are defined, false otherwise

## Remarks

Returns true only if boundaries define a complete rectangular region:
- min.x, min.y, max.x, and max.y are all defined

## Example

```typescript
boundariesFullyDefined({
  min: { x: 0, y: 0 },
  max: { x: 100, y: 100 }
}); // true

boundariesFullyDefined({
  min: { x: 0, y: 0 },
  max: { x: 100 }  // missing max.y
}); // false

boundariesFullyDefined({ min: { x: 0 } }); // false
boundariesFullyDefined(undefined);          // false
```
