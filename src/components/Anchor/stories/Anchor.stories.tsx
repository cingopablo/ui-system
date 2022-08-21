import { Meta } from '@storybook/react'
import React from 'react'

import { Grid } from '../../Grid/Grid'
import { Anchor } from '../Anchor'

export default {
  title: 'UI System/Anchor',
  component: Anchor,
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

export const _Anchor = () => (
  <Grid gap={4}>
    <Anchor>This is a link without href</Anchor>
    <Anchor href={'/'}>This is a link</Anchor>
    <Anchor variant={'secondary'}>This is a link without href</Anchor>
    <Anchor variant={'secondary'} href={'/'}>
      This is a link
    </Anchor>
    <Anchor underline>This is a link without href</Anchor>
    <Anchor underline href={''}>
      This is a link
    </Anchor>
  </Grid>
)
