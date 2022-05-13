import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions } from '../../helper';
import { baseInputStyles } from '../pages/Form/styles';
import { Select } from 'antd';

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

function Navbar({ handleVisibility }) {
    const [openSelect, setOpenSelect] = useState(false)
    const [activities, setActivities] = useState("activities")
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <Container>

                <FlexItem>
                    <MenuContainer>
                        <NavbarLink color={themeContext.inverseText} to="/about">about <div /></NavbarLink>
                        <NavbarLink color={themeContext.inverseText} to="/contact">contact <div /></NavbarLink>

                        <CustomSelect
                            open={openSelect}
                            onMouseLeave={() => setOpenSelect(false)}
                            onMouseEnter={() => setOpenSelect(true)}
                            placeholder="Activities"
                            value={activities}
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
                                <SelectLink to="/activities/coastering">coastering</SelectLink>
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

            </Container>
        </div>
    )
}

export default Navbar
