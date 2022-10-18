import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { H4, Text } from '../Typography'
import { ItemCardWrapper, ItemText } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

export const ItemCard: React.FC<ItemCardProps> = ({ title, variant = 'primary', image, description, onClick, css }) => {
  return (
    <Cursor content={image} variant={variant}>
      <ItemCardWrapper initial={'initial'} animate={'initial'} whileHover={'hover'} onClick={onClick} css={css}>
        <ItemText gap={4}>
          <H4>{title}</H4>
          <Text size={'medium'} weight={2}>
            {description}
          </Text>
        </ItemText>
      </ItemCardWrapper>
    </Cursor>
  )
}
