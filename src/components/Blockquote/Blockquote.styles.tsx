import { styled } from '../../theming/stitches.config'

export const BlockquoteWrapper = styled('blockquote', {
  margin: '0 -50vw 2.25rem -50vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  width: '100vw',
  padding: 'var(--spacing-7) 0',
  textAlign: 'center',
  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--color-primary)',
      },
      secondary: {
        backgroundColor: 'var(--color-primary-emphasis)',
      },
      tertiary: {
        backgroundColor: 'var(--color-primary-clear)',
      },
      info: {
        backgroundColor: 'var(--color-info-clear)',
      },
      success: {
        backgroundColor: 'var(--color-success-clear)',
      },
      warning: {
        backgroundColor: 'var(--color-warning-clear)',
      },
      danger: {
        backgroundColor: 'var(--color-danger-clear)',
      },
      transparent: {
        backgroundColor: 'transparent',
      },
    },
  },
})

export const BlockquoteContent = styled('div', {
  margin: '0 auto',
  variants: {
    width: {
      full: {
        maxWidth: '100%',
      },
      contained: {
        maxWidth: 'var(--max-width-large)',
      },
    },
  },
  defaultVariants: {
    width: 'contained',
  },
})
