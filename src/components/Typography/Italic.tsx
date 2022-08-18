import * as React from 'react'

import { Text } from './Text'
import { EMProps } from './Typography.types'

export const Italic = React.forwardRef<React.ElementRef<'em'>, EMProps>((props, ref) => {
  return (
    <Text
      {...props}
      as={'em'}
      variant={'secondary'}
      weight={3}
      ref={ref}
      spaced={false}
      style={{
        letterSpacing: '-0.3px',
      }}
    />
  )
})

Italic.displayName = 'EM'
