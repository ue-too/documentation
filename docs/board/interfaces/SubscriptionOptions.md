[@ue-too/board](../globals.md) / SubscriptionOptions

# Interface: SubscriptionOptions

Defined in: [packages/board/src/utils/observable.ts:52](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/utils/observable.ts#L52)

Options for subscribing to an Observable.

## Remarks

Subscription options allow for automatic cleanup of subscriptions using
the AbortController API. When the signal is aborted, the subscription
is automatically removed.

## Example

```typescript
const controller = new AbortController();

observable.subscribe(
  (data) => console.log(data),
  { signal: controller.signal }
);

// Later, abort to unsubscribe
controller.abort();
```

## Properties

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [packages/board/src/utils/observable.ts:53](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/utils/observable.ts#L53)

Optional AbortSignal for automatic unsubscription
