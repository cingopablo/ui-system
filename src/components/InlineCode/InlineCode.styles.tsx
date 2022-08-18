import { shadows, styled } from '../../theming/stitches.config'
import { text } from '../../theming/tokens'

export const InlineCodeWrapper = styled('code', {
  width: 'max-content',
  padding: '0 var(--spacing-2)',
  fontFamily: 'var(--font-mono)',
  color: 'var(--color-primary-emphasis)',
  borderRadius: 'var(--border-radius-1)',
  wordBreak: 'break-word',
  fontSize: text.button.fontSize,
  fontWeight: text.button.fontWeight,
  boxShadow: `0 0 0 0.5px var(--color-primary-clear), ${shadows.small}`,
  backgroundColor: 'var(--color-background-overlay)',
})
