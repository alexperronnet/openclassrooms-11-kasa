import { FC } from 'react'
import styled from 'styled-components'
import { Banner } from '@/components'
import bannerHomeSrc from '@/assets/images/banner-home.webp'

export const Home: FC = () => {
  return (
    <StyledMain>
      <Banner background={bannerHomeSrc} title="Chez vous, partout et ailleurs" />
    </StyledMain>
  )
}

const StyledMain = styled.main``
