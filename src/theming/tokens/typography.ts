// Check possible fonts
// display, mono, numeric

const families = {
  '-webkit-font-smoothing': 'antialiased',
  '--font-fallback':
    "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  '--font-display': "'Lora', var(--font-fallback)",
  '--font-mono': "'Fira Code', monospace",
  '--font-numeric': "'Space Grotesk', var(--font-fallback)",
}

const sizes = {
  '--font-size-1': '16px;',
  '--font-size-2': '1rem', // 18px Default
  '--font-size-3': '1.333rem', // 24px
  '--font-size-4': '1.667rem', // 30px
  '--font-size-5': '2rem', // 36px
  '--font-size-6': '2.667rem', // 48px
  '--font-size-7': '3.333rem', // 60px
}

const weights = {
  '--font-weight-1': '300',
  '--font-weight-2': '400',
  '--font-weight-3': '500',
  '--font-weight-4': '600',
}

const height = {
  '--font-height-text': '1.8',
  '--font-height-heading': '1.55',
}

const tracking = {
  '--font-spacing-text': '0.3px',
  '--font-spacing-heading': '0px',
}

export const typography = {
  ...families,
  ...height,
  ...tracking,
  ...sizes,
  ...weights,
}

export const text = {
  h1: {
    fontSize: 'var(--font-size-6)',
    fontWeight: 'var(--font-weight-4)',
    lineHeight: 'var(--font-height-heading)',
    marginBottom: '1.45rem',
    fontFamily: 'var(--font-display)',
  },
  h2: {
    fontSize: 'var(--font-size-5)',
    fontWeight: 'var(--font-weight-4)',
    lineHeight: 'var(--font-height-heading)',
    marginBottom: '1.45rem',
    fontFamily: 'var(--font-display)',
  },
  h3: {
    fontSize: 'var(--font-size-4)',
    fontWeight: 'var(--font-weight-4)',
    lineHeight: 'var(--font-height-heading)',
    marginBottom: '1.45rem',
    fontFamily: 'var(--font-display)',
  },
  h4: {
    fontSize: 'var(--font-size-3)',
    fontWeight: 'var(--font-weight-4)',
    lineHeight: 'var(--font-height-heading)',
    marginBottom: '1.45rem',
    fontFamily: 'var(--font-display)',
  },
  xxxlarge: {
    fontSize: 'var(--font-size-7)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  xxlarge: {
    fontSize: 'var(--font-size-6)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  xlarge: {
    fontSize: 'var(--font-size-5)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  large: {
    fontSize: 'var(--font-size-4)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  medium: {
    fontSize: 'var(--font-size-3)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  button: {
    fontSize: 'var(--font-size-2)',
    fontWeight: 'var(--font-weight-3)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  default: {
    fontSize: 'var(--font-size-2)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
  caption: {
    fontSize: 'var(--font-size-1)',
    fontWeight: 'var(--font-weight-2)',
    lineHeight: 'var(--font-height-text)',
    fontFamily: 'var(--font-fallback)',
  },
}
