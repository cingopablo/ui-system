import { useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { FadeInWrapper } from './FadeIn.styles'
import { FadeInProps } from './FadeIn.types'

export const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const animation = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
    if (!inView) {
      animation.start('hidden')
    }
  }, [inView, animation])

  const blockAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <FadeInWrapper ref={ref} initial={'hidden'} animate={animation} variants={blockAnimation}>
      {children}
    </FadeInWrapper>
  )
}
