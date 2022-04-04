import React from 'react'
import styled, { keyframes } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions } from '../../helper';

const Container = styled.div`
    height: 80px;
    max-width: 1200px;
    background: transparent;
    margin: auto;
    display: flex;
    padding: 10px;
    position: fixed;
    box-sizing: border-box;
    display: flex;
    top: 0;
    z-index: 20;
    width: 100%;
    color: white;
    transition: .5s ease-in-out;
    transform: translate(-50%, 0);
    left: 50%;
    align-items: center;
`;

const FlexItem = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Logo = styled(Link)`
    margin: auto;
    margin-left: 30px;
    display: block;
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    flex: 1;

    img {
        height: 100%;
    }
`;


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: #0b4209;
    padding: 10px 50px 10px 50px;
    font-size: 20px;
    transition: .4s;
    margin-left: auto; 
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    color: white;
    background-size: 110%;
    text-transform: uppercase;
    
    &:hover {
        background: #095a07;
    }
    
`;


const NavbarLink = styled(Link)`
    color: #ffffff;
    display: block;
    text-align: center;
    font-size: 1.2em;
    text-transform: capitalize;
    cursor: pointer;
    transition: .3s ease-in-out;
    padding: 29px 27px;
    font-weight: bold;
    text-align: center;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;
        color: #fff
        div {
            width: 100%;
        }
    }
    
`;





function Navbar() {

    return (
        <div>
            <Container>
                <FlexItem>
                    <Logo to="/">
                        Be Local Madeira
                    </Logo>
                </FlexItem>
                <FlexItem>
                    <MenuContainer>
                        <NavbarLink onClick={() => setHasShadow(true)} to="/about">about <div /></NavbarLink>
                        <NavbarLink onClick={() => setHasShadow(true)} to="/contact">contact <div /></NavbarLink>
                        <NavbarLink onClick={() => setHasShadow(true)} to="/activities">activities <div /></NavbarLink>
                    </MenuContainer>
                </FlexItem>
                <FlexItem>
                    <OrderButton>book now</OrderButton>
                </FlexItem>
            </Container>
        </div>
    )
}

export default Navbar
