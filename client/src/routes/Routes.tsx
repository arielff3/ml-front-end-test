import { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Loading } from 'src/components/Loading'

import { GenericNotFound, Search, Product } from './paths'

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/produto/:id+" component={Product} />
        <Route path="/pagina-nao-existe" component={GenericNotFound} />
        <Redirect to="/pagina-nao-existe" />
      </Switch>
    </Suspense>
  )
}
