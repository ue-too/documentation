[@ue-too/board](../globals.md) / CameraMuxWithAnimationAndLock

# Class: CameraMuxWithAnimationAndLock

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:22](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L22)

## Description

The flow control with animation and lock input.

This is a customized input flow control that suits a specific use case.

You can use the default one (SimpleRelayFlowControl) instead or implement your own.

The internal ruleset on which input is used and which is ignored is controlled by the state machines.

## Implements

- [`CameraMux`](../interfaces/CameraMux.md)

## Constructors

### Constructor

> **new CameraMuxWithAnimationAndLock**(`panStateMachine`, `zoomStateMachine`, `rotateStateMachine`): `CameraMuxWithAnimationAndLock`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:28](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L28)

#### Parameters

##### panStateMachine

[`PanControlStateMachine`](PanControlStateMachine.md)

##### zoomStateMachine

[`ZoomControlStateMachine`](ZoomControlStateMachine.md)

##### rotateStateMachine

[`RotateControlStateMachine`](RotateControlStateMachine.md)

#### Returns

`CameraMuxWithAnimationAndLock`

## Accessors

### panStateMachine

#### Get Signature

> **get** **panStateMachine**(): [`PanControlStateMachine`](PanControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:82](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L82)

##### Returns

[`PanControlStateMachine`](PanControlStateMachine.md)

***

### rotateStateMachine

#### Get Signature

> **get** **rotateStateMachine**(): [`RotateControlStateMachine`](RotateControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:78](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L78)

##### Returns

[`RotateControlStateMachine`](RotateControlStateMachine.md)

***

### zoomStateMachine

#### Get Signature

> **get** **zoomStateMachine**(): [`ZoomControlStateMachine`](ZoomControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:86](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L86)

##### Returns

[`ZoomControlStateMachine`](ZoomControlStateMachine.md)

## Methods

### initatePanTransition()

> **initatePanTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:66](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L66)

#### Returns

`void`

***

### initateRotateTransition()

> **initateRotateTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:74](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L74)

#### Returns

`void`

***

### initateZoomTransition()

> **initateZoomTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:70](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L70)

#### Returns

`void`

***

### notifyPanInput()

> **notifyPanInput**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:38](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L38)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyPanInput`](../interfaces/CameraMux.md#notifypaninput)

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:34](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L34)

#### Parameters

##### target

`Point`

#### Returns

`void`

***

### notifyRotateByInput()

> **notifyRotateByInput**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:46](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L46)

#### Parameters

##### delta

`number`

#### Returns

`void`

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:50](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L50)

#### Parameters

##### target

`number`

#### Returns

`void`

***

### notifyRotationInput()

> **notifyRotationInput**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:62](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L62)

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyRotationInput`](../interfaces/CameraMux.md#notifyrotationinput)

***

### notifyZoomInput()

> **notifyZoomInput**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:42](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L42)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyZoomInput`](../interfaces/CameraMux.md#notifyzoominput)

***

### notifyZoomInputAnimation()

> **notifyZoomInputAnimation**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:54](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L54)

#### Parameters

##### targetZoom

`number`

##### at

`Point` = `...`

#### Returns

`void`

***

### notifyZoomInputAnimationWorld()

> **notifyZoomInputAnimationWorld**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:58](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L58)

#### Parameters

##### targetZoom

`number`

##### at

`Point` = `...`

#### Returns

`void`
