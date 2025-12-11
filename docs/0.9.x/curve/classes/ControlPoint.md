[@ue-too/curve](../globals.md) / ControlPoint

# Class: ControlPoint

Defined in: [packages/curve/src/composite-curve.ts:10](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L10)

## Constructors

### Constructor

> **new ControlPoint**(`position`, `leftHandle`, `rightHandle`): `ControlPoint`

Defined in: [packages/curve/src/composite-curve.ts:16](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L16)

#### Parameters

##### position

`Point`

##### leftHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

##### rightHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

#### Returns

`ControlPoint`

## Methods

### getLeftHandle()

> **getLeftHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

Defined in: [packages/curve/src/composite-curve.ts:178](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L178)

#### Returns

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### getPosition()

> **getPosition**(): `Point`

Defined in: [packages/curve/src/composite-curve.ts:60](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L60)

#### Returns

`Point`

***

### getRightHandle()

> **getRightHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

Defined in: [packages/curve/src/composite-curve.ts:182](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L182)

#### Returns

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### setLeftHandlePosition()

> **setLeftHandlePosition**(`destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:118](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L118)

#### Parameters

##### destPos

`Point`

#### Returns

`void`

***

### setLeftHandleTypeAligned()

> **setLeftHandleTypeAligned**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:78](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L78)

#### Returns

`void`

***

### setLeftHandleTypeFree()

> **setLeftHandleTypeFree**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:87](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L87)

#### Returns

`void`

***

### setLeftHandleTypeVector()

> **setLeftHandleTypeVector**(`prevControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:64](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L64)

#### Parameters

##### prevControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`

***

### setPosition()

> **setPosition**(`destinationPosition`, `prevControlPoint`, `nextControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:22](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L22)

#### Parameters

##### destinationPosition

`Point`

##### prevControlPoint

`ControlPoint` | `undefined`

##### nextControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`

***

### setRightHandlePosition()

> **setRightHandlePosition**(`destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:148](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L148)

#### Parameters

##### destPos

`Point`

#### Returns

`void`

***

### setRightHandleTypeAligned()

> **setRightHandleTypeAligned**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:105](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L105)

#### Returns

`void`

***

### setRightHandleTypeFree()

> **setRightHandleTypeFree**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:114](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L114)

#### Returns

`void`

***

### setRightHandleTypeVector()

> **setRightHandleTypeVector**(`nextControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:91](https://github.com/ue-too/ue-too/blob/fdbfb1431206f8d7c812dca3e1d0dcd7389f1d6d/packages/curve/src/composite-curve.ts#L91)

#### Parameters

##### nextControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`
