import React from 'react'

import { CSS } from '../../theming/stitches.config'

export type CardVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'

export interface CardProps {
  variant?: CardVariant
  hoverable?: boolean
  children: React.ReactNode
  css?: CSS
}
