import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'

export const ParallaxWrapper = styled('div', {
  overflow: 'hidden',
  letterSpacing: '-2px',
  lineHeight: 0.8,
  margin: 0,
  whitespace: 'nowrap',
  display: 'flex',
  flexWrap: 'nowrap',
})

export const ParallaxScroller = styled(motion.div, {
  textTransform: 'uppercase',
  display: 'flex',
  whiteSpace: 'nowrap',
  flexWrap: 'nowrap',
})

export const ParallaxSpan = styled('span', {
  display: 'block',
  marginRight: 30,
})
