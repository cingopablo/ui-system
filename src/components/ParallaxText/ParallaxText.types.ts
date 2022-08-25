import React from 'react'

import { CSS } from '../../theming/stitches.config'

export interface ParallaxProps {
  children: string | React.ReactNode
  baseVelocity: number
  css?: CSS
}
