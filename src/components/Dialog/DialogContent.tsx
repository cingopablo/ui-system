import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

type DialogContentProps = {
  children: React.ReactNode
}

export const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
  return <DialogPrimitive.Description>{children}</DialogPrimitive.Description>
}
