import Bowser from 'bowser'

const parser = Bowser.getParser(
  typeof navigator !== 'undefined' ? window.navigator.userAgent : ' ',
  typeof navigator === 'undefined'
)

const { type, vendor } = parser.getPlatform()
const browserName = parser.getBrowser().name?.toLowerCase()

export const isApple = vendor === 'Apple'
export const metaKeyText = isApple ? '⌘' : 'Ctrl'

export const browserInfo = {
  isDesktop: type === 'desktop',
  isMobile: type === 'mobile',
  isTablet: type === 'tablet',
  isChrome: browserName === 'chrome',
  isFirefox: browserName === 'firefox',
  isSafari: browserName === 'safari',
}
