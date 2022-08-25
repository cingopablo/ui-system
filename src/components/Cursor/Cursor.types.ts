import React from 'react'

export interface CursorProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: number
  content?: React.ReactNode
}
