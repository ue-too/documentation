[@ue-too/board](../../modules.md) / [index](../index.md) / SubscriptionOptions

# 介面: SubscriptionOptions

定義於: [packages/board/src/utils/observable.ts:52](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/utils/observable.ts#L52)

Options for subscribing to an Observable.

## 備註

Subscription options allow for automatic cleanup of subscriptions using
the AbortController API. When the signal is aborted, the subscription
is automatically removed.

## 範例

```typescript
const controller = new AbortController();

observable.subscribe(
  (data) => console.log(data),
  { signal: controller.signal }
);

// Later, abort to unsubscribe
controller.abort();
```

## 屬性

### signal?

> `optional` **signal**: `AbortSignal`

定義於: [packages/board/src/utils/observable.ts:53](https://github.com/ue-too/ue-too/blob/79a36cf61d861e6b4e3302e81111636c6082a3db/packages/board/src/utils/observable.ts#L53)

Optional AbortSignal for automatic unsubscription
