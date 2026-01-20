[@ue-too/ecs](../globals.md) / createComponentName

# Function: createComponentName()

> **createComponentName**(`name`): `symbol`

Defined in: [index.ts:232](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L232)

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
