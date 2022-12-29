import { FC } from 'react'
import styled from 'styled-components'
import { Banner, Gallery, Icon } from '@/components'
import { ApiResultTypes } from '@/types'
import bannerHomeSrc from '@/assets/images/banner-home.webp'
import { useSeo } from '@/hooks'

export const Home: FC<ApiResultTypes> = ({ data, loading, error }) => {
  useSeo({ page: 'Accueil' })

  return (
    <StyledMain>
      <Banner background={bannerHomeSrc} title="Chez vous, partout et ailleurs" />
      {loading && (
        <StyledLoader>
          <StyledIcon name="loader" />
          <StyledText>Chargement en cours...</StyledText>
        </StyledLoader>
      )}
      {error && <StyledText>Une erreur est survenue... Veuillez recharger la page</StyledText>}
      {data && !error && !loading && <Gallery data={data} />}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-block-end: 4rem;
`

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const StyledIcon = styled(Icon)`
  width: 3rem;
  height: 3rem;
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

const StyledText = styled.p`
  font-size: var(--text-lg);
`
