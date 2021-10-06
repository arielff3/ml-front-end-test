import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }
`
