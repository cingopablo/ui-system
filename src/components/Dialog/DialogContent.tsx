import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

type DialogContentProps = {
  children: React.ReactNode
}

export const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
  return <DialogPrimitive.Description>{children}</DialogPrimitive.Description>
}
