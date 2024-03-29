import React from 'react'

import { TrackImage } from './component/TrackImage'
import { ItemCardWrapper, PositionWrapper, TitleWrapper } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

const titleVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1,
  },
}

export const ItemCard = ({ title, src, position, onClick, css, variant }: ItemCardProps) => {
  const [trackActive, setTrackActive] = React.useState(false)
  return (
    <TrackImage src={src} position={position} variant={variant}>
      <ItemCardWrapper
        initial={'initial'}
        animate={'initial'}
        whileHover={'hover'}
        onClick={onClick}
        css={css}
        onMouseOver={() => setTrackActive(true)}
        onMouseLeave={() => setTrackActive(false)}>
        <TitleWrapper variants={titleVariants} variant={'color'} outline={!trackActive}>
          {title}
        </TitleWrapper>
        <PositionWrapper size={'medium'} weight={2}>
          {position}
        </PositionWrapper>
      </ItemCardWrapper>
    </TrackImage>
  )
}
