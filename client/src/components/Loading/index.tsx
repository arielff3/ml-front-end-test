import React from 'react'
import { ReactComponent as Eclipse } from './assets/eclipse.svg'
import { Container } from './styles'

export const Loading: React.FC = () => {
  return (
    <Container>
      <Eclipse />
    </Container>
  )
}
