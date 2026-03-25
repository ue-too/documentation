[@ue-too/ecs](../../modules.md) / [index](../index.md) / createSystemName

# 函式: createSystemName()

> **createSystemName**(`name`): `symbol`

定義於: [index.ts:287](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/ecs/src/index.ts#L287)

Helper function to create a system name from a string.
This creates a unique symbol for the system name.

## 參數

### name

`string`

The string name for the system

## 回傳

`symbol`

A unique symbol for the system name

## 範例

```typescript
const Movement = createSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
```
