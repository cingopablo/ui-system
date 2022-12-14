import * as React from 'react'

import { CardWrapper } from './Card.styles'
import { CardProps } from './Card.types'

export const Card: React.FC<CardProps> = ({ variant = 'default', align = 'left', children, css, onClick }) => (
  <CardWrapper variant={variant} align={align} hover={!!onClick} css={css} onClick={onClick}>
    {children}
  </CardWrapper>
)

Card.displayName = 'Card'
