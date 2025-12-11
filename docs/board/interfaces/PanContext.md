[@ue-too/board](../globals.md) / PanContext

# Interface: PanContext

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:54](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L54)

## Description

The context for the pan control state machine.

## Extends

- `BaseContext`

## Extended by

- [`CameraRig`](CameraRig.md)

## Properties

### camera

> **camera**: [`BoardCamera`](BoardCamera.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:55](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L55)

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L56)

***

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:57](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L57)

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### panByWorld()

> **panByWorld**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:59](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L59)

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### panToViewPort()

> **panToViewPort**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:58](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L58)

#### Parameters

##### target

`Point`

#### Returns

`void`

***

### panToWorld()

> **panToWorld**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:60](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L60)

#### Parameters

##### target

`Point`

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/being/src/interface.ts:3](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L3)

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: [packages/being/src/interface.ts:2](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L2)

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
