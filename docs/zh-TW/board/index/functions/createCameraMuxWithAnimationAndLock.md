[@ue-too/board](../../modules.md) / [index](../index.md) / createCameraMuxWithAnimationAndLock

# 函式: createCameraMuxWithAnimationAndLock()

> **createCameraMuxWithAnimationAndLock**(): [`CameraMuxWithAnimationAndLock`](../classes/CameraMuxWithAnimationAndLock.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:433](https://github.com/ue-too/ue-too/blob/9b787448328cf446379b1ea4cc5f4c79149cbec8/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L433)

Creates a camera mux with animation and locking capabilities from a camera instance.

## 回傳

[`CameraMuxWithAnimationAndLock`](../classes/CameraMuxWithAnimationAndLock.md)

Configured camera mux with animation support

## 備註

This factory function creates a complete camera input flow control system with:
1. A default [CameraRig](../interfaces/CameraRig.md) wrapping the provided camera
2. Three state machines (pan, zoom, rotation) for animation control
3. A [CameraMuxWithAnimationAndLock](../classes/CameraMuxWithAnimationAndLock.md) coordinating the state machines

**What you get:**
- Smooth camera animations (pan-to, zoom-to, rotate-to)
- Automatic input blocking during animations
- State-based input arbitration
- All with sensible default configurations

**Use this when:**
- You have a camera and want animation support out-of-the-box
- You don't need custom camera rig configuration
- You want the simplest setup for animated camera control

## 範例

```typescript
const camera = new DefaultBoardCamera(1920, 1080);
const mux = createCameraMuxWithAnimationAndLock(camera);

// Start a pan animation
mux.notifyPanToAnimationInput({ x: 1000, y: 500 });

// User input is blocked during animation
const result = mux.notifyPanInput({ x: 50, y: 30 });
console.log(result.allowPassThrough); // false during animation
```

## 參閱

 - [CameraMuxWithAnimationAndLock](../classes/CameraMuxWithAnimationAndLock.md) for the implementation
 - createCameraMuxWithAnimationAndLockWithCameraRig for custom rig version
