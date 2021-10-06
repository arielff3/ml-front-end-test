import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  background: #eee;
  padding-bottom: 2rem;
`

export const Content = styled.section`
  max-width: calc(100vw - 15%);
  margin: 0 auto;
  margin-top: 2rem;
  background: #fff;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0;
  }

  .infoSection {
    display: grid;
    grid-template-columns: 60% 35%;
    gap: 5%;

    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }

    > img {
      width: 100%;
    }

    aside {
      padding: 1rem 0;

      display: flex;
      flex-direction: column;

      h1 {
        font-size: 1.2rem;
        margin: 0.2rem 0;
        color: rgba(0, 0, 0, 0.9);
      }

      span {
        font-weight: 500;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.9);
      }

      p {
        font-size: 2.8rem;
        margin: 1rem 0;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.9);
      }

      button {
        background: #3483fa;
        border: 0;
        color: #fff;
        height: 48px;
        border-radius: 0.4rem;
        transition: background 0.2s;
        &:hover {
          background: #2a6fd7;
        }
      }
    }
  }

  .descriptionSection {
    pre {
      white-space: break-spaces;
      word-break: break-word;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 4rem;
      margin-bottom: 1.5rem;
      color: rgba(0, 0, 0, 0.9);
    }
  }
`
