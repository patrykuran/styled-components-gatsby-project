import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc0cb5e;
  font-family: Arial;
  color: #717070;
`;

const H1 = styled.h1`
// without destructuring:
// font-size: ${(props) => props.isBig ? '5em' : '3em'};
  font-size: ${({isBig}) => isBig ? '5em' : '3em'};
  display: block;
`;

const IndexPage = () => (
  <>
    <GlobalStyle/>
    <StyledWrapper>
      <H1 isBig>Hi people</H1>
      <H1>Hi people 2</H1>
    </StyledWrapper>
  </>
)

export default IndexPage
