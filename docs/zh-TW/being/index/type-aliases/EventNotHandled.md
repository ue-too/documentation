[@ue-too/being](../../modules.md) / [index](../index.md) / EventNotHandled

# 型別別名: EventNotHandled

> **EventNotHandled** = `object`

定義於: [interface.ts:99](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L99)

Result type indicating an event was not handled by the current state.

## 備註

When a state doesn't have a handler defined for a particular event, it returns this type.
The state machine will not transition and the event is effectively ignored.

## 屬性

### handled

> **handled**: `false`

定義於: [interface.ts:100](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/being/src/interface.ts#L100)
