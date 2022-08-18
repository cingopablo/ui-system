import { styled, VariantProps } from '../../theming/stitches.config'

export const StyledSVG = styled('svg', {
  variants: {
    variant: {
      default: { stroke: 'currentColor', fill: 'none' },
      primary: {
        stroke: 'var(--color-typeface-primary)',
        fill: 'none',
      },
      secondary: {
        stroke: 'var(--color-typeface-secondary)',
        fill: 'none',
      },
      tertiary: {
        stroke: 'var(--color-typeface-tertiary)',
        fill: 'none',
      },
      info: {
        stroke: 'var(--color-info)',
        fill: 'var(--color-info-emphasis)',
      },
      danger: {
        stroke: 'var(--color-danger)',
        fill: 'var(--color-danger-emphasis)',
      },
      success: {
        stroke: 'var(--color-success)',
        fill: 'var(--color-success-emphasis)',
      },
      warning: {
        stroke: 'var(--color-warning)',
        fill: 'var(--color-warning-emphasis)',
      },
    },
    outline: {
      true: {
        fill: 'none !important',
      },
    },
    size: {
      1: {
        width: 'var(--spacing-1)',
        height: 'var(--spacing-1)',
      },
      2: {
        width: 'var(--spacing-2)',
        height: 'var(--spacing-2)',
      },
      3: {
        width: 'var(--spacing-3)',
        height: 'var(--spacing-3)',
      },
      4: {
        width: 'var(--spacing-4)',
        height: 'var(--spacing-4)',
      },
      5: {
        width: 'var(--spacing-5)',
        height: 'var(--spacing-5)',
      },
      6: {
        width: 'var(--spacing-6)',
        height: 'var(--spacing-6)',
      },
      7: {
        width: 'var(--spacing-7)',
        height: 'var(--spacing-7)',
      },
      8: {
        width: 'var(--spacing-8)',
        height: 'var(--spacing-8)',
      },
      9: {
        width: 'var(--spacing-9)',
        height: 'var(--spacing-9)',
      },
      10: {
        width: 'var(--spacing-10)',
        height: 'var(--spacing-10)',
      },
      11: {
        width: 'var(--spacing-11)',
        height: 'var(--spacing-11)',
      },
      12: {
        width: 'var(--spacing-12)',
        height: 'var(--spacing-12)',
      },
      13: {
        width: 'var(--spacing-13)',
        height: 'var(--spacing-13)',
      },
      14: {
        width: 'var(--spacing-14)',
        height: 'var(--spacing-14)',
      },
      15: {
        width: 'var(--spacing-15)',
        height: 'var(--spacing-15)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    outline: true,
    size: 4,
  },
})

export type IconSize = VariantProps<typeof StyledSVG>['size']
export type IconVariant = VariantProps<typeof StyledSVG>['variant']
