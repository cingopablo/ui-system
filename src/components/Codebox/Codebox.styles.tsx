import { styled } from '../../theming/stitches.config'

export const CodeboxWrapper = styled('div', {
  '@sm': {
    display: 'block',
    overflow: 'hidden',
  },
  '.sp-layout': {
    position: 'relative',
    marginBottom: '2.25rem',
    borderRadius: 'var(--border-radius-2)',
  },
  '.cm-gutterElement': {
    fontSize: '12px',
    userSelect: 'none',
    opacity: '1',
    color: 'var(--colors-font-tertiary)',
  },
})
