import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound: FC = () => {
  return (
    <StyledNotFound>
      <StyledInfos>
        <StyledTitle>404</StyledTitle>
        <StyledText>Oups ! La page que vous demandez n’existe pas...</StyledText>
      </StyledInfos>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  text-align: center;
  margin-block-end: 3rem;

  @media (${({ theme }) => theme.bp.md}) {
    gap: 4rem;
  }

  @media (${({ theme }) => theme.bp.sm}) {
    gap: 3rem;
  }
`

const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const StyledTitle = styled.h1`
  font-size: var(--text-9xl);
  font-weight: var(--font-bold);

  @media (${({ theme }) => theme.bp.md}) {
    font-size: var(--text-7xl);
  }

  @media (${({ theme }) => theme.bp.sm}) {
    font-size: var(--text-5xl);
  }
`

const StyledText = styled.p`
  font-size: var(--text-2xl);

  @media (${({ theme }) => theme.bp.md}) {
    font-size: var(--text-xl);
  }

  @media (${({ theme }) => theme.bp.sm}) {
    font-size: var(--text-lg);
  }
`

const StyledLink = styled(Link)`
  font-size: var(--text-lg);
  position: relative;

  @media (${({ theme }) => theme.bp.md}) {
    font-size: var(--text-base);
  }

  @media (${({ theme }) => theme.bp.sm}) {
    font-size: var(--text-sm);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 0.125rem;
    background-color: var(--color-primary-600);
    transition: width var(--transition);
  }

  &:hover::after {
    width: 100%;
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 1rem;
  }
`
