import React from 'react'

export interface CursorProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'blur'
  size?: number
  content?: React.ReactNode
}
