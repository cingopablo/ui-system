import { Meta } from '@storybook/react'
import * as React from 'react'

import { Grid } from '../../Grid/Grid'
import { InfoCard } from '../InfoCard'

export default {
  title: 'UI System/Info Card',
  component: InfoCard,
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

export const _InfoCard = () => (
  <Grid gap={4}>
    {/* eslint-disable-next-line no-console */}
    <InfoCard onClick={() => console.log('click')}>This is a test</InfoCard>
    {/* eslint-disable-next-line no-console */}
    <InfoCard variant={'info'} onClick={() => console.log('click')}>
      This is a test
    </InfoCard>
    {/* eslint-disable-next-line no-console */}
    <InfoCard variant={'success'} onClick={() => console.log('click')}>
      This is a test
    </InfoCard>
    {/* eslint-disable-next-line no-console */}
    <InfoCard variant={'warning'} onClick={() => console.log('click')}>
      This is a test
    </InfoCard>
    {/* eslint-disable-next-line no-console */}
    <InfoCard variant={'danger'} onClick={() => console.log('click')}>
      This is a test
    </InfoCard>
  </Grid>
)
