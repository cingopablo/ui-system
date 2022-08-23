import React from 'react'

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  hover?: boolean
  underline?: boolean
}

// TODO: need to add arrows to links
