[@ue-too/board](../globals.md) / BoardCamera

# Interface: BoardCamera

Defined in: [packages/board/src/camera/interface.ts:24](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L24)

## Description

The interface for the board camera.

## Extended by

- [`ObservableBoardCamera`](ObservableBoardCamera.md)

## Properties

### boundaries?

> `optional` **boundaries**: [`Boundaries`](../type-aliases/Boundaries.md)

Defined in: [packages/board/src/camera/interface.ts:30](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L30)

***

### position

> **position**: `Point`

Defined in: [packages/board/src/camera/interface.ts:25](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L25)

***

### rotation

> **rotation**: `number`

Defined in: [packages/board/src/camera/interface.ts:26](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L26)

***

### rotationBoundaries?

> `optional` **rotationBoundaries**: [`RotationLimits`](../type-aliases/RotationLimits.md)

Defined in: [packages/board/src/camera/interface.ts:32](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L32)

***

### viewPortHeight

> **viewPortHeight**: `number`

Defined in: [packages/board/src/camera/interface.ts:29](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L29)

***

### viewPortWidth

> **viewPortWidth**: `number`

Defined in: [packages/board/src/camera/interface.ts:28](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L28)

***

### zoomBoundaries?

> `optional` **zoomBoundaries**: [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Defined in: [packages/board/src/camera/interface.ts:31](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L31)

***

### zoomLevel

> **zoomLevel**: `number`

Defined in: [packages/board/src/camera/interface.ts:27](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L27)

## Methods

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

Defined in: [packages/board/src/camera/interface.ts:43](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L43)

#### Parameters

##### point

`Point`

#### Returns

`Point`

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

Defined in: [packages/board/src/camera/interface.ts:44](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L44)

#### Parameters

##### point

`Point`

#### Returns

`Point`

***

### getCameraOriginInWindow()

> **getCameraOriginInWindow**(`centerInWindow`): `Point`

Defined in: [packages/board/src/camera/interface.ts:42](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L42)

#### Parameters

##### centerInWindow

`Point`

#### Returns

`Point`

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

Defined in: [packages/board/src/camera/interface.ts:46](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L46)

#### Parameters

##### devicePixelRatio

`number`

##### alignCoordinateSystem

`boolean`

#### Returns

`object`

##### a

> **a**: `number`

##### b

> **b**: `number`

##### c

> **c**: `number`

##### d

> **d**: `number`

##### e

> **e**: `number`

##### f

> **f**: `number`

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

Defined in: [packages/board/src/camera/interface.ts:45](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L45)

#### Parameters

##### devicePixelRatio

`number`

##### alignCoordinateSystem

`boolean`

#### Returns

`object`

##### rotation

> **rotation**: `number`

##### scale

> **scale**: `object`

###### scale.x

> **x**: `number`

###### scale.y

> **y**: `number`

##### translation

> **translation**: `object`

###### translation.x

> **x**: `number`

###### translation.y

> **y**: `number`

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/interface.ts:40](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L40)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`void`

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `void`

Defined in: [packages/board/src/camera/interface.ts:39](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L39)

#### Parameters

##### maxZoomLevel

`number`

#### Returns

`void`

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `void`

Defined in: [packages/board/src/camera/interface.ts:38](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L38)

#### Parameters

##### minZoomLevel

`number`

#### Returns

`void`

***

### setPosition()

> **setPosition**(`destination`): `boolean`

Defined in: [packages/board/src/camera/interface.ts:35](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L35)

#### Parameters

##### destination

`Point`

#### Returns

`boolean`

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

Defined in: [packages/board/src/camera/interface.ts:37](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L37)

#### Parameters

##### rotation

`number`

#### Returns

`boolean`

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/interface.ts:41](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L41)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`void`

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

Defined in: [packages/board/src/camera/interface.ts:36](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L36)

#### Parameters

##### zoomLevel

`number`

#### Returns

`boolean`

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate?`): `object`

Defined in: [packages/board/src/camera/interface.ts:33](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L33)

#### Parameters

##### alignCoordinate?

`boolean`

#### Returns

`object`

##### max

> **max**: `Point`

##### min

> **min**: `Point`

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate?`): `object`

Defined in: [packages/board/src/camera/interface.ts:34](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/board/src/camera/interface.ts#L34)

#### Parameters

##### alignCoordinate?

`boolean`

#### Returns

`object`

##### bottom

> **bottom**: `object`

###### bottom.left

> **left**: `Point`

###### bottom.right

> **right**: `Point`

##### top

> **top**: `object`

###### top.left

> **left**: `Point`

###### top.right

> **right**: `Point`
