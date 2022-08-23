import { Meta } from '@storybook/react'
import React from 'react'

import { Grid } from '../../Grid/Grid'
import { H1, Text } from '../../Typography'
import { ParallaxText } from '../Parallax'

export default {
  title: 'UI System/Parallax Text',
  component: ParallaxText,
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

export const _Parallax = () => (
  <Grid gap={4}>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
    <ParallaxText baseVelocity={-5}>
      <H1>Framer Motion</H1>
    </ParallaxText>
    <ParallaxText baseVelocity={5}>
      <Text size={'xxxlarge'}>Scroll velocity</Text>
    </ParallaxText>
  </Grid>
)
