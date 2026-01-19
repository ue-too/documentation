[@ue-too/board](../globals.md) / boundariesFullyDefined

# Function: boundariesFullyDefined()

> **boundariesFullyDefined**(`boundaries`): `boolean`

Defined in: [packages/board/src/camera/utils/position.ts:176](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/camera/utils/position.ts#L176)

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
