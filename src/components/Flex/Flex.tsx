import { styled } from '../../theming/stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    alignItems: {
      baseline: {
        alignItems: 'baseline',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      ['flex-end']: {
        alignItems: 'flex-end',
      },
      ['flex-start']: {
        alignItems: 'flex-start',
      },
      start: {
        alignItems: 'start',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    alignContent: {
      baseline: {
        alignContent: 'baseline',
      },
      center: {
        alignContent: 'center',
      },
      end: {
        alignContent: 'end',
      },
      start: {
        alignContent: 'start',
      },
      stretch: {
        alignContent: 'stretch',
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
      row: {
        flexDirection: 'row',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
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
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      ['space-around']: {
        justifyContent: 'space-around',
      },
      ['space-between']: {
        justifyContent: 'space-between',
      },
      ['space-evenly']: {
        justifyContent: 'space-evenly',
      },
      start: {
        justifyContent: 'start',
      },
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      nowrap: {
        flexWrap: 'nowrap',
      },
    },
  },
  defaultVariants: {
    gap: 1,
    wrap: 'nowrap',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
