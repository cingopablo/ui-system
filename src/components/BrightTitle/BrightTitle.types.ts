import { CSS } from '../../theming/stitches.config'

type ColorPrimary = 'gray' | 'purple' | 'blue' | 'green' | 'orange' | 'red'
type ColorSecondary = 'blue' | 'green' | 'orange' | 'red'

export interface BrightTitleProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  css?: CSS
  primary?: ColorPrimary
  secondary?: ColorSecondary
  speed?: number
}
