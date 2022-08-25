import { wrap } from '@motionone/utils'
import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import React from 'react'

import { ParallaxScroller, ParallaxSpan, ParallaxWrapper } from './ParallaxText.styles'
import { ParallaxProps } from './ParallaxText.types'

export const ParallaxText = ({ children, baseVelocity = 10, scrollOnly = false, css }: ParallaxProps) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

  const directionFactor = React.useRef<number>(1)
  const prevT = React.useRef<number>(0)
  useAnimationFrame(t => {
    if (!prevT.current) {
      prevT.current = t
    }

    // TODO: Redo this as it's not nice at all - for now it does the trick
    const timeDelta = t - prevT.current
    let moveBy = scrollOnly
      ? directionFactor.current * baseVelocity * (timeDelta / 10000000000000)
      : directionFactor.current * baseVelocity * (timeDelta / 10000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += scrollOnly
      ? directionFactor.current * (directionFactor.current * baseVelocity * (timeDelta / 10000)) * velocityFactor.get()
      : directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)

    prevT.current = t
  })

  return (
    <ParallaxWrapper css={css}>
      <ParallaxScroller style={{ x }}>
        <ParallaxSpan>{children}</ParallaxSpan>
        <ParallaxSpan>{children}</ParallaxSpan>
        <ParallaxSpan>{children}</ParallaxSpan>
        <ParallaxSpan>{children}</ParallaxSpan>
      </ParallaxScroller>
    </ParallaxWrapper>
  )
}
