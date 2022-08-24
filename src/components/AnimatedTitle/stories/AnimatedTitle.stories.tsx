import { Meta } from '@storybook/react'
import React from 'react'

import { styled } from '../../../theming/stitches.config'
import { Grid } from '../../Grid/Grid'
import { AnimatedTitle } from '../AnimatedTitle'

export default {
  title: 'UI System/Animated Title',
  component: AnimatedTitle,
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

export const _AnimatedTitle = () => (
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
    <AnimatedTitle as={'h4'}>Hola que tal</AnimatedTitle>
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
    <AnimatedTitle as={'h4'}>Hola que tal</AnimatedTitle>
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
  </Grid>
)
