import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout'
import { Home, About, Accommodation, NotFound } from '@/pages'
import { ApiResultTypes } from '@/types'

type RouterProps = ApiResultTypes

export const Router: FC<RouterProps> = ({ data, loading, error }) => {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  )
}
