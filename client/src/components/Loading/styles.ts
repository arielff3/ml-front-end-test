import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  z-index: 5;

  svg {
    width: 5.438rem;
    height: 5.438rem;
    margin-bottom: 2.75rem;
    animation: ${rotate} 1.5s infinite linear;
  }
`
