import React from "react";
import styled from "styled-components";
import { dimensions } from "../../helper";
import { containerCommonStyle } from "../pages/Form/styles";

const Header = styled.div`
    ${containerCommonStyle}
    height: calc(60vh);
    background: url("/image/background.webp");
    background: url("/image/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${dimensions.lg}) {
        margin-bottom: 80px;
    }

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 50px;
    }

    div {
        z-index: 1;
        h1 {
            font-family: "Russo One", sans-serif;
            font-size: 60px;
            color: white;
            text-align: center;

            @media (max-width: ${dimensions.md}) {
                font-size: 40px;
            }
        }

        p {
            font-size: 18px;
            color: white;
            text-align: center;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }
    }
`;

function PageHeader({ title, subtitle }) {
    return (
        <Header>
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </Header>
    );
}

export default PageHeader;
