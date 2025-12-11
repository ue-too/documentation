[@ue-too/board](../globals.md) / Board

# Class: Board

Defined in: [packages/board/src/boardify/index.ts:46](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L46)

Usage
```typescript
const canvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const board = new Board(canvasElement);

function draw(timestamp: number) {
  board.step(timestamp);

  // because board can be initialized without a canvas element, the context can be undefined until the canvas is attached
  if(board.context == undefined) {
    return;
  }

  // draw after the board has stepped
  // the coordinate system is the same as before; just that (0, 0) is at the center of the canvas when the camera position is at (0, 0)
  board.context.beginPath();
  board.context.rect(0, 0, 100, 100);
  board.context.fill();

  requestAnimationFrame(draw);
}

```

## Constructors

### Constructor

> **new Board**(`canvas?`, `debug?`): `Board`

Defined in: [packages/board/src/boardify/index.ts:68](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L68)

#### Parameters

##### canvas?

`HTMLCanvasElement`

##### debug?

`boolean` = `false`

#### Returns

`Board`

## Accessors

### alignCoordinateSystem

#### Get Signature

> **get** **alignCoordinateSystem**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:168](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L168)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`align`): `void`

Defined in: [packages/board/src/boardify/index.ts:162](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L162)

##### Description

This is an attribute that determines if the coordinate system should be aligned with the one of the HTML canvas element. The default is true.
If you set this to true, the coordinate system will be aligned with the one of the HTML canvas element.
If you change this value during runtime, you should update the context to be aligned with the new coordinate system. (just call board.context again)

##### Parameters

###### align

`boolean`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Defined in: [packages/board/src/boardify/index.ts:249](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L249)

##### Description

The underlying camera of the board. The camera of the board can be switched.
The boundaries are based on camera meaning you can have cameras with different boundaries, and you can switch between them during runtime.

##### Returns

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [packages/board/src/boardify/index.ts:253](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L253)

##### Parameters

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

##### Returns

`void`

***

### cameraMovementOnMouseEdge

#### Get Signature

> **get** **cameraMovementOnMouseEdge**(): [`EdgeAutoCameraInput`](EdgeAutoCameraInput.md)

Defined in: [packages/board/src/boardify/index.ts:269](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L269)

##### Returns

[`EdgeAutoCameraInput`](EdgeAutoCameraInput.md)

***

### cameraMux

#### Get Signature

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/boardify/index.ts:261](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L261)

##### Returns

[`CameraMux`](../interfaces/CameraMux.md)

#### Set Signature

> **set** **cameraMux**(`cameraMux`): `void`

Defined in: [packages/board/src/boardify/index.ts:265](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L265)

##### Parameters

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

##### Returns

`void`

***

### clampRotation

#### Get Signature

> **get** **clampRotation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:475](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L475)

##### Returns

`boolean`

#### Set Signature

> **set** **clampRotation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:479](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L479)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clampTranslation

#### Get Signature

> **get** **clampTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:459](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L459)

##### Returns

`boolean`

#### Set Signature

> **set** **clampTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:463](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L463)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clampZoom

#### Get Signature

> **get** **clampZoom**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:467](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L467)

##### Returns

`boolean`

#### Set Signature

> **set** **clampZoom**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:471](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L471)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### context

#### Get Signature

> **get** **context**(): `CanvasRenderingContext2D` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:192](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L192)

##### Description

The context used to draw on the canvas.
If alignCoordinateSystem is false, this returns a proxy that automatically negates y-coordinates for relevant drawing methods.

##### Returns

`CanvasRenderingContext2D` \| `undefined`

***

### fullScreen

#### Get Signature

> **get** **fullScreen**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:176](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L176)

##### Description

Determines if the board should be full screen. If this is set to true, the width and height of the board will be set to the window's inner width and inner height respectively, 
and the width and height of the board will resize with the window.

##### Returns

`boolean`

#### Set Signature

> **set** **fullScreen**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:180](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L180)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/board/src/boardify/index.ts:153](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L153)

##### Returns

`number`

***

### kmtParser

#### Get Signature

> **get** **kmtParser**(): [`KMTEventParser`](../interfaces/KMTEventParser.md)

Defined in: [packages/board/src/boardify/index.ts:227](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L227)

##### Returns

[`KMTEventParser`](../interfaces/KMTEventParser.md)

#### Set Signature

> **set** **kmtParser**(`parser`): `void`

Defined in: [packages/board/src/boardify/index.ts:221](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L221)

##### Description

The strategy used to handle the keyboard, mouse events. The default strategy is the DefaultBoardKMTStrategy. 
You can implement your own strategy by implementing the BoardKMTStrategy interface.

##### Parameters

###### parser

[`KMTEventParser`](../interfaces/KMTEventParser.md)

##### Returns

`void`

***

### limitEntireViewPort

#### Get Signature

> **get** **limitEntireViewPort**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:213](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L213)

##### Returns

`boolean`

#### Set Signature

> **set** **limitEntireViewPort**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:203](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L203)

##### Description

Determines the behavior of the camera when the camera is at the edge of the boundaries. If set to true, the entire view port would not move beyond the boundaries.
If set to false, only the center of the camera is bounded by the boundaries.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### maxHalfTransHeight

