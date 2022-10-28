import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'
import { Grid } from '../Grid/Grid'
import { Flex } from '../Flex/Flex'
import { H3, Text } from '../Typography'

const TitleMotion = motion(H3)
const DescriptionMotion = motion(Text)

export const ItemCardWrapper = styled(motion.div, {
  border: '1px solid greenyellow',
  padding: 'var(--spacing-7)',
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 600px)': {
    display: 'grid',
  },
})

export const ImageWrapper = styled('div', {
  display: 'none',
  '@media (max-width: 600px)': {
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
