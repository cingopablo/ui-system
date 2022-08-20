import { Meta } from '@storybook/react'
import React from 'react'

import { Codebox } from '../Codebox'

export default {
  title: 'UI System/Codebox',
  component: Codebox,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-background)' },
        { name: 'dark', value: 'var(--color-background)' },
      ],
    },
  },
} as Meta

export const _Codebox = () => {
  return <Codebox files={{}} autorun />
}
