import { Platform } from 'react-native'

const theme = {
  colors: {
    primary: '#0366d6',
    secondary: '#24292e',
    muted: '#f6f8fa',
    error: '#d73a4a'
  },
  backgrounds: {
    primary: '#ffffff',
    secondary: '#24292e',
    main: '#e1e4e8'
  },
  text: {
    primary: '#24292e',
    secondary: '#afb7c2',
    inverse: '#ffffff'
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      web: 'System',
      windows: 'System'
    })
  },
  sizes: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64
  }
}

export default theme
