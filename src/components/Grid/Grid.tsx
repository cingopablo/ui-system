import { styled } from '../../theming/stitches.config'

export const Grid = styled('div', {
  display: 'grid',
  height: 'inherit',
  variants: {
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      small: {
        gridTemplateColumns: 'var(--layout-small)',
      },
      medium: {
        gridTemplateColumns: 'var(--layout-medium)',
      },
    },
    gap: {
      1: {
        gap: 'var(--spacing-1)',
      },
      2: {
        gap: 'var(--spacing-2)',
      },
      3: {
        gap: 'var(--spacing-3)',
      },
      4: {
        gap: 'var(--spacing-4)',
      },
      5: {
        gap: 'var(--spacing-5)',
      },
      6: {
        gap: 'var(--spacing-6)',
      },
      7: {
        gap: 'var(--spacing-7)',
      },
      8: {
        gap: 'var(--spacing-8)',
      },
      9: {
        gap: 'var(--spacing-9)',
      },
      10: {
        gap: 'var(--spacing-10)',
      },
      11: {
        gap: 'var(--spacing-11)',
      },
      12: {
        gap: 'var(--spacing-12)',
      },
      13: {
        gap: 'var(--spacing-13)',
      },
      14: {
        gap: 'var(--spacing-14)',
      },
      15: {
        gap: 'var(--spacing-15)',
      },
    },
    gapX: {
      1: {
        columnGap: 'var(--spacing-1)',
      },
      2: {
        columnGap: 'var(--spacing-2)',
      },
      3: {
        columnGap: 'var(--spacing-3)',
      },
      4: {
        columnGap: 'var(--spacing-4)',
      },
      5: {
        columnGap: 'var(--spacing-5)',
      },
      6: {
        columnGap: 'var(--spacing-6)',
      },
      7: {
        columnGap: 'var(--spacing-7)',
      },
      8: {
        columnGap: 'var(--spacing-8)',
      },
      9: {
        columnGap: 'var(--spacing-9)',
      },
      10: {
        columnGap: 'var(--spacing-10)',
      },
      11: {
        columnGap: 'var(--spacing-11)',
      },
      12: {
        columnGap: 'var(--spacing-12)',
      },
      13: {
        columnGap: 'var(--spacing-13)',
      },
      14: {
        columnGap: 'var(--spacing-14)',
      },
      15: {
        columnGap: 'var(--spacing-15)',
      },
    },
    gapY: {
      1: {
        rowGap: 'var(--spacing-1)',
      },
      2: {
        rowGap: 'var(--spacing-2)',
      },
      3: {
        rowGap: 'var(--spacing-3)',
      },
      4: {
        rowGap: 'var(--spacing-4)',
      },
      5: {
        rowGap: 'var(--spacing-5)',
      },
      6: {
        rowGap: 'var(--spacing-6)',
      },
      7: {
        rowGap: 'var(--spacing-7)',
      },
      8: {
        rowGap: 'var(--spacing-8)',
      },
      9: {
        rowGap: 'var(--spacing-9)',
      },
      10: {
        rowGap: 'var(--spacing-10)',
      },
      11: {
        rowGap: 'var(--spacing-11)',
      },
      12: {
        rowGap: 'var(--spacing-12)',
      },
      13: {
        rowGap: 'var(--spacing-13)',
      },
      14: {
        rowGap: 'var(--spacing-14)',
      },
      15: {
        rowGap: 'var(--spacing-15)',
      },
    },
  },
  defaultVariants: {
    align: 'stretch',
    justify: 'initial',
  },
})
