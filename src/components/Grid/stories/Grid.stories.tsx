import * as React from 'react'

import { Grid } from '../Grid'
import { Meta } from '@storybook/react'
import { styled } from '../../../theming/stitches.config'

export default {
  title: 'UI System/Grid',
  component: Grid,
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
  backgroundColor: 'var(--color-primary)',
})

export const _Grid = () => (
  <Grid gap={1}>
    <Box />
    <Box />
    <Box />
    <Box />
  </Grid>
)
