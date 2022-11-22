import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { Text } from '../Typography'

const TitleMotion = motion(Text)

export const ItemCardWrapper = styled(motion.div, {
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'right',
})

export const TextWrapper = styled(Text, {
  margin: '0 !important',
  textTransform: 'none',

  '@sm': {
    display: 'block',
  },
})

export const TitleWrapper = styled(TitleMotion, {
  margin: '0 !important',
  textTransform: 'uppercase',
  fontSize: '130px !important',
  fontWeight: 'var(--font-weight-4) !important',
  lineHeight: 'var(--font-height-heading) !important',
  width: '100%',

  '@sm': {
    fontSize: 'var(--font-size-6) !important',
  },
})

export const PositionWrapper = styled(Text, {
  display: 'none',
  lineHeight: 'var(--font-height-heading)',
  margin: '0 !important',
})
