import styled from 'styled-components'

export const SApp = styled.div`
  min-height: 100vh;
  display: flex;
  max-width: 1220px;
  margin: 0 auto;
  flex-direction: column;
  padding: 20px;
  row-gap: 20px;

  @media (min-width: 1360px) {
    padding-top: 80px;
    row-gap: 30px;
  }
`