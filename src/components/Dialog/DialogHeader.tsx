import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import { Button } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { Icon } from '../Icon/Icon'
import { H3 } from '../Typography'

type DialogHeaderProps = {
  title: string
  close?: boolean
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ title, close }) => (
  <Flex justifyContent={'space-between'}>
    <DialogPrimitive.Title>
      <H3>{title}</H3>
    </DialogPrimitive.Title>
    {close && (
      <DialogPrimitive.Close asChild>
        <Button>
          <Icon.Close />
        </Button>
      </DialogPrimitive.Close>
    )}
  </Flex>
)
