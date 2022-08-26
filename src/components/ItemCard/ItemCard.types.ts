import React from 'react'

export interface ItemCardProps {
  image: React.ReactNode
  onClick?: () => void
  title?: string
  description?: string
  cursor?: string
}
