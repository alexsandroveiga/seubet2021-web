import { ReactElement } from 'react'

import avatar from '../../assets/avatar.webp'

import { Container, Hamburger } from './styles'

export function Header (): ReactElement {
  const user = true

  return (
    <Container>
      <Hamburger>
        <em />
        <em />
        <em />
        <em />
      </Hamburger>
      {user && (
        <button>
          <picture>
            <img src={avatar} />
          </picture>
          <div>
            <h1>Alexsandro</h1>
            <span>R$ 15,00</span>
          </div>
        </button>
      )}
    </Container>
  )
}
