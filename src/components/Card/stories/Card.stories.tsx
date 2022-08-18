import { Meta } from '@storybook/react'
import * as React from 'react'

import { Grid } from '../../Grid/Grid'
import { Card } from '../Card'

export default {
  title: 'UI System/Card',
  component: Card,
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

export const _Card = () => (
  <Grid gap={4}>
    <Card>This is a test</Card>
    <Card variant={'info'}>This is a test</Card>
    <Card variant={'success'}>This is a test</Card>
    <Card variant={'warning'}>This is a test</Card>
    <Card variant={'danger'}>This is a test</Card>
  </Grid>
)
