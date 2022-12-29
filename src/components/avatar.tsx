import { FC } from 'react'
import styled from 'styled-components'
import { AccommodationTypes } from '@/types'

type AvatarProps = {
  src: string
  name: AccommodationTypes['host']['name']
}

export const Avatar: FC<AvatarProps> = ({ src, name }) => {
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return (
    <StyledAvatar>
      <StyledFullName>
        <StyledFirstName className="avatar__first-name">{firstName}</StyledFirstName>
        <StyledLastName className="avatar__last-name">{lastName}</StyledLastName>
      </StyledFullName>
      <StyledImage className="avatar__image" src={src} alt={name} />
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledFullName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`

const StyledFirstName = styled.span`
  font-size: var(--text-sm);
`

const StyledLastName = styled.span`
  font-weight: var(--font-semibold);
`

const StyledImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: var(--rounded-full);
  object-fit: cover;
`
