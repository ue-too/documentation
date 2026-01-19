[@ue-too/board](../globals.md) / Observer

# Type Alias: Observer()\<T\>

> **Observer**\<`T`\> = (...`data`) => `void`

Defined in: [packages/board/src/utils/observable.ts:25](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board/src/utils/observable.ts#L25)

Type definition for an observer callback function.

## Type Parameters

### T

`T` *extends* `any`[]

Tuple type of arguments passed to the observer

## Parameters

### data

...`T`

## Returns

`void`

## Remarks

Observers are callbacks that get notified when an Observable emits data.
The generic type T is a tuple representing the arguments passed to the callback.

## Example

```typescript
// Observer that receives a single string
const stringObserver: Observer<[string]> = (message) => {
  console.log(message);
};

// Observer that receives multiple arguments
const multiObserver: Observer<[number, string, boolean]> = (num, str, flag) => {
  console.log(num, str, flag);
};
```
