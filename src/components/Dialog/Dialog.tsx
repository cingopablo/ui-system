import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { DialogContent, Overlay } from './Dialog.styles'

type DialogProps = {
  open?: boolean
  onOpenChange?: (value: boolean) => void
  children: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children, ...props }) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <Overlay />
        <DialogContent {...props}>{children}</DialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
