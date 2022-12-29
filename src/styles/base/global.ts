import { createGlobalStyle } from 'styled-components'
import { variables, reset, fonts } from '@/styles'

export const GlobalStyle = createGlobalStyle`
  ${variables}
  ${reset}
  ${fonts}

  html {
    font-size: 16px;
    line-height: var(--leading-normal);
  }

  body {
    font-family: var(--font-sans);
    font-weight: var(--font-medium);
    color: var(--color-primary-600);
    background-color: var(--color-white);
  }

  ::selection {
    color: var(--color-white);
    background-color: var(--color-black);
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-400);
    border-radius: var(--rounded-full);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-primary-100);
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    max-width: 80rem;
    width: calc(100% - 2rem);
    margin-inline: auto;
  }
`
