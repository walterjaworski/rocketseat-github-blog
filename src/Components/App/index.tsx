import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from '../../Router'

export function App() {
  const GlobalStyleProxy: any = GlobalStyle

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyleProxy />
    </ThemeProvider>
  )
}
