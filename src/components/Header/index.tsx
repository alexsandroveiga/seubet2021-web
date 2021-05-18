import { ReactElement, useContext, useState } from 'react'
import { FiGrid, FiShoppingBag, FiSun, FiMoon, FiLogIn } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import avatar from '../../assets/avatar.webp'
import { useAuth } from '../../hooks/auth'
import { useBet } from '../../hooks/bet'
import { useTheme } from '../../hooks/theme'

import { Container, Hamburger } from './styles'

export function Header (): ReactElement {
  const { user } = useAuth()
  const { bets } = useBet()
  const { push } = useHistory()
  const { title } = useContext(ThemeContext)
  const { toggleTheme } = useTheme()
  const [active, setActive] = useState(false)

  return (
    <Container>
      <div className="wrap">
        <Hamburger isActive={active} onClick={() => setActive(prevState => !prevState)}>
          <FiGrid size={24} />
        </Hamburger>

        <h1>s<em>eu</em>b<em>et</em><span>.</span></h1>

        <div className="actions">
          <button onClick={toggleTheme}>
            {title === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          {bets.length > 0 && (
            <button className="bag">
              <FiShoppingBag />
              <span>{bets.length}</span>
            </button>
          )}

          {user
            ? (
            <button onClick={() => push('/profile')}>
              <img src={avatar} />
            </button>
              )
            : (
            <button onClick={() => push('/login')}>
              <FiLogIn />
            </button>
              )}
        </div>
      </div>
    </Container>
  )
}
