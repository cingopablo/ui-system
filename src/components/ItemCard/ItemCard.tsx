import React from 'react'

import { Cursor } from '../Cursor/Cursor'
import { ParallaxText } from '../ParallaxText/ParallaxText'
import { Text } from '../Typography'
import {
  ItemCardWrapper,
  ItemImage,
  ItemImageBack,
  ItemImageInner,
  ItemParallax,
  ItemSubtitle,
  ItemTitle,
} from './ItemCard.styles'
import { ItemCardProps } from './ItemCard.types'

const imageVariants = {
  initial: {
    scale: 1,
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const backVariants = {
  initial: { top: 48, left: 40 },
  hover: {
    top: 75,
    left: 80,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const titleVariants = {
  initial: { left: 56 },
  hover: {
    left: 96,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const subtitleVariants = {
  initial: {
    opacity: 0,
    display: 'none',
  },
  hover: {
    display: 'inline-block',
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  variant = 'blur',
  cursor = 'See more',
  image,
  description,
  onClick,
  attributes,
  css,
}) => {
  return (
    <Cursor content={cursor} variant={variant}>
      <ItemCardWrapper initial={'initial'} animate={'initial'} whileHover={'hover'} onClick={onClick} css={css}>
        <ItemImage>
          <ItemImageInner variants={imageVariants}>{image}</ItemImageInner>
        </ItemImage>
        <ItemImageBack variants={backVariants} />

        <ItemTitle variants={titleVariants}>
          <Text
            size={'large'}
            weight={4}
            css={{ margin: 0 }}
            style={{ color: 'var(--color, hsl(var(--palette-gray-20)))' }}>
            {title}
          </Text>
        </ItemTitle>
        <ItemSubtitle variants={subtitleVariants}>
          <Text
            weight={2}
            css={{ margin: 0, lineHeight: 1 }}
            style={{ color: 'var(--color, hsl(var(--palette-gray-20)))' }}>
            {description}
          </Text>
        </ItemSubtitle>
        <ItemParallax variants={subtitleVariants}>
          <ParallaxText baseVelocity={5}>
            <Text size={'xxlarge'} outline variant={'tertiary'}>
              {attributes.join('. ')}
            </Text>
          </ParallaxText>
        </ItemParallax>
      </ItemCardWrapper>
    </Cursor>
  )
}
