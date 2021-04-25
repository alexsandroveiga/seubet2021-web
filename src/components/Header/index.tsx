import { ReactElement } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import avatar from '../../assets/avatar.webp'
import { useAuth } from '../../hooks/auth'

import { Container, Hamburger } from './styles'

export function Header (): ReactElement {
  const { user, logout } = useAuth()

  return (
    <Container>
      <Hamburger>
        <em />
        <em />
        <em />
        <em />
      </Hamburger>
      {user && (
        <div className="user">
          <picture>
            <Link to="/profile"><img src={avatar} /></Link>
          </picture>
          <div>
            <Link to="/profile">
              <h1>{user.name || user.username}</h1>
            </Link>
            <Link to="/wallet">
              <span>R$ 15,00</span>
            </Link>
          </div>
          <button onClick={logout}>
            <FiLogOut />
          </button>
        </div>
      )}
    </Container>
  )
}
