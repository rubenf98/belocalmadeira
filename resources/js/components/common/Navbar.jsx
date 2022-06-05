import React, { useContext, useState, useEffect } from 'react'
import styled, { ThemeContext, withTheme } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions } from '../../helper';
import { Select, Drawer } from 'antd';

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

    .navbar-hidden-links {
        @media(max-width: ${dimensions.md}) {
            display: none;
        }
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
        padding: 0px;
        background: transparent;
    }

    &:hover {
        background: ${props => props.backgroundHover};

        @media(max-width: ${dimensions.md}) {
            background: transparent;
        }
    }

    span {
        @media (max-width: ${dimensions.md}) {
            display: none;
        }
    }

    img {
        display: none;

        @media (max-width: ${dimensions.md}) {
            display: block;
            margin: auto;
            height: 20px;
        }
    }
    
`;

const MenuButton = styled.div`
    display: none;
    cursor: pointer;
    flex: 1;

    @media (max-width: ${dimensions.md}) {
        display: block;  
    }

    img {
        margin: auto;
        height: 25px; 
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

    @media (max-width: ${dimensions.lg}) {
        padding: 15px 10px;
    }

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

    @media (max-width: ${dimensions.lg}) {
        padding: 15px 10px;
    }

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

const CustomDrawer = styled(Drawer)`
    div {
        display: flex;
        align-items: center;
    }

    .ant-drawer-content {
        background: ${props => props.background};

        ul {
            list-style: none;
        }
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

const MenuLink = styled(Link)`
    color: white !important;
    display: block;
    text-align: center;
    font-size: 3em;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s ease-in-out;
    font-family: 'Playfair Display', serif;

    &:hover {
        text-shadow:
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white;
    }
    
`;

function Navbar({ handleVisibility, theme }) {
    const [openSelect, setOpenSelect] = useState(false)
    const [hasBackground, setHasBackground] = useState(false)
    const themeContext = useContext(ThemeContext);
    const [visible, setVisible] = useState(0);
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/links");

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
                <MenuButton onClick={() => setVisible(!visible)}>
                    <img

                        src={visible ?
                            "/image/navbar/close.svg" :
                            "/image/navbar/menu.svg"
                        }
                        alt="menu"
                    />
                </MenuButton>
                <FlexItem className='navbar-hidden-links'>

                    <MenuContainer>

                        <NavbarLink color={themeContext.inverseText} to="/about">{text.links[0]} <div /></NavbarLink>
                        <NavbarLink color={themeContext.inverseText} to="/contact">{text.links[1]} <div /></NavbarLink>

                        <CustomSelect
                            open={openSelect}
                            onMouseLeave={() => setOpenSelect(false)}
                            onMouseEnter={() => setOpenSelect(true)}
                            placeholder={text.links[2]}
                            value="activities"
                        >
                            <Select.Option style={{ display: "none" }} value="activities">
                                <Activities>{text.links[2]}</Activities>
                            </Select.Option>
                            <Select.Option value="canyoning" >
                                <SelectLink to="/activities/canyoning">{text.links[3]}</SelectLink>
                            </Select.Option>
                            <Select.Option value="hiking" >
                                <SelectLink to="/activities/hiking">{text.links[4]}</SelectLink>
                            </Select.Option>
                            <Select.Option value="biking" >
                                <SelectLink to="/activities/biking">{text.links[5]}</SelectLink>
                            </Select.Option>
                            <Select.Option value="coastering" >
                                <SelectLink to="/activities/coasteering">{text.links[6]}</SelectLink>
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
                        <span>{text.button}</span>
                        <img src="/image/navbar/order.svg" alt="create reservation" />
                    </OrderButton>
                </FlexItem>

            </Content>
            <CustomDrawer
                background={theme.primary}
                style={{ zIndex: "15" }}
                placement="right"
                height={"100%"}
                width={"100%"}
                onClose={() => setVisible(0)}
                visible={visible}
                closable={false}
            >
                <div>
                    <ul style={{ padding: "0px" }}>
                        <li><MenuLink onClick={() => setVisible(0)} to="/">home</MenuLink></li>
                        <li><MenuLink onClick={() => setVisible(0)} to="/about">about</MenuLink></li>
                        <li><MenuLink onClick={() => setVisible(0)} to="/contact">contact</MenuLink></li>
                        <li><MenuLink onClick={() => setVisible(0)} to="/activities/canyoning">canyoning</MenuLink></li>
                        <li><MenuLink onClick={() => setVisible(0)} to="/activities/biking">biking</MenuLink></li>
                        <li><MenuLink onClick={() => setVisible(0)} to="/activities/coasteering">coasteering</MenuLink></li>
                        <li><MenuLink onClick={() => setVisible(0)} to="/activities/hiking">hiking</MenuLink></li>
                    </ul>

                </div>
            </CustomDrawer>
        </Container >
    )
}

export default withTheme(Navbar)
