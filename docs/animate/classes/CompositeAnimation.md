[@ue-too/animate](../globals.md) / CompositeAnimation

# Class: CompositeAnimation

Defined in: [composite-animation.ts:113](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L113)

Container for sequencing and composing multiple animations.

## Remarks

CompositeAnimation allows you to orchestrate complex animation sequences by:
- **Sequencing**: Add animations to play one after another
- **Overlapping**: Start animations before previous ones complete
- **Synchronizing**: Play multiple animations simultaneously
- **Nesting**: Compose animations contain other composite animations

## Key Features

- Add animations at specific time offsets
- Position animations relative to other animations (`addAnimationAfter`, `addAnimationBefore`)
- Automatic duration calculation based on child animations
- Hierarchical composition for complex sequences
- Prevent cyclic animation dependencies

## Example

Basic sequence
```typescript
const sequence = new CompositeAnimation();

// Add first animation at start (time 0)
sequence.addAnimation('fadeIn', fadeAnimation, 0);

// Add second animation after first completes
sequence.addAnimationAfter('slideIn', slideAnimation, 'fadeIn');

// Add third animation to overlap with second (100ms after second starts)
sequence.addAnimationAdmist('scaleUp', scaleAnimation, 'slideIn', 100);

sequence.start();
```

## Implements

- [`Animator`](../interfaces/Animator.md)
- [`AnimatorContainer`](../interfaces/AnimatorContainer.md)

## Constructors

### Constructor

> **new CompositeAnimation**(`animations`, `loop`, `parent`, `setupFn`, `tearDownFn`): `CompositeAnimation`

Defined in: [composite-animation.ts:133](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L133)

#### Parameters

##### animations

`Map`\<`string`, \{ `animator`: [`Animator`](../interfaces/Animator.md); `startTime?`: `number`; \}\> = `...`

##### loop

`boolean` = `false`

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md) | `undefined`

##### setupFn

`Function` = `...`

##### tearDownFn

`Function` = `...`

#### Returns

`CompositeAnimation`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [composite-animation.ts:458](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L458)

##### Returns

`number`

#### Set Signature

> **set** **delay**(`delayTime`): `void`

Defined in: [composite-animation.ts:451](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L451)

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

Defined in: [composite-animation.ts:469](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L469)

##### Returns

`number`

#### Set Signature

> **set** **drag**(`dragTime`): `void`

Defined in: [composite-animation.ts:462](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L462)

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

Defined in: [composite-animation.ts:285](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L285)

##### Returns

`number`

#### Set Signature

> **set** **duration**(`duration`): `void`

Defined in: [composite-animation.ts:289](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L289)

##### Parameters

###### duration

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### loops

#### Get Signature

> **get** **loops**(): `boolean`

Defined in: [composite-animation.ts:508](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L508)

##### Returns

`boolean`

#### Set Signature

> **set** **loops**(`loop`): `void`

Defined in: [composite-animation.ts:512](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L512)

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

Defined in: [composite-animation.ts:599](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L599)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **maxLoopCount**(`maxLoopCount`): `void`

Defined in: [composite-animation.ts:603](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L603)

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

Defined in: [composite-animation.ts:595](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L595)

##### Returns

`boolean`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

## Methods

### addAnimation()

> **addAnimation**(`name`, `animation`, `startTime`, `endCallback`): `void`

Defined in: [composite-animation.ts:359](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L359)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### startTime

`number` = `0`

##### endCallback

`Function` = `...`

#### Returns

`void`

***

### addAnimationAdmist()

> **addAnimationAdmist**(`name`, `animation`, `admistName`, `delay`): `void`

Defined in: [composite-animation.ts:395](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L395)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### admistName

`string`

##### delay

`number`

#### Returns

`void`

***

### addAnimationAfter()

> **addAnimationAfter**(`name`, `animation`, `afterName`, `delay`): `void`

Defined in: [composite-animation.ts:378](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L378)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### afterName

`string`

##### delay

