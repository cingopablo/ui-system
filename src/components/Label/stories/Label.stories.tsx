import * as React from 'react'

import { Grid } from '../../Grid/Grid'

import { Meta } from '@storybook/react'
import { Label } from '../Label'

export default {
  title: 'UI System/Label',
  component: Label,
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

export const _Label = () => <Label>{'This is a label'}</Label>
