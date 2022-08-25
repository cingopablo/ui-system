import React from 'react'

import { CSS } from '../../theming/stitches.config'

export interface ParallaxProps {
  children: string | React.ReactNode
  baseVelocity?: number
  scrollOnly?: boolean
  css?: CSS
}
