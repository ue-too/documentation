[@ue-too/board](../../modules.md) / [index](../index.md) / Observer

# 型別別名: Observer()\<T\>

> **Observer**\<`T`\> = (...`data`) => `void`

定義於: [packages/board/src/utils/observable.ts:25](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/board/src/utils/observable.ts#L25)

Type definition for an observer callback function.

## 型別參數

### T

`T` *extends* `any`[]

Tuple type of arguments passed to the observer

## 參數

### data

...`T`

## 回傳

`void`

## 備註

Observers are callbacks that get notified when an Observable emits data.
The generic type T is a tuple representing the arguments passed to the callback.

## 範例

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
