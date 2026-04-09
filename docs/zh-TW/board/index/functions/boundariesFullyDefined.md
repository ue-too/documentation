[@ue-too/board](../../modules.md) / [index](../index.md) / boundariesFullyDefined

# 函式: boundariesFullyDefined()

> **boundariesFullyDefined**(`boundaries`): `boundaries is { max: { x: number; y: number }; min: { x: number; y: number } }`

定義於: [packages/board/src/camera/utils/position.ts:196](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/utils/position.ts#L196)

Checks if boundaries have all four constraints (min/max for both x and y) defined.

## 參數

### boundaries

The boundaries to check

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 回傳

`boundaries is { max: { x: number; y: number }; min: { x: number; y: number } }`

True if all four constraints are defined, false otherwise

## 備註

Returns true only if boundaries define a complete rectangular region:
- min.x, min.y, max.x, and max.y are all defined

## 範例

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
