import { Variants } from 'framer-motion'
import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { DescriptionWrapper, ImageWrapper, ItemCardWrapper, TitleWrapper } from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

export const ItemCard = ({ title, variant = 'primary', image, description, onClick, css }: ItemCardProps) => {
  const [titleVariants, setTitleVariants] = React.useState<Variants | undefined>({
    initial: {
      x: 0,
      opacity: 1,
    },
    hover: {
      x: -40,
      opacity: 0.5,
    },
  })
  const [descriptionVariants, setDescriptionVariants] = React.useState<Variants | undefined>({
    initial: {
      x: 0,
      opacity: 1,
    },
    hover: {
      x: 40,
      opacity: 0.5,
    },
  })

  // TODO: FIX ANIMATION FOR RESPONSIVENESS

  React.useEffect(() => {
    if (window) {
      if (window.innerWidth <= 600) {
        setTitleVariants(undefined)
        setDescriptionVariants(undefined)
      }
    }
  })

  return (
    <Cursor content={image} variant={variant}>
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
