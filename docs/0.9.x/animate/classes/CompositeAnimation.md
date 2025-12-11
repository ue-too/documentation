[@ue-too/animate](../globals.md) / CompositeAnimation

# Class: CompositeAnimation

Defined in: composite-animation.d.ts:33

## Implements

- [`Animator`](../interfaces/Animator.md)
- [`AnimatorContainer`](../interfaces/AnimatorContainer.md)

## Constructors

### Constructor

> **new CompositeAnimation**(`animations?`, `loop?`, `parent?`, `setupFn?`, `tearDownFn?`): `CompositeAnimation`

Defined in: composite-animation.d.ts:49

#### Parameters

##### animations?

`Map`\<`string`, \{ `animator`: [`Animator`](../interfaces/Animator.md); `startTime?`: `number`; \}\>

##### loop?

`boolean`

##### parent?

[`AnimatorContainer`](../interfaces/AnimatorContainer.md)

##### setupFn?

`Function`

##### tearDownFn?

`Function`

#### Returns

`CompositeAnimation`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: composite-animation.d.ts:85

##### Returns

`number`

#### Set Signature

> **set** **delay**(`delayTime`): `void`

Defined in: composite-animation.d.ts:84

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

Defined in: composite-animation.d.ts:87

##### Returns

`number`

#### Set Signature

> **set** **drag**(`dragTime`): `void`

Defined in: composite-animation.d.ts:86

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

Defined in: composite-animation.d.ts:72

##### Returns

`number`

#### Set Signature

> **set** **duration**(`duration`): `void`

Defined in: composite-animation.d.ts:73

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

Defined in: composite-animation.d.ts:92

##### Returns

`boolean`

#### Set Signature

> **set** **loops**(`loop`): `void`

Defined in: composite-animation.d.ts:93

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

Defined in: composite-animation.d.ts:102

##### Returns

`number`

#### Set Signature

> **set** **maxLoopCount**(`maxLoopCount`): `void`

Defined in: composite-animation.d.ts:103

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

Defined in: composite-animation.d.ts:101

##### Returns

`boolean`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

## Methods

### addAnimation()

> **addAnimation**(`name`, `animation`, `startTime?`, `endCallback?`): `void`

Defined in: composite-animation.d.ts:79

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### startTime?

`number`

##### endCallback?

`Function`

#### Returns

`void`

***

### addAnimationAdmist()

> **addAnimationAdmist**(`name`, `animation`, `admistName`, `delay`): `void`

Defined in: composite-animation.d.ts:81

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

> **addAnimationAfter**(`name`, `animation`, `afterName`, `delay?`): `void`

Defined in: composite-animation.d.ts:80

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### afterName

`string`

##### delay?

`number`

#### Returns

`void`

***

### addAnimationBefore()

> **addAnimationBefore**(`name`, `animation`, `beforeName`, `aheadTime?`): `void`

Defined in: composite-animation.d.ts:82

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### beforeName

`string`

##### aheadTime?

`number`

#### Returns

`void`

***

### animate()

> **animate**(`deltaTime`): `void`

Defined in: composite-animation.d.ts:56

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

Defined in: composite-animation.d.ts:58

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### calculateDuration()

> **calculateDuration**(): `void`

Defined in: composite-animation.d.ts:91

#### Returns

`void`

***

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

Defined in: composite-animation.d.ts:94

#### Returns

`boolean`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`checkCyclicChildren`](../interfaces/AnimatorContainer.md#checkcyclicchildren)

***

### checkTerminalAndLoop()

> **checkTerminalAndLoop**(): `void`

Defined in: composite-animation.d.ts:57

#### Returns

`void`

***

### childShouldAnimate()

> **childShouldAnimate**(`animation`, `prevLocalTime`): `boolean`

Defined in: composite-animation.d.ts:59

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

Defined in: composite-animation.d.ts:99

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: composite-animation.d.ts:100

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

Defined in: composite-animation.d.ts:96

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

Defined in: composite-animation.d.ts:55

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### forceToggleLoop()

> **forceToggleLoop**(`loop`): `void`

Defined in: composite-animation.d.ts:95

#### Parameters

##### loop

`boolean`

#### Returns

`void`

***

### getTrueDuration()

> **getTrueDuration**(): `number`

Defined in: composite-animation.d.ts:76

#### Returns

`number`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: composite-animation.d.ts:74

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

Defined in: composite-animation.d.ts:97

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

Defined in: composite-animation.d.ts:98

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

Defined in: composite-animation.d.ts:68

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### removeAnimation()

> **removeAnimation**(`name`): `void`

Defined in: composite-animation.d.ts:83

#### Parameters

##### name

`string`

#### Returns

`void`

***

### removeDelay()

> **removeDelay**(): `void`

Defined in: composite-animation.d.ts:88

#### Returns

`void`

***

### removeDrag()

> **removeDrag**(): `void`

Defined in: composite-animation.d.ts:89

#### Returns

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: composite-animation.d.ts:75

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

Defined in: composite-animation.d.ts:69

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: composite-animation.d.ts:54

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

Defined in: composite-animation.d.ts:77

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

Defined in: composite-animation.d.ts:70

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

Defined in: composite-animation.d.ts:71

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

Defined in: composite-animation.d.ts:78

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: composite-animation.d.ts:53

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

Defined in: composite-animation.d.ts:90

#### Returns

`void`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`updateDuration`](../interfaces/AnimatorContainer.md#updateduration)

***

### wrapUpAnimator()

> **wrapUpAnimator**(`animation`, `prevLocalTime`): `void`

Defined in: composite-animation.d.ts:63

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
