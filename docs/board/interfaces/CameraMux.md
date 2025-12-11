[@ue-too/board](../globals.md) / CameraMux

# Interface: CameraMux

Defined in: [packages/board/src/camera/camera-mux/interface.ts:9](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/interface.ts#L9)

## Description

The interface for the input flow control.
It should at least have user input handlers for pan, zoom and rotation.

## Methods

### notifyPanInput()

> **notifyPanInput**(`diff`): `void`

Defined in: [packages/board/src/camera/camera-mux/interface.ts:10](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/interface.ts#L10)

#### Parameters

##### diff

`Point`

#### Returns

`void`

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): `void`

Defined in: [packages/board/src/camera/camera-mux/interface.ts:12](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/interface.ts#L12)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/camera/camera-mux/interface.ts:11](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-mux/interface.ts#L11)

#### Parameters

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`
