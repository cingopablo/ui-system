import { styled } from '../../theming/stitches.config'

export const StyledCard = styled('div', {
  padding: 'var(--spacing-5)',
  borderRadius: 'var(--border-radius-3)',
  color: 'var(--color-text-primary)',
  variants: {
    variant: {
      default: {
        background: 'var(--color-background-overlay)',
        boxShadow: '0 0 0 1px var(--color-shadow)',
      },
      info: {
        background: 'var(--color-info-clear)',
        boxShadow: '0 0 0 1px var(--color-info-emphasis)',
      },
      success: {
        background: 'var(--color-success-clear)',
        boxShadow: '0 0 0 1px var(--color-success-emphasis)',
      },
      warning: {
        background: 'var(--color-warning-clear)',
        boxShadow: '0 0 0 1px var(--color-warning-emphasis)',
      },
      danger: {
        background: 'var(--color-danger-clear)',
        boxShadow: '0 0 0 1px var(--color-danger-emphasis)',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
