[@ue-too/board](../globals.md) / DefaultBoardCamera

# Class: DefaultBoardCamera

Defined in: [packages/board/src/camera/default-camera.ts:26](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L26)

## Description

The default board camera. This is basically the same as the BaseCamera class.
But it's observable.

## Implements

- [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

## Constructors

### Constructor

> **new DefaultBoardCamera**(`viewPortWidth`, `viewPortHeight`, `position`, `rotation`, `zoomLevel`, `boundaries`, `zoomLevelBoundaries`, `rotationBoundaries`): `DefaultBoardCamera`

Defined in: [packages/board/src/camera/default-camera.ts:40](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L40)

#### Parameters

##### viewPortWidth

`number` = `DEFAULT_BOARD_CAMERA_VIEWPORT_WIDTH`

The width of the viewport. (The width of the canvas in css pixels)

##### viewPortHeight

`number` = `DEFAULT_BOARD_CAMERA_VIEWPORT_HEIGHT`

The height of the viewport. (The height of the canvas in css pixels)

##### position

`Point` = `...`

The position of the camera in the world coordinate system

##### rotation

`number` = `0`

The rotation of the camera in the world coordinate system

##### zoomLevel

`number` = `1`

The zoom level of the camera

##### boundaries

[`Boundaries`](../type-aliases/Boundaries.md) = `DEFAULT_BOARD_CAMERA_BOUNDARIES`

The boundaries of the camera in the world coordinate system

##### zoomLevelBoundaries

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) = `DEFAULT_BOARD_CAMERA_ZOOM_BOUNDARIES`

The boundaries of the zoom level of the camera

##### rotationBoundaries

The boundaries of the rotation of the camera

[`RotationLimits`](../type-aliases/RotationLimits.md) | `undefined`

#### Returns

`DefaultBoardCamera`

## Camera

### boundaries

#### Get Signature

> **get** **boundaries**(): [`Boundaries`](../type-aliases/Boundaries.md) \| `undefined`

Defined in: [packages/board/src/camera/default-camera.ts:50](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L50)

##### Description

The boundaries of the camera in the world coordinate system.

##### Returns

[`Boundaries`](../type-aliases/Boundaries.md) \| `undefined`

#### Set Signature

> **set** **boundaries**(`boundaries`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:54](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L54)

##### Parameters

###### boundaries

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

##### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`boundaries`](../interfaces/ObservableBoardCamera.md#boundaries)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:89](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L89)

##### Description

The position of the camera in the world coordinate system.

##### Returns

`Point`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`position`](../interfaces/ObservableBoardCamera.md#position)

***

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:163](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L163)

##### Description

The rotation of the camera in the world coordinate system.

##### Returns

`number`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`rotation`](../interfaces/ObservableBoardCamera.md#rotation)

***

### rotationBoundaries

#### Get Signature

> **get** **rotationBoundaries**(): [`RotationLimits`](../type-aliases/RotationLimits.md) \| `undefined`

Defined in: [packages/board/src/camera/default-camera.ts:172](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L172)

##### Description

The boundaries of the rotation of the camera.

##### Returns

[`RotationLimits`](../type-aliases/RotationLimits.md) \| `undefined`

#### Set Signature

> **set** **rotationBoundaries**(`rotationBoundaries`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:176](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L176)

##### Parameters

###### rotationBoundaries

[`RotationLimits`](../type-aliases/RotationLimits.md) | `undefined`

##### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`rotationBoundaries`](../interfaces/ObservableBoardCamera.md#rotationboundaries)

***

### viewPortHeight

#### Get Signature

> **get** **viewPortHeight**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:76](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L76)

##### Description

The height of the viewport. (The height of the canvas in css pixels)

##### Returns

`number`

#### Set Signature

> **set** **viewPortHeight**(`height`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:80](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L80)

##### Parameters

###### height

`number`

##### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortHeight`](../interfaces/ObservableBoardCamera.md#viewportheight)

***

### viewPortWidth

#### Get Signature

> **get** **viewPortWidth**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:63](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L63)

##### Description

The width of the viewport. (The width of the canvas in css pixels)

##### Returns

`number`

#### Set Signature

> **set** **viewPortWidth**(`width`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:67](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L67)

##### Parameters

###### width

`number`

##### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortWidth`](../interfaces/ObservableBoardCamera.md#viewportwidth)

***

### zoomBoundaries

#### Get Signature

> **get** **zoomBoundaries**(): [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) \| `undefined`

Defined in: [packages/board/src/camera/default-camera.ts:125](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L125)

##### Description

The boundaries of the zoom level of the camera.

##### Returns

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) \| `undefined`

#### Set Signature

> **set** **zoomBoundaries**(`zoomBoundaries`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:129](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L129)

##### Parameters

###### zoomBoundaries

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

##### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`zoomBoundaries`](../interfaces/ObservableBoardCamera.md#zoomboundaries)

***

### zoomLevel

#### Get Signature

> **get** **zoomLevel**(): `number`

Defined in: [packages/board/src/camera/default-camera.ts:116](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L116)

##### Description

The zoom level of the camera.

##### Returns

`number`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`zoomLevel`](../interfaces/ObservableBoardCamera.md#zoomlevel)

## Other

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:227](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L227)

#### Parameters

##### point

`Point`

The point in the viewport coordinate system.

#### Returns

`Point`

The point in the world coordinate system.

#### Description

