import { ReactElement, ReactNode } from 'react'

import { AuthProvider } from './auth'
import { ThemeProvider } from './theme'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider ({ children }: AppProviderProps): ReactElement {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
