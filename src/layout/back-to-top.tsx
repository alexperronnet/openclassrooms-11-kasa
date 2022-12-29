import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@/components/'

export const BackToTop: FC = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledBackToTop
      className={`back-to-top ${showButton ? 'back-to-top--active' : ''}`}
      onClick={() => window.scrollTo(0, 0)}
      style={{ opacity: showButton ? 1 : 0 }}
    >
      <StyledIcon name="arrow-up" className="back-to-top__icon" />
    </StyledBackToTop>
  )
}

const StyledBackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  padding: 0.5rem;
  border-radius: var(--rounded-full);
  background-color: var(--color-primary-500);
  color: var(--color-white);
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--transition), background-color var(--transition);

  &:hover {
    background-color: var(--color-primary-600);
  }

  &:focus-visible {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.25rem;
  }
`

const StyledIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
`
