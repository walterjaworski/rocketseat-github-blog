import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
}

body {
  background: ${({ theme }) => theme.colors.base.background};
  color:${({ theme }) => theme.colors.base.text};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem 'Nunito Sans', sans-serif;
}

button {
  cursor: pointer;
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`