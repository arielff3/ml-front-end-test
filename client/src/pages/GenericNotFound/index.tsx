import Header from 'src/components/Header'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { ReactComponent as NotFound } from './assets/notFound.svg'

export const GenericNotFound = () => {
  return (
    <Container>
      <Header />
      <div>
        <NotFound />
        <h6>Parece que esta página no existe</h6>
        <Link to="/">Ir para página principal</Link>
      </div>
    </Container>
  )
}
