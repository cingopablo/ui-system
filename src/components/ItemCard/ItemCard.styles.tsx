import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { H2, Text } from '../Typography'

const TitleMotion = motion(H2)

export const ItemCardWrapper = styled(motion.div, {
  padding: 'var(--spacing-7) 0',
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@md': {
    display: 'grid',
    justifyContent: 'stretch',
  },
})

export const ImageWrapper = styled('div', {
  display: 'none',
  '@md': {
    display: 'block',
    marginBottom: 'var(--spacing-4)',
  },
})

export const TitleWrapper = styled(TitleMotion, {
  margin: '0 !important',
})

export const PositionWrapper = styled(Text, {
  display: 'none',
  lineHeight: 'var(--font-height-heading)',
  margin: '0 !important',
  '@md': {
    display: 'block',
  },
})
