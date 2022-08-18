import { Meta } from '@storybook/react'
import { InlineCode } from '../InlineCode'
import { Grid } from '../../Grid/Grid'
import { Text } from '../../Typography'

export default {
  title: 'UI System/Inline Code',
  component: InlineCode,
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

export const _InlineCode = () => (
  <Grid gap={4}>
    <div>
      <Text>In the example, we can see that</Text> <InlineCode>{'this is an inline code'}</InlineCode>
    </div>

    <InlineCode>{'and this another'}</InlineCode>
    <InlineCode>{'console.log(x)'}</InlineCode>
    <InlineCode>{'<div>this is a div</div>'}</InlineCode>
  </Grid>
)
