[@ue-too/being](../globals.md) / createStateGuard

# Function: createStateGuard()

> **createStateGuard**\<`T`\>(`set`): (`s`) => `s is T`

Defined in: [interface.ts:357](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/being/src/interface.ts#L357)

Example usage
```ts
type TestSubStates = "subOne" | "subTwo" | "subThree";
const TEST_STATES = ["one", "two", "three"] as const;
type TestStates = CreateStateType<typeof TEST_STATES>;
type AllStates = TestStates | TestSubStates;

const isTestState = createStateGuard(TEST_STATES);

function test(s: AllStates) {
if (isTestState(s)) {
	// s: TestStates
   }
}
```

## Type Parameters

### T

`T` *extends* `string`

## Parameters

### set

readonly `T`[]

## Returns

> (`s`): `s is T`

### Parameters

#### s

`string`

### Returns

`s is T`