#### Get Signature

> **get** **maxHalfTransHeight**(): `number` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:348](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L348)

##### Description

The max translation height of the camera. This is the maximum distance the camera can move in the vertical direction.

##### Returns

`number` \| `undefined`

***

### maxHalfTransWidth

#### Get Signature

> **get** **maxHalfTransWidth**(): `number` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:355](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L355)

##### Description

The max translation width of the camera. This is the maximum distance the camera can move in the horizontal direction.

##### Returns

`number` \| `undefined`

***

### restrictRelativeXTranslation

#### Get Signature

> **get** **restrictRelativeXTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:411](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L411)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRelativeXTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:427](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L427)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictRelativeYTranslation

#### Get Signature

> **get** **restrictRelativeYTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:415](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L415)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRelativeYTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:431](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L431)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictRotation

#### Get Signature

> **get** **restrictRotation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:451](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L451)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRotation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:455](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L455)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictXTranslation

#### Get Signature

> **get** **restrictXTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:419](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L419)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictXTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:435](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L435)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictYTranslation

#### Get Signature

> **get** **restrictYTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:423](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L423)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictYTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:439](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L439)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictZoom

#### Get Signature

> **get** **restrictZoom**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:443](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L443)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictZoom**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:447](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L447)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### touchParser

#### Get Signature

> **get** **touchParser**(): [`TouchEventParser`](../interfaces/TouchEventParser.md)

Defined in: [packages/board/src/boardify/index.ts:241](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L241)

##### Returns

[`TouchEventParser`](../interfaces/TouchEventParser.md)

#### Set Signature

> **set** **touchParser**(`parser`): `void`

Defined in: [packages/board/src/boardify/index.ts:235](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L235)

##### Description

The parser used to handle touch events. The default parser is the DefaultTouchParser.
You can have your own parser by implementing the BoardTouchParser interface.

##### Parameters

###### parser

[`TouchEventParser`](../interfaces/TouchEventParser.md)

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/boardify/index.ts:149](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L149)

##### Returns

`number`

## Methods

### attach()

> **attach**(`canvas`, `debug`): `void`

Defined in: [packages/board/src/boardify/index.ts:117](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L117)

#### Parameters

##### canvas

`HTMLCanvasElement`

##### debug

`boolean` = `false`

#### Returns

`void`

***

### convertWindowPoint2WorldCoord()

> **convertWindowPoint2WorldCoord**(`clickPointInWindow`): `Point`

Defined in: [packages/board/src/boardify/index.ts:312](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L312)

#### Parameters

##### clickPointInWindow

`Point`

The point in window coordinates to convert.

#### Returns

`Point`

The converted point in world coordinates.

#### Description

Converts a point from window coordinates to world coordinates.

***

### getCameraRig()

> **getCameraRig**(): [`CameraRig`](../interfaces/CameraRig.md)

Defined in: [packages/board/src/boardify/index.ts:483](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L483)

#### Returns

[`CameraRig`](../interfaces/CameraRig.md)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/boardify/index.ts:329](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L329)

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

#### Parameters

##### eventName

`K`

The event name to listen for. The events are "pan", "zoom", and "rotate".

##### callback

(`event`, `cameraState`) => `void`

The callback function to call when the event is triggered. The event provided to the callback is different for the different events.

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

The converted point in world coordinates.

#### Description

Add an camera movement event listener. The events are "pan", "zoom", and "rotate".
There's also an "all" event that will be triggered when any of the above events are triggered.

***

### onInput()

> **onInput**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

Defined in: [packages/board/src/boardify/index.ts:341](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L341)

#### Type Parameters

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### Parameters

##### eventName

`K`

##### callback

(`event`) => `void`

#### Returns

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### Description

Add an input event listener. The events are "pan", "zoom", and "rotate". This is different from the camera event listener as this is for input events. 
There's also an "all" event that will be triggered when any of the above events are triggered.
Input event does not necesarily mean that the camera will move. The input events are the events triggered when the user interacts with the board.

***

### step()

> **step**(`timestamp`): `void`

Defined in: [packages/board/src/boardify/index.ts:277](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L277)

#### Parameters

##### timestamp

`number`

#### Returns

`void`

#### Description

This is the step function that is called in the animation frame. This function is responsible for updating the canvas context and the camera state.

## Helper Methods

### setMaxTransWidthWithFixedMaxBoundary()

> **setMaxTransWidthWithFixedMaxBoundary**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:394](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L394)

#### Parameters

##### value

`number`

#### Returns

`void`

#### Description

This function sets the max translation width of the camera while fixing the minimum x boundary.

***

### setMaxTransWidthWithFixedMinBoundary()

> **setMaxTransWidthWithFixedMinBoundary**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:373](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L373)

#### Parameters

##### value

`number`

#### Returns

`void`

#### Description

This function sets the max translation width of the camera while fixing the minimum x boundary.

## LifeCycle

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/boardify/index.ts:139](https://github.com/ue-too/ue-too/blob/e0ad36978d99a0fba62213691fb721d4dca7c035/packages/board/src/boardify/index.ts#L139)

#### Returns

`void`

#### Description

This function is used to clean up the board. It removes all the event listeners and disconnects the resize observer and the attribute observer.
