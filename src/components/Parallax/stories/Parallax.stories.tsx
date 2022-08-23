import { Meta } from '@storybook/react'
import React from 'react'

import { styled } from '../../../theming/stitches.config'
import { Grid } from '../../Grid/Grid'
import { Parallax } from '../Parallax'

export default {
  title: 'UI System/Parallax',
  component: Parallax,
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

export const _Parallax = () => (
  <Grid gap={4}>
    <div style={{ height: 50 }}></div>
    <Parallax>
      <Box />
    </Parallax>

    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
    <Parallax>
      <Box />
    </Parallax>
  </Grid>
)
