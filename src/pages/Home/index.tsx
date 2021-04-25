import { ReactElement } from 'react'

import { Header } from '../../components/Header'

import { Container } from './styles'

export function Home (): ReactElement {
  return (
    <Container>
      <Header />
      <div className="header-image"></div>
      <h1>Jogos aqui</h1>
    </Container>
  )
}
