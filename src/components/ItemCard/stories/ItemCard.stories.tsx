import { Meta } from '@storybook/react'
import React from 'react'

import { Grid } from '../../Grid/Grid'
import { ItemCard } from '../ItemCard'

export default {
  title: 'UI System/Item Card',
  component: ItemCard,
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

export const _ItemCard = () => (
  <Grid>
    <div style={{ height: 200 }}></div>
    <ItemCard
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log('click')
      }}
      src={
        'https://images.unsplash.com/photo-1661501560798-562d7223dbbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      }
      year={'current'}
      title={'airfocus'}
      position={'Design & Development'}
    />
  </Grid>
)
