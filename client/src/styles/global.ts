import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  html {
    font-size: 16px;
  }


  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.75rem;
  }

  h5 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
  }

  h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
  }

  span, b, p, pre {
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    line-height: 1.5rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-decoration: none;
  }
  `
