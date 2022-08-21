import { Meta } from '@storybook/react'
import * as React from 'react'

import { Flex } from '../../Flex/Flex'
import { Icon } from '../Icon'

export default {
  title: 'UI System/Icon',
} as Meta

export const _Icon = () => (
  <Flex gap={2}>
    <Icon.ArrowUp />
    <Icon.ArrowRight />
    <Icon.ArrowDown />
    <Icon.ExternalLink />
    <Icon.Close />
    <Icon.Warning />
    <Icon.Info />
    <Icon.Folder />
    <Icon.RSS />
    <Icon.Return />
    <Icon.CMD />
    <Icon.DarkMode />
    <Icon.LightMode />
    <Icon.EmailIcon />
  </Flex>
)
