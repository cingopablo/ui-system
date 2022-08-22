import { styled } from '../../theming/stitches.config'

export const CodeboxWrapper = styled('div', {
  '.sp-layout': {
    position: 'relative',
    marginBottom: '2.25rem',
    borderRadius: 'var(--border-radius-2)',

    '@media (max-width: 600px)': {
      display: 'block',
    },
  },
  '.cm-gutterElement': {
    fontSize: '12px',
    userSelect: 'none',
    opacity: '1',
    color: 'var(--colors-font-tertiary)',
  },
})
