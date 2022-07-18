import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background} !important;
        color: ${({ theme }) => theme.text} !important;
        position: relative;
    }

    .ant-select-dropdown {
        background-color: white !important; 

        .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
            background-color: #f5f5f5 !important;
        }
    }

    .primary-dropdown {
        background-color: #232E19 !important;

        .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
            background-color: rgba(0,0,0,.6) !important;
        }
    }
  
`