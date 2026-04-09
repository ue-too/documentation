[@ue-too/board](../../modules.md) / [index](../index.md) / deg2rad

# 関数: deg2rad()

> **deg2rad**(`deg`): `number`

定義: [packages/board/src/camera/utils/rotation.ts:307](https://github.com/ue-too/ue-too/blob/68da915137a31a45d7ce8043b13275ff7283045d/packages/board/src/camera/utils/rotation.ts#L307)

Converts degrees to radians.

## パラメータ

### deg

`number`

Angle in degrees

## 戻り値

`number`

Equivalent angle in radians

## 例

```typescript
deg2rad(0);     // 0
deg2rad(90);    // π/2
deg2rad(180);   // π
deg2rad(360);   // 2π
deg2rad(-45);   // -π/4
```
