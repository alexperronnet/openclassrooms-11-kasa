import { FC } from 'react'
import styled from 'styled-components'
import { Banner, Accordion } from '@/components'
import bannerAboutSrc from '@/assets/images/banner-about.webp'

export const About: FC = () => {
  const aboutContent = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  return (
    <StyledMain>
      <Banner background={bannerAboutSrc} title="Les valeurs de Kasa" />
      <StyledContainer>
        {aboutContent.map((item, i) => (
          <Accordion key={i} title={item.title} content={item.content} />
        ))}
      </StyledContainer>
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

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 64rem;
  width: 100%;
  margin-inline: auto;
`
