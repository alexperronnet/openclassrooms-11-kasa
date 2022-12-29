import { FC, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@/components'
import { AccommodationTypes } from '@/types'

type CarouselProps = {
  pictures: AccommodationTypes['pictures']
}

export const Carousel: FC<CarouselProps> = ({ pictures }) => {
  const [slide, setSlide] = useState(0)

  const handleSlide = (direction: 'left' | 'right') => {
    switch (direction) {
      case 'left':
        slide === 0 ? setSlide(pictures.length - 1) : setSlide(slide - 1)
        break
      case 'right':
        slide === pictures.length - 1 ? setSlide(0) : setSlide(slide + 1)
        break
    }
  }

  return (
    <StyledCarousel>
      <StyledPictures>
        {pictures.map((picture, i) => (
          <StyledPicture
            key={i}
            src={picture}
            alt="rental"
            style={{ transform: `translateX(${slide * -100}%)` }}
          />
        ))}
      </StyledPictures>
      {pictures.length > 1 && (
        <StyledControls>
          <StyledControl onClick={() => handleSlide('left')}>
            <StyledIcon name="chevron-left" />
          </StyledControl>
          <StyledDots>
            {pictures.map((_, i) => (
              <StyledDot
                key={i}
                className={`${i === slide ? 'active' : ''}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </StyledDots>
          <StyledControl onClick={() => handleSlide('right')}>
            <StyledIcon name="chevron-right" />
          </StyledControl>
        </StyledControls>
      )}
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  position: relative;
  border-radius: var(--rounded-lg);
  overflow: hidden;
`

const StyledPictures = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 25rem;

  @media (${({ theme }) => theme.bp.md}) {
    height: 20rem;
  }
`

const StyledPicture = styled.img`
  flex: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition);
`

const StyledControls = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;

  @media (${({ theme }) => theme.bp.sm}) {
    padding-inline: 1rem;
  }
`

const StyledControl = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: var(--rounded-sm);
  padding: 0.25rem;
  transition: background-color var(--transition);

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.25rem;
  }
`

const StyledDots = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--rounded-full);
  background-color: rgba(0, 0, 0, 0.15);
`

const StyledDot = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--rounded-full);
  background-color: var(--color-white);
  transition: background-color var(--transition);

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.125rem;
  }

  &.active {
    background-color: var(--color-primary-600);
  }
`

const StyledIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  color: var(--color-white);
`
