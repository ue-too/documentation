[@ue-too/being](../globals.md) / BaseContext

# Interface: BaseContext

Defined in: [interface.ts:29](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/being/src/interface.ts#L29)

Base context interface for state machines.

## Remarks

The context is shared across all states in a state machine and can be used to store data
that persists between state transitions. All custom contexts must extend this interface.

The setup and cleanup methods provide lifecycle hooks for resource management:
- `setup()`: Called when the context is initialized
- `cleanup()`: Called when the context is destroyed

## Example

```typescript
interface MyContext extends BaseContext {
  counter: number;
  data: string[];
  setup() {
    this.counter = 0;
    this.data = [];
  }
  cleanup() {
    this.data = [];
  }
}
```

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [interface.ts:31](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/being/src/interface.ts#L31)

#### Returns

`void`

***

### setup()

> **setup**(): `void`

Defined in: [interface.ts:30](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/being/src/interface.ts#L30)

#### Returns

`void`
