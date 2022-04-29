import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions } from '../../helper';

const Container = styled.div`
    height: 80px;
    background: transparent;
    margin: auto;
    display: flex;
    padding: 10px;
    position: fixed;
    box-sizing: border-box;
    display: flex;
    top: 0;
    z-index: 20;
    width: 90%;
    margin: auto;
    transition: .5s ease-in-out;
    transform: translate(-50%, 0);
    left: 50%;
    align-items: center;
    margin-top: 20px;
`;

const FlexItem = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Logo = styled(Link)`
    margin: auto;
    display: flex;
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    justify-content: center;


    img {
        height: 60px;
    }
`;


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    flex: 1;
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${props => props.backgroundHover};
    padding: 10px 30px 10px 30px;
    font-size: 18px;
    transition: .4s;
    margin-left: auto; 
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    background-size: 110%;
    text-transform: uppercase;
    color: ${props => props.color};
    &:hover {
        background: ${props => props.background};
    }
    
`;


const NavbarLink = styled(Link)`
    display: block;
    text-align: center;
    font-size: 1.2em;
    text-transform: capitalize;
    cursor: pointer;
    transition: .3s ease-in-out;
    padding: 29px 27px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.color};
    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;
        color: ${props => props.color};
        div {
            width: 100%;
        }
    }
    
`;




function Navbar({ handleVisibility }) {
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <Container>
                
                <FlexItem>
                    <MenuContainer>
                        <NavbarLink color={themeContext.inverseText} onClick={() => setHasShadow(true)} to="/about">about <div /></NavbarLink>
                        <NavbarLink color={themeContext.inverseText} onClick={() => setHasShadow(true)} to="/contact">contact <div /></NavbarLink>
                        <NavbarLink color={themeContext.inverseText} onClick={() => setHasShadow(true)} to="/activities">activities <div /></NavbarLink>
                    </MenuContainer>
                </FlexItem>

                <FlexItem>
                    <Logo to="/">
                        <img src="/image/logo_white.png" alt="be local madeira white logo" />
                    </Logo>
                </FlexItem>

                <FlexItem>
                    <OrderButton onClick={() => handleVisibility(true)} color={themeContext.inverseText} background={themeContext.primary} backgroundHover={themeContext.primaryHover}>
                        book now
                    </OrderButton>
                </FlexItem>

            </Container>
        </div>
    )
}

export default Navbar
