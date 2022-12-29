import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '@/components'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledLogo />
      </StyledLink>
      <StyledNav>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        <StyledNavLink to="/a-propos">À Propos</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 4rem;

  @media (${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    gap: 2rem;
  }
`

const StyledLink = styled(Link)`
  &:hover {
    color: var(--color-primary-700);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.5rem;
  }
`

const StyledLogo = styled(Logo)`
  height: 2.5rem;
  transition: color var(--transition);
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const StyledNavLink = styled(NavLink)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 100%;
    height: 0.125rem;
    background-color: var(--color-primary-600);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition);
  }

  &[aria-current='page'] {
    color: var(--color-primary-700);

    &::after {
      transform: scaleX(1);
      background-color: var(--color-primary-700);
    }
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.5rem;
  }
`
