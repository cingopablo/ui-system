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
    {/* eslint-disable-next-line no-console */}
    <Card>This is a test</Card>
    {/* eslint-disable-next-line no-console */}
    <Card variant={'info'}>This is a test</Card>
    {/* eslint-disable-next-line no-console */}
    <Card variant={'success'} onClick={() => console.log('click')}>
      This is a test
    </Card>
    {/* eslint-disable-next-line no-console */}
    <Card variant={'warning'} onClick={() => console.log('click')}>
      This is a test
    </Card>
    {/* eslint-disable-next-line no-console */}
    <Card variant={'danger'} onClick={() => console.log('click')}>
      This is a test
    </Card>
  </Grid>
)
