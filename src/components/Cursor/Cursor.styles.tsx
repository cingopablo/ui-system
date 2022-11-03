import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'

export const CursorWrapper = styled('div', {
  cursor: 'pointer',
})

export const CursorElement = styled(motion.div, {
  fontWeight: 'var(--font-weight-4)',
  borderRadius: '50%',
  position: 'fixed',
  zIndex: 10,
  left: 0,
  top: 0,
  opacity: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',

  '@sm': {
    visibility: 'hidden',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'hsl(var(--palette-gray-20))',
      },
      secondary: {
        backgroundColor: 'var(--color-primary-clear)',
      },
      blur: {
        backgroundColor: 'var(--color-blur)',
        color: 'var(--color-text-primary)',
        backdropFilter: 'blur(8px)',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
