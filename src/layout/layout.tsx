import { FC, ReactNode } from 'react'
import { Header, Footer, BackToTop } from '@/layout'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
