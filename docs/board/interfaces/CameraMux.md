[@ue-too/board](../globals.md) / CameraMux

# Interface: CameraMux

Defined in: [packages/board/src/camera/camera-mux/interface.ts:9](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/interface.ts#L9)

## Description

The interface for the input flow control.
It should at least have user input handlers for pan, zoom and rotation.

## Methods

### notifyPanInput()

> **notifyPanInput**(`diff`): `void`

Defined in: [packages/board/src/camera/camera-mux/interface.ts:10](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/interface.ts#L10)

#### Parameters

##### diff

`Point`

#### Returns

`void`

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): `void`

Defined in: [packages/board/src/camera/camera-mux/interface.ts:12](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/interface.ts#L12)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/camera/camera-mux/interface.ts:11](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/interface.ts#L11)

#### Parameters

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`
