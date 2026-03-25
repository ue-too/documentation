[@ue-too/ecs](../../modules.md) / [index](../index.md) / createComponentName

# Function: createComponentName()

> **createComponentName**(`name`): `symbol`

Defined in: [index.ts:234](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/ecs/src/index.ts#L234)

Helper function to create a component name from a string.
This creates a unique symbol for the component name.

## Parameters

### name

`string`

The string name for the component

## Returns

`symbol`

A unique symbol for the component name

## Example

```typescript
const Position = createComponentName('Position');
coordinator.registerComponent<Position>(Position);
```
