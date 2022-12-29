import { FC } from 'react'
import styled from 'styled-components'
import { Accordion, Avatar, Rating, Carousel } from '@/components'
import { AccommodationTypes } from '@/types'
import { useSeo } from '@/hooks'

type AccommodationProps = {
  data: AccommodationTypes
}

export const Accommodation: FC<AccommodationProps> = ({ data }) => {
  useSeo({ page: data.title })

  return (
    <StyledMain>
      <Carousel pictures={data.pictures} />
      <StyledHeader>
        <StyledHeaderTop>
          <StyledTitle data-location={data.location}>{data.title}</StyledTitle>
          <Avatar src={data.host.picture} name={data.host.name} />
        </StyledHeaderTop>
        <StyledHeaderBottom>
          <StyledTags>
            {data.tags.map(tag => (
              <StyledTag key={tag} className="rental__tag">
                {tag}
              </StyledTag>
            ))}
          </StyledTags>
          <Rating rating={data.rating} />
        </StyledHeaderBottom>
      </StyledHeader>
      <StyledAccordions>
        <Accordion title="Description" content={data.description} />
        <Accordion title="Équipment" content={data.equipments} />
      </StyledAccordions>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: 1;
  margin-block-end: 4rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StyledHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (${({ theme }) => theme.bp.md}) {
    flex-direction: column-reverse;
  }
`

const StyledTitle = styled.h1`
  font-size: var(--text-2xl);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: var(--font-semibold);

  @media (${({ theme }) => theme.bp.lg}) {
    font-size: var(--text-xl);
  }

  @media (${({ theme }) => theme.bp.md}) {
    align-items: center;
    text-align: center;
  }

  @media (${({ theme }) => theme.bp.sm}) {
    font-size: var(--text-lg);
  }

  &::after {
    content: attr(data-location);
    font-size: var(--text-base);
    font-weight: var(--font-medium);

    @media (${({ theme }) => theme.bp.sm}) {
      font-size: var(--text-sm);
    }
  }
`

const StyledHeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (${({ theme }) => theme.bp.md}) {
    flex-direction: column;
  }
`

const StyledTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const StyledTag = styled.span`
  font-size: var(--text-xs);
  color: var(--color-white);
  background-color: var(--color-primary-500);
  padding: 0.25rem 1rem;
  border-radius: var(--rounded-full);
`

const StyledAccordions = styled.div`
  display: flex;
  gap: 3rem;

  @media (${({ theme }) => theme.bp.md}) {
    gap: 1.5rem;
  }

  @media (${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
  }
`
