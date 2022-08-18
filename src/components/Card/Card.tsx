import * as React from 'react'

import { StyledCard } from './Card.styles'
import { CardProps } from './Card.types'

export const Card: React.FC<CardProps> = ({ variant = 'default', children }) => {
  return <StyledCard variant={variant}>{children}</StyledCard>
}

Card.displayName = 'Card'
