import { CSS } from '../../theming/stitches.config'

export interface ItemCardProps {
  year: string
  src: string
  onClick?: () => void
  title: string
  position: string
  css?: CSS
  variant?: 'primary' | 'secondary' | 'tertiary' | 'color' | 'info' | 'success' | 'warning' | 'danger' | 'white'
}
