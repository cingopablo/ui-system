// Here we export the components
export * from './components/AnimatedTitle/AnimatedTitle'
export * from './components/Avatar/Avatar'
export * from './components/Badge/Badge'
export * from './components/Blockquote/Blockquote'
export * from './components/Box/Box'
export * from './components/BrightTitle/BrightTitle'
export * from './components/Button/Button'
export * from './components/Card/Card'
export * from './components/Card/Card'
export * from './components/Codebox/Codebox'
export { Cursor } from './components/Cursor/Cursor'
export * from './components/Dialog/Dialog'
export * from './components/FadeIn/FadeIn'
export * from './components/Flex/Flex'
export * from './components/Grid/Grid'
export * from './components/Icon/Icon'
export * from './components/InlineCode/InlineCode'
export * from './components/ItemCard/ItemCard'
export * from './components/Label/Label'
export * from './components/Logo/Logo'
export * from './components/ParallaxText/ParallaxText'
export * from './components/Tooltip/Tooltip'
export * from './components/Typography/Heading'
export * from './components/Typography/Italic'
export * from './components/Typography/Strong'
export * from './components/Typography/Text'
export * from './components/VisuallyHidden/VisuallyHidden'

/** HOOKS **/
export { useScrollCheck } from './hooks/useScrollCheck'
export { ThemeContext, ThemeProvider, useTheme } from './hooks/useTheme'
export { isHotkeyPressed, useHotkeys } from 'react-hotkeys-hook'

/** THEMING **/
export { globalStyles } from './theming/globalStyles'
export type { CSS, VariantProps } from './theming/stitches.config'
export { config, css, getCssText, keyframes, shadows, styled, theme } from './theming/stitches.config'
