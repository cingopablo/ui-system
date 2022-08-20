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

export const DarkModeIcon = (props: IconProps) => (
  <StyledSVG
    xmlns={'http://www.w3.org/2000/svg'}
    width={24}
    height={24}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={1}
    role={'img'}
    {...props}>
    <path
      fill={'none'}
      d={
        'M21.9146 13.3131C20.5584 14.3703 18.8528 15.0002 17 15.0002C12.5817 15.0002 9 11.4185 9 7.00017C9 5.14733 9.62989 3.4416 10.6872 2.08545C5.78475 2.7283 2 6.92218 2 12C2 17.5229 6.47715 22 12 22C17.0778 22 21.2716 18.2154 21.9146 13.3131Z'
      }
      clipRule={'evenodd'}
      fillRule={'evenodd'}
    />
    <path
      fill={'black'}
      d={
        'M21.9146 13.3131L22.9061 13.4431C22.9588 13.0408 22.7633 12.6465 22.411 12.445C22.0588 12.2436 21.6197 12.2749 21.2997 12.5244L21.9146 13.3131ZM10.6872 2.08545L11.4758 2.70031C11.7253 2.3803 11.7567 1.94126 11.5553 1.58902C11.3538 1.23678 10.9595 1.04118 10.5572 1.09394L10.6872 2.08545ZM21.2997 12.5244C20.113 13.4496 18.6222 14.0002 17 14.0002V16.0002C19.0833 16.0002 21.0038 15.2911 22.5294 14.1017L21.2997 12.5244ZM17 14.0002C13.134 14.0002 10 10.8662 10 7.00017H8C8 11.9707 12.0294 16.0002 17 16.0002V14.0002ZM10 7.00017C10 5.37788 10.5506 3.88701 11.4758 2.70031L9.89858 1.47059C8.70914 2.9962 8 4.91677 8 7.00017H10ZM3 12C3 7.43076 6.40601 3.65539 10.8172 3.07696L10.5572 1.09394C5.1635 1.8012 1 6.4136 1 12H3ZM12 21C7.02944 21 3 16.9706 3 12H1C1 18.0752 5.92487 23 12 23V21ZM20.9231 13.183C20.3445 17.5942 16.5692 21 12 21V23C17.5863 23 22.1987 18.8367 22.9061 13.4431L20.9231 13.183Z'
      }
    />
  </StyledSVG>
)
export const LightModeIcon = (props: IconProps) => (
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
    <path strokeMiterlimit={'10'} d={'M22 12H19'} />
    <path strokeMiterlimit={'10'} d={'M5 12H2'} />
    <path strokeMiterlimit={'10'} d={'M12 22V19'} />
    <path strokeMiterlimit={'10'} d={'M12 5V2'} />
    <path strokeMiterlimit={'10'} d={'M19.07 19.07L16.95 16.95'} />
    <path strokeMiterlimit={'10'} d={'M7.05005 7.04999L4.93005 4.92999'} />
    <path strokeMiterlimit={'10'} d={'M7.05005 16.95L4.93005 19.07'} />
    <path strokeMiterlimit={'10'} d={'M19.07 4.92999L16.95 7.04999'} />
    <path
      strokeMiterlimit={'10'}
      fill={'none'}
      d={
        'M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
      }
    />
  </StyledSVG>
)
