import { FC } from 'react'
import styled from 'styled-components'

type BannerProps = {
  background: string
  title: string
}

export const Banner: FC<BannerProps> = ({ background, title }) => {
  return (
    <StyledBanner image={background}>
      <StyledTitle>{title}</StyledTitle>
    </StyledBanner>
  )
}

const StyledBanner = styled.section<{ image: BannerProps['background'] }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  background: url(${({ image }) => image}) center / cover;
  border-radius: var(--rounded-md);
  overflow: hidden;
  box-shadow: var(--shadow-xl);

  @media (${({ theme }) => theme.bp.sm}) {
    height: 10rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    opacity: 0.3;
  }
`

const StyledTitle = styled.h1`
  color: var(--color-white);
  font-size: var(--text-3xl);
  text-align: center;
  padding: 1rem;
  isolation: isolate;

  @media (${({ theme }) => theme.bp.md}) {
    font-size: var(--text-2xl);
  }

  @media (${({ theme }) => theme.bp.sm}) {
    font-size: var(--text-xl);
  }
`
