import React from 'react'

import { StyledSVG } from './Icon.styles'
import { IconProps } from './Icon.types'

export const ArrowRightIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <title>Arrow right</title>
    <desc>An arrow pointing right</desc>
    <path d={'M15 6L21 12L15 18'} />
    <path d={'M21 12H3'} />
  </StyledSVG>
)

export const ExternalLinkIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path d={'M18 11.66V21C18 21.55 17.55 22 17 22H3C2.45 22 2 21.55 2 21V7C2 6.45 2.45 6 3 6H12.34'}></path>
    <path
      strokeMiterlimit={10}
      d={'M18 11.66V21C18 21.55 17.55 22 17 22H3C2.45 22 2 21.55 2 21V7C2 6.45 2.45 6 3 6H12.34'}
    />
    <path d={'M22 2L10 14'} />
    <path d={'M22 8V2H16'} />
  </StyledSVG>
)

export const ArrowDownIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path strokeMiterlimit={10} d={'M12 21L18 15H14V3H10L10 15H6L12 21Z'} />
  </StyledSVG>
)

export const ArrowUpIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path strokeMiterlimit={10} d={'M12 3L18 9H14V21H10L10 9H6L12 3Z'} />
  </StyledSVG>
)

export const CloseIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path strokeMiterlimit={10} d={'M2 2L22 22'} />
    <path strokeMiterlimit={10} d={'M22 2L2 22'} />
  </StyledSVG>
)

export const WarningIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path
      strokeMiterlimit={10}
      d={
        'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      }
    />
    <path strokeMiterlimit={10} d={'M12 6V14'} />
    <path strokeMiterlimit={10} d={'M11.99 18H12.01'} />
  </StyledSVG>
)

export const InfoIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path strokeMiterlimit={10} d={'M14 10H11V21H14V10Z'} />
    <path strokeMiterlimit={10} d={'M14 3H11V6H14V3Z'} />
  </StyledSVG>
)

export const FolderIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path strokeMiterlimit={10} d={'M12 7L10 4H2V6V20H22V10V7H12Z'} clipRule={'evenodd'} fillRule={'evenodd'} />
  </StyledSVG>
)

export const RssIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path
      strokeMiterlimit={10}
      d={
        'M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z'
      }
    />
    <path strokeMiterlimit={10} d={'M4 12C9 12 12 15 12 20'} />
    <path strokeMiterlimit={10} d={'M4 8C11 8 16 13 16 20'} />
    <path strokeMiterlimit={10} d={'M4 4C13 4 20 11 20 20'} />
  </StyledSVG>
)

export const ReturnIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    transform={'rotate(180) scale(-1, 1)'}
    {...props}>
    <path
      d={
        'M22 8C22.5523 8 23 8.44772 23 9V20C23 20.5523 22.5523 21 22 21C21.4477 21 21 20.5523 21 20V9C21 8.44772 21.4477 8 22 8Z'
      }
      clipRule={'evenodd'}
      fillRule={'evenodd'}
    />
    <path
      d={
        'M1 9C1 8.44772 1.44772 8 2 8H22C22.5523 8 23 8.44772 23 9C23 9.55228 22.5523 10 22 10H2C1.44772 10 1 9.55228 1 9Z'
      }
      clipRule={'evenodd'}
      fillRule={'evenodd'}
    />
    <path
      d={
        'M7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711L3.41421 9L7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071L1.29289 9.70711C0.902369 9.31658 0.902369 8.68342 1.29289 8.29289L6.29289 3.29289C6.68342 2.90237 7.31658 2.90237 7.70711 3.29289Z'
      }
      clipRule={'evenodd'}
      fillRule={'evenodd'}
    />
  </StyledSVG>
)

export const OptionKeyIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path strokeMiterlimit={10} d={'M16 8H8V16H16V8Z'} />
    <path strokeMiterlimit={10} d={'M8 8H5C3.34 8 2 6.66 2 5C2 3.34 3.34 2 5 2C6.66 2 8 3.34 8 5V8Z'} />
    <path strokeMiterlimit={10} d={'M16 8H19C20.66 8 22 6.66 22 5C22 3.34 20.66 2 19 2C17.34 2 16 3.34 16 5V8Z'} />
    <path strokeMiterlimit={10} d={'M8 16H5C3.34 16 2 17.34 2 19C2 20.66 3.34 22 5 22C6.66 22 8 20.66 8 19V16Z'} />
    <path
      strokeMiterlimit={10}
      d={'M16 16H19C20.66 16 22 17.34 22 19C22 20.66 20.66 22 19 22C17.34 22 16 20.66 16 19V16Z'}
    />
  </StyledSVG>
)

export const ChevronRightIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={2}
    role={'img'}
    strokeLinejoin={'round'}
    strokeLinecap={'round'}
    {...props}>
    <path d={'M8 20L16 12L8 4'} />
  </StyledSVG>
)
