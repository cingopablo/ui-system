import { styled } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'

export const StyledBadge = styled('div', {
  fontSize: text.button.fontSize,
  fontWeight: text.button.fontWeight,
  padding: '0 var(--spacing-4)',
  height: '24px',
  width: 'max-content',
  borderRadius: '999999px',
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      default: {
        backgroundColor: 'var(--color-primary-clear)',
        color: 'var(--color-primary)',
      },
      info: {
        backgroundColor: 'var(--color-info-clear)',
        color: 'var(--color-info)',
      },
      success: {
        backgroundColor: 'var(--color-success-clear)',
        color: 'var(--color-success)',
      },
      warning: {
        backgroundColor: 'var(--color-warning-clear)',
        color: 'var(--color-warning)',
      },
      danger: {
        backgroundColor: 'var(--color-danger-clear)',
        color: 'var(--color-danger)',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
