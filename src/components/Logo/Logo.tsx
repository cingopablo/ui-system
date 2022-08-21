import React from 'react'

import { css } from '../../theming/stitches.config'
import { LogoProps } from './Logo.types'

const transitionLogo = css({
  '> path': {
    transition: '350ms',
    willChange: 'fill',
  },
})

export const Logo: React.FC<LogoProps> = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      viewBox={'0 0 36 38'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      className={transitionLogo()}>
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M20.1778 5.35246C21.1102 5.13304 21.6882 4.19931 21.4687 3.26691C21.2493 2.33451 20.3156 1.75653 19.3832 1.97595C18.4508 2.19537 17.8728 3.1291 18.0922 4.0615C18.3116 4.9939 19.2454 5.57188 20.1778 5.35246ZM20.5751 7.04072C22.4399 6.60188 23.5958 4.73442 23.157 2.86962C22.7182 1.00482 20.8507 -0.151148 18.9859 0.287689C17.1211 0.726527 15.9651 2.59399 16.404 4.45879C16.8428 6.32359 18.7103 7.47956 20.5751 7.04072Z'
        }
        fill={'var(--color-text-primary)'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M32.1451 27.4188C33.0775 27.1994 33.6555 26.2657 33.436 25.3333C33.2166 24.4009 32.2829 23.8229 31.3505 24.0423C30.4181 24.2617 29.8401 25.1955 30.0595 26.1279C30.2789 27.0603 31.2127 27.6382 32.1451 27.4188ZM32.5424 29.1071C34.4072 28.6682 35.5631 26.8008 35.1243 24.936C34.6855 23.0712 32.818 21.9152 30.9532 22.3541C29.0884 22.7929 27.9324 24.6604 28.3713 26.5252C28.8101 28.39 30.6776 29.5459 32.5424 29.1071Z'
        }
        fill={'var(--color-text-primary)'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M18.5 0.168839C18.8883 0.168839 19.2739 0.180803 19.6562 0.204384V1.94246C19.2742 1.91644 18.8886 1.90321 18.5 1.90321C9.2406 1.90321 1.73438 9.40944 1.73438 18.6688C1.73438 27.9282 9.2406 35.4345 18.5 35.4345C24.5856 35.4345 29.9138 32.1921 32.8516 27.3407H34.8458C31.7374 33.1876 25.5836 37.1688 18.5 37.1688C8.28273 37.1688 0 28.8861 0 18.6688C0 8.45157 8.28273 0.168839 18.5 0.168839ZM29.4844 24.4501H28.5156C26.5164 27.9061 22.7798 30.2313 18.5 30.2313C12.1142 30.2313 6.9375 25.0546 6.9375 18.6688C6.9375 12.283 12.1142 7.10634 18.5 7.10634C18.8902 7.10634 19.276 7.12567 19.6562 7.16343V5.42154C19.2752 5.38872 18.8896 5.37196 18.5 5.37196C11.1563 5.37196 5.20312 11.3252 5.20312 18.6688C5.20312 26.0125 11.1563 31.9657 18.5 31.9657C23.0633 31.9657 27.0896 29.667 29.4844 26.1645V24.4501Z'
        }
        fill={'var(--color-text-primary)'}
      />
    </svg>
  )
}

Logo.displayName = 'Logo'
