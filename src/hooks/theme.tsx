import { createContext, ReactElement, ReactNode, useCallback, useContext, useState } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme
} from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

interface ThemeContextData {
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

function ThemeProvider ({ children }: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useState<DefaultTheme>(dark)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme (): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { ThemeProvider, useTheme }
