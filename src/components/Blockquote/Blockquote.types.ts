import React from 'react'

export interface BlockquoteProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  width?: 'contained' | 'full'
}
