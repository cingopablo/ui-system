import { globalStyles } from '../src/theming/globalStyles'

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
        class: 'cingo-light',
        default: true,
        color: '#ffffff',
      },
      {
        name: 'Dark',
        class: 'cingo-dark',
        color: '#000000',
      },
    ],
  },
}
