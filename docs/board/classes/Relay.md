[@ue-too/board](../globals.md) / Relay

# Class: Relay

Defined in: [packages/board/src/camera/camera-mux/relay.ts:13](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/relay.ts#L13)

## Description

The simple relay flow control.
This would be the default flow control for [Board](Board.md).

## Implements

- [`CameraMux`](../interfaces/CameraMux.md)

## Constructors

### Constructor

> **new Relay**(`cameraRig`): `Relay`

Defined in: [packages/board/src/camera/camera-mux/relay.ts:17](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/relay.ts#L17)

#### Parameters

##### cameraRig

[`CameraRig`](../interfaces/CameraRig.md) = `...`

#### Returns

`Relay`

## Methods

### notifyPanInput()

> **notifyPanInput**(`diff`): `void`

Defined in: [packages/board/src/camera/camera-mux/relay.ts:21](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/relay.ts#L21)

#### Parameters

##### diff

`Point`

#### Returns

`void`

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyPanInput`](../interfaces/CameraMux.md#notifypaninput)

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): `void`

Defined in: [packages/board/src/camera/camera-mux/relay.ts:29](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/relay.ts#L29)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyRotationInput`](../interfaces/CameraMux.md#notifyrotationinput)

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/camera/camera-mux/relay.ts:25](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/relay.ts#L25)

#### Parameters

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyZoomInput`](../interfaces/CameraMux.md#notifyzoominput)
