import React from 'react'

import { AnchorWrapper } from './Anchor.styles'
import { AnchorProps } from './Anchor.types'

export const Anchor: React.FC<AnchorProps> = ({ variant = 'primary', hover = true, underline = false, ...props }) => {
  return (
    <AnchorWrapper variant={variant} hover={hover} underline={underline} {...props}>
      {props.children}
    </AnchorWrapper>
  )
}
Anchor.displayName = 'Anchor'
