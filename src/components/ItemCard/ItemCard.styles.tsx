import { shadows, styled } from '../../theming/stitches.config'

export const ItemImageWrapper = styled('span', {
  transition: 'filter 350ms',

  '> *': {
    transition: 'box-shadow 350ms, transform 350ms',
    width: '100%',
    borderRadius: 'var(--border-radius-3)',
    boxShadow: shadows.small,

    transform: 'scale(var(--button-scale, 1)) translateZ(0)',

    '&:active': {
      '&:not(:disabled)': {
        '--button-scale': 0.98,
      },
    },
  },
})

export const ItemCardWrapper = styled('li', {
  listStyleType: 'none',
  display: 'grid',
  gap: 'var(--spacing-1)',

  variants: {
    hover: {
      true: {
        [`&:hover > div > ${ItemImageWrapper}`]: {
          filter: 'brightness(110%)',

          '> *': {
            boxShadow: shadows.xlarge,
          },
        },
      },
    },
  },

  defaultVariants: {
    hover: false,
  },
})

export const ItemTextWrapper = styled('div', {
  display: 'grid',
  margin: 0,

  '> *': {
    marginBottom: 0,
  },
})
