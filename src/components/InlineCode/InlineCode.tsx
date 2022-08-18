import * as React from 'react'

import { InlineCodeWrapper } from './InlineCode.styles'
import { InlineCodeProps } from './InlineCode.types'

export const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
  return <InlineCodeWrapper>{children}</InlineCodeWrapper>
}
