import { shadows, styled } from '../../theming/stitches.config'

export const StyledCard = styled('div', {
  padding: 'var(--spacing-5)',
  borderRadius: 'var(--border-radius-3)',
  color: 'var(--color-text-primary)',
  boxShadow: shadows.small,

  variants: {
    variant: {
      default: {
        background: 'var(--color-background-overlay)',
      },
      info: {
        '--color-shadow': 'var(--color-shadow-info)',
        background: 'var(--color-info-clear)',
      },
      success: {
        '--color-shadow': 'var(--color-shadow-success)',
        background: 'var(--color-success-clear)',
      },
      warning: {
        '--color-shadow': 'var(--color-shadow-warning)',
        background: 'var(--color-warning-clear)',
      },
      danger: {
        '--color-shadow': 'var(--color-shadow-danger)',
        background: 'var(--color-danger-clear)',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
