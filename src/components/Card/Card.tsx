import * as React from 'react'

import { StyledCard } from './Card.styles'
import { CardProps } from './Card.types'

export const Card: React.FC<CardProps> = ({ variant = 'default', children, css, onClick, withoutPadding = false }) => (
  <StyledCard variant={variant} hoverable={!!onClick} css={css} onClick={onClick} withoutPadding={withoutPadding}>
    {children}
  </StyledCard>
)

Card.displayName = 'Card'
