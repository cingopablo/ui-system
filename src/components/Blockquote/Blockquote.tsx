import React from 'react'

import { Strong } from '../Typography'
import { BlockquoteContent, BlockquoteWrapper } from './Blockquote.styles'
import { BlockquoteProps } from './Blockquote.types'

export const Blockquote: React.FC<BlockquoteProps> = ({ children, variant = 'primary', width = 'contained', css }) => {
  return (
    <BlockquoteWrapper variant={variant} css={css}>
      <BlockquoteContent width={width}>
        <Strong size={'large'}>{children}</Strong>
      </BlockquoteContent>
    </BlockquoteWrapper>
  )
}
