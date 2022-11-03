import React from 'react'

import { CSS } from '../../theming/stitches.config'

export interface ItemCardProps {
  image: React.ReactNode
  onClick?: () => void
  title?: string
  description?: string
  cursor?: string
  variant?: 'blur' | 'primary' | 'secondary'
  css?: CSS
}
