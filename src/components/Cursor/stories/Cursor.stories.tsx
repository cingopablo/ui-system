import { Meta } from '@storybook/react'
import React from 'react'

import { styled } from '../../../theming/stitches.config'
import { Grid } from '../../Grid/Grid'
import { Cursor } from '../Cursor'

export default {
  title: 'UI System/Cursor',
  component: Cursor,
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
  backgroundColor: 'red',
})

export const _Cursor = () => (
  <Grid gap={8}>
    <Cursor>
      <Box />
    </Cursor>
    <Cursor variant={'secondary'} content={'See more'}>
      <Box />
    </Cursor>
    <Cursor variant={'blur'} content={'See more'}>
      <Box />
    </Cursor>
  </Grid>
)
