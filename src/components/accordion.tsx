import { FC, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Icon } from '@/components'

type AccordionProps = {
  title: string
  content: string | string[]
}

export const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
    }
  }, [isOpen])

  return (
    <StyledAccordion aria-expanded={isOpen}>
      <StyledHeader onClick={() => setIsOpen(!isOpen)}>
        <StyledTitle>{title}</StyledTitle>
        <StyledIcon name="chevron-down" />
      </StyledHeader>
      <StyledContent ref={contentRef}>
        {typeof content === 'string' ? (
          <StyledText>{content}</StyledText>
        ) : (
          <StyledList>
            {content.map((item, i) => (
              <StyledItem key={i}>{item}</StyledItem>
            ))}
          </StyledList>
        )}
      </StyledContent>
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--rounded-sm);
  overflow: hidden;

  &:has(:focus-visible) {
    outline: 0.125rem solid var(--color-primary-600);
    outline-offset: 0.25rem;
  }

  &[aria-expanded='true'] {
    svg {
      transform: rotate(180deg);
    }
  }
`

const StyledHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: none;
  color: var(--color-white);
  background-color: var(--color-primary-500);
  transition: background-color var(--transition);

  @media (${({ theme }) => theme.bp.sm}) {
    font-size: var(--text-sm);
  }

  &:hover {
    background-color: var(--color-primary-600);
  }
`

const StyledIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  transition: transform var(--transition);
`

const StyledTitle = styled.h2``

const StyledContent = styled.div`
  overflow: hidden;
  background-color: var(--color-neutral-100);
  transition: max-height var(--transition);

  > * {
    padding: 1.5rem;

    @media (${({ theme }) => theme.bp.sm}) {
      font-size: var(--text-sm);
    }
  }
`

const StyledText = styled.p``

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const StyledItem = styled.li`
  font-size: var(--text-sm);
  color: var(--color-coral-500);
  background-color: var(--color-coral-100);
  padding: 0.5rem 1rem;
  border-radius: var(--rounded-full);
`
