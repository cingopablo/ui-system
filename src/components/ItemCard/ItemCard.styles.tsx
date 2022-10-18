import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { Grid } from '../Grid/Grid'

export const ItemCardWrapper = styled(motion.div, {
  padding: 'var(--spacing-4) 0',
  position: 'relative',
  width: '100%',
})

export const ItemImage = styled(motion.div, {
  position: 'absolute',
  zIndex: 1,
  top: 'calc(100vh * -0.05)',
  right: 'calc(100vw * 0.5)',
  overflow: 'hidden',
  height: 300,
  width: 220,
})

export const ItemText = styled(Grid, {
  position: 'relative',
  zIndex: 2,
})
