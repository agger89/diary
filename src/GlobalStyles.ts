import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: inherit;
  }
`

export default GlobalStyles
