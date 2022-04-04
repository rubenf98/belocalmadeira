import React from 'react'
import styled from "styled-components";
import Header from './HomepageComponents/Header';


const Container = styled.div`
  width: 100vw;
  position: relative;
  overflow-x: hidden;
`;



function Homepage() {

  return (
    <Container >
      <Header />
    </Container>
  )
}

export default Homepage


