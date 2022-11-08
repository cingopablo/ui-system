import React from 'react'

import { ParallaxText } from '../../ParallaxText/ParallaxText'
import { Text } from '../../Typography'
import {
  TextImage,
  TrackImageContainer,
  TrackImageElement,
  TrackImageParallax,
  TrackImageWrapper,
} from './TrackImage.styles'
import { TrackImageProps } from './TrackImage.types'

const viewSite = 'VIEW SITE'

export const TrackImage = ({ children, src, position }: TrackImageProps) => {
  const [x, setX] = React.useState(0)
  const [animate, setAnimate] = React.useState('default')

  React.useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setX(event.clientX)
    }
    window.addEventListener('mousemove', mouseMove)

    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  const variants = {
    default: {},
    enter: {
      opacity: 1,
      rotateZ: -10 + x * 0.02,
      x: -250 + x * 0.2,
    },
  }

  const positionVariants = {
    default: {},
    enter: {
      opacity: 1,
      transition: {
        when: 'afterChildren',
        ease: 'easeIn',
        delay: 0.3,
      },
    },
  }

  const onEnter = () => {
    setAnimate('enter')
  }

  const onLeave = () => {
    setAnimate('default')
  }

  return (
    <TrackImageWrapper onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
      <TrackImageContainer animate={animate} variants={variants}>
        <TextImage size={'xlarge'} weight={4} variant={'color'} variants={positionVariants}>
          {position}
        </TextImage>
        <TrackImageElement src={src} />
        <TrackImageParallax>
          <ParallaxText baseVelocity={-7}>
            <Text size={'xlarge'} weight={4} outline variant={'color'}>
              {viewSite}
            </Text>
          </ParallaxText>
          <ParallaxText baseVelocity={7}>
            <Text size={'xlarge'} weight={4} outline variant={'color'}>
              {viewSite}
            </Text>
          </ParallaxText>
        </TrackImageParallax>
      </TrackImageContainer>
    </TrackImageWrapper>
  )
}
