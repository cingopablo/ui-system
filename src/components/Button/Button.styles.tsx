import { styled } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'

export const StyledButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontSize: text.button.fontSize,
  fontWeight: text.button.fontWeight,
  height: '40px',
  width: 'max-content',
  padding: '0 var(--spacing-4)',
  borderRadius: 'var(--border-radius-2)',
  transform: 'scale(var(--button-scale, 1)) translateZ(0)',
  transition: 'transform 150ms, background 150ms, color 150ms, box-shadow 150ms',
  display: 'flex',
  alignItems: 'center',

  '&:active': {
    '&:not(:disabled)': {
      '--button-scale': 0.98,
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.3,
  },

  variants: {
    variant: {
      primary: {
        color: 'var(--color, hsl(var(--palette-gray-20)))',
        background: 'var(--background, var(--color-primary))',

        '&:hover': {
          '&:not(:disabled)': {
            '--background': 'var(--color-primary-emphasis)',
          },
        },

        '&:focus-visible': {
          '--background': 'var(--color-primary-emphasis)',
        },
      },
      secondary: {
        color: 'var(--color, var(--color-primary))',
        backgroundColor: 'var(--background, transparent)',
        boxShadow: 'inset 0 0 0 2px var(--color-primary)',

        '&:hover': {
          '&:not(:disabled)': {
            '--color': 'var(--color-primary-emphasis)',
            boxShadow: 'inset 0 0 0 2px var(--color-primary-emphasis)',
          },
        },

        '&:focus-visible': {
          '--color': 'var(--color-primary-emphasis)',
          boxShadow: 'inset 0 0 0 2px var(--color-primary-emphasis)',
        },
      },
    },
    destructive: {
      true: {
        color: 'var(--color, hsl(var(--palette-gray-20)))',
        backgroundColor: 'var(--background, var(--color-danger))',

        '&:hover': {
          '&:not(:disabled)': {
            '--background': 'var(--color-danger-emphasis)',
          },
        },

        '&:focus-visible': {
          '--background': 'var(--color-danger-emphasis)',
        },
      },
    },
    onlyIcon: {
      true: {
        width: '40px',
        padding: 0,
        justifyContent: 'center',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'secondary',
      destructive: true,
      css: {
        color: 'var(--color, var(--color-danger))',
        backgroundColor: 'var(--background, transparent)',
        boxShadow: 'inset 0 0 0 2px var(--color-danger)',

        '&:hover': {
          '&:not(:disabled)': {
            '--color': 'var(--color-danger-emphasis)',
            boxShadow: 'inset 0 0 0 2px var(--color-danger-emphasis)',
            backgroundColor: 'transparent',
          },
        },

        '&:focus-visible': {
          '--color': 'var(--color-danger-emphasis)',
          boxShadow: 'inset 0 0 0 2px var(--color-danger-emphasis)',
          backgroundColor: 'transparent',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    destructive: false,
    onlyIcon: false,
  },
})
