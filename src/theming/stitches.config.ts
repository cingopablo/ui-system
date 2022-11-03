import { createStitches, CSS as StitchesCSS } from '@stitches/react'

const { config, css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  media: {
    sm: '(max-width: 600px)',
    md: '(max-width: 960px)',
    lg: '(max-width: 1024px)',
  },
})

export type CSS = StitchesCSS<typeof config>

export { shadows } from './tokens/shadows'
export type { VariantProps } from '@stitches/react'
export { config, css, getCssText, globalCss, keyframes, styled, theme }
