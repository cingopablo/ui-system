import { Meta } from '@storybook/react'
import React from 'react'

import { Grid } from '../../Grid/Grid'
import { Blockquote } from '../Blockquote'

export default {
  title: 'UI System/Blockquote',
  component: Blockquote,
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

export const _Blockquote = () => (
  <Grid gap={4}>
    <Blockquote>content</Blockquote>
    <Blockquote variant={'secondary'}>content</Blockquote>
    <Blockquote variant={'info'}>content</Blockquote>
    <Blockquote variant={'success'}>content</Blockquote>
    <Blockquote variant={'warning'}>content</Blockquote>
    <Blockquote variant={'danger'}>content</Blockquote>
  </Grid>
)
