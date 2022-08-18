import { styled } from '../../theming/stitches.config'

export const StyledAvatar = styled('div', {
  borderRadius: '50%',
  boxShadow: '0 0 0 2px var(--box-shadow, var(--color-primary))',
  color: 'var(--color-text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow 150ms',
  cursor: 'default',
  '-webkit-touch-callout': 'none',
  '-webkit-user-select': 'none',
  '-khtml-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  userSelect: 'none',

  '&:hover': {
    '--box-shadow': 'var(--color-primary-emphasis)',
  },

  variants: {
    size: {
      small: {
        height: 'var(--spacing-5)',
        width: 'var(--spacing-5)',
      },
      default: {
        height: 'var(--spacing-6)',
        width: 'var(--spacing-6)',
      },
      large: {
        height: 'var(--spacing-7)',
        width: 'var(--spacing-7)',
      },
      xlarge: {
        height: 'var(--spacing-8)',
        width: 'var(--spacing-8)',
      },
    },
  },
})
