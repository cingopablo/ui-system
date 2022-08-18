import * as React from 'react'

export interface BadgeProps {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger'
  children: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}
