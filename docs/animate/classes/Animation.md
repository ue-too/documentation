[@ue-too/animate](../globals.md) / Animation

# Class: Animation\<T\>

Defined in: [composite-animation.ts:656](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L656)

Keyframe-based animation for a single value.

## Remarks

The Animation class interpolates a value through a series of keyframes over time.
It handles:
- Keyframe interpolation with binary search for efficiency
- Easing functions for smooth motion curves
- Reverse playback
- Looping with optional max loop count
- Delays before start and drag time after completion
- Lifecycle callbacks

## How It Works

1. Define keyframes at percentages (0.0 to 1.0) along the timeline
2. Provide a callback to apply the animated value
3. Provide an interpolation helper for the value type
4. Call `animate(deltaTime)` each frame to progress the animation

## Example

Animating a number with easing
```typescript
let opacity = 0;

const fadeIn = new Animation(
  [
    { percentage: 0, value: 0 },
    { percentage: 1, value: 1, easingFn: (t) => t * t } // Ease-in
  ],
  (value) => { opacity = value; },
  numberHelperFunctions,
  1000 // 1 second duration
);

fadeIn.start();

// In animation loop
function loop(deltaTime: number) {
  fadeIn.animate(deltaTime);
  element.style.opacity = opacity;
}
```

## Type Parameters

### T

`T`

The type of value being animated

## Implements

- [`Animator`](../interfaces/Animator.md)

## Constructors

### Constructor

> **new Animation**\<`T`\>(`keyFrames`, `applyAnimationValue`, `animatableAttributeHelper`, `duration`, `loop`, `parent`, `setUpFn`, `tearDownFn`, `easeFn`): `Animation`\<`T`\>

Defined in: [composite-animation.ts:683](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L683)

#### Parameters

##### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### applyAnimationValue

(`value`) => `void`

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

##### duration

`number` = `1000`

##### loop

`boolean` = `false`

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md) | `undefined`

##### setUpFn

`Function` = `...`

##### tearDownFn

`Function` = `...`

##### easeFn

(`percentage`) => `number`

#### Returns

`Animation`\<`T`\>

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [composite-animation.ts:921](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L921)

##### Returns

`number`

#### Set Signature

> **set** **delay**(`delayTime`): `void`

Defined in: [composite-animation.ts:925](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L925)

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

Defined in: [composite-animation.ts:932](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L932)

##### Returns

`number`

#### Set Signature

> **set** **drag**(`dragTime`): `void`

Defined in: [composite-animation.ts:936](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L936)

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

Defined in: [composite-animation.ts:875](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L875)

##### Returns

`number`

#### Set Signature

> **set** **duration**(`duration`): `void`

Defined in: [composite-animation.ts:879](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L879)

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

Defined in: [composite-animation.ts:971](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L971)

##### Returns

> (`percentage`): `number`

###### Parameters

###### percentage

`number`

###### Returns

`number`

#### Set Signature

> **set** **easeFunction**(`easeFn`): `void`

Defined in: [composite-animation.ts:975](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L975)

##### Parameters

###### easeFn

(`percentage`) => `number`

##### Returns

`void`

***

### keyFrames

#### Get Signature

> **get** **keyFrames**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

Defined in: [composite-animation.ts:967](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L967)

##### Returns

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

#### Set Signature

> **set** **keyFrames**(`keyFrames`): `void`

Defined in: [composite-animation.ts:962](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L962)

##### Parameters

###### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### Returns

`void`

***

### loops

#### Get Signature

> **get** **loops**(): `boolean`

Defined in: [composite-animation.ts:867](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L867)

##### Returns

`boolean`

#### Set Signature

> **set** **loops**(`loop`): `void`

Defined in: [composite-animation.ts:871](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L871)

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

> **get** **maxLoopCount**(): `number` \| `undefined`

Defined in: [composite-animation.ts:1008](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L1008)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **maxLoopCount**(`maxLoopCount`): `void`

Defined in: [composite-animation.ts:1012](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L1012)

##### Parameters

###### maxLoopCount

`number` | `undefined`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`maxLoopCount`](../interfaces/Animator.md#maxloopcount)

***

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: [composite-animation.ts:727](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L727)

##### Returns

`boolean`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

***

### trueDuration

#### Get Signature

> **get** **trueDuration**(): `number`

Defined in: [composite-animation.ts:943](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L943)

##### Returns

`number`

#### Set Signature

> **set** **trueDuration**(`duration`): `void`

Defined in: [composite-animation.ts:947](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L947)

##### Parameters

###### duration

`number`

##### Returns

`void`

## Methods

### animate()

> **animate**(`deltaTime`): `void`

Defined in: [composite-animation.ts:731](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L731)

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

Defined in: [composite-animation.ts:1000](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L1000)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: [composite-animation.ts:1004](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L1004)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### detachParent()

> **detachParent**(): `void`

Defined in: [composite-animation.ts:958](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L958)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### findValue()

> **findValue**(`valuePercentage`, `keyframes`, `animatableAttributeHelper`): `T`

Defined in: [composite-animation.ts:814](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L814)

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

Defined in: [composite-animation.ts:895](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L895)

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

Defined in: [composite-animation.ts:979](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L979)

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

Defined in: [composite-animation.ts:986](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L986)

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

Defined in: [composite-animation.ts:993](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L993)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

Defined in: [composite-animation.ts:719](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L719)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: [composite-animation.ts:908](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L908)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

Defined in: [composite-animation.ts:723](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L723)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: [composite-animation.ts:954](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L954)

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

Defined in: [composite-animation.ts:858](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L858)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

Defined in: [composite-animation.ts:704](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L704)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [composite-animation.ts:712](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L712)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [composite-animation.ts:863](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L863)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: [composite-animation.ts:700](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L700)

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

Defined in: [composite-animation.ts:915](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/animate/src/composite-animation.ts#L915)

#### Returns

`void`
