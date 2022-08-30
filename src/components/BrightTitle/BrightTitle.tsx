import React from 'react'

import { headingCSS, Text } from '../Typography'
import { BrightTitleWrapper } from './BrightTitle.styles'
import { BrightTitleProps } from './BrightTitle.types'

export const BrightTitle: React.FC<BrightTitleProps> = ({
  children,
  as = 'h1',
  css,
  speed = 8,
  primary = 'purple',
  secondary = 'blue',
}) => {
  return (
    <Text
      as={as}
      role={'heading'}
      css={{
        ...headingCSS[as],
        ...css,
      }}>
      <BrightTitleWrapper
        css={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        animate={{
          backgroundImage: [
            `linear-gradient(
              90deg,
              hsl(var(--palette-${primary}-500)) 0%,
              hsl(var(--palette-${secondary}-350)) 10%,
              hsl(var(--palette-${secondary}-700)) 90%)
            `,
            `linear-gradient(
              90deg,
              hsl(var(--palette-${primary}-500)) 10%,
              hsl(var(--palette-${secondary}-350)) 90%,
              hsl(var(--palette-${secondary}-700)) 100%)
            `,
            `linear-gradient(
              90deg,
              hsl(var(--palette-${primary}-500)) 0%,
              hsl(var(--palette-${secondary}-350)) 10%,
              hsl(var(--palette-${secondary}-700)) 90%)
            `,
          ],
          transition: {
            duration: speed,
            repeat: Infinity,
          },
        }}>
        {children}
      </BrightTitleWrapper>
    </Text>
  )
}
