import { styled } from '../../theming/stitches.config'

export const AnchorWrapper = styled('a', {
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'var(--font-weight-3)',
  wordBreak: 'break-word',
  textDecoration: 'none',
  outline: 'none',
  transition: 'color 150ms, border-color 150ms',
  width: 'max-content',

  variants: {
    variant: {
      primary: {
        color: 'var(--color, var(--color-primary))',
        '&:hover': {
          '&:not(:disabled)': {
            '--color': 'var(--color-primary-emphasis)',
          },
        },
        '&:focus-visible': {
          '--color': 'var(--color-primary-emphasis)',
        },
      },
      secondary: {
        color: 'var(--color, var(--color-text-secondary))',
        '&:hover': {
          '&:not(:disabled)': {
            '--color': 'var(--color-text-primary)',
          },
        },
        '&:focus-visible': {
          '--color': 'var(--color-text-primary)',
        },
      },
    },
    underline: {
      true: {
        borderBottom: '4px solid',
        borderColor: 'var(--color-primary)',
      },
    },
    hover: {
      true: {
        borderBottom: '4px solid',
        borderColor: 'var(--border-color, transparent)',
        '&:hover': {
          '&:not(:disabled)': {
            '--border-color': 'var(--color-primary-emphasis)',
          },
        },
        '&:focus-visible': {
          '--border-color': 'var(--color-primary-emphasis)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    underline: false,
    hover: true,
  },
})
