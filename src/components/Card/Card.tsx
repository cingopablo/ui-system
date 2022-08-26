import * as React from 'react'

import { StyledCard } from './Card.styles'
import { CardProps } from './Card.types'

export const Card: React.FC<CardProps> = ({ variant = 'default', hoverable = false, children, css, onClick }) => (
  <StyledCard variant={variant} hoverable={hoverable || !!onClick} css={css} onClick={onClick}>
    {children}
  </StyledCard>
)

Card.displayName = 'Card'
