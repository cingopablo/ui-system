import { shadows, styled } from '../../theming/stitches.config'

export const CardWrapper = styled('div', {
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--border-radius-3)',
  color: 'var(--color-text-primary)',
  transition: 'box-shadow 250ms',

  '@media (max-width: 600px)': {
    padding: 'var(--spacing-5)',
  },

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
    hover: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          boxShadow: shadows.large,
        },
      },
    },
    shadow: {
      true: {
        boxShadow: shadows.small,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    hover: false,
    shadow: false,
  },
})
