import { wrap } from '@motionone/utils'
import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import React from 'react'

import { ParallaxScroller, ParallaxSpan, ParallaxWrapper } from './Parallax.styles'
import { ParallaxProps } from './Parallax.types'

export const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
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

    const timeDelta = t - prevT.current
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)

    prevT.current = t
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <ParallaxWrapper>
      <ParallaxScroller style={{ x }}>
        <ParallaxSpan>{children}</ParallaxSpan>
        <ParallaxSpan>{children}</ParallaxSpan>
        <ParallaxSpan>{children}</ParallaxSpan>
        <ParallaxSpan>{children}</ParallaxSpan>
      </ParallaxScroller>
    </ParallaxWrapper>
  )
}
