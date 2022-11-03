import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { H3, Text } from '../Typography'

const TitleMotion = motion(H3)
const DescriptionMotion = motion(Text)

export const ItemCardWrapper = styled(motion.div, {
  padding: 'var(--spacing-7)',
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': {
    display: 'grid',
  },
})

export const ImageWrapper = styled('div', {
  display: 'none',
  '@sm': {
    display: 'block',
  },
})

export const TitleWrapper = styled(TitleMotion, {
  margin: '0 !important',
})

export const DescriptionWrapper = styled(DescriptionMotion, {
  lineHeight: 'var(--font-height-heading)',
  margin: '0 !important',
})
