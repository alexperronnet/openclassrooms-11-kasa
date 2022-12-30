import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '@/styles'
import { useFetchData } from '@/hooks'
import { Router } from '@/router'

export const App: FC = () => {
  const { data, loading, error } = useFetchData('/api/api-mock.json')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router data={data} loading={loading} error={error} />
    </ThemeProvider>
  )
}
