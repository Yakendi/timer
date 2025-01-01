import { createGlobalStyle } from 'styled-components'
import { reset } from './reset.styles'

export default createGlobalStyle`
  ${reset}
  body {
    font-family: "Lexend", serif;
  }
`
