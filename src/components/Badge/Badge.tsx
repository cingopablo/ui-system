import * as React from 'react'

import { Flex } from '../Flex/Flex'
import { StyledBadge } from './Badge.styles'
import { BadgeProps } from './Badge.types'

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, startIcon, endIcon }) => {
  return (
    <StyledBadge variant={variant}>
      {startIcon ? (
        <Flex
          css={{
            marginRight: 'var(--spacing-2)',
          }}>
          {startIcon}
        </Flex>
      ) : null}
      {children}
      {endIcon ? (
        <Flex
          css={{
            marginLeft: 'var(--spacing-2)',
          }}>
          {endIcon}
        </Flex>
      ) : null}
    </StyledBadge>
  )
}

Badge.displayName = 'Badge'
