import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.text} !important;
    position: relative;
    
  }
  
  .ant-select-dropdown {
    background-color: #232E19 ;

    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background-color: rgba(0,0,0,.6) !important;
    }
  }

  .colored-dropdown {
    background-color: white;
    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      background-color: #f5f5f5 !important;
    }
  }

  .rc-virtual-list-holder {
    background-color: white;
  }
  
`