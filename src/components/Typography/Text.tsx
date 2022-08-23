import { styled } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'

export const Text = styled('span', {
  margin: 0,
  padding: 0,
  textRendering: 'optimizeLegibility',
  lineHeight: 'var(--font-height-text)',

  variants: {
    outline: {
      true: {
        color: 'transparent !important',
        WebkitTextStrokeColor: 'var(--color-text-primary)',
        WebkitTextStrokeWidth: '1px',
      },
    },
    spaced: {
      true: {
        letterSpacing: 'var(--font-spacing-text)',
        lineHeight: 'var(--font-height-text)',
      },
    },
    family: {
      display: {
        fontFamily: 'var(--font-display)',
      },
      mono: {
        fontFamily: 'var(--font-mono)',
      },
      numeric: {
        fontFamily: 'var(--font-numeric)',
      },
    },
    size: {
      caption: { ...text.caption },
      default: { ...text.default },
      medium: { ...text.medium },
      large: { ...text.large },
      xlarge: { ...text.xlarge },
      xxlarge: { ...text.xxlarge },
      xxxlarge: { ...text.xxxlarge },
    },
    ellipsis: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    variant: {
      primary: {
        color: 'var(--color-text-primary)',
      },
      secondary: {
        color: 'var(--color-text-secondary)',
      },
      tertiary: {
        color: 'var(--color-text-tertiary)',
      },
      color: {
        color: 'var(--color-primary)',
      },
      info: {
        color: 'var(--color-info)',
      },
      success: {
        color: 'var(--color-success)',
      },
      warning: {
        color: 'var(--color-warning)',
      },
      danger: {
        color: 'var(--color-danger)',
      },
    },
    weight: {
      1: {
        fontWeight: 'var(--font-weight-1) !important',
      },
      2: {
        fontWeight: 'var(--font-weight-2) !important',
      },
      3: {
        fontWeight: 'var(--font-weight-3) !important',
      },
      4: {
        fontWeight: 'var(--font-weight-4) !important',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    family: 'display',
    size: 'default',
    variant: 'primary',
    spaced: true,
  },
})
