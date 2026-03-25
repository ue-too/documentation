[@ue-too/board](../../modules.md) / [index](../index.md) / rad2deg

# 函式: rad2deg()

> **rad2deg**(`rad`): `number`

定義於: [packages/board/src/camera/utils/rotation.ts:328](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/utils/rotation.ts#L328)

Converts radians to degrees.

## 參數

### rad

`number`

Angle in radians

## 回傳

`number`

Equivalent angle in degrees

## 範例

```typescript
rad2deg(0);             // 0
rad2deg(Math.PI/2);     // 90
rad2deg(Math.PI);       // 180
rad2deg(2 * Math.PI);   // 360
rad2deg(-Math.PI/4);    // -45
```
