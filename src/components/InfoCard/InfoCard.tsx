import * as React from 'react'

import { InfoCardWrapper } from './InfoCard.styles'
import { InfoCardProps } from './InfoCard.types'

export const InfoCard: React.FC<InfoCardProps> = ({ variant = 'default', children, css, onClick }) => (
  <InfoCardWrapper variant={variant} hover={!!onClick} css={css} onClick={onClick}>
    {children}
  </InfoCardWrapper>
)

InfoCard.displayName = 'InfoCard'
