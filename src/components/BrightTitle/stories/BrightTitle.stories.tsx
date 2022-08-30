import { Meta } from '@storybook/react'
import React from 'react'

import { Grid } from '../../Grid/Grid'
import { BrightTitle } from '../BrightTitle'

export default {
  title: 'Animations/Bright Title',
  component: BrightTitle,
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

export const _BrightTitle = () => (
  <Grid gap={4}>
    <BrightTitle>This is a gradient title</BrightTitle>
    <BrightTitle primary={'green'} secondary={'blue'}>
      This is a gradient title
    </BrightTitle>
  </Grid>
)
