import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes, shadows, styled } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'

const slideUpAndFadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(var(--spacing-1)) scale(0.98)' },
  '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
})

const slideRightAndFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(calc(-1 * var(--spacing-1))) scale(0.98)',
  },
  '100%': { opacity: 1, transform: 'translateX(0) scale(1)' },
})

const slideDownAndFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(calc(-1 * var(--spacing-1))) scale(0.98)',
  },
  '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
})

const slideLeftAndFadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateX(var(--spacing-1)) scale(0.98)' },
  '100%': { opacity: 1, transform: 'translateX(0) scale(1)' },
})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: 'hsl(var(--palette-gray-700))',
  color: 'hsl(var(--palette-gray-20))',
  borderRadius: 'var(--border-radius-2)',
  fontSize: text.caption.fontSize,
  fontWeight: text.caption.fontWeight,
  padding: 'var(--spacing-2) var(--spacing-4)',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  userSelect: 'none',
  boxShadow: shadows.medium,
  zIndex: 999,

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '150ms',
    animationTimingFunction: 'ease-in-out',
    willChange: 'transform, opacity, scale',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideUpAndFadeIn },
      '&[data-side="right"]': { animationName: slideRightAndFadeIn },
      '&[data-side="bottom"]': { animationName: slideDownAndFadeIn },
      '&[data-side="left"]': { animationName: slideLeftAndFadeIn },
    },
  },
})