`number` = `0`

#### Returns

`void`

***

### addAnimationBefore()

> **addAnimationBefore**(`name`, `animation`, `beforeName`, `aheadTime`): `void`

Defined in: [composite-animation.ts:411](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L411)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### beforeName

`string`

##### aheadTime

`number` = `0`

#### Returns

`void`

***

### animate()

> **animate**(`deltaTime`): `void`

Defined in: [composite-animation.ts:170](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L170)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### animateChildren()

> **animateChildren**(`deltaTime`): `void`

Defined in: [composite-animation.ts:209](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L209)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### calculateDuration()

> **calculateDuration**(): `void`

Defined in: [composite-animation.ts:497](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L497)

#### Returns

`void`

***

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

Defined in: [composite-animation.ts:516](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L516)

#### Returns

`boolean`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`checkCyclicChildren`](../interfaces/AnimatorContainer.md#checkcyclicchildren)

***

### checkTerminalAndLoop()

> **checkTerminalAndLoop**(): `void`

Defined in: [composite-animation.ts:185](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L185)

#### Returns

`void`

***

### childShouldAnimate()

> **childShouldAnimate**(`animation`, `prevLocalTime`): `boolean`

Defined in: [composite-animation.ts:230](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L230)

#### Parameters

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### startTime?

`number`

##### prevLocalTime

`number`

#### Returns

`boolean`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

Defined in: [composite-animation.ts:587](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L587)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: [composite-animation.ts:591](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L591)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

Defined in: [composite-animation.ts:545](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L545)

#### Parameters

##### animationInInterest

[`Animator`](../interfaces/Animator.md)

#### Returns

`boolean`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`containsAnimation`](../interfaces/AnimatorContainer.md#containsanimation)

***

### detachParent()

> **detachParent**(): `void`

Defined in: [composite-animation.ts:166](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L166)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### forceToggleLoop()

> **forceToggleLoop**(`loop`): `void`

Defined in: [composite-animation.ts:538](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L538)

#### Parameters

##### loop

`boolean`

#### Returns

`void`

***

### getTrueDuration()

> **getTrueDuration**(): `number`

Defined in: [composite-animation.ts:341](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L341)

#### Returns

`number`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: [composite-animation.ts:313](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L313)

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

Defined in: [composite-animation.ts:573](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L573)

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

Defined in: [composite-animation.ts:580](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L580)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### pause()

> **pause**(): `void`

Defined in: [composite-animation.ts:252](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L252)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### removeAnimation()

> **removeAnimation**(`name`): `void`

Defined in: [composite-animation.ts:437](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L437)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### removeDelay()

> **removeDelay**(): `void`

Defined in: [composite-animation.ts:473](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L473)

#### Returns

`void`

***

### removeDrag()

> **removeDrag**(): `void`

Defined in: [composite-animation.ts:480](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L480)

#### Returns

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: [composite-animation.ts:334](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L334)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

Defined in: [composite-animation.ts:259](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L259)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: [composite-animation.ts:162](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L162)

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

Defined in: [composite-animation.ts:345](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L345)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

Defined in: [composite-animation.ts:266](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L266)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [composite-animation.ts:275](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L275)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [composite-animation.ts:352](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L352)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: [composite-animation.ts:152](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L152)

#### Parameters

##### reverse

`boolean`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### updateDuration()

> **updateDuration**(): `void`

Defined in: [composite-animation.ts:487](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L487)

#### Returns

`void`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`updateDuration`](../interfaces/AnimatorContainer.md#updateduration)

***

### wrapUpAnimator()

> **wrapUpAnimator**(`animation`, `prevLocalTime`): `void`

Defined in: [composite-animation.ts:240](https://github.com/ue-too/ue-too/blob/e468a9961da59c81663192ec8df16ebc8e17abac/packages/animate/src/composite-animation.ts#L240)

#### Parameters

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### name

`string`

###### startTime?

`number`

##### prevLocalTime

`number`

#### Returns

`void`
