import React from 'react'
import styled from "styled-components";
import { dimensions } from '../../helper';

const Overlay = styled.div`
  z-index: 1;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, #000 0%, #38383830 100%);
  opacity: 0.7;

`;

const Header = styled.div`
    height: calc(60vh);
    background: url("/image/background.webp");
    background: url("/image/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${dimensions.lg}) {
        margin-bottom: 80px;
    }

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 50px;
    }

    div {
        z-index: 1;
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 60px;
            color: white;
            text-align: center;

            @media (max-width: ${dimensions.md}) {
                font-size: 40px;
            }

        }

        p {
            font-size: 18px;
            color: white;
            text-align: center;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }

        }
    }
`;

function PageHeader({ title, subtitle }) {
    return (
        <Header >
            <Overlay />
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </Header>
    )
}

export default PageHeader