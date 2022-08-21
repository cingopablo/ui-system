import { styled } from '../../theming/stitches.config'

export const BlockquoteWrapper = styled('blockquote', {
  padding: 'var(--spacing-7)',
  textAlign: 'center',
  margin: 0,
  width: '100vw',
  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--color-primary-clear)',
      },
      secondary: {
        backgroundColor: 'var(--color-background-overlay)',
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
    },
  },
})

export const BlockquoteContent = styled('div', {
  maxWidth: 'var(--max-width-large)',
  margin: '0 auto',
})
