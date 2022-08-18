import { PopperContentProps } from '@radix-ui/react-tooltip'
import * as React from 'react'

export interface TooltipProps {
  children: React.ReactNode
  content: string | React.ReactNode
  id?: string
  delayDuration?: number
  side?: PopperContentProps['side']
  sideOffset?: PopperContentProps['sideOffset']
  portal?: boolean
  visuallyHiddenText?: string
  open?: boolean
}
