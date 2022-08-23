import NeueMontrealBold from './fonts/NeueMontreal-Bold.woff2'
import NeueMontrealBook from './fonts/NeueMontreal-Book.woff2'
import NeueMontrealItalic from './fonts/NeueMontreal-Italic.woff2'
import NeueMontrealMedium from './fonts/NeueMontreal-Medium.woff2'
import NeueMontrealSemiBolditalic from './fonts/NeueMontreal-SemiBolditalic.woff2'
import NeueMontrealThin from './fonts/NeueMontreal-Thin.woff2'
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
    font: '112.5%/1.45 var(--font-display)',
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
  '@font-face': [
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 300,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealThin}) format("woff2")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 400,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealBook}) format("woff2")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'italic',
      fontWeight: 400,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealItalic}) format("woff2")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 500,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealMedium}) format("woff2")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'italic',
      fontWeight: 600,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealSemiBolditalic}) format("woff2")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 700,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealBold}) format("woff2")`,
    },
  ],
})