Converts a point from the viewport coordinate system to the world coordinate system.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`convertFromViewPort2WorldSpace`](../interfaces/ObservableBoardCamera.md#convertfromviewport2worldspace)

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:237](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L237)

#### Parameters

##### point

`Point`

The point in the world coordinate system.

#### Returns

`Point`

The point in the viewport coordinate system.

#### Description

Converts a point from the world coordinate system to the viewport coordinate system.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`convertFromWorld2ViewPort`](../interfaces/ObservableBoardCamera.md#convertfromworld2viewport)

***

### ~~getCameraOriginInWindow()~~

> **getCameraOriginInWindow**(`centerInWindow`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:217](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L217)

#### Parameters

##### centerInWindow

`Point`

The center of the camera in the window coordinate system.

#### Returns

`Point`

The origin of the camera in the window coordinate system.

#### Description

The origin of the camera in the window coordinate system.

#### Deprecated

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getCameraOriginInWindow`](../interfaces/ObservableBoardCamera.md#getcameraorigininwindow)

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoorindate`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Defined in: [packages/board/src/camera/default-camera.ts:192](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L192)

#### Parameters

##### devicePixelRatio

`number`

The device pixel ratio of the canvas

##### alignCoorindate

`boolean` = `true`

Whether to align the coordinate system to the camera's position

#### Returns

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix

#### Description

The order of the transformation is as follows:
1. Scale (scale the context using the device pixel ratio)
2. Translation (move the origin of the context to the center of the canvas)
3. Rotation (rotate the context negatively the rotation of the camera)
4. Zoom (scale the context using the zoom level of the camera)
5. Translation (move the origin of the context to the position of the camera in the context coordinate system)

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getTransform`](../interfaces/ObservableBoardCamera.md#gettransform)

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

Defined in: [packages/board/src/camera/default-camera.ts:308](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L308)

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

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getTRS`](../interfaces/ObservableBoardCamera.md#gettrs)

***

### invertFromWorldSpace2ViewPort()

> **invertFromWorldSpace2ViewPort**(`point`): `Point`

Defined in: [packages/board/src/camera/default-camera.ts:247](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L247)

#### Parameters

##### point

`Point`

The point in the world coordinate system.

#### Returns

`Point`

The point in the viewport coordinate system.

#### Description

Inverts a point from the world coordinate system to the viewport coordinate system.

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/camera/default-camera.ts:304](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L304)

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

#### Parameters

##### eventName

`K`

The name of the event to subscribe to.

##### callback

(`event`, `cameraState`) => `void`

The callback function to be called when the event is triggered.

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

The options for the subscription.

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

The unsubscribe function.

#### Description

This function is used to subscribe to the camera events.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`on`](../interfaces/ObservableBoardCamera.md#on)

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:255](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L255)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setHorizontalBoundaries`](../interfaces/ObservableBoardCamera.md#sethorizontalboundaries)

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:133](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L133)

#### Parameters

##### maxZoomLevel

`number`

#### Returns

`boolean`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setMaxZoomLevel`](../interfaces/ObservableBoardCamera.md#setmaxzoomlevel)

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:142](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L142)

#### Parameters

##### minZoomLevel

`number`

#### Returns

`boolean`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setMinZoomLevel`](../interfaces/ObservableBoardCamera.md#setminzoomlevel)

***

### setPosition()

> **setPosition**(`destination`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:102](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L102)

#### Parameters

##### destination

`Point`

The destination point of the camera.

#### Returns

`boolean`

Whether the position is set successfully.

#### Description

This function is used to set the position of the camera.

#### Description

This function has a guard that checks if the destination point is within the boundaries of the camera.
If the destination point is not within the boundaries, the function will return false and the position will not be updated.
If the destination point is within the boundaries, the function will return true and the position will be updated.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setPosition`](../interfaces/ObservableBoardCamera.md#setposition)

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:201](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L201)

#### Parameters

##### rotation

`number`

The rotation of the camera in the world coordinate system.

#### Returns

`boolean`

Whether the rotation is set successfully.

#### Description

This function is used to set the rotation of the camera.

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setRotation`](../interfaces/ObservableBoardCamera.md#setrotation)

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

Defined in: [packages/board/src/camera/default-camera.ts:278](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L278)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`void`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setVerticalBoundaries`](../interfaces/ObservableBoardCamera.md#setverticalboundaries)

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

Defined in: [packages/board/src/camera/default-camera.ts:149](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L149)

#### Parameters

##### zoomLevel

`number`

#### Returns

`boolean`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setZoomLevel`](../interfaces/ObservableBoardCamera.md#setzoomlevel)

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate`): `object`

Defined in: [packages/board/src/camera/default-camera.ts:316](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L316)

#### Parameters

##### alignCoordinate

`boolean` = `true`

#### Returns

`object`

##### max

> **max**: `Point`

##### min

> **min**: `Point`

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortAABB`](../interfaces/ObservableBoardCamera.md#viewportaabb)

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate`): `object`

Defined in: [packages/board/src/camera/default-camera.ts:312](https://github.com/ue-too/ue-too/blob/fe7fe80879019da785d08f475b37a73725116e88/packages/board/src/camera/default-camera.ts#L312)

#### Parameters

##### alignCoordinate

`boolean` = `true`

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

#### Implementation of

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortInWorldSpace`](../interfaces/ObservableBoardCamera.md#viewportinworldspace)
