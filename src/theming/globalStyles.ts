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

// const a = {
//   a: {
//     fontSize: 'var(--font-size-2)',
//     fontWeight: 'var(--font-weight-3)',
//     color: 'var(--color, var(--color-primary))',
//     textDecoration: 'none',
//     transition: 'color 150ms',
//     position: 'relative',
//     width: 'max-content',
//
//     '&::after': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       left: 0,
//       right: 0,
//       bottom: -2,
//       height: '2px',
//       backgroundColor: 'var(--color-primary-emphasis)',
//       opacity: 0,
//       transition: 'opacity 350ms',
//     },
//
//     '&:hover': {
//       '--color': 'var(--color-primary-emphasis)',
//     },
//
//     '&:hover:after': {
//       opacity: 1,
//     },
//   },
// }

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
