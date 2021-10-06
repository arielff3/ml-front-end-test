import styled from 'styled-components'

export const Container = styled.header`
  background: #fff159;
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }

  .inputContainer {
    max-width: 70%;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 0 0 1rem;
    flex: 1;
    background: #fff;
    input {
      flex-grow: 1;
      border: 0;
      background: transparent;
    }

    span,
    button {
      background: #eee;
      border: 0;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
    }
  }
`
