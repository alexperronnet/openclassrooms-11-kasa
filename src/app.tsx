import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '@/styles'
import { Header, Footer } from '@/layout'
import { Home, About, Accommodation, NotFound } from '@/pages'
import { useFetchData } from '@/hooks'

export const App: FC = () => {
  const { data, loading, error } = useFetchData('/api/api-mock.json')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home data={data} loading={loading} error={error} />} />
          <Route path="/a-propos" element={<About />} />
          {data?.map(item => (
            <Route
              key={item.id}
              path={`/hebergement/${item.id}`}
              element={<Accommodation data={item} />}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
