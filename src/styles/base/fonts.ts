import { css } from 'styled-components'

import spaceGrotesk400Woff from '@/assets/fonts/space-grotesk-400.woff'
import spaceGrotesk400Woff2 from '@/assets/fonts/space-grotesk-400.woff2'
import spaceGrotesk500Woff from '@/assets/fonts/space-grotesk-500.woff'
import spaceGrotesk500Woff2 from '@/assets/fonts/space-grotesk-500.woff2'
import spaceGrotesk600Woff from '@/assets/fonts/space-grotesk-600.woff'
import spaceGrotesk600Woff2 from '@/assets/fonts/space-grotesk-600.woff2'
import spaceGrotesk700Woff from '@/assets/fonts/space-grotesk-700.woff'
import spaceGrotesk700Woff2 from '@/assets/fonts/space-grotesk-700.woff2'

const spaceGroteskWeights = {
  400: [spaceGrotesk400Woff2, spaceGrotesk400Woff],
  500: [spaceGrotesk500Woff2, spaceGrotesk500Woff],
  600: [spaceGrotesk600Woff2, spaceGrotesk600Woff],
  700: [spaceGrotesk700Woff2, spaceGrotesk700Woff]
}

const spaceGrotesk = {
  name: 'Space Grotesk',
  normal: spaceGroteskWeights
}

const createFontFaces = (font: typeof spaceGrotesk) => {
  const fontFaces = Object.entries(font.normal).map(([weight, sources]) => {
    const woff = sources[0]
    const woff2 = sources[1]

    return css`
      @font-face {
        font-family: '${font.name}';
        font-style: normal;
        font-weight: ${weight};
        src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
        display: swap;
      }
    `
  })

  return fontFaces
}

export const fonts = createFontFaces(spaceGrotesk)
