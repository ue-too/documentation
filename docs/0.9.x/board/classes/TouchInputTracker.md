[@ue-too/board](../globals.md) / TouchInputTracker

# Class: TouchInputTracker

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:29](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L29)

## Implements

- [`TouchContext`](../interfaces/TouchContext.md)

## Constructors

### Constructor

> **new TouchInputTracker**(`canvas`, `inputPublisher`): `TouchInputTracker`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:36](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L36)

#### Parameters

##### canvas

[`Canvas`](../interfaces/Canvas.md)

##### inputPublisher

[`RawUserInputPublisher`](RawUserInputPublisher.md)

#### Returns

`TouchInputTracker`

## Accessors

### alignCoordinateSystem

#### Get Signature

> **get** **alignCoordinateSystem**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:89](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L89)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`value`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:93](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L93)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`alignCoordinateSystem`](../interfaces/TouchContext.md#aligncoordinatesystem)

***

### canvas

#### Get Signature

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:97](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L97)

##### Returns

[`Canvas`](../interfaces/Canvas.md)

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`canvas`](../interfaces/TouchContext.md#canvas)

## Methods

### addTouchPoints()

> **addTouchPoints**(`points`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:42](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L42)

#### Parameters

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`addTouchPoints`](../interfaces/TouchContext.md#addtouchpoints)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:101](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L101)

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`cleanup`](../interfaces/TouchContext.md#cleanup)

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:56](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L56)

#### Returns

`number`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`getCurrentTouchPointsCount`](../interfaces/TouchContext.md#getcurrenttouchpointscount)

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**(`idents`): [`TouchPoints`](../type-aliases/TouchPoints.md)[]

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:60](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L60)

#### Parameters

##### idents

`number`[]

#### Returns

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`getInitialTouchPointsPositions`](../interfaces/TouchContext.md#getinitialtouchpointspositions)

***

### notifyOnPan()

> **notifyOnPan**(`delta`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:81](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L81)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`notifyOnPan`](../interfaces/TouchContext.md#notifyonpan)

***

### notifyOnZoom()

> **notifyOnZoom**(`zoomAmount`, `anchorPoint`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:85](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L85)

#### Parameters

##### zoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`notifyOnZoom`](../interfaces/TouchContext.md#notifyonzoom)

***

### removeTouchPoints()

> **removeTouchPoints**(`identifiers`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:48](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L48)

#### Parameters

##### identifiers

`number`[]

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`removeTouchPoints`](../interfaces/TouchContext.md#removetouchpoints)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:104](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L104)

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`setup`](../interfaces/TouchContext.md#setup)

***

### updateTouchPoints()

> **updateTouchPoints**(`pointsMoved`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:73](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L73)

#### Parameters

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`updateTouchPoints`](../interfaces/TouchContext.md#updatetouchpoints)
