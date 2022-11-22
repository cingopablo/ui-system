import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { Text } from '../Typography'

const TitleMotion = motion(Text)

export const ItemCardWrapper = styled(motion.div, {
  padding: 'var(--spacing-7) 0',
  position: 'relative',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  alignItems: 'baseline',
  textAlign: 'right',
  gap: 'var(--spacing-6)',
})

export const TextWrapper = styled(Text, {
  margin: '0 !important',
})

export const TitleWrapper = styled(TitleMotion, {
  margin: '0 !important',
  textTransform: 'uppercase',
  fontSize: '130px !important',
  fontWeight: 'var(--font-weight-4) !important',
  lineHeight: 'var(--font-height-heading) !important',

  '@sm': {
    fontSize: 'var(--font-size-7) !important',
  },
})

export const PositionWrapper = styled(Text, {
  display: 'none',
  lineHeight: 'var(--font-height-heading)',
  margin: '0 !important',
})
