import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext, withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { dimensions } from "../../helper";
import { Select, Drawer, Dropdown, Menu, Row } from "antd";
import AnimationContainer from "./AnimationContainer";

const Container = styled.div`
    background: ${(props) => props.background};
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
`;

const Content = styled.div`
    height: 60px;
    background: transparent;
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    transition: 0.5s ease-in-out;
    box-sizing: border-box;
    align-items: center;
    margin-top: 15px;

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

    .navbar-hidden-menu {
        @media (min-width: ${dimensions.md}) {
            display: none;
        }
    }
`;

const FlexItem = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    @media (max-width: ${dimensions.md}) {
        flex: none;
    }
`;

const Logo = styled(Link)`
    margin: auto;
    color: white;
    text-decoration: none;
    font-weight: bold;

    img {
        height: 60px;

        @media (max-width: ${dimensions.md}) {
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
    background: ${(props) => props.background};
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    transition: 0.4s;
    margin-left: auto;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    background-size: 110%;
    text-transform: capitalize;
    color: ${(props) => props.color};
    font-weight: bold;

    @media (max-width: ${dimensions.md}) {
        font-size: 14px;
        padding: 8px 16px 8px 16px;
        margin-right: 10px;
        border: 1px solid white;
    }

    &:hover {
        background: ${(props) => props.backgroundHover};

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
    display: block;
    text-align: center;
    font-size: 15px;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    padding: 25px 10px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.color};

    @media (max-width: ${dimensions.lg}) {
        padding: 15px 10px;
    }

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;
        color: ${(props) => props.color};
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

const Activities = styled.div`
    display: block;
    font-size: 15px;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;

    &:hover {
        color: #fff;
    }
`;

const MenuItem = styled(Menu.Item)`
    padding: 10px 25px;
    box-sizing: border-box;
    padding-left: ${(props) => (props.main ? "20px" : "40px")};
    color: ${(props) => props.color};
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

function Navbar({ handleVisibility, theme }) {
    const [openSelect, setOpenSelect] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);
    const themeContext = useContext(ThemeContext);
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/links");

    const menu = (
        <Menu
            style={{
                width: "90vw",
                transform: "translate(-50%, 0)",
                left: "50%",
            }}
        >
            <MenuItem color={theme.primaryLight} main>
                <Link to="/">home</Link>
            </MenuItem>
            <MenuItem color={theme.primaryLight} main>
                Activities
            </MenuItem>
            <MenuItem color={theme.primaryLight}>
                <Link to="/activities/canyoning">canyoning</Link>
            </MenuItem>
            <MenuItem color={theme.primaryLight}>
                <Link to="/activities/biking">biking</Link>
            </MenuItem>
            <MenuItem color={theme.primaryLight}>
                <Link to="/activities/coasteering">coasteering</Link>
            </MenuItem>
            <MenuItem color={theme.primaryLight}>
                <Link to="/activities/hiking">hiking</Link>
            </MenuItem>
            <MenuItem color={theme.primaryLight} main>
                <Link to="/about">about</Link>
            </MenuItem>
        </Menu>
    );

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY / window.innerHeight > 0.6) {
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
        <Container background={theme.primary} hasBackground={hasBackground}>
            <Content>
                <AnimationContainer animateIn="fadeInDown" offset={0}>
                    <Logo to="/">
                        <img
                            src="/image/logo_white.png"
                            alt="be local madeira white logo"
                        />
                    </Logo>
                </AnimationContainer>

                <FlexItem className="navbar-hidden-links">
                    <MenuContainer>
                        <AnimationContainer animateIn="fadeInDown" offset={0}>
                            <NavbarLink
                                color={themeContext.inverseText}
                                to="/about"
                            >
                                {text.links[0]} <div />
                            </NavbarLink>
                        </AnimationContainer>
                        <AnimationContainer animateIn="fadeInDown" offset={0}>
                            <NavbarLink
                                color={themeContext.inverseText}
                                to="/contact"
                            >
                                {text.links[1]} <div />
                            </NavbarLink>
                        </AnimationContainer>

                        <AnimationContainer animateIn="fadeInDown" offset={0}>
                            <CustomSelect
                                open={openSelect}
                                onMouseLeave={() => setOpenSelect(false)}
                                onMouseEnter={() => setOpenSelect(true)}
                                placeholder={text.links[2]}
                                value="activities"
                                dropdownClassName="primary-dropdown"
                            >
                                <Select.Option
                                    style={{ display: "none" }}
                                    value="activities"
                                >
                                    <Activities>{text.links[2]}</Activities>
                                </Select.Option>
                                <Select.Option value="canyoning">
                                    <SelectLink to="/activities/canyoning">
                                        {text.links[3]}
                                    </SelectLink>
                                </Select.Option>
                                <Select.Option value="hiking">
                                    <SelectLink to="/activities/hiking">
                                        {text.links[4]}
                                    </SelectLink>
                                </Select.Option>
                                <Select.Option value="biking">
                                    <SelectLink to="/activities/biking">
                                        {text.links[5]}
                                    </SelectLink>
                                </Select.Option>
                                <Select.Option value="coastering">
                                    <SelectLink to="/activities/coasteering">
                                        {text.links[6]}
                                    </SelectLink>
                                </Select.Option>
                            </CustomSelect>
                            <div />
                        </AnimationContainer>

                        <OrderButton
                            onClick={() => handleVisibility(true)}
                            color={themeContext.inverseText}
                            background={themeContext.primary}
                            backgroundHover={themeContext.primaryHover}
                        >
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
                    </MenuContainer>
                </FlexItem>

                <MobileContainer>
                    <AnimationContainer animateIn="fadeInDown" offset={0}>
                        <Row
                            type="flex"
                            align="middle"
                            className="navbar-hidden-menu"
                        >
                            <OrderButton
                                onClick={() => handleVisibility(true)}
                                color={themeContext.inverseText}
                                background={themeContext.primary}
                                backgroundHover={themeContext.primaryHover}
                            >
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
                                    <img
                                        src="/image/navbar/menu.svg"
                                        alt="menu"
                                    />
                                </MenuButton>
                            </Dropdown>
                        </Row>
                    </AnimationContainer>
                </MobileContainer>
            </Content>
        </Container>
    );
}

export default withTheme(Navbar);
