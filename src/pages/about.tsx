import { FC } from 'react'
import styled from 'styled-components'
import { Banner } from '@/components'
import bannerAboutSrc from '@/assets/images/banner-about.webp'

export const About: FC = () => {
  return (
    <StyledMain>
      <Banner background={bannerAboutSrc} title="Nos valeurs" />
    </StyledMain>
  )
}

const StyledMain = styled.main``
