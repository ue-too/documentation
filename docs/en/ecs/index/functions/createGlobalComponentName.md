[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalComponentName

# Function: createGlobalComponentName()

> **createGlobalComponentName**(`key`): `symbol`

Defined in: [index.ts:268](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/ecs/src/index.ts#L268)

Helper function to create a component name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## Parameters

### key

`string`

The string key for the global symbol

## Returns

`symbol`

A global symbol for the component name

## Example

```typescript
const Position = createGlobalComponentName('Position');
coordinator.registerComponent<Position>(Position);
// Can be retrieved later with Symbol.for('Position')
```
