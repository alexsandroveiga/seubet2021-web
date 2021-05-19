import { ReactElement, useContext, useState } from 'react'
import { FiGrid, FiShoppingBag, FiSun, FiMoon, FiLogIn, FiChevronDown, FiBell, FiX, FiCircle, FiUser, FiSettings, FiList } from 'react-icons/fi'
import { IoWalletOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import avatar from '../../assets/avatar.webp'
import { useAuth } from '../../hooks/auth'
import { useBet } from '../../hooks/bet'
import { useTheme } from '../../hooks/theme'

import { Container, Hamburger, Navigation } from './styles'

export function Header (): ReactElement {
  const { user } = useAuth()
  const { bets } = useBet()
  const { push } = useHistory()
  const { title } = useContext(ThemeContext)
  const { toggleTheme } = useTheme()
  const [active, setActive] = useState(false)

  return (
    <Container isActive={active}>
      <div className="wrap">
        <Hamburger isActive={active} onClick={() => setActive(prevState => !prevState)}>
          {active ? <FiX size={24} /> : <FiGrid size={24} />}
        </Hamburger>

        <h1 className="branding">
          s<em>eu</em>b<em>et</em><span>.</span>
        </h1>

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
      <Navigation>
        <section>
          <header>
            <h1>Menu</h1>
            <FiChevronDown />
          </header>
          <ul>
            {user
              ? (
              <>
                <li><IoWalletOutline size={18} /> Minha carteira</li>
                <li><FiBell size={18} /> Notificações</li>
                <li><FiUser size={18} /> Editar perfil</li>
                <li><FiSettings size={18} /> Configurações</li>
              </>
                )
              : (
              <li><FiLogIn size={18} /> Login</li>
                )}
              <li><FiList size={18} /> Termos do site</li>
          </ul>
        </section>

        <section>
          <header>
            <h1>Ligas destaques</h1>
            <FiChevronDown />
          </header>
          <ul>
            <li><FiCircle size={18} /> Brasileirão Série A</li>
            <li><FiCircle size={18} /> Champions League</li>
          </ul>
        </section>
      </Navigation>
    </Container>
  )
}
