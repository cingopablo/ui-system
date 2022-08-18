import * as React from 'react'
import { LabelProps } from './Label.types'
import { Text } from '../Typography'

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <Text
      {...rest}
      as={'label'}
      css={{
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        marginRight: '8px',
        marginBottom: '0px',
        letterSpacing: '0px',
        verticalAlign: 'top',
      }}
      variant={'secondary'}
      size={'caption'}
      weight={3}>
      {children}
    </Text>
  )
}
