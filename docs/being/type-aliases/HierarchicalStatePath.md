[@ue-too/being](../globals.md) / HierarchicalStatePath

# Type Alias: HierarchicalStatePath\<ParentStates, ChildStates\>

> **HierarchicalStatePath**\<`ParentStates`, `ChildStates`\> = `ParentStates` \| `` `${ParentStates}.${ChildStates}` ``

Defined in: [hierarchical.ts:35](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/being/src/hierarchical.ts#L35)

Represents a hierarchical state path using dot notation.
Example: "PARENT.CHILD" means we're in CHILD state within PARENT state.

## Type Parameters

### ParentStates

`ParentStates` *extends* `string`

### ChildStates

`ChildStates` *extends* `string`
