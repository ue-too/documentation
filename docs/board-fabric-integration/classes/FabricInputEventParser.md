[@ue-too/board-fabric-integration](../globals.md) / FabricInputEventParser

# Class: FabricInputEventParser

Defined in: [fabric-input-event-parser.ts:5](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L5)

## Constructors

### Constructor

> **new FabricInputEventParser**(`fabricCanvas`, `kmtInputStateMachine`, `inputOrchestrator`): `FabricInputEventParser`

Defined in: [fabric-input-event-parser.ts:14](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L14)

#### Parameters

##### fabricCanvas

`StaticCanvas`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### Returns

`FabricInputEventParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [fabric-input-event-parser.ts:85](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L85)

##### Returns

`boolean`

## Methods

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [fabric-input-event-parser.ts:23](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L23)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [fabric-input-event-parser.ts:77](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L77)

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [fabric-input-event-parser.ts:81](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L81)

#### Returns

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:140](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L140)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:153](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L153)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:59](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L59)

#### Parameters

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:108](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L108)

#### Parameters

##### event

`TPointerEventInfo`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:89](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L89)

#### Parameters

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:128](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L128)

#### Parameters

##### event

`TPointerEventInfo`\<`WheelEvent`\>

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [fabric-input-event-parser.ts:32](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L32)

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [fabric-input-event-parser.ts:41](https://github.com/ue-too/ue-too/blob/1055c6abca1ea3a0e952b0825f36e0ca2527df85/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L41)

#### Returns

`void`
