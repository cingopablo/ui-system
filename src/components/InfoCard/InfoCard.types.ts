import React from 'react'

import { CSS } from '../../theming/stitches.config'

export type InfoCardVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'

export interface InfoCardProps {
  variant?: InfoCardVariant
  children: React.ReactNode
  css?: CSS
  onClick?: () => void
}
