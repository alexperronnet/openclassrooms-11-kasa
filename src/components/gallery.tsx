import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AccommodationTypes } from '@/types'

type GalleryProps = {
  data: AccommodationTypes[]
}

export const Gallery: FC<GalleryProps> = ({ data }) => {
  return (
    <StyledGallery>
      {data?.map(item => (
        <StyledLink key={item.id} to={`/hebergement/${item.id}`}>
          <StyledImg src={item.cover} alt={item.title} loading="lazy" />
          <StyledTitle className="rental-card__title">{item.title}</StyledTitle>
        </StyledLink>
      ))}
    </StyledGallery>
  )
}

const StyledGallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  background-color: var(--color-neutral-100);
  border-radius: var(--rounded-md);

  @media (${({ theme }) => theme.bp.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (${({ theme }) => theme.bp.md}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (${({ theme }) => theme.bp.sm}) {
    padding: 0;
    background-color: transparent;
  }
`

const StyledLink = styled(Link)`
  position: relative;
  aspect-ratio: 1/1;
  border-radius: var(--rounded-md);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 1rem 1.5rem;

  @media (${({ theme }) => theme.bp.sm}) {
    aspect-ratio: 13/10;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.7));
  }

  &:is(:hover, :focus-visible) {
    img {
      transform: scale(1.1);
    }

    h2::after {
      width: 100%;
    }
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.125rem;
  }
`

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition);
`

const StyledTitle = styled.h2`
  position: relative;
  color: var(--color-white);
  font-size: var(--text-sm);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--color-primary-500);
    z-index: -1;
    transition: width var(--transition);
  }
`
