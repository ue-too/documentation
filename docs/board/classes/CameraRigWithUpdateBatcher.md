[@ue-too/board](../globals.md) / CameraRigWithUpdateBatcher

# Class: CameraRigWithUpdateBatcher

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:51](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L51)

## Description

The camera rig.

This is a consolidated handler function for pan, zoom and rotation.
Essentially, it is a controller that controls the camera, so you don't have to figure out some of the math that is involved in panning, zooming and rotating the camera.

## Implements

- [`CameraRig`](../interfaces/CameraRig.md)

## Constructors

### Constructor

> **new CameraRigWithUpdateBatcher**(`config`, `camera`): `CameraRigWithUpdateBatcher`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:64](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L64)

#### Parameters

##### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md) & [`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md) & [`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

##### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md) = `...`

#### Returns

`CameraRigWithUpdateBatcher`

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:180](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L180)

##### Returns

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`camera`](../interfaces/CameraRig.md#camera)

***

### config

#### Get Signature

> **get** **config**(): [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:184](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L184)

##### Returns

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:188](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L188)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:176](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L176)

##### Description

Whether the entire view port is limited.

##### Returns

`boolean`

#### Set Signature

> **set** **limitEntireViewPort**(`limit`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:169](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L169)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:331](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L331)

#### Returns

`void`

#### Description

Cleanup the camera rig.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`cleanup`](../interfaces/CameraRig.md#cleanup)

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:324](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L324)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:141](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L141)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panByViewPort`](../interfaces/CameraRig.md#panbyviewport)

***

### panByWorld()

> **panByWorld**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:137](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L137)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panByWorld`](../interfaces/CameraRig.md#panbyworld)

***

### panToViewPort()

> **panToViewPort**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:150](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L150)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panToViewPort`](../interfaces/CameraRig.md#pantoviewport)

***

### panToWorld()

> **panToWorld**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:146](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L146)

#### Parameters

##### target

`Point`

#### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panToWorld`](../interfaces/CameraRig.md#pantoworld)

***

### rotateBy()

> **rotateBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:158](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L158)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:165](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L165)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:337](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L337)

#### Returns

`void`

#### Description

Setup the camera rig.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`setup`](../interfaces/CameraRig.md#setup)

***

### update()

> **update**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:274](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L274)

#### Returns

`void`

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`update`](../interfaces/CameraRig.md#update)

***

### updatePosition()

> **updatePosition**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:192](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L192)

#### Returns

`void`

***

### updateRotation()

> **updateRotation**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:255](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L255)

#### Returns

`void`

***

### updateZoom()

> **updateZoom**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:209](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L209)

#### Returns

`void`

***

### zoomBy()

> **zoomBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:102](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L102)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:88](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L88)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:116](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L116)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:95](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L95)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:81](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L81)

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

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:109](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/camera/camera-rig/camera-rig.ts#L109)

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
