import { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Register } from '../pages/Register'

import { Wallet } from '../pages/Wallet'

export function Routes (): ReactElement {
  return (
  <Switch>
    <Route path="/" exact component={Wallet} />
    <Route path="/register" exact component={Register} />
  </Switch>
  )
}
