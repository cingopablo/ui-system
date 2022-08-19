// Here we export the components
export { Avatar } from './components/Avatar/Avatar'
export { Badge } from './components/Badge/Badge'
export { Box } from './components/Box/Box'
export { Button } from './components/Button/Button'
export { Card } from './components/Card/Card'
export { Dialog } from './components/Dialog/Dialog'
export { Flex } from './components/Flex/Flex'
export { Grid } from './components/Grid/Grid'
export { Icon } from './components/Icon/Icon'
export { InlineCode } from './components/InlineCode/InlineCode'
export { Label } from './components/Label/Label'
export { Logo } from './components/Logo/Logo'
export { default as Tooltip } from './components/Tooltip'
export { H1, H2, H3, H4 } from './components/Typography/Heading'
export { Italic } from './components/Typography/Italic'
export { Strong } from './components/Typography/Strong'
export { Text } from './components/Typography/Text'
export { VisuallyHidden } from './components/VisuallyHidden/VisuallyHidden'

/** HOOKS **/
export { ThemeContext, ThemeProvider, useTheme } from './hooks/useTheme'
export { isHotkeyPressed, useHotkeys } from 'react-hotkeys-hook'

/** THEMING **/
export { globalStyles } from './theming/globalStyles'
export type { CSS, VariantProps } from './theming/stitches.config'
export { config, css, getCssText, keyframes, shadows, styled, theme } from './theming/stitches.config'
