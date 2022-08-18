import * as React from 'react'

import { Meta } from '@storybook/react'
import { Text } from '../Text'
import { Grid } from '../../Grid/Grid'
import { Strong } from '../Strong'
import { Italic } from '../Italic'
import { H1, H2, H3, H4 } from '../Heading'

export default {
  title: 'UI System/Typography',
  component: Text,
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

export const _Text = () => (
  <Grid gap={6}>
    <Grid>
      <Text>xxlarge</Text>
      <Text size={'caption'}>Font size: 48px (2.667rem) | Line height: X</Text>
      <Text size={'xxlarge'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>xlarge</Text>
      <Text size={'caption'}>Font size: 36px (2rem) | Line height: X</Text>
      <Text size={'xlarge'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>large</Text>
      <Text size={'caption'}>Font size: 30px (1.667rem) | Line height: X</Text>
      <Text size={'large'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>medium</Text>
      <Text size={'caption'}>Font size: 24px (1.333rem) | Line height: X</Text>
      <Text size={'medium'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>default</Text>
      <Text size={'caption'}>Font size: 18px (1rem) | Line height: X</Text>
      <Text>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>caption</Text>
      <Text size={'caption'}>Font size: 16px | Line height: X</Text>
      <Text size={'caption'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Strong</Text>
      <Strong>The quick brown fox jumps over the lazy dog</Strong>
    </Grid>
    <Grid>
      <Text>Italic</Text>
      <Italic>The quick brown fox jumps over the lazy dog</Italic>
    </Grid>
  </Grid>
)

export const _Heading = () => (
  <Grid>
    <Grid>
      <Text>Heading H1</Text>
      <Text size={'caption'}>Font size: 48px (2.667rem) | Line height: X</Text>
      <H1>Heading H1</H1>
    </Grid>
    <Grid>
      <Text>Heading H2</Text>
      <Text size={'caption'}>Font size: 36px (2rem) | Line height: X</Text>

      <H2>Heading H2</H2>
    </Grid>
    <Grid>
      <Text>Heading H3</Text>
      <Text size={'caption'}>Font size: 30px (1.667rem) | Line height: X</Text>
      <H3>Heading H3</H3>
    </Grid>
    <Grid>
      <Text>Heading H4</Text>
      <Text size={'caption'}>Font size: 24px (1.333rem) | Line height: X</Text>
      <H4>Heading H4</H4>
    </Grid>
  </Grid>
)

export const _Outline = () => (
  <Grid gap={6}>
    <Text size={'xxlarge'} outline>
      The quick brown fox jumps over the lazy dog
    </Text>
    <Text size={'xlarge'} outline>
      The quick brown fox jumps over the lazy dog
    </Text>
    <Text size={'large'} outline>
      The quick brown fox jumps over the lazy dog
    </Text>
    <Text size={'default'} outline>
      The quick brown fox jumps over the lazy dog
    </Text>
    <Text size={'caption'} outline>
      The quick brown fox jumps over the lazy dog
    </Text>
  </Grid>
)

export const _Families = () => (
  <Grid gap={6}>
    <Grid>
      <Text>Display</Text>
      <Text>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Mono</Text>
      <Text family={'mono'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Numeric</Text>
      <Text family={'numeric'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
  </Grid>
)

export const _Variant = () => (
  <Grid gap={6}>
    <Grid>
      <Text>Primary</Text>
      <Text>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Secondary</Text>
      <Text variant={'secondary'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Tertiary</Text>
      <Text variant={'tertiary'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Info</Text>
      <Text variant={'info'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Success</Text>
      <Text variant={'success'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Warning</Text>
      <Text variant={'warning'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
    <Grid>
      <Text>Danger</Text>
      <Text variant={'danger'}>The quick brown fox jumps over the lazy dog</Text>
    </Grid>
  </Grid>
)
