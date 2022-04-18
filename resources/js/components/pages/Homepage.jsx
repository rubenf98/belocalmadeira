import React from 'react'
import styled from "styled-components";
import About from './HomepageComponents/About';
import Activities from './HomepageComponents/Activities';
import Header from './HomepageComponents/Header';
import Instagram from './HomepageComponents/Instagram';
import Services from './HomepageComponents/Services';


const Container = styled.div`
  width: 100vw;
  position: relative;
  overflow-x: hidden;
`;



function Homepage() {

  return (
    <Container >
      <Header />
      <About />
      <Services />
      <Activities />
      <Instagram />
    </Container>
  )
}

export default Homepage


