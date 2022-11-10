import React from 'react'

import { LogoProps, LogoSize } from './Logo.types'

const width = (size?: LogoSize) => {
  if (!size) {
    return '100%'
  }

  if (typeof size === 'number') {
    return size
  }

  return size === 'small' ? 120 : size === 'medium' ? 160 : size === 'large' ? 200 : 240
}

export const Logo = ({ size, color = 'var(--color-primary)' }: LogoProps) => (
  <a href={'/'}>
    <svg width={width(size)} height={'100%'} viewBox={'0 0 805 302'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
      <path
        d={
          'M0 183H45V118.25H86.75C124 118.25 147.25 98.75 147.25 61.25C147.25 23.75 124 4.24999 86.75 4.24999H0V183ZM45 81.5V41H76.25C91.75 41 101.25 46.25 101.25 61.25C101.25 76.25 91.75 81.5 76.25 81.5H45Z'
        }
        fill={color}
      />
      <path
        d={
          'M132.92 183H181.17L192.67 145.75H253.92L265.42 183H314.67L246.17 4.24999H200.92L132.92 183ZM202.92 111.5L223.17 45.5H223.67L243.92 111.5H202.92Z'
        }
        fill={color}
      />
      <path
        d={
          'M328.125 183H417.375C454.375 183 478.625 168.25 478.625 130.25C478.625 103.5 462.625 91 443.875 87.75V87.25C458.625 82.25 471.625 71.25 471.625 49.25C471.625 18.75 452.125 4.24999 414.875 4.24999H328.125V183ZM373.125 146.25V104H404.375C423.125 104 432.625 108.25 432.625 125C432.625 141.75 423.125 146.25 404.375 146.25H373.125ZM373.125 76.5V41H403.125C415.625 41 425.625 44 425.625 58.75C425.625 73.5 415.625 76.5 403.125 76.5H373.125Z'
        }
        fill={color}
      />
      <path d={'M500.732 183H625.232V146.25H545.732V4.24999H500.732V183Z'} fill={color} />
      <path
        d={
          'M716.498 187C772.748 187 804.998 147.5 804.998 93.5C804.998 39.75 772.748 0.25 716.498 0.25C659.748 0.25 627.998 39.75 627.998 93.5C627.998 147.5 659.748 187 716.498 187ZM673.998 93.5C673.998 62.5 683.748 37 716.498 37C748.998 37 758.998 62.5 758.998 93.5C758.998 124.75 748.998 150.25 716.498 150.25C683.748 150.25 673.998 124.75 673.998 93.5Z'
        }
        fill={color}
      />
      <path
        d={
          'M47.336 301.208C74.522 301.208 89.426 284.648 91.634 262.016H66.242C64.586 273.056 60.17 280.922 46.922 280.922C30.5 280.922 25.532 268.226 25.532 249.596C25.532 231.104 30.5 218.408 46.922 218.408C60.032 218.408 64.448 226.274 66.242 237.038H91.634C89.288 214.13 74.936 198.122 48.026 198.122C16.838 198.122 0.14 219.788 0.14 250.01C0.14 279.404 16.01 301.208 47.336 301.208Z'
        }
        fill={color}
      />
      <path d={'M102.928 299H127.768V200.33H102.928V299Z'} fill={color} />
      <path
        d={
          'M144.301 299H169.141V240.35H169.417L203.917 299H228.757V200.33H203.917V258.98H203.641L169.141 200.33H144.301V299Z'
        }
        fill={color}
      />
      <path
        d={
          'M285.948 301.208C300.438 301.208 309.684 295.412 314.376 286.442H314.652L317.136 299H334.938V246.56H290.502V264.5H309.27C308.994 274.022 300.99 280.922 289.536 280.922C272.286 280.922 266.628 268.226 266.628 249.596C266.628 231.104 272.286 218.408 288.57 218.408C302.232 218.408 306.234 226.274 308.028 233.036H333.42C331.074 214.13 316.032 198.122 288.984 198.122C257.934 198.122 241.236 219.926 241.236 249.596C241.236 279.404 257.934 301.208 285.948 301.208Z'
        }
        fill={color}
      />
      <path
        d={
          'M393.722 301.208C424.772 301.208 442.574 279.404 442.574 249.596C442.574 219.926 424.772 198.122 393.722 198.122C362.396 198.122 344.87 219.926 344.87 249.596C344.87 279.404 362.396 301.208 393.722 301.208ZM370.262 249.596C370.262 232.484 375.644 218.408 393.722 218.408C411.662 218.408 417.182 232.484 417.182 249.596C417.182 266.846 411.662 280.922 393.722 280.922C375.644 280.922 370.262 266.846 370.262 249.596Z'
        }
        fill={color}
      />
      <path d={'M454.936 299H523.66V278.714H479.776V200.33H454.936V299Z'} fill={color} />
      <path
        d={
          'M525.074 299H551.708L558.056 278.438H591.866L598.214 299H625.4L587.588 200.33H562.61L525.074 299ZM563.714 259.532L574.892 223.1H575.168L586.346 259.532H563.714Z'
        }
        fill={color}
      />
      <path
        d={
          'M632.827 299H657.667V240.35H657.943L692.443 299H717.283V200.33H692.443V258.98H692.167L657.667 200.33H632.827V299Z'
        }
        fill={color}
      />
      <path d={'M733.901 299H758.741V200.33H733.901V299Z'} fill={color} />
      <path
        d={
          'M785.8 297.8C797.3 297.8 804.5 290.6 804.5 279.15C804.5 267.65 797.3 260.45 785.8 260.45C774.3 260.45 767.1 267.65 767.1 279.15C767.1 290.6 774.3 297.8 785.8 297.8ZM771.5 279.15C771.5 269.8 776.8 264.05 785.8 264.05C794.8 264.05 800.1 269.8 800.1 279.15C800.1 288.5 794.8 294.2 785.8 294.2C776.8 294.2 771.5 288.5 771.5 279.15ZM775.2 279.15C775.2 285.75 779.4 290.35 786.1 290.35C792.15 290.35 795.55 286.7 795.85 281.75H789.4C789.2 283.65 788.5 285.4 785.85 285.4C783.1 285.4 781.8 283.1 781.8 279.15C781.8 275.15 783.1 272.85 785.85 272.85C788.5 272.85 789.2 274.75 789.4 276.45H795.85C795.35 271.55 791.85 267.9 785.7 267.9C779.2 267.9 775.2 272.6 775.2 279.15Z'
        }
        fill={color}
      />
    </svg>
  </a>
)

Logo.displayName = 'Logo'
