import { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { TicketPrint } from '../pages/TicketPrint'
import { Wallet } from '../pages/Wallet'

export function Routes (): ReactElement {
  return (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/wallet" exact component={Wallet} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Route path="/ticketprint" exact component={TicketPrint} />
  </Switch>
  )
}
