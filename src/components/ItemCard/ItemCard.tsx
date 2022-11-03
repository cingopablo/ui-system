import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { DescriptionWrapper, ImageWrapper, ItemCardWrapper, TitleWrapper } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

const titleVariants = {
  initial: {
    x: 0,
    opacity: 1,
  },
  hover: {
    x: -40,
    opacity: 0.5,
  },
}

const descriptionVariants = {
  initial: {
    x: 0,
    opacity: 1,
  },
  hover: {
    x: 40,
    opacity: 0.5,
  },
}

export const ItemCard = ({ title, variant = 'primary', image, preview, description, onClick, css }: ItemCardProps) => {
  return (
    <Cursor content={preview} variant={variant}>
      <ItemCardWrapper initial={'initial'} animate={'initial'} whileHover={'hover'} onClick={onClick} css={css}>
        <ImageWrapper>{image}</ImageWrapper>
        <TitleWrapper variants={titleVariants}>{title}</TitleWrapper>
        <DescriptionWrapper size={'medium'} weight={2} variants={descriptionVariants}>
          {description}
        </DescriptionWrapper>
      </ItemCardWrapper>
    </Cursor>
  )
}
