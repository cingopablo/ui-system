import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { H4, Text } from '../Typography'
import { ItemCardWrapper, ItemImage, ItemText } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

const imageVariants = {
  initial: {
    opacity: 0,
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  variant = 'primary',
  cursor = 'See more',
  image,
  description,
  onClick,
  css,
}) => {
  return (
    <Cursor content={cursor} variant={variant}>
      <ItemCardWrapper initial={'initial'} animate={'initial'} whileHover={'hover'} onClick={onClick} css={css}>
        <ItemImage variants={imageVariants}>{image}</ItemImage>

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
