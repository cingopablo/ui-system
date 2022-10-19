import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { Icon } from '../Icon/Icon'
import { H4, Text } from '../Typography'
import { IconWrapper, ItemCardWrapper, ItemText, TitleWrapper } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

const titleVariants = {
  initial: {
    x: -48,
  },
  hover: {
    x: 0,
  },
}

const iconVariants = {
  initial: {
    opacity: 0,
    x: -16,
  },
  hover: {
    opacity: 1,
    x: 0,
  },
}

export const ItemCard: React.FC<ItemCardProps> = ({ title, variant = 'primary', image, description, onClick, css }) => {
  return (
    <Cursor content={image} variant={variant}>
      <ItemCardWrapper initial={'initial'} animate={'initial'} whileHover={'hover'} onClick={onClick} css={css}>
        <ItemText gap={4}>
          <TitleWrapper variants={titleVariants}>
            <IconWrapper variants={iconVariants}>
              <Icon.ArrowRight size={6} />
            </IconWrapper>

            <H4>{title}</H4>
          </TitleWrapper>
          <Text size={'medium'} weight={2}>
            {description}
          </Text>
        </ItemText>
      </ItemCardWrapper>
    </Cursor>
  )
}
