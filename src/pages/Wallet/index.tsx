import { ReactElement } from 'react'
import { FiBell, FiLogOut } from 'react-icons/fi'
import { Link, Redirect } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Container, Content, Transactions } from './styles'

export function Wallet (): ReactElement {
  const { user, logout } = useAuth()

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <Content>
        <header>
          <div className="user">
            <picture>
              <Link to="/profile">
                <img src={`https://ui-avatars.com/api/?name=${user.name || user.username}&background=f01079&color=fff`}/>
              </Link>
            </picture>
            <div>
              <p>Bem vindo,</p>
              <h1>Alexsandro</h1>
            </div>
          </div>
          <div className="actions">
            <button className="has">
              <FiBell size={20} />
            </button>
            <button onClick={logout}>
              <FiLogOut size={20} />
            </button>
          </div>
        </header>
        <div className="balance">
          <p>saldo total</p>
          <h1>R$ 500,00</h1>
        </div>
        <div className="buttons"></div>
      </Content>
      <Transactions>
        <header>
          <h1>Transações</h1>
          <Link to="/transactions">ver todas</Link>
        </header>
      </Transactions>
    </Container>
  )
}
