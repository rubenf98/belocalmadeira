import React from 'react'
import styled, { keyframes } from "styled-components";


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

const Header = styled.div`
    background: url("/header_wallpaper.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: ${props => props.height};
    overflow-y: hidden;
    z-index: 10;
`;

function Homepage() {
    return (
        <div>Homepage</div>
    )
}

export default Homepage


