[@ue-too/board](../globals.md) / VanillaKMTEventParser

# Class: VanillaKMTEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:73](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L73)

## Description

The vanilla keyboard mouse and trackpad(KMT) event parser.
This parser converts the raw events to events that can be used by the input state machine.

## Implements

- [`KMTEventParser`](../interfaces/KMTEventParser.md)

## Constructors

### Constructor

> **new VanillaKMTEventParser**(`kmtInputStateMachine`, `canvas?`): `VanillaKMTEventParser`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:82](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L82)

#### Parameters

##### kmtInputStateMachine

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

##### canvas?

`HTMLCanvasElement`

#### Returns

`VanillaKMTEventParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:90](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L90)

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:94](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L94)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disabled`](../interfaces/KMTEventParser.md#disabled)

***

### stateMachine

#### Get Signature

> **get** **stateMachine**(): [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:98](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L98)

##### Returns

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`stateMachine`](../interfaces/KMTEventParser.md#statemachine)

## Methods

### addEventListeners()

> **addEventListeners**(`signal`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:102](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L102)

#### Parameters

##### signal

`AbortSignal`

#### Returns

`void`

***

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:211](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L211)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`attach`](../interfaces/KMTEventParser.md#attach)

***

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:127](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L127)

#### Returns

`void`

***

### keypressHandler()

> **keypressHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:189](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L189)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:202](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L202)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:136](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L136)

#### Parameters

##### e

[`MinimumPointerEvent`](../type-aliases/MinimumPointerEvent.md)

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:164](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L164)

#### Parameters

##### e

[`MinimumPointerEvent`](../type-aliases/MinimumPointerEvent.md)

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:150](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L150)

#### Parameters

##### e

[`MinimumPointerEvent`](../type-aliases/MinimumPointerEvent.md)

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:179](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L179)

#### Parameters

##### e

[`MinimumWheelEvent`](../type-aliases/MinimumWheelEvent.md)

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:114](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L114)

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`setUp`](../interfaces/KMTEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:121](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L121)

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`tearDown`](../interfaces/KMTEventParser.md#teardown)
