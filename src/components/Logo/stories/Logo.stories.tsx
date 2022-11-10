import { Meta } from '@storybook/react'
import * as React from 'react'

import { Grid } from '../../Grid/Grid'
import { Logo } from '../Logo'

export default {
  title: 'UI System/Logo',
  component: Logo,
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

export const _Logo = () => (
  <Grid gap={4}>
    <Logo size={'small'} />
    <Logo size={'medium'} />
    <Logo size={'large'} />
    <Logo size={'xlarge'} />
    <Logo />
  </Grid>
)
