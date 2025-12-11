[@ue-too/animate](../globals.md) / Animator

# Interface: Animator

Defined in: composite-animation.d.ts:3

## Properties

### delay

> **delay**: `number`

Defined in: composite-animation.d.ts:6

***

### drag

> **drag**: `number`

Defined in: composite-animation.d.ts:7

***

### duration

> **duration**: `number`

Defined in: composite-animation.d.ts:5

***

### loops

> **loops**: `boolean`

Defined in: composite-animation.d.ts:4

***

### maxLoopCount

> **maxLoopCount**: `number`

Defined in: composite-animation.d.ts:24

***

### playing

> **playing**: `boolean`

Defined in: composite-animation.d.ts:25

## Methods

### animate()

> **animate**(`deltaTime`): `void`

Defined in: composite-animation.d.ts:13

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

Defined in: composite-animation.d.ts:23

#### Returns

`void`

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: composite-animation.d.ts:22

#### Returns

`void`

***

### detachParent()

> **detachParent**(): `void`

Defined in: composite-animation.d.ts:18

#### Returns

`void`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: composite-animation.d.ts:8

#### Parameters

##### newDuration

`number`

#### Returns

`void`

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: composite-animation.d.ts:20

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: composite-animation.d.ts:21

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

Defined in: composite-animation.d.ts:11

#### Returns

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: composite-animation.d.ts:15

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: composite-animation.d.ts:12

#### Returns

`void`

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: composite-animation.d.ts:17

#### Parameters

##### parent

[`AnimatorContainer`](AnimatorContainer.md)

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: composite-animation.d.ts:14

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: composite-animation.d.ts:9

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: composite-animation.d.ts:10

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: composite-animation.d.ts:16

#### Returns

`void`

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: composite-animation.d.ts:19

#### Parameters

##### reverse

`boolean`

#### Returns

`void`
