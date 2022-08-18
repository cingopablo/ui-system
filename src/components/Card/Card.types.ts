import * as React from 'react'

export type CardVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'

export interface CardProps {
  variant?: CardVariant
  children: React.ReactNode
}
