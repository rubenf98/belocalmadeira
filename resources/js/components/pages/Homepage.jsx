import React, { useEffect } from 'react'
import styled from "styled-components";
import About from './HomepageComponents/About';
import Activities from './HomepageComponents/Activities';
import Header from './HomepageComponents/Header';
import Instagram from './HomepageComponents/Instagram';
import Services from './HomepageComponents/Services';
import { useSearchParams } from "react-router-dom";

function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { text } = require('../../assets/' + localStorage.getItem('language') + "/homepage");
  console.log(text.about)
  useEffect(() => {
    var filter = searchParams.get("scrollTo");
    var element = document.getElementById(filter);
    setTimeout(() => {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }, 0);
  }, [])
  return (
    < >
      <Header text={text.header} />
      <About text={text.about} />
      <Services text={text} />
      <Activities text={text} />
      <Instagram text={text} />
    </>
  )
}

export default Homepage


