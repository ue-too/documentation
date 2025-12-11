[@ue-too/board](../globals.md) / ObservableBoardCamera

# Interface: ObservableBoardCamera

Defined in: [packages/board/src/camera/interface.ts:15](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L15)

## Description

The interface for the observable board camera.

## Extends

- [`BoardCamera`](BoardCamera.md)

## Properties

### boundaries?

> `optional` **boundaries**: [`Boundaries`](../type-aliases/Boundaries.md)

Defined in: [packages/board/src/camera/interface.ts:30](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L30)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`boundaries`](BoardCamera.md#boundaries)

***

### position

> **position**: `Point`

Defined in: [packages/board/src/camera/interface.ts:25](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L25)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`position`](BoardCamera.md#position)

***

### rotation

> **rotation**: `number`

Defined in: [packages/board/src/camera/interface.ts:26](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L26)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`rotation`](BoardCamera.md#rotation)

***

### rotationBoundaries?

> `optional` **rotationBoundaries**: [`RotationLimits`](../type-aliases/RotationLimits.md)

Defined in: [packages/board/src/camera/interface.ts:32](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L32)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`rotationBoundaries`](BoardCamera.md#rotationboundaries)

***

### viewPortHeight

> **viewPortHeight**: `number`

Defined in: [packages/board/src/camera/interface.ts:29](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L29)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`viewPortHeight`](BoardCamera.md#viewportheight)

***

### viewPortWidth

> **viewPortWidth**: `number`

Defined in: [packages/board/src/camera/interface.ts:28](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L28)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`viewPortWidth`](BoardCamera.md#viewportwidth)

***

### zoomBoundaries?

> `optional` **zoomBoundaries**: [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Defined in: [packages/board/src/camera/interface.ts:31](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L31)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`zoomBoundaries`](BoardCamera.md#zoomboundaries)

***

### zoomLevel

> **zoomLevel**: `number`

Defined in: [packages/board/src/camera/interface.ts:27](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L27)

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`zoomLevel`](BoardCamera.md#zoomlevel)

## Methods

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

Defined in: [packages/board/src/camera/interface.ts:43](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L43)

#### Parameters

##### point

`Point`

#### Returns

`Point`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`convertFromViewPort2WorldSpace`](BoardCamera.md#convertfromviewport2worldspace)

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

Defined in: [packages/board/src/camera/interface.ts:44](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L44)

#### Parameters

##### point

`Point`

#### Returns

`Point`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`convertFromWorld2ViewPort`](BoardCamera.md#convertfromworld2viewport)

***

### getCameraOriginInWindow()

> **getCameraOriginInWindow**(`centerInWindow`): `Point`

Defined in: [packages/board/src/camera/interface.ts:42](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L42)

#### Parameters

##### centerInWindow

`Point`

#### Returns

`Point`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`getCameraOriginInWindow`](BoardCamera.md#getcameraorigininwindow)

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

Defined in: [packages/board/src/camera/interface.ts:46](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L46)

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

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`getTransform`](BoardCamera.md#gettransform)

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

Defined in: [packages/board/src/camera/interface.ts:45](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L45)

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

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`getTRS`](BoardCamera.md#gettrs)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/camera/interface.ts:16](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L16)

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

#### Parameters

##### eventName

`K`

##### callback

(`event`, `cameraState`) => `void`

##### options?

[`SubscriptionOptions`](SubscriptionOptions.md)

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/interface.ts:40](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L40)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`void`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setHorizontalBoundaries`](BoardCamera.md#sethorizontalboundaries)

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `void`

Defined in: [packages/board/src/camera/interface.ts:39](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L39)

#### Parameters

##### maxZoomLevel

`number`

#### Returns

`void`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setMaxZoomLevel`](BoardCamera.md#setmaxzoomlevel)

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `void`

Defined in: [packages/board/src/camera/interface.ts:38](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L38)

#### Parameters

##### minZoomLevel

`number`

#### Returns

`void`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setMinZoomLevel`](BoardCamera.md#setminzoomlevel)

***

### setPosition()

> **setPosition**(`destination`): `boolean`

Defined in: [packages/board/src/camera/interface.ts:35](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L35)

#### Parameters

##### destination

`Point`

#### Returns

`boolean`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setPosition`](BoardCamera.md#setposition)

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

Defined in: [packages/board/src/camera/interface.ts:37](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L37)

#### Parameters

##### rotation

`number`

#### Returns

`boolean`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setRotation`](BoardCamera.md#setrotation)

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/interface.ts:41](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L41)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`void`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setVerticalBoundaries`](BoardCamera.md#setverticalboundaries)

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

Defined in: [packages/board/src/camera/interface.ts:36](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L36)

#### Parameters

##### zoomLevel

`number`

#### Returns

`boolean`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`setZoomLevel`](BoardCamera.md#setzoomlevel)

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate?`): `object`

Defined in: [packages/board/src/camera/interface.ts:33](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L33)

#### Parameters

##### alignCoordinate?

`boolean`

#### Returns

`object`

##### max

> **max**: `Point`

##### min

> **min**: `Point`

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`viewPortAABB`](BoardCamera.md#viewportaabb)

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate?`): `object`

Defined in: [packages/board/src/camera/interface.ts:34](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/interface.ts#L34)

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

#### Inherited from

[`BoardCamera`](BoardCamera.md).[`viewPortInWorldSpace`](BoardCamera.md#viewportinworldspace)
