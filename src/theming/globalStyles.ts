import { globalCss } from './stitches.config'
import { dark, light } from './themes'
import { colors, layout, radii, spacing, typography } from './tokens'

const global = {
  '*': {
    'box-sizing': 'border-box',
  },
  '*:before': {
    'box-sizing': 'border-box',
  },
  '*:after': {
    'box-sizing': 'border-box',
  },
}

const html = {
  html: {
    font: '112.5%/1.45 var(--font-fallback)',
    ['-ms-text-size-adjust']: '100%',
    ['-webkit-text-size-adjust']: '100%',
  },
}

const selection = {
  '::selection': {
    backgroundColor: 'var(--color-primary-clear)',
    color: 'var(--color-primary)',
  },
}

export const globalStyles = globalCss({
  ':root': {
    ...colors,
    ...radii,
    ...spacing,
    ...typography,
    ...layout,
  },
  ...global,
  ...html,
  ...selection,
  ...light,
  ...dark,
})
