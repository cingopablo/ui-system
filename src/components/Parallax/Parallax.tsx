import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import React from 'react'

import { ParallaxProps } from './Parallax.types'

export const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50 }) => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = React.useState(0)
  const [clientHeight, setClientHeight] = React.useState(0)
  const ref = React.useRef(null)

  const { scrollY } = useScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  React.useLayoutEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}
