import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipProps } from './Tooltip.types'
import { TooltipContent } from './Tooltip.styles'
import {
  DEFAULT_TOOLTIP_DELAY,
  DEFAULT_TOOLTIP_PORTAL,
  DEFAULT_TOOLTIP_SIDE,
  DEFAULT_TOOLTIP_SIDE_OFFSET,
} from './Tooltip.constants'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden'

const Tooltip = ({
  children,
  id,
  delayDuration = DEFAULT_TOOLTIP_DELAY,
  side = DEFAULT_TOOLTIP_SIDE,
  sideOffset = DEFAULT_TOOLTIP_SIDE_OFFSET,
  visuallyHiddenText,
  portal = DEFAULT_TOOLTIP_PORTAL,
  content,
  open,
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration} open={open}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      {portal ? (
        <TooltipPrimitive.Portal>
          <TooltipContent id={id} side={side} sideOffset={sideOffset}>
            {content}
            {visuallyHiddenText ? <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> : null}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      ) : (
        <TooltipContent id={id} side={side} sideOffset={sideOffset}>
          {content}
          {visuallyHiddenText ? <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> : null}
        </TooltipContent>
      )}
    </TooltipPrimitive.Root>
  )
}

Tooltip.displayName = 'Tooltip'
Tooltip.Provider = TooltipPrimitive.TooltipProvider

export default Tooltip
