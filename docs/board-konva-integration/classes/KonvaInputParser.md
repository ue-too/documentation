[@ue-too/board-konva-integration](../globals.md) / KonvaInputParser

# Class: KonvaInputParser

Defined in: [konva-input-event-parser.ts:6](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L6)

## Constructors

### Constructor

> **new KonvaInputParser**(`stage`, `kmtInputStateMachine`, `inputOrchestrator`): `KonvaInputParser`

Defined in: [konva-input-event-parser.ts:13](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L13)

#### Parameters

##### stage

`Stage`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### Returns

`KonvaInputParser`

## Methods

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [konva-input-event-parser.ts:22](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L22)

#### Returns

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

Defined in: [konva-input-event-parser.ts:104](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L104)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

Defined in: [konva-input-event-parser.ts:114](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L114)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:58](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L58)

#### Parameters

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:82](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L82)

#### Parameters

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:70](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L70)

#### Parameters

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:95](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L95)

#### Parameters

##### eventObject

`KonvaEventObject`\<`WheelEvent`, `Stage`\>

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [konva-input-event-parser.ts:31](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L31)

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [konva-input-event-parser.ts:40](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-konva-integration/src/konva-input-event-parser.ts#L40)

#### Returns

`void`
