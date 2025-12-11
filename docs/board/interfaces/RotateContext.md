[@ue-too/board](../globals.md) / RotateContext

# Interface: RotateContext

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:53](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L53)

## Description

The context for the rotate control state machine.

## Extends

- `BaseContext`

## Extended by

- [`CameraRig`](CameraRig.md)

## Properties

### camera

> **camera**: [`BoardCamera`](BoardCamera.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:54](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L54)

***

### rotateBy()

> **rotateBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:55](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L55)

#### Parameters

##### delta

`number`

#### Returns

`void`

***

### rotateTo()

> **rotateTo**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L56)

#### Parameters

##### target

`number`

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/being/src/interface.ts:3](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L3)

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: [packages/being/src/interface.ts:2](https://github.com/ue-too/ue-too/blob/95dd78435970713202a67be3986e96a80ff00749/packages/being/src/interface.ts#L2)

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
