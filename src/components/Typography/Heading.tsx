import React from 'react'

import { CSS } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'
import { Text } from './Text'
import { DEFAULT_TAG } from './Typography.constants'
import { HeadingProps, HeadingSizeVariants, ShortHandHeadingProps } from './Typography.types'

const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>((props, ref) => {
  const { size = 'h1', ...rest } = props

  const { h1, h2, h3, h4 } = text
  const headingCSS: Record<HeadingSizeVariants, CSS> = { h1, h2, h3, h4 }

  return (
    <Text
      as={DEFAULT_TAG}
      {...rest}
      ref={ref}
      css={{
        ...headingCSS[size],
        ...props.css,
      }}
    />
  )
})

export const H1 = React.forwardRef<React.ElementRef<'h1'>, ShortHandHeadingProps>((props, ref) => (
  <Heading as={'h1'} size={'h1'} spaced={false} {...props} ref={ref} />
))

H1.displayName = 'H1'

export const H2 = React.forwardRef<React.ElementRef<'h2'>, ShortHandHeadingProps>((props, ref) => (
  <Heading as={'h2'} size={'h2'} spaced={false} {...props} ref={ref} />
))

H2.displayName = 'H2'

export const H3 = React.forwardRef<React.ElementRef<'h3'>, ShortHandHeadingProps>((props, ref) => (
  <Heading as={'h3'} size={'h3'} spaced={false} {...props} ref={ref} />
))

H3.displayName = 'H3'

export const H4 = React.forwardRef<React.ElementRef<'h4'>, ShortHandHeadingProps>((props, ref) => (
  <Heading as={'h4'} size={'h4'} spaced={false} {...props} ref={ref} />
))

H4.displayName = 'H4'
