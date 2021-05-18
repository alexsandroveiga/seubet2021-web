import { ReactElement, ReactNode } from 'react'

import { AuthProvider } from './auth'
import { ThemeProvider } from './theme'
import { BetProvider } from './bet'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider ({ children }: AppProviderProps): ReactElement {
  return (
    <ThemeProvider>
      <BetProvider>
        <AuthProvider>{children}</AuthProvider>
      </BetProvider>
    </ThemeProvider>
  )
}
