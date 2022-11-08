import { CSS } from '../../theming/stitches.config'

export interface ItemCardProps {
  src: string
  imageMobile: React.ReactNode
  onClick?: () => void
  title: string
  position: string
  css?: CSS
  variant?: 'primary' | 'secondary' | 'tertiary' | 'color' | 'info' | 'success' | 'warning' | 'danger' | 'white'
}
