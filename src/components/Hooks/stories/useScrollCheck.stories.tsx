import { Meta } from '@storybook/react'
import React from 'react'

import { useScrollCheck } from '../../../hooks/useScrollCheck'
import { styled } from '../../../theming/stitches.config'
import { Grid } from '../../Grid/Grid'

export default {
  title: 'Hooks/Scroll Check',
} as Meta

const Box = styled('div', {
  width: '100px',
  height: '100px',
  backgroundColor: 'var(--color-primary)',
})

export const _ScrollCheck = () => {
  const position = useScrollCheck(100)

  if (position) {
    // eslint-disable-next-line no-alert
    window.alert("You've reached the position 100")
  }

  return (
    <Grid gap={4}>
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
    </Grid>
  )
}
