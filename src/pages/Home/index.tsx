import { ReactElement, useEffect, useState } from 'react'

import { api } from '../../services/api'

import { Header, Match } from '../../components'

import { Container, Content } from './styles'

export function Home (): ReactElement {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    api.get('/fixture')
      .then(response => setMatches(response.data.fixture))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <Header />
      <div className="header-image"></div>

      <Content>
        {matches.map(match => <Match {...match} />)}
      </Content>

    </Container>
  )
}
