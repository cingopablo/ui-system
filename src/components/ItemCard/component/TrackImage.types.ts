import React from 'react'

export interface TrackImageProps {
  children: React.ReactNode
  src: string
  position: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'color' | 'info' | 'success' | 'warning' | 'danger' | 'white'
}
