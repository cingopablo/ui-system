import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import {
  ItemCardDescription,
  ItemCardTitle,
  ItemCardWrapper,
  ItemImageWrapper,
  ItemTextWrapper,
} from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

export const ItemCard: React.FC<ItemCardProps> = ({ title, cursor = 'See more', image, description, onClick, css }) => {
  return (
    <ItemCardWrapper onClick={onClick} hover={!!onClick} css={css}>
      <Cursor variant={'blur'} content={cursor}>
        <ItemImageWrapper>{image}</ItemImageWrapper>
        <ItemTextWrapper>
          <ItemCardTitle size={'large'} weight={4}>
            {title}
          </ItemCardTitle>
          <ItemCardDescription size={'medium'} weight={3} variant={'secondary'}>
            {description}
          </ItemCardDescription>
        </ItemTextWrapper>
      </Cursor>
    </ItemCardWrapper>
  )
}
