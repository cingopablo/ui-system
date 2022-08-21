import React from 'react'

import { AnchorWrapper } from './Anchor.styles'
import { AnchorProps } from './Anchor.types'

export const Anchor: React.FC<AnchorProps> = ({ variant = 'primary', underline = false, ...props }) => {
  return (
    <AnchorWrapper variant={variant} underline={underline} {...props}>
      {props.children}
    </AnchorWrapper>
  )
}
Anchor.displayName = 'Anchor'
