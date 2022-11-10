export type LogoSize = 'small' | 'medium' | 'large' | 'xlarge' | number

export interface LogoProps {
  size?: LogoSize
  height?: number
  color?: string
}
