import { Meta } from '@storybook/react'
import { Badge } from '../Badge'
import { Grid } from '../../Grid/Grid'
import * as React from 'react'
import { Icon } from '../../Icon/Icon'

export default {
  title: 'UI System/Badge',
  component: Badge,
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

export const _Badge = () => (
  <Grid gap={4}>
    <Badge>Badge</Badge>
    <Badge startIcon={<Icon.ChevronRight />}>Badge</Badge>
    <Badge endIcon={<Icon.CMD />}>Badge</Badge>
    <Badge variant={'info'}>Badge</Badge>
    <Badge variant={'info'} startIcon={<Icon.ChevronRight />}>
      Badge
    </Badge>
    <Badge variant={'info'} endIcon={<Icon.CMD />}>
      Badge
    </Badge>
    <Badge variant={'success'}>Badge</Badge>
    <Badge variant={'success'} startIcon={<Icon.ChevronRight />}>
      Badge
    </Badge>
    <Badge variant={'success'} endIcon={<Icon.CMD />}>
      Badge
    </Badge>
    <Badge variant={'warning'}>Badge</Badge>
    <Badge variant={'warning'} startIcon={<Icon.ChevronRight />}>
      Badge
    </Badge>
    <Badge variant={'warning'} endIcon={<Icon.CMD />}>
      Badge
    </Badge>
    <Badge variant={'danger'}>Badge</Badge>
    <Badge variant={'danger'} startIcon={<Icon.ChevronRight />}>
      Badge
    </Badge>
    <Badge variant={'danger'} endIcon={<Icon.CMD />}>
      Badge
    </Badge>
  </Grid>
)
