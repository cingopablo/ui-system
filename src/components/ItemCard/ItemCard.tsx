import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { Text } from '../Typography'
import { ItemCardWrapper, ItemImageWrapper, ItemTextWrapper } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  variant = 'blur',
  cursor = 'See more',
  image,
  description,
  onClick,
  css,
}) => {
  return (
    <ItemCardWrapper onClick={onClick} hover={!!onClick} css={css}>
      <Cursor variant={variant} content={cursor}>
        <ItemImageWrapper>{image}</ItemImageWrapper>
        <ItemTextWrapper>
          <Text size={'large'} weight={4}>
            {title}
          </Text>
          <Text size={'medium'} weight={3} variant={'secondary'}>
            {description}
          </Text>
        </ItemTextWrapper>
      </Cursor>
    </ItemCardWrapper>
  )
}
