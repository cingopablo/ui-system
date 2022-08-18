import * as React from 'react'

import { StyledAvatar } from './Avatar.styles'
import { AvatarProps } from './Avatar.types'

export const Avatar: React.FC<AvatarProps> = ({ size = 'default', img, name }) => {
  if (img) {
    return (
      <StyledAvatar size={size}>
        <img alt={'user avatar'} src={img} />
      </StyledAvatar>
    )
  }

  const segments = ((name || '').trim() || '?').split(/\s{1,}/)
  const initials =
    segments.length > 1
      ? segments[0][0].toUpperCase() + segments[segments.length - 1][0].toUpperCase()
      : segments[0][0].toUpperCase()

  return (
    <StyledAvatar
      size={size}
      css={{ fontSize: Math.round((size == 'small' ? 24 : size === 'large' ? 40 : size === 'xlarge' ? 48 : 32) / 2) }}>
      {initials}
    </StyledAvatar>
  )
}

Avatar.displayName = 'Avatar'
