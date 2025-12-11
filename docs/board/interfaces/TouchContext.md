[@ue-too/board](../globals.md) / TouchContext

# Interface: TouchContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:17](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L17)

## Extends

- `BaseContext`

## Properties

### addTouchPoints()

> **addTouchPoints**: (`points`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:18](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L18)

#### Parameters

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:25](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L25)

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:26](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L26)

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**: () => `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:20](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L20)

#### Returns

`number`

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**: (`idents`) => [`TouchPoints`](../type-aliases/TouchPoints.md)[]

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:21](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L21)

#### Parameters

##### idents

`number`[]

#### Returns

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

***

### notifyOnPan()

> **notifyOnPan**: (`delta`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:23](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L23)

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### notifyOnZoom()

> **notifyOnZoom**: (`zoomAmount`, `anchorPoint`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:24](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L24)

#### Parameters

##### zoomAmount

`number`

##### anchorPoint

`Point`

#### Returns

`void`

***

### removeTouchPoints()

> **removeTouchPoints**: (`idents`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:19](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L19)

#### Parameters

##### idents

`number`[]

#### Returns

`void`

***

### updateTouchPoints()

> **updateTouchPoints**: (`pointsMoved`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:22](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L22)

#### Parameters

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/being/src/interface.ts:3](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L3)

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: [packages/being/src/interface.ts:2](https://github.com/ue-too/ue-too/blob/c02efc01f7c19f3efc21823d0489e987a3e92427/packages/being/src/interface.ts#L2)

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
