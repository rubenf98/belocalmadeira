import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import moment from "moment";
import { dimensions, maxWidth } from '../../helper';
import {
    Link
} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    background: ${props => props.background};
    display: block;
    padding: 50px 0px;
    box-sizing: border-box;
`;

const Disclaimer = styled.div`
    margin-top: 50px;
    p {
        color: white;
        text-align: center;
        font-weight: 100;
        font-size: 14px;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: block;

    .links-container {
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        width: 50%;
        margin: 40px auto;
        display: flex;
        justify-content: center;
        padding: 20px 0px;
        box-sizing: border-box;

    }
    
`;

const Logo = styled(Link)`
    margin: auto;
    display: flex;
    justify-content: center;

    img {
        height: 70px;
    }
`;

const CustomLink = styled(Link)`
    color: #e4e4e4;
    font-size: 16px;
    text-decoration: none;
    text-transform: capitalize;

    &:hover, &:focus {
        color: #ffffff;
    }

    &:nth-child(2) {
        margin: 0px 30px;
    }
`;


function Footer() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container background={themeContext.primary}>
            <Content>
                <Logo to="/">
                    <img src="/image/logo_white.png" alt="be local madeira white logo" />
                </Logo>
                <div className='links-container'>
                    <CustomLink to="/contact">contact</CustomLink>
                    <CustomLink to="/about">about</CustomLink>
                    <CustomLink to="/activities">activities</CustomLink>
                </div>
            </Content>

            <Disclaimer>
                <p>Copyright ©{moment().year()} Be Local Madeira. All rights reserved</p>
                <p>Built by Rúben Freitas</p>
            </Disclaimer>
        </Container>
    )
}

export default Footer
