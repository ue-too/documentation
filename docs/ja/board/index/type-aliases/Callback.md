[@ue-too/board](../../modules.md) / [index](../index.md) / Callback

# 型エイリアス: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

定義: [packages/board/src/camera/update-publisher.ts:131](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board/src/camera/update-publisher.ts#L131)

Generic callback function type for camera events.

## 型パラメーター

### K

`K` *extends* keyof [`CameraEventMap`](CameraEventMap.md)

The event type key from CameraEventMap

## パラメータ

### event

[`CameraEventMap`](CameraEventMap.md)\[`K`\]

The event payload specific to this event type

### cameraState

[`CameraState`](CameraState.md)

Current camera state snapshot at the time of the event

## 戻り値

`void`
