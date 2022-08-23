import { shadows, styled } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'

export const StyledButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontSize: text.button.fontSize,
  fontWeight: text.button.fontWeight,
  fontFamily: text.button.fontFamily,
  height: '40px',
  width: 'max-content',
  padding: '0 var(--spacing-4)',
  borderRadius: 'var(--border-radius-2)',
  transform: 'scale(var(--button-scale, 1)) translateZ(0)',
  transition: 'transform 150ms, background 150ms, color 150ms, box-shadow 250ms',
  display: 'flex',
  alignItems: 'center',
  boxShadow: shadows.medium,

  '&:active': {
    '&:not(:disabled)': {
      '--button-scale': 0.98,
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.3,
  },
  '&:hover': {
    '&:not(:disabled)': {
      boxShadow: shadows.large,
    },
  },
  '&:focus-visible': {
    boxShadow: shadows.large,
  },

  variants: {
    variant: {
      primary: {
        color: 'var(--color, hsl(var(--palette-gray-20)))',
        backgroundColor: 'var(--background, var(--color-primary))',
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
        boxShadow: `inset 0 0 0 2px var(--color-primary), ${shadows.medium}`,

        '&:hover': {
          '&:not(:disabled)': {
            '--color': 'var(--color-primary-emphasis)',
            boxShadow: `inset 0 0 0 2px var(--color), ${shadows.large}`,
          },
        },

        '&:focus-visible': {
          '--color': 'var(--color-primary-emphasis)',
          boxShadow: `inset 0 0 0 2px var(--color), ${shadows.large}`,
        },
      },
    },
    destructive: {
      true: {
        color: 'var(--color, hsl(var(--palette-gray-20)))',
        backgroundColor: 'var(--background, var(--color-danger))',
        '--color-shadow': 'var(--color-shadow-danger)',
        boxShadow: `inset 0 0 0 2px var(--color-danger), ${shadows.medium}`,

        '&:hover': {
          '&:not(:disabled)': {
            '--background': 'var(--color-danger-emphasis)',
            boxShadow: `inset 0 0 0 2px var(--color-danger-emphasis), ${shadows.large}`,
          },
        },

        '&:focus-visible': {
          '--background': 'var(--color-danger-emphasis)',
          boxShadow: `inset 0 0 0 2px var(--color-danger-emphasis), ${shadows.large}`,
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
        '--color-shadow': 'var(--color-shadow-danger)',
        boxShadow: `inset 0 0 0 2px var(--color-danger), ${shadows.medium}`,

        '&:hover': {
          '&:not(:disabled)': {
            '--color': 'var(--color-danger-emphasis)',
            backgroundColor: 'transparent',
            boxShadow: `inset 0 0 0 2px var(--color-danger-emphasis), ${shadows.large}`,
          },
        },

        '&:focus-visible': {
          '--color': 'var(--color-danger-emphasis)',
          backgroundColor: 'transparent',
          boxShadow: `inset 0 0 0 2px var(--color-danger-emphasis), ${shadows.large}`,
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
