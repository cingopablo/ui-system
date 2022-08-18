import * as React from 'react'

import { Meta } from '@storybook/react'
import { Button } from '../../Button/Button'
import { Dialog } from '../Dialog'
import { Box } from '../../Box/Box'
import { DialogHeader } from '../DialogHeader'
import { DialogContent } from '../DialogContent'

export default {
  title: 'UI System/Dialog',
  component: Button,
} as Meta

export const _Dialog = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <Dialog open={isOpen} onOpenChange={value => setIsOpen(value)}>
        <DialogHeader title={'Title'} />
        <DialogContent>{'here is the content'}</DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
