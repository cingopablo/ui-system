import { useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { headingCSS, Text } from '../Typography'
import { AnimatedTitleCharacter, AnimatedTitleWord } from './AnimatedTitle.styles'
import { AnimatedTitleProps } from './AnimatedTitle.types'

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children, as = 'h1', css }) => {
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

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: '0.25em',
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
    <Text
      as={as}
      css={{
        ...headingCSS[as],
        ...css,
      }}
      aria-label={children}
      role={'heading'}>
      {children.split(' ').map((word, index) => (
        <AnimatedTitleWord
          key={index}
          ref={ref}
          aria-hidden
          initial={'hidden'}
          animate={animation}
          variants={wordAnimation}
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}>
          {word.split('').map((character, index) => (
            <AnimatedTitleCharacter aria-hidden key={index} variants={characterAnimation}>
              {character}
            </AnimatedTitleCharacter>
          ))}
        </AnimatedTitleWord>
      ))}
    </Text>
  )
}
