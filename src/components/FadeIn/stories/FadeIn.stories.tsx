import { Meta } from '@storybook/react'
import React from 'react'

import { styled } from '../../../theming/stitches.config'
import { Grid } from '../../Grid/Grid'
import { FadeIn } from '../FadeIn'

export default {
  title: 'Animations/Fade In',
  component: FadeIn,
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

export const _FadeIn = () => (
  <Grid>
    SCROLL DOWN
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <FadeIn>
      <Box />
    </FadeIn>
  </Grid>
)
