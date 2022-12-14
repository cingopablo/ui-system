import { VariantProps } from '@stitches/react'
import * as React from 'react'

import { CSS } from '../../theming/stitches.config'
import { Text } from './Text'
import { DEFAULT_TAG } from './Typography.constants'

export type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size' | 'variant' | 'gradient'>

export type EMProps = React.HTMLAttributes<HTMLParagraphElement> & TextSizeVariants
export type StrongProps = React.HTMLAttributes<HTMLParagraphElement> & TextSizeVariants

export type HeadingSizeVariants = 'h1' | 'h2' | 'h3' | 'h4'
export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>

export type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & { css?: CSS; as?: any }

export type ShortHandHeadingProps = Omit<HeadingProps, 'size' | 'as'>
