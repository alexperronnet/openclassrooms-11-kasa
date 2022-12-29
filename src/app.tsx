import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '@/styles'

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
