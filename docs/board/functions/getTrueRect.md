[@ue-too/board](../globals.md) / getTrueRect

# Function: getTrueRect()

> **getTrueRect**(`rect`, `computedStyle`): `DOMRect`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:494](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/utils/canvas-position-dimension.ts#L494)

Calculates the actual content rectangle excluding padding and borders.

## Parameters

### rect

`DOMRect`

The element's bounding client rectangle

### computedStyle

`CSSStyleDeclaration`

The computed CSS styles for the element

## Returns

`DOMRect`

DOMRect representing the content area only

## Remarks

Browser's getBoundingClientRect() includes padding and borders, but for
coordinate transformations we need the actual drawable content area.

This function subtracts padding and border from all four sides to get
the "true" content rectangle. This is essential for accurate coordinate
conversions between window and canvas space.

## Example

```typescript
const canvas = document.querySelector('canvas');
const rect = canvas.getBoundingClientRect();
const style = window.getComputedStyle(canvas);
const contentRect = getTrueRect(rect, style);

// contentRect.width is less than rect.width if padding/borders exist
console.log(`Full size: ${rect.width}x${rect.height}`);
console.log(`Content size: ${contentRect.width}x${contentRect.height}`);
```
