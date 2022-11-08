import React from 'react'

import { TrackImage } from './component/TrackImage'
import { ImageWrapper, ItemCardWrapper, PositionWrapper, TitleWrapper } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

const titleVariants = {
  initial: {
    x: 0,
  },
  hover: {
    x: 40,
  },
}

export const ItemCard = ({ title, src, position, onClick, css }: ItemCardProps) => {
  return (
    <TrackImage src={src} position={position}>
      <ItemCardWrapper initial={'initial'} animate={'initial'} whileHover={'hover'} onClick={onClick} css={css}>
        <ImageWrapper>
          <img alt={title} src={src} />
        </ImageWrapper>
        <TitleWrapper variants={titleVariants}>{title}</TitleWrapper>
        <PositionWrapper size={'medium'} weight={2}>
          {position}
        </PositionWrapper>
      </ItemCardWrapper>
    </TrackImage>
  )
}
