[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useAnimationFrame

# 函式: useAnimationFrame()

> **useAnimationFrame**(`callback`): `void`

定義於: [hooks/useAnimationFrame.ts:36](https://github.com/ue-too/ue-too/blob/7d57cce875ed7b8a4f4ee4e325a18e34159928f6/packages/board-react-adapter/src/hooks/useAnimationFrame.ts#L36)

Hook to run a callback on every animation frame.

## 參數

### callback

(`timestamp`) => `void`

Function to call on each animation frame, receives the current timestamp

## 回傳

`void`

## 備註

This hook uses `requestAnimationFrame` to execute a callback repeatedly for smooth animations.
The animation loop starts when the component mounts and stops when it unmounts, automatically
cleaning up the animation frame request.

**Performance Note**: The callback is called on every frame, so ensure your callback is
optimized to avoid performance issues. The callback dependency should be stable to prevent
restarting the animation loop unnecessarily.

## 範例

```tsx
function AnimatedComponent() {
  const [rotation, setRotation] = useState(0);

  useAnimationFrame((timestamp) => {
    // Rotate 45 degrees per second
    setRotation((prev) => prev + (Math.PI / 4) * (1 / 60));
  });

  return <div style={{ transform: `rotate(${rotation}rad)` }}>Spinning!</div>;
}
```

## 參閱

[useAnimationFrameWithBoard](useAnimationFrameWithBoard.md) for board-integrated animation loop
