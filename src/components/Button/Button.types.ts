import { ForwardRefComponent } from 'framer-motion'
import * as React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'small' | 'default' | 'large'
export type ButtonColor = 'primary' | 'danger' | 'neutral'

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: ForwardRefComponent<HTMLButtonElement, any>
  type?: 'button' | 'reset' | 'submit'
}

interface MainButtonProps extends BaseButtonProps {
  onlyIcon?: boolean
  color?: ButtonColor
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: never
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

interface IconButtonProps extends BaseButtonProps {
  onlyIcon: boolean
  color?: ButtonColor
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  icon: React.ReactNode
  startIcon?: never
  endIcon?: never
}

export type ButtonProps<T> = (MainButtonProps | IconButtonProps) & T
