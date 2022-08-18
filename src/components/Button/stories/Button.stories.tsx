import { Meta } from '@storybook/react'
import * as React from 'react'

import { Flex } from '../../Flex/Flex'
import { Grid } from '../../Grid/Grid'
import { Icon } from '../../Icon/Icon'
import { Button } from '../Button'

export default {
  title: 'UI System/Button',
  component: Button,
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

export const _Variants = () => (
  <Grid gap={6}>
    <Grid gap={2}>
      Default
      <Flex gap={2}>
        <Button>Click me</Button>
        <Button variant={'secondary'}>Click me</Button>
        <Button destructive>Click me</Button>
        <Button variant={'secondary'} destructive>
          Click me
        </Button>
        <Button startIcon={<Icon.CMD />}>CMD</Button>
        <Button endIcon={<Icon.CMD />}>CMD</Button>
        <Button onlyIcon icon={<Icon.CMD size={5} />} />
        <Button onlyIcon variant={'secondary'} icon={<Icon.CMD size={5} />} />
      </Flex>
    </Grid>
    <Grid gap={2}>
      Disabled
      <Flex gap={2}>
        <Button disabled>Click me</Button>
        <Button variant={'secondary'} disabled>
          Click me
        </Button>
        <Button destructive disabled>
          Click me
        </Button>
        <Button destructive disabled variant={'secondary'}>
          Click me
        </Button>
        <Button startIcon={<Icon.CMD />} disabled>
          CMD
        </Button>
        <Button endIcon={<Icon.CMD />} disabled>
          CMD
        </Button>
        <Button onlyIcon icon={<Icon.CMD size={5} />} disabled />
        <Button onlyIcon variant={'secondary'} icon={<Icon.CMD size={5} />} disabled />
      </Flex>
    </Grid>
  </Grid>
)
