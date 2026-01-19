[@ue-too/ecs](../globals.md) / createGlobalComponentName

# Function: createGlobalComponentName()

> **createGlobalComponentName**(`key`): `symbol`

Defined in: [index.ts:266](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L266)

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
