import { motion } from 'framer-motion'

import { shadows, styled } from '../../theming/stitches.config'
import { Text } from '../Typography'

export const ItemImageWrapper = styled('span', {
  transition: 'filter 350ms',

  '> *': {
    transition: 'box-shadow 350ms',
    width: '100%',
    borderRadius: 'var(--border-radius-3)',
    boxShadow: shadows.small,
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

export const ItemTextWrapper = styled(motion.div, {
  display: 'flex',
  gap: 'var(--spacing-1)',
  alignItems: 'center',

  '@media (max-width: 600px)': {
    display: 'grid',
    gap: 0,
  },
})

export const ItemCardTitle = styled(Text, {
  '&:after': {
    content: ' —',
  },

  '@media (max-width: 600px)': {
    '&:after': {
      content: '',
    },
  },
})
export const ItemCardDescription = styled(Text, {})
