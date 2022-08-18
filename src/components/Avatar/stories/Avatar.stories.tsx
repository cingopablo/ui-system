import { Meta } from '@storybook/react'
import { Avatar } from '../Avatar'
import { Grid } from '../../Grid/Grid'

export default {
  title: 'UI System/Avatar',
  component: Avatar,
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

export const _Avatar = () => (
  <Grid gap={4}>
    <Avatar name={'Pablo Cingolani'} size={'small'} />
    <Avatar name={'Pablo Cingolani'} />
    <Avatar name={'Pablo Cingolani'} size={'large'} />
    <Avatar name={'Pablo Cingolani'} size={'xlarge'} />
  </Grid>
)
