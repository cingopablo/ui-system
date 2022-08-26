import React from 'react'

import { CursorElement, CursorWrapper } from './Cursor.styles'
import { CursorProps } from './Cursor.types'

interface MousePosition {
  x: number
  y: number
}

export const Cursor: React.FC<CursorProps> = ({ children, variant = 'primary', size = 100, content = 'hello' }) => {
  const [position, setPosition] = React.useState<MousePosition>({ x: 0, y: 0 })
  const [animate, setAnimate] = React.useState('default')

  React.useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }
    window.addEventListener('mousemove', mouseMove)

    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: position.x,
      y: position.y,
    },
    enter: {
      height: size,
      width: size,
      x: position.x,
      y: position.y,
      opacity: 1,
    },
  }

  const onEnter = () => {
    setAnimate('enter')
  }

  const onLeave = () => {
    setAnimate('default')
  }

  return (
    <CursorWrapper onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
      <CursorElement variant={variant} animate={animate} variants={variants}>
        {content}
      </CursorElement>
    </CursorWrapper>
  )
}
