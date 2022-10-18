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
  right: 0,
  overflow: 'hidden',
  height: 500,
  width: 320,
})

export const ItemText = styled(Grid, {
  position: 'relative',
  zIndex: 2,

  '*': {
    margin: '0 !important',
  },
})
