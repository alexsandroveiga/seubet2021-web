import { ReactElement } from 'react'

import { Container, Content } from './styles'

export function TicketPrint (): ReactElement {
  return (
    <Container>
      <Content>
        <header>
          <h2>Bilhete SeuBet</h2>
          <h3>SBC-A778A44X</h3>
        </header>
        <div className="info">
          <p>
            Data da aposta: <b>25 de abril de 2020</b>
          </p>
          <p>
            Cliente: <b>Alexsandro Veiga</b>
          </p>
          <p>
            Agente: <b>Jailson C. Leal</b>
          </p>
          <p>
            Status: <b>Aguardando</b>
          </p>
        </div>
        <div className="matches">
          <header>Jogos neste bilhete</header>
          <div className="match">
            <div className="teams">
              <span className="home">Flamengo</span>
              <span className="versus">x</span>
              <span className="away">Botafogo</span>
            </div>
            <div className="info">
              <p>
                Palpite: <b>Resultado Final - Casa</b>
              </p>
              <p>
                Cotação: <b>5.8</b>
              </p>
              <p>
                Data da partida: <b>25/054/2021 21:00</b>
              </p>
              <p>
                Liga: <b>Série A</b>
              </p>
              <p>
                Situação: <b>Aguardando</b>
              </p>
            </div>
          </div>
          <div className="match">
            <div className="teams">
              <span className="home">Vasco</span>
              <span className="versus">x</span>
              <span className="away">Botafogo</span>
            </div>
            <div className="info">
              <p>
                Palpite: <b>Acima/Abaixo - Acima de 1.2</b>
              </p>
              <p>
                Cotação: <b>1.2</b>
              </p>
              <p>
                Data da partida: <b>25/054/2021 21:00</b>
              </p>
              <p>
                Liga: <b>Série A</b>
              </p>
              <p>
                Situação: <b>Aguardando</b>
              </p>
            </div>
          </div>
          <div className="match">
            <div className="teams">
              <span className="home">Fluminense</span>
              <span className="versus">x</span>
              <span className="away">River</span>
            </div>
            <div className="info">
              <p>
                Palpite: <b>Acima/Abaixo - Acima de 1.2</b>
              </p>
              <p>
                Cotação: <b>1.2</b>
              </p>
              <p>
                Data da partida: <b>25/054/2021 21:00</b>
              </p>
              <p>
                Liga: <b>Teste</b>
              </p>
              <p>
                Situação: <b>Aguardando</b>
              </p>
            </div>
          </div>
          <div className="match">
            <div className="teams">
              <span className="home">Múltiplas</span>
            </div>
            <div className="info">
              <p>
                Quantidade: <b>3 jogos</b>
              </p>
              <p>
                Cotação: <b>10.8</b>
              </p>
              <p>
                Prêmio máximo: <b>R$ 250,00</b>
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}
