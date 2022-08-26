import { motion } from 'framer-motion'

import { styled } from '../../theming/stitches.config'

export const AnimatedTitleWord = styled(motion.span, {
  display: 'inline-block',
  marginRight: '0.25em',
  whiteSpace: 'nowrap',
})

export const AnimatedTitleCharacter = styled(motion.span, {
  display: 'inline-block',
})
