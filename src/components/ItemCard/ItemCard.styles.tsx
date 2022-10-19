import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { Grid } from '../Grid/Grid'

export const ItemCardWrapper = styled(motion.div, {
  padding: 'var(--spacing-4) 0',
  position: 'relative',
  width: '100%',
})

export const TitleWrapper = styled(motion.span, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 'var(--spacing-4)',
})

export const IconWrapper = styled(motion.span, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export const ItemText = styled(Grid, {
  '*': {
    margin: '0 !important',
  },
})
