[@ue-too/board](../globals.md) / KmtInputContext

# Interface: KmtInputContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:305](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L305)

## Description

The context for the keyboard mouse and trackpad input state machine.

## Extends

- `BaseContext`

## Properties

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:306](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L306)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:312](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L312)

#### Returns

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:307](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L307)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:313](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L313)

***

### notifyOnPan()

> **notifyOnPan**: (`delta`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:308](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L308)

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### notifyOnRotate()

> **notifyOnRotate**: (`deltaRotation`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:310](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L310)

#### Parameters

##### deltaRotation

`number`

#### Returns

`void`

***

### notifyOnZoom()

> **notifyOnZoom**: (`zoomAmount`, `anchorPoint`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:309](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L309)

#### Parameters

##### zoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:314](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L314)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:311](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L311)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:316](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L316)

#### Returns

`void`

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:315](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L315)

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/being/src/interface.ts:3](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L3)

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: [packages/being/src/interface.ts:2](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/being/src/interface.ts#L2)

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
