import React from 'react'

import { CSS } from '../../theming/stitches.config'

export interface BlockquoteProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent'
  width?: 'contained' | 'full'
  css?: CSS
}
