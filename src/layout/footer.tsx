import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '@/components'

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <StyledLink to="/">
        <StyledLogo />
      </StyledLink>
      <StyledCopy>&copy; {currentYear} Kasa. Tous droits réservés.</StyledCopy>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 4rem;
  border-top: 0.125rem solid var(--color-neutral-100);

  @media (${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--color-neutral-900);

  &:hover {
    color: var(--color-primary-600);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.5rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 2rem;
  transition: color var(--transition);
`

const StyledCopy = styled.p`
  color: var(--color-neutral-400);
  font-size: var(--text-sm);
`
