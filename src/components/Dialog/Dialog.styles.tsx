import * as DialogPrimitive from '@radix-ui/react-dialog'

import { keyframes, styled } from '../../theming/stitches.config'

const slideUpAndFadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(.86)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  transition: 'backdrop-filter 150ms',
  backgroundColor: 'var(--color-overlay)',
  backdropFilter: 'blur(1px)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const DialogContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 'var(--border-radius-3)',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  height: '500px',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${slideUpAndFadeIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(DialogPrimitive.Title, {})
