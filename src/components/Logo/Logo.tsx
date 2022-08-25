import React from 'react'

import { Anchor } from '../Anchor/Anchor'
import { Text } from '../Typography'
import { LogoProps } from './Logo.types'

export const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const parsedSize = size === 'small' ? 'medium' : size === 'medium' ? 'large' : size === 'large' ? 'xlarge' : 'xxlarge'
  return (
    <Anchor href={'/'} hover={false}>
      <Text size={parsedSize} weight={4}>
        pablo.
      </Text>
    </Anchor>
  )
}

Logo.displayName = 'Logo'
