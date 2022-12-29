import { FC } from 'react'
import styled from 'styled-components'
import { Icon } from '@/components'
import { AccommodationTypes } from '@/types'

type RatingProps = {
  rating: AccommodationTypes['rating']
}

export const Rating: FC<RatingProps> = ({ rating }) => {
  const stars = Array(5)
    .fill(null)
    .map((_, index) => {
      const activeStar = index < Number(rating)

      return <StyledIcon key={index} name="star" className={activeStar ? 'active' : ''} />
    })

  return <StyledRating className="rating">{stars}</StyledRating>
}

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const StyledIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-neutral-200);
  fill: var(--color-neutral-200);

  &.active {
    color: var(--color-primary-400);
    fill: var(--color-primary-400);
  }
`
