import { Meta } from '@storybook/react'
import { Tooltip } from '../Tooltip'
import { Icon } from '../../Icon/Icon'
import { Button } from '../../Button/Button'
import * as React from 'react'
import { Grid } from '../../Grid/Grid'

export default {
  title: 'UI System/Tooltip',
  component: Tooltip,
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

export const _Tooltip = () => {
  return (
    <Tooltip.Provider>
      <Grid gap={4}>
        <Tooltip content={'Top'} side={'top'}>
          <Button onlyIcon icon={<Icon.CMD size={5} />} />
        </Tooltip>
        <Tooltip content={'Right'} side={'right'}>
          <Button onlyIcon icon={<Icon.CMD size={5} />} />
        </Tooltip>
        <Tooltip content={'Bottom'}>
          <Button onlyIcon icon={<Icon.CMD size={5} />} />
        </Tooltip>
        <Tooltip content={'Left'} side={'left'}>
          <Button onlyIcon icon={<Icon.CMD size={5} />} />
        </Tooltip>
      </Grid>
    </Tooltip.Provider>
  )
}
