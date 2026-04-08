[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalSystemName

# 函式: createGlobalSystemName()

> **createGlobalSystemName**(`key`): `symbol`

定義於: [index.ts:321](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/ecs/src/index.ts#L321)

Helper function to create a system name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## 參數

### key

`string`

The string key for the global symbol

## 回傳

`symbol`

A global symbol for the system name

## 範例

```typescript
const Movement = createGlobalSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
// Can be retrieved later with Symbol.for('Movement')
```
