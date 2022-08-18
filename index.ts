// Here we export the components
export { Avatar } from './src/components/Avatar/Avatar'
export { Badge } from './src/components/Badge/Badge'
export { Box } from './src/components/Box/Box'
export { Button } from './src/components/Button/Button'
export { Card } from './src/components/Card/Card'
export { Dialog } from './src/components/Dialog/Dialog'
export { Flex } from './src/components/Flex/Flex'
export { Grid } from './src/components/Grid/Grid'
export { Icon } from './src/components/Icon/Icon'
export { InlineCode } from './src/components/InlineCode/InlineCode'
export { Label } from './src/components/Label/Label'
export { Logo } from './src/components/Logo/Logo'
export { Tooltip } from './src/components/Tooltip/Tooltip'
export { Italic, Strong, Text, H1, H2, H3, H4 } from './src/components/Typography'
export { VisuallyHidden } from './src/components/VisuallyHidden/VisuallyHidden'

/** HOOKS **/
export { useTheme, ThemeContext, ThemeProvider } from './src/hooks/useTheme'

/** THEMING **/
export { shadows, styled, css, keyframes, getCssText, theme, config } from './src/theming/stitches.config'
export { globalStyles } from './src/theming/globalStyles'
export type { CSS, VariantProps } from './src/theming/stitches.config'
