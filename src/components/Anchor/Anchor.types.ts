import React from 'react'

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  underline?: boolean
}

// TODO: need to add arrows to links
