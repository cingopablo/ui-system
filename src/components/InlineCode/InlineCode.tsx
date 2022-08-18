import * as React from 'react'
import { InlineCodeProps } from './InlineCode.types'
import { InlineCodeWrapper } from './InlineCode.styles'

export const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
  return <InlineCodeWrapper>{children}</InlineCodeWrapper>
}
