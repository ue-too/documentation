[@ue-too/animate](../globals.md) / Animation

# Class: Animation\<T\>

Defined in: composite-animation.d.ts:105

## Type Parameters

### T

`T`

## Implements

- [`Animator`](../interfaces/Animator.md)

## Constructors

### Constructor

> **new Animation**\<`T`\>(`keyFrames`, `applyAnimationValue`, `animatableAttributeHelper`, `duration?`, `loop?`, `parent?`, `setUpFn?`, `tearDownFn?`, `easeFn?`): `Animation`\<`T`\>

Defined in: composite-animation.d.ts:128

#### Parameters

##### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### applyAnimationValue

(`value`) => `void`

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

##### duration?

`number`

##### loop?

`boolean`

##### parent?

[`AnimatorContainer`](../interfaces/AnimatorContainer.md)

##### setUpFn?

`Function`

##### tearDownFn?

`Function`

##### easeFn?

(`percentage`) => `number`

#### Returns

`Animation`\<`T`\>

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: composite-animation.d.ts:146

##### Returns

`number`

#### Set Signature

> **set** **delay**(`delayTime`): `void`

Defined in: composite-animation.d.ts:147

##### Parameters

###### delayTime

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`delay`](../interfaces/Animator.md#delay)

***

### drag

#### Get Signature

> **get** **drag**(): `number`

Defined in: composite-animation.d.ts:148

##### Returns

`number`

#### Set Signature

> **set** **drag**(`dragTime`): `void`

Defined in: composite-animation.d.ts:149

##### Parameters

###### dragTime

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`drag`](../interfaces/Animator.md#drag)

***

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: composite-animation.d.ts:141

##### Returns

`number`

#### Set Signature

> **set** **duration**(`duration`): `void`

Defined in: composite-animation.d.ts:142

##### Parameters

###### duration

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### easeFunction

#### Get Signature

> **get** **easeFunction**(): (`percentage`) => `number`

Defined in: composite-animation.d.ts:156

##### Returns

> (`percentage`): `number`

###### Parameters

###### percentage

`number`

###### Returns

`number`

#### Set Signature

> **set** **easeFunction**(`easeFn`): `void`

Defined in: composite-animation.d.ts:157

##### Parameters

###### easeFn

(`percentage`) => `number`

##### Returns

`void`

***

### keyFrames

#### Get Signature

> **get** **keyFrames**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

Defined in: composite-animation.d.ts:155

##### Returns

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

#### Set Signature

> **set** **keyFrames**(`keyFrames`): `void`

Defined in: composite-animation.d.ts:154

##### Parameters

###### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### Returns

`void`

***

### loops

#### Get Signature

> **get** **loops**(): `boolean`

Defined in: composite-animation.d.ts:139

##### Returns

`boolean`

#### Set Signature

> **set** **loops**(`loop`): `void`

Defined in: composite-animation.d.ts:140

##### Parameters

###### loop

`boolean`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`loops`](../interfaces/Animator.md#loops)

***

### maxLoopCount

#### Get Signature

> **get** **maxLoopCount**(): `number`

Defined in: composite-animation.d.ts:163

##### Returns

`number`

#### Set Signature

> **set** **maxLoopCount**(`maxLoopCount`): `void`

Defined in: composite-animation.d.ts:164

##### Parameters

###### maxLoopCount

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`maxLoopCount`](../interfaces/Animator.md#maxloopcount)

***

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: composite-animation.d.ts:134

##### Returns

`boolean`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

***

### trueDuration

#### Get Signature

> **get** **trueDuration**(): `number`

Defined in: composite-animation.d.ts:150

##### Returns

`number`

#### Set Signature

> **set** **trueDuration**(`duration`): `void`

Defined in: composite-animation.d.ts:151

##### Parameters

###### duration

`number`

##### Returns

`void`

## Methods

### animate()

> **animate**(`deltaTime`): `void`

Defined in: composite-animation.d.ts:135

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### clearOnEnd()

> **clearOnEnd**(): `void`

Defined in: composite-animation.d.ts:161

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: composite-animation.d.ts:162

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### detachParent()

> **detachParent**(): `void`

Defined in: composite-animation.d.ts:153

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### findValue()

> **findValue**(`valuePercentage`, `keyframes`, `animatableAttributeHelper`): `T`

Defined in: composite-animation.d.ts:136

#### Parameters

##### valuePercentage

`number`

##### keyframes

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

#### Returns

`T`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: composite-animation.d.ts:143

#### Parameters

##### newDuration

`number`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`nonCascadingDuration`](../interfaces/Animator.md#noncascadingduration)

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: composite-animation.d.ts:158

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`onEnd`](../interfaces/Animator.md#onend)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: composite-animation.d.ts:159

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### onStartAfterDelay()

> **onStartAfterDelay**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: composite-animation.d.ts:160

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

Defined in: composite-animation.d.ts:132

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: composite-animation.d.ts:144

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

Defined in: composite-animation.d.ts:133

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: composite-animation.d.ts:152

#### Parameters

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setParent`](../interfaces/Animator.md#setparent)

***

### setUp()

> **setUp**(): `void`

Defined in: composite-animation.d.ts:137

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

Defined in: composite-animation.d.ts:130

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

Defined in: composite-animation.d.ts:131

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

Defined in: composite-animation.d.ts:138

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: composite-animation.d.ts:129

#### Parameters

##### reverse

`boolean`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### wrapUp()

> **wrapUp**(): `void`

Defined in: composite-animation.d.ts:145

#### Returns

`void`
