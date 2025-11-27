
import { Input, Checkbox, Select, InputNumber, DatePicker, Cascader, Radio } from 'antd';
import styled, { css } from "styled-components";
import CountryPhoneInput from 'antd-country-phone-input';
import { dimensions } from '../../../helper';

export const containerCommonStyle = css`
    width: 100%;
    max-width: ${dimensions.custom};
    margin: 110px auto;
    
    @media (max-width: ${dimensions.custom}) {
        padding: 20px;
        box-sizing: border-box;
    }

`;

export const primaryButtonStyle = css`
    box-sizing: border-box;
    cursor: pointer;
    background: white;
    padding: 3px 20px 3px 3px;
    border-radius: 20px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border: 2px solid ${({ theme }) => theme.primary};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .circle {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: white;
        transition: 0.4s;
        background: ${({ theme }) => theme.primary};
    }

    &:hover {
        .circle {
            background: ${({ theme }) => theme.primaryHover};
        }
    }
`;

export const phoneButtonStyle = css`
    background-color: transparent;
    cursor: pointer;
    border: 0px;
    color: ${({ theme }) => theme.primary};
`;
export const Title = styled.h2`
    color: inherit;
    text-align: ${props => props.center ? "center" : "left"};
    margin: 0px auto;
    margin-bottom: ${props => props.center ? "100px" : "0px"};
    width: ${props => props.center ? "60%" : "100%"};;
    text-transform: capitalize;
    font-family: "Russo One", sans-serif;
    font-size: clamp(28px, 4vw, 46px);
    line-height: 100%;

    @media (max-width: ${dimensions.lg}) {
        width: ${props => props.center ? "70%" : "100%"};;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    span {
        color: ${({ theme }) => theme.primary};
    }
`;


export const secundaryButtonStyle = css`
    ${primaryButtonStyle}
    
    background: rgb(255, 254, 239);
    color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};

`;

export const baseInputStyles = css`
    width: 100%;
    margin: 10px 0px;
    border: none;
    border-bottom: 1px solid #cfcfcf;
    background: transparent !important;
    color: #ffffff;

    .ant-input-status-error{
        background: transparent     !important;  
    }

    &:focus,
    &:active, &:hover {
        outline: none;
        border: none !important;
        border-bottom: 1px solid white !important;
        appearance: none;
        box-shadow: none;
    }

    &::placeholder {
        color: #b1b1b1;
    }

    color: ${props => props.colored ? "black" : "white"};
    &:focus,
    &:active, &:hover {
        border-color: ${props => props.colored ? "#777 !important" : "white"};
    }
`;

export const CustomCascader = styled(Cascader)`
    ${baseInputStyles}    

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

        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector{
            border-bottom: 1px solid white !important;
        }   
    }

    svg {
        color: white;
    }
`;

export const CustomSelect = styled(Select)`
    ${baseInputStyles}    

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

        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector{
            border-bottom: 1px solid white !important;
        }   
    }

    svg {
        color: white;
    }
`;

export const CustomPhoneSelect = styled(CountryPhoneInput)`
    ${baseInputStyles}    

    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    .ant-input-lg {
        color: white;
    }

    .ant-select-selector, .ant-input {
        background-color: transparent !important;
        padding-left: 0px !important;

        &::placeholder {
            color: #b1b1b1;
        }
    }

    .ant-select-selection-item {
        color: #b1b1b1;
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;
    }

    .ant-select-arrow {
        color: white;
    }
`;


export const CustomDatePicker = styled(DatePicker)`
    ${baseInputStyles} 
      
    .ant-picker-input > input {
        color: #ffffff;
    } 
    
    .ant-picker-focused:not(.ant-picker-disabled).ant-picker:not(.ant-picker-customize-input) .ant-picker-input, .ant-picker-input {
        border: none !important;
        box-shadow: none !important;
        
    }

    .ant-picker-input, .ant-picker {
        background-color: transparent !important;
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

        .ant-picker-focused:not(.ant-picker-disabled).ant-picker:not(.ant-picker-customize-input) .ant-picker-input, .ant-picker-input{
            border: none !important;
        }   
    }

    svg {
        color: white;
    }
`;


export const CustomInput = styled(Input)`
    ${baseInputStyles}

    color: ${props => props.light ? "black" : "white"};

    
`;

export const CustomSearch = styled(Input.Search)`
    ${baseInputStyles}

    color: ${props => props.light ? "black" : "white"};
    .ant-input, .ant-input-group-addon {
        border: 0px;
        background-color: transparent;
        color: white;
    }

    .ant-input-search-button {
        border: 1px solid white;
        background-color: transparent !important;
    }

    .anticon-search {
        color: white;
    }
    
`;

export const CustomTextArea = styled(Input.TextArea)`
    ${baseInputStyles}

    color: ${props => props.light ? "black" : "white"};

    .ant-input {
        border: 0px;
        background-color: transparent;
    }
`;


export const CustomInputNumber = styled(InputNumber)`
    ${baseInputStyles}    

    color: ${props => props.light ? "black" : "white"};

    .ant-input-number-focused {
        border: 0px;
        outline: 0px;
        box-shadow: none;
    }
`;


export const CustomCheckbox = styled(Checkbox)`
    color: #d6d6d6;

    .ant-checkbox-inner {
        background: transparent
    }

    .ant-checkbox-checked, .ant-checkbox-inner {
        border-color: white !important;
    }

    .ant-checkbox-checked,.ant-checkbox  {
        border-color: white;

        &:after {
            border-color: white !important;
        }
    }

    &:focus,
    &:active, &:hover {

        .ant-checkbox-inner, .ant-checkbox-checked  {
            border-color: white;
        }
        
    }
`;


export const CustomRadio = styled(Radio.Group)`
    /* ${baseInputStyles}     */

    /* color: ${props => props.light ? "black" : "white"}; */

    label {
        border: 0px;
    }

    .ant-radio-button-checked {
        background-color: #1d530c;
        border-color: #1d530c;
    }
`;
