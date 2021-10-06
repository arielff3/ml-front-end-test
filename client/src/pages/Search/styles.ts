import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  background: #eeeeee;
  padding-bottom: 2rem;
`

export const Content = styled.section`
  max-width: calc(100vw - 30%);
  margin: 0 auto;
  margin-top: 2rem;
  background: #fff;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }
`

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 5rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  & + & {
    margin-top: 1.2rem;
  }

  &:not(&:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  img {
    width: 160px;
  }

  p,
  b,
  h6 {
    color: #272727;
  }

  div {
    flex: 1;
    padding: 0 1.5rem;

    b {
      margin-bottom: 0.5rem;
    }
  }
`
