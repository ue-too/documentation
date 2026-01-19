[@ue-too/ecs](../globals.md) / createSystemName

# Function: createSystemName()

> **createSystemName**(`name`): `symbol`

Defined in: [index.ts:285](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/ecs/src/index.ts#L285)

Helper function to create a system name from a string.
This creates a unique symbol for the system name.

## Parameters

### name

`string`

The string name for the system

## Returns

`symbol`

A unique symbol for the system name

## Example

```typescript
const Movement = createSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
```
