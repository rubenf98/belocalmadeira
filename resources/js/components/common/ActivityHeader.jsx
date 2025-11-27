import React from "react";
import styled from "styled-components";
import { dimensions } from "../../helper";
import { containerCommonStyle } from "../pages/Form/styles";

const Overlay = styled.div`
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, #000 0%, #38383830 100%);
    opacity: 0.7;
    border-radius: 100px;
`;

const Header = styled.div`
    ${containerCommonStyle}
    height: calc(60vh);
    border-radius: 100px;
    background: url("/images/background.webp");
    background: url("/images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 150px;

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 80px;
    }

    .title-container {
        z-index: 1;
        margin-top: calc(30vh - 40px);

        h1 {
            font-family: "Russo One", sans-serif;
            font-size: 9vw;
            line-height: 80px;
            color: white;
            text-align: center;
            text-transform: uppercase;
        }
    }
`;

function ActivityHeader({ title }) {
    return (
        <Header>
            <Overlay />
            <div className="title-container">
                <h1>{title}</h1>
            </div>
        </Header>
    );
}

export default ActivityHeader;
