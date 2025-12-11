[@ue-too/board](../globals.md) / DefaultCameraRig

# Class: DefaultCameraRig

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:359](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L359)

## Description

The context for the pan control state machine.

## Implements

- [`CameraRig`](../interfaces/CameraRig.md)

## Constructors

### Constructor

> **new DefaultCameraRig**(`config`, `camera`): `DefaultCameraRig`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:370](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L370)

#### Parameters

##### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md) & [`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md) & [`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

##### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md) = `...`

#### Returns

`DefaultCameraRig`

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:509](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L509)

##### Returns

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:513](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L513)

##### Parameters

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

##### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`camera`](../interfaces/CameraRig.md#camera)

***

### config

#### Get Signature

> **get** **config**(): [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:517](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L517)

##### Returns

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:521](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L521)

##### Parameters

###### config

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

##### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`config`](../interfaces/CameraRig.md#config)

***

### limitEntireViewPort

#### Get Signature

> **get** **limitEntireViewPort**(): `boolean`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:505](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L505)

##### Description

Whether the entire view port is limited.

##### Returns

`boolean`

#### Set Signature

> **set** **limitEntireViewPort**(`limit`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:498](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L498)

##### Parameters

###### limit

`boolean`

##### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`limitEntireViewPort`](../interfaces/CameraRig.md#limitentireviewport)

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:535](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L535)

#### Returns

`void`

#### Description

Cleanup the camera rig.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`cleanup`](../interfaces/CameraRig.md#cleanup)

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:528](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L528)

#### Parameters

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

#### Returns

`void`

#### Description

Configure the camera rig.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`configure`](../interfaces/CameraRig.md#configure)

***

### panByViewPort()

> **panByViewPort**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:453](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L453)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Description

Pan By a certain amount. (delta is in the viewport coordinate system)

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panByViewPort`](../interfaces/CameraRig.md#panbyviewport)

***

### panByWorld()

> **panByWorld**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:461](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L461)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Description

Pan to a certain point. (target is in the world coordinate system)

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panByWorld`](../interfaces/CameraRig.md#panbyworld)

***

### panToViewPort()

> **panToViewPort**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:477](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L477)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Description

Pan to a certain point. (target is in the viewport coordinate system)

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panToViewPort`](../interfaces/CameraRig.md#pantoviewport)

***

### panToWorld()

> **panToWorld**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:469](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L469)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Description

Pan to a certain point. (target is in the world coordinate system)

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panToWorld`](../interfaces/CameraRig.md#pantoworld)

***

### rotateBy()

> **rotateBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:485](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L485)

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Description

Rotate by a certain amount.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`rotateBy`](../interfaces/CameraRig.md#rotateby)

***

### rotateTo()

> **rotateTo**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:493](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L493)

#### Parameters

##### target

`number`

#### Returns

`void`

#### Description

Rotate to a certain angle.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`rotateTo`](../interfaces/CameraRig.md#rotateto)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:541](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L541)

#### Returns

`void`

#### Description

Setup the camera rig.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`setup`](../interfaces/CameraRig.md#setup)

***

### update()

> **update**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:544](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L544)

#### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`update`](../interfaces/CameraRig.md#update)

***

### zoomBy()

> **zoomBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:418](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L418)

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Description

Zoom by a certain amount with respect to the center of the viewport.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomBy`](../interfaces/CameraRig.md#zoomby)

***

### zoomByAt()

> **zoomByAt**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:397](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L397)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

#### Description

Zoom by a certain amount at a certain point. The point is in the viewport coordinate system.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomByAt`](../interfaces/CameraRig.md#zoombyat)

***

### zoomByAtWorld()

> **zoomByAtWorld**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:439](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L439)

#### Parameters

##### delta

`number`

##### at

`Point`

#### Returns

`void`

#### Description

Zoom by a certain amount with respect to a point in the world coordinate system.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomByAtWorld`](../interfaces/CameraRig.md#zoombyatworld)

***

### zoomTo()

> **zoomTo**(`targetZoom`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:411](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L411)

#### Parameters

##### targetZoom

`number`

#### Returns

`void`

#### Description

Zoom to a certain zoom level with respect to the center of the viewport.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomTo`](../interfaces/CameraRig.md#zoomto)

***

### zoomToAt()

> **zoomToAt**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:384](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L384)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

#### Description

Zoom to a certain zoom level at a certain point. The point is in the viewport coordinate system.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomToAt`](../interfaces/CameraRig.md#zoomtoat)

***

### zoomToAtWorld()

> **zoomToAtWorld**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:425](https://github.com/ue-too/ue-too/blob/407e414f82d0bb1a2a3cfbf5160e331d5a81d8be/packages/board/src/camera/camera-rig/camera-rig.ts#L425)

#### Parameters

##### targetZoom

`number`

##### at

`Point`

#### Returns

`void`

#### Description

Zoom to a certain zoom level with respect to a point in the world coordinate system.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomToAtWorld`](../interfaces/CameraRig.md#zoomtoatworld)
