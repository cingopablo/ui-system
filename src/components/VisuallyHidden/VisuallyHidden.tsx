import * as VisuallyHiddenRadix from '@radix-ui/react-visually-hidden'
import * as React from 'react'
import { VisuallyHiddenProps } from './VisuallyHidden.types'

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <VisuallyHiddenRadix.Root>{children}</VisuallyHiddenRadix.Root>
}
