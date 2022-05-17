import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext, withTheme } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions } from '../../helper';
import { Select } from 'antd';

const Container = styled.div`
    background: ${props => props.background};
    width: 100vw;
    height: ${props => props.hasBackground ? "100px" : "0px"};
    left: 50%;
    top: 0;
    position: fixed;
    z-index: 20;
    transform: translate(-50%, 0);
    transition: all .3s ease;
    box-shadow:0px 5px 5px rgba(0,0,0,.2);

    @media(max-width: ${dimensions.md}) {
        height: ${props => props.hasBackground ? "70px" : "0px"};
    }
`;

const Content = styled.div`
    height: 60px;
    background: transparent;
    margin: auto;
    display: flex;
    width: 90%;
    margin: auto;
    transition: .5s ease-in-out;
    box-sizing: border-box;
    align-items: center;
    margin-top: 15px;

    @media(max-width: ${dimensions.md}) {
        margin-top: 5px;
        height: 50px;
    }
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
    font-weight: bold;
    justify-content: center;


    img {
        height: 60px;

        @media(max-width: ${dimensions.md}) {
            height: 40px;
        }
    }
`;


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    flex: 1;

    @media(max-width: ${dimensions.md}) {
        display: none;
    }
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${props => props.background};
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
    font-weight: bold;

    @media(max-width: ${dimensions.md}) {
        font-size: 16px;
        padding: 5px 10px 5px 10px;
    }

    &:hover {
        background: ${props => props.backgroundHover};
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

const SelectLink = styled(Link)`
    display: block;
    font-size: 1.2em;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;    

    &:hover {
        color: #fff;
    }
`;

export const CustomSelect = styled(Select)`
    margin: 10px 0px;
    border: none;
    background-color: transparent !important;
    padding: 29px 27px;
    color: #fff;

    .ant-select-dropdown {
        background-color: transparent !important;
    }

    &:focus,
    &:active, &:hover {
        outline: none;
        border: none !important;
        appearance: none;
        box-shadow: none;
    }


    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    .ant-select-selector {
        background-color: transparent !important;
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;
    }

    svg {
        color: white;
    }
`;

const Activities = styled.div`
    display: block;
    font-size: 1.2em;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;    

    &:hover {
        color: #fff;
    }
`;

function Navbar({ handleVisibility, theme }) {
    const [openSelect, setOpenSelect] = useState(false)
    const [hasBackground, setHasBackground] = useState(false)
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY / window.innerHeight > .6) {
                setHasBackground(true);
            }
            else {
                setHasBackground(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", setFromEvent);
        };

    }, []);

    return (
        <Container background={theme.primary} hasBackground={hasBackground}>
            <Content>

                <FlexItem>
                    <MenuContainer>
                        <NavbarLink color={themeContext.inverseText} to="/about">about <div /></NavbarLink>
                        <NavbarLink color={themeContext.inverseText} to="/contact">contact <div /></NavbarLink>

                        <CustomSelect
                            open={openSelect}
                            onMouseLeave={() => setOpenSelect(false)}
                            onMouseEnter={() => setOpenSelect(true)}
                            placeholder="Activities"
                            value="activities"
                        >
                            <Select.Option style={{ display: "none" }} value="activities">
                                <Activities>Activities</Activities>
                            </Select.Option>
                            <Select.Option value="canyoning" >
                                <SelectLink to="/activities/canyoning">Canyoning</SelectLink>
                            </Select.Option>
                            <Select.Option value="hiking" >
                                <SelectLink to="/activities/hiking">hiking</SelectLink>
                            </Select.Option>
                            <Select.Option value="biking" >
                                <SelectLink to="/activities/biking">biking</SelectLink>
                            </Select.Option>
                            <Select.Option value="coastering" >
                                <SelectLink to="/activities/coasteering">coasteering</SelectLink>
                            </Select.Option>
                        </CustomSelect><div />

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

            </Content>
        </Container>
    )
}

export default withTheme(Navbar)
