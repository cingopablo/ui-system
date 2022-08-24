import { CSS } from '../../theming/stitches.config'

export interface AnimatedTitleProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  css?: CSS
}
