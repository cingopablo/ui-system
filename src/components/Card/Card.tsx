import * as React from 'react'
import { CardProps } from './Card.types'
import { StyledCard } from './Card.styles'

export const Card: React.FC<CardProps> = ({ variant = 'default', children }) => {
  return <StyledCard variant={variant}>{children}</StyledCard>
}

Card.displayName = 'Card'
