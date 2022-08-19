export const codeboxTheme = {
  colors: {
    hover: 'var(--color-primary)',
    clickable: 'var(--color-font-secondary)',
    accent: 'var(--color-primary)',
    errorSurface: 'var(--code-surface-error)',
    error: 'var(--color-danger)',
    surface3: 'var(--code-surface-3)',
    surface2: 'var(--code-surface-2)',
    surface1: 'var(--code-surface-1)',
  },
  syntax: {
    plain: 'var(--color-text-secondary)',
    comment: {
      color: 'var(--code-comment)',
    },
    keyword: 'var(--code-keyword)',
    tag: 'var(--code-symbol)',
    punctuation: 'var(--code-punctuation)',
    definition: 'var(--code-function)',
    property: 'var(--code-function)',
    static: 'var(--code-comment)',
    string: 'var(--code-selector)',
  },
  font: {
    body: 'var(--font-display)',
    mono: 'var(--font-mono)',
    size: '14px',
    lineHeight: '26px',
  },
}
