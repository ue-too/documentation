[@ue-too/curve](../globals.md) / ControlPoint

# Class: ControlPoint

Defined in: [packages/curve/src/composite-curve.ts:22](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L22)

Control point with left and right handles for composite Bezier curves.

## Constructors

### Constructor

> **new ControlPoint**(`position`, `leftHandle`, `rightHandle`): `ControlPoint`

Defined in: [packages/curve/src/composite-curve.ts:28](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L28)

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

Defined in: [packages/curve/src/composite-curve.ts:190](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L190)

#### Returns

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### getPosition()

> **getPosition**(): `Point`

Defined in: [packages/curve/src/composite-curve.ts:72](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L72)

#### Returns

`Point`

***

### getRightHandle()

> **getRightHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

Defined in: [packages/curve/src/composite-curve.ts:194](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L194)

#### Returns

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### setLeftHandlePosition()

> **setLeftHandlePosition**(`destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:130](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L130)

#### Parameters

##### destPos

`Point`

#### Returns

`void`

***

### setLeftHandleTypeAligned()

> **setLeftHandleTypeAligned**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:90](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L90)

#### Returns

`void`

***

### setLeftHandleTypeFree()

> **setLeftHandleTypeFree**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:99](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L99)

#### Returns

`void`

***

### setLeftHandleTypeVector()

> **setLeftHandleTypeVector**(`prevControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:76](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L76)

#### Parameters

##### prevControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`

***

### setPosition()

> **setPosition**(`destinationPosition`, `prevControlPoint`, `nextControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:34](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L34)

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

Defined in: [packages/curve/src/composite-curve.ts:160](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L160)

#### Parameters

##### destPos

`Point`

#### Returns

`void`

***

### setRightHandleTypeAligned()

> **setRightHandleTypeAligned**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:117](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L117)

#### Returns

`void`

***

### setRightHandleTypeFree()

> **setRightHandleTypeFree**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:126](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L126)

#### Returns

`void`

***

### setRightHandleTypeVector()

> **setRightHandleTypeVector**(`nextControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:103](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/curve/src/composite-curve.ts#L103)

#### Parameters

##### nextControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`
