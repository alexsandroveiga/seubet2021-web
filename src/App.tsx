import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './hooks'
import { Routes } from './routes'

import GlobalStyle from './styles/global'

export function App (): ReactElement {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </Router>
  )
}
