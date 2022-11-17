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
      Primary
      <Flex gap={2}>
        <Button>Active</Button>
        <Button disabled>Disabled</Button>
      </Flex>
    </Grid>
    <Grid gap={2}>
      Secondary
      <Flex gap={2}>
        <Button variant={'secondary'}>Active</Button>
        <Button variant={'secondary'} disabled>
          Disabled
        </Button>
      </Flex>
    </Grid>
    <Grid gap={2}>
      Tertiary
      <Flex gap={2}>
        <Button variant={'tertiary'}>Active</Button>
        <Button variant={'tertiary'} disabled>
          Disabled
        </Button>
      </Flex>
    </Grid>
    <Grid gap={2}>
      Sizes
      <Flex gap={2}>
        <Button size={'small'}>Small</Button>
        <Button size={'small'} variant={'secondary'}>
          Small
        </Button>
        <Button size={'small'} variant={'tertiary'}>
          Small
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button size={'default'}>Default</Button>
        <Button size={'default'} variant={'secondary'}>
          Default
        </Button>
        <Button size={'default'} variant={'tertiary'}>
          Default
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button size={'large'}>Large</Button>
        <Button size={'large'} variant={'secondary'}>
          Large
        </Button>
        <Button size={'large'} variant={'tertiary'}>
          Large
        </Button>
      </Flex>
    </Grid>
    <Grid gap={2}>
      Colors
      <Flex gap={2}>
        <Button>Primary</Button>
        <Button variant={'secondary'}>Primary</Button>
        <Button variant={'tertiary'}>Primary</Button>
      </Flex>
      <Flex gap={2}>
        <Button color={'danger'}>Danger</Button>
        <Button color={'danger'} variant={'secondary'}>
          Danger
        </Button>
        <Button color={'danger'} variant={'tertiary'}>
          Danger
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button color={'neutral'}>Neutral</Button>
        <Button color={'neutral'} variant={'secondary'}>
          Neutral
        </Button>
        <Button color={'neutral'} variant={'tertiary'}>
          Neutral
        </Button>
      </Flex>
    </Grid>
    <Grid gap={2}>
      With icons
      <Flex gap={2}>
        <Button startIcon={<Icon.CMD />}>Position start</Button>
        <Button startIcon={<Icon.CMD />} variant={'secondary'}>
          Position start
        </Button>
        <Button startIcon={<Icon.CMD />} variant={'tertiary'}>
          Position start
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button endIcon={<Icon.CMD />}>Position end</Button>
        <Button endIcon={<Icon.CMD />} variant={'secondary'}>
          Position end
        </Button>
        <Button endIcon={<Icon.CMD />} variant={'tertiary'}>
          Position end
        </Button>
      </Flex>
    </Grid>
    <Grid gap={2}>
      Only icons
      <Flex gap={2}>
        <Button onlyIcon icon={<Icon.CMD size={5} />} />
        <Button onlyIcon variant={'secondary'} icon={<Icon.CMD size={5} />} />
        <Button onlyIcon variant={'tertiary'} icon={<Icon.CMD size={5} />} />
      </Flex>
    </Grid>
  </Grid>
)
