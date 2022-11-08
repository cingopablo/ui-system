import { CSS } from '../../theming/stitches.config'

export interface ItemCardProps {
  src: string
  onClick?: () => void
  title: string
  position: string
  css?: CSS
}
