import { Meta } from '@storybook/react'
import * as React from 'react'

import { styled } from '../../../theming/stitches.config'
import { Flex } from '../Flex'

export default {
  title: 'UI System/Flex',
  component: Flex,
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

const Box = styled('div', {
  width: '100px',
  height: '100px',
  backgroundColor: 'var(--color-background-overlay)',
})

export const _Flex = () => (
  <Flex>
    <Box />
    <Box />
    <Box />
    <Box />
  </Flex>
)
