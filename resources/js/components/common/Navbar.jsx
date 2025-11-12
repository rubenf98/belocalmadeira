import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dimensions } from "../../helper";
import { Select, Drawer, Dropdown, Menu, Row } from "antd";
import AnimationContainer from "./AnimationContainer";
import { connect } from "react-redux";

const Container = styled.div`
    background: ${({ theme }) => theme.primary};
    width: 100vw;
    height: ${(props) => (props.hasBackground ? "100px" : "0px")};
    left: 50%;
    top: 0;
    position: fixed;
    z-index: 20;
    transform: translate(-50%, 0);
    transition: all 0.3s ease;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: ${dimensions.md}) {
        height: ${(props) => (props.hasBackground ? "70px" : "0px")};
    }

    a {
        color: ${(props) => (props.hasBackground ? "white" : "black")};
    }
`;

const Content = styled.div`
    height: 60px;
    background: transparent;
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: ${dimensions.custom};
    margin: auto;
    transition: 0.5s ease-in-out;
    box-sizing: border-box;
    align-items: center;
    margin-top: 15px;

    @media (max-width: ${dimensions.custom}) {
        padding: 0px 20px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        margin-top: 5px;
        height: 50px;
        justify-content: space-between;
    }

    .navbar-hidden-links {
        @media (max-width: ${dimensions.md}) {
            display: none;
        }
    }

    .flex-end {
        justify-content: flex-end;
    }

    .navbar-hidden-menu {
        @media (min-width: ${dimensions.md}) {
            display: none;
        }
    }
`;

const FlexItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
`;

const Logo = styled(Link)`
    flex: 0 0 auto; /* logo keeps its natural width */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 80px;

        @media (max-width: ${dimensions.md}) {
            height: 40px;
        }
    }
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    transition: 0.4s;
    margin-left: auto;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    background-size: 110%;
    text-transform: capitalize;
    color: ${({ theme }) => theme.inverseText};
    font-weight: bold;

    @media (max-width: ${dimensions.md}) {
        font-size: 14px;
        padding: 8px 16px 8px 16px;
        margin-right: 10px;
        border: 1px solid white;
    }

    &:hover {
        background: ${({ theme }) => theme.primaryHover};

        @media (max-width: ${dimensions.md}) {
            /* background: transparent; */
        }
    }

    img {
        display: none;
    }

    @media (max-width: ${dimensions.md}) {
        font-size: 14px;
        padding: 8px 16px 8px 16px;
        margin-right: 10px;
        border-color: 1px solid white;
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
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-weight: bold;

    @media (max-width: ${dimensions.lg}) {
        padding: 15px 10px;
    }

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;

        div {
            width: 100%;
        }
    }
`;

export const CustomSelect = styled(Select)`
    margin: 10px 0px;
    border: none;
    background-color: transparent !important;
    padding: 25px 10px;
    color: #fff;

    @media (max-width: ${dimensions.lg}) {
        padding: 15px 10px;
    }

    .ant-select-dropdown {
        background-color: transparent !important;
    }

    &:focus,
    &:active,
    &:hover {
        outline: none;
        border: none !important;
        appearance: none;
        box-shadow: none;
    }

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(
            .ant-select-customize-input
        )
        .ant-select-selector,
    .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
    }

    .ant-select-selector {
        background-color: transparent !important;
    }

    &:focus,
    &:active,
    &:hover {
        box-shadow: none;
    }

    svg {
        color: white;
    }
`;

const MenuItem = styled(Menu.Item)`
    padding: 10px 25px;
    box-sizing: border-box;
    padding-left: ${(props) => (props.main ? "20px" : "40px")};
    color: ${({ theme }) => theme.primaryLight};
    display: block;
    font-weight: ${(props) => (props.main ? "700" : "400")};
    font-size: ${(props) => (props.main ? "14px" : "12px")};
    text-transform: capitalize;
    transition: 0.3s ease-in-out;
    font-family: "Playfair Display", serif;

    a {
        color: ${(props) => props.color};
    }
`;

const MobileContainer = styled.div`
    display: none;

    @media (max-width: ${dimensions.md}) {
        display: flex;
    }
`;

function Navbar({ handleVisibility, language }) {
    const [hasBackground, setHasBackground] = useState(false);
    const { text } = require("../../assets/" + language + "/links");

    const menu = (
        <Menu
            style={{
                width: "90vw",
                transform: "translate(-50%, 0)",
                left: "50%",
            }}
        >
            <MenuItem main>
                <Link to="/">home</Link>
            </MenuItem>
            <MenuItem main>Activities</MenuItem>
            <MenuItem>
                <Link to="/activities/canyoning">canyoning</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/activities/biking">biking</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/activities/coasteering">coasteering</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/activities/hiking">hiking</Link>
            </MenuItem>
            <MenuItem main>
                <Link to="/about">about</Link>
            </MenuItem>
        </Menu>
    );

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY / window.innerHeight > 0.1) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", setFromEvent);
        };
    }, []);

    return (
        <Container hasBackground={hasBackground}>
            <Content>
                <FlexItem className="navbar-hidden-links">
                    <NavbarLink to="/about">
                        {text.links[0]} <div />
                    </NavbarLink>
                    <NavbarLink to="/contact">
                        {text.links[1]} <div />
                    </NavbarLink>
                    <NavbarLink to="/store">
                        {text.links[8]} <div />
                    </NavbarLink>
                    <NavbarLink to="/blog">
                        {text.links[9]} <div />
                    </NavbarLink>
                </FlexItem>

                <AnimationContainer animateIn="fadeInDown" offset={0}>
                    <Logo to="/">
                        <img
                            src={
                                hasBackground
                                    ? "/image/logo_white.png"
                                    : "/image/logo.png"
                            }
                            alt="be local madeira logo"
                        />
                    </Logo>
                </AnimationContainer>

                <FlexItem className="navbar-hidden-links flex-end">
                    <NavbarLink to="/activities/canyoning">
                        {text.links[3]} <div />
                    </NavbarLink>
                    <NavbarLink to="/activities/hiking">
                        {text.links[4]} <div />
                    </NavbarLink>
                    <NavbarLink to="/activities/biking">
                        {text.links[5]} <div />
                    </NavbarLink>
                    <NavbarLink to="/activities/coasteering">
                        {text.links[6]} <div />
                    </NavbarLink>
                    <NavbarLink to="/activities/jeep">
                        {text.links[7]} <div />
                    </NavbarLink>
                </FlexItem>

                <MobileContainer>
                    <Row
                        type="flex"
                        align="middle"
                        className="navbar-hidden-menu"
                    >
                        <OrderButton onClick={() => handleVisibility(true)}>
                            <AnimationContainer
                                animateIn="fadeInDown"
                                offset={0}
                            >
                                <span>{text.button}</span>
                                <img
                                    src="/image/navbar/order.svg"
                                    alt="create reservation"
                                />
                            </AnimationContainer>
                        </OrderButton>
                        <Dropdown
                            overlayClassName="menu-dropdown"
                            overlay={menu}
                            placement="bottom"
                        >
                            <MenuButton>
                                <img src="/image/navbar/menu.svg" alt="menu" />
                            </MenuButton>
                        </Dropdown>
                    </Row>
                </MobileContainer>
            </Content>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};
export default connect(mapStateToProps, null)(Navbar);
