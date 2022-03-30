import React, { useState, useEffect } from 'react'
import styled, { keyframes } from "styled-components";
import Header from './HomepageComponents/Header';

const jump = keyframes`
  0% {
    bottom: 20px;
  }

  15% {
    bottom: 30px;
  }
  
  30% {
    bottom: 20px;
  }
`;


const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
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


