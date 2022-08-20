import React from 'react'

export const useScrollCheck = (positionY: number) => {
  const [isOverY, setIsOverY] = React.useState(false)

  React.useEffect(() => {
    const checkScroll = () => setIsOverY(window.scrollY > positionY)
    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [positionY])

  return isOverY
}
