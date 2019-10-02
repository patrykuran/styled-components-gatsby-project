import React from "react"
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc0cb5e;
`

const IndexPage = () => (
  <StyledWrapper>
    <h1>Hi people</h1>
  </StyledWrapper>
)

export default IndexPage
