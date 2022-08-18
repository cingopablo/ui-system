import { globalStyles } from '../src'

globalStyles()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Light',
        class: 'cingopablo-light',
        default: true,
        color: '#ffffff',
      },
      {
        name: 'Dark',
        class: 'cingopablo-dark',
        color: '#000000',
      },
    ],
  },
}
