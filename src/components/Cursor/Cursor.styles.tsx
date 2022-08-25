import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'

export const CursorWrapper = styled('div', {
  cursor: 'none',
})

export const CursorElement = styled(motion.div, {
  fontWeight: 'var(--font-weight-4)',
  borderRadius: '50%',
  position: 'fixed',
  left: 0,
  top: 0,
  opacity: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'hsl(var(--palette-gray-20))',
      },
      secondary: {
        backgroundColor: 'var(--color-primary-clear)',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
