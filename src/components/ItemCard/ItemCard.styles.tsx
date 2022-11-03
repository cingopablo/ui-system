import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { H3, Text } from '../Typography'

const TitleMotion = motion(H3)
const DescriptionMotion = motion(Text)

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

export const DescriptionWrapper = styled(DescriptionMotion, {
  lineHeight: 'var(--font-height-heading)',
  margin: '0 !important',
})
