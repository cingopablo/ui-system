import * as React from 'react'

import { Text } from './Text'
import { StrongProps } from './Typography.types'

export const Strong = React.forwardRef<React.ElementRef<'strong'>, StrongProps>((props, ref) => {
  return <Text {...props} as={'strong'} weight={'4'} ref={ref} />
})

Strong.displayName = 'Strong'
