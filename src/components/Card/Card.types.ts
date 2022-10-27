import React from 'react'

import { CSS } from '../../theming/stitches.config'

export type CardVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'
export type CardAlign = 'left' | 'center' | 'right'

export interface CardProps {
  variant?: CardVariant
  align?: CardAlign
  children: React.ReactNode
  css?: CSS
  onClick?: () => void
}
