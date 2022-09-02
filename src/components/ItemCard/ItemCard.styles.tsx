import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'

export const ItemCardWrapper = styled(motion.div, {
  position: 'relative',
  height: 500,
  width: 320,
})

export const ItemImage = styled(motion.div, {
  position: 'absolute',
  zIndex: 2,
  inset: 0,
  overflow: 'hidden',
})

export const ItemImageInner = styled(motion.div, {
  height: 500,
  width: 320,
  position: 'relative',
  inset: 0,
})

export const ItemImageBack = styled(motion.div, {
  position: 'absolute',
  zIndex: 1,
  height: 500,
  width: 320,
  overflow: 'hidden',
  background: 'var(--color-primary)',
})

export const ItemTitle = styled(motion.div, {
  position: 'absolute',
  zIndex: 2,
  top: '100%',
  marginTop: 'var(--spacing-1)',
  left: 56,
})

export const ItemSubtitle = styled(ItemTitle, {
  marginTop: 'var(--spacing-7)',
  left: 96,
  width: '100%',
})

export const ItemParallax = styled(motion.div, {
  position: 'relative',
  transform: 'rotate(270deg)',
  right: -145,
  bottom: -258,
  zIndex: 3,
  '> div': {
    width: 424,
  },
})
