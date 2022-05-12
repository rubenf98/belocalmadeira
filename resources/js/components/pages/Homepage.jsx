import React from 'react'
import styled from "styled-components";
import About from './HomepageComponents/About';
import Activities from './HomepageComponents/Activities';
import Header from './HomepageComponents/Header';
import Instagram from './HomepageComponents/Instagram';
import Services from './HomepageComponents/Services';


function Homepage() {

  return (
    < >
      <Header />
      <About />
      <Services />
      <Activities />
      <Instagram />
    </>
  )
}

export default Homepage


