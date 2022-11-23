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

const viewSite = 'VIEW SITE - VIEW SITE - VIEW SITE -'

export const TrackImage = ({ children, src, position, variant = 'white' }: TrackImageProps) => {
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
      rotateZ: -10 + x * 0.01,
      x: 80 + x * 0.1,
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
    <TrackImageWrapper
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      // style={{ rotateX: 10, rotateY: 20, rotateZ: 5 }}
      // whileHover={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
    >
      {children}
      <TrackImageContainer animate={animate} variants={variants}>
        <TextImage size={'xlarge'} weight={4} variant={variant} variants={positionVariants}>
          {position}
        </TextImage>
        <TrackImageElement src={src} />
        <TrackImageParallax>
          <ParallaxText baseVelocity={-7}>
            <Text size={'xlarge'} weight={4} outline variant={variant}>
              {viewSite}
            </Text>
          </ParallaxText>
          <ParallaxText baseVelocity={7}>
            <Text size={'xlarge'} weight={4} outline variant={variant}>
              {viewSite}
            </Text>
          </ParallaxText>
        </TrackImageParallax>
      </TrackImageContainer>
    </TrackImageWrapper>
  )
}
