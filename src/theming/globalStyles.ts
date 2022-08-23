import NeueMontrealBold from './fonts/NeueMontreal-Bold.otf'
import NeueMontrealBook from './fonts/NeueMontreal-Book.otf'
import NeueMontrealItalic from './fonts/NeueMontreal-Italic.otf'
import NeueMontrealMedium from './fonts/NeueMontreal-Medium.otf'
import NeueMontrealSemiBolditalic from './fonts/NeueMontreal-SemiBolditalic.otf'
import NeueMontrealThin from './fonts/NeueMontreal-Thin.otf'
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
      src: `url(${NeueMontrealThin}) format("otf")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 400,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealBook}) format("otf")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'italic',
      fontWeight: 400,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealItalic}) format("otf")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 500,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealMedium}) format("otf")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'italic',
      fontWeight: 600,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealSemiBolditalic}) format("otf")`,
    },
    {
      fontFamily: 'Neue Montreal',
      fontStyle: 'normal',
      fontWeight: 700,
      fontDisplay: 'optional',
      src: `url(${NeueMontrealBold}) format("otf")`,
    },
  ],
})
