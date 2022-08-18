import * as React from 'react'
import { InfoCardVariant } from '../Card/Card.types'

export type BadgeVariant = InfoCardVariant

export interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}
