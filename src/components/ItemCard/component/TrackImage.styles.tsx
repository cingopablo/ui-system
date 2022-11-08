import { motion } from 'framer-motion'

import { styled } from '../../../theming/stitches.config'
import { Text } from '../../Typography'

const PositionMotion = motion(Text)

export const TrackImageWrapper = styled('div', {
  cursor: 'pointer',
  position: 'relative',
})

export const TrackImageContainer = styled(motion.div, {
  fontWeight: 'var(--font-weight-4)',
  position: 'absolute',
  zIndex: 10,
  left: 'auto',
  right: 200,
  top: -150,
  opacity: 0,
  width: 320,
  height: 400,
  pointerEvents: 'none',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',

  '@md': {
    visibility: 'hidden',
  },
})

export const TextImage = styled(PositionMotion, {
  position: 'absolute',
  top: 'var(--spacing-6)',
  left: 'var(--spacing-6)',
  maxWidth: 256,
  whiteSpace: 'break-spaces',
  textAlign: 'left',
  zIndex: 11,
  opacity: 0,
  overflow: 'hidden',
})

export const TrackImageElement = styled('img', {
  width: 320,
  height: 400,
  filter: 'brightness(0.8)',
})

export const TrackImageParallax = styled('div', {
  position: 'absolute',
  bottom: 0,
  zIndex: 11,
})
