import { Row } from "antd";
import React from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../../helper";
import { handleForm } from "../../../redux/application/actions";
import { connect } from "react-redux";

const Container = styled.section`
    width: 100vw;
    min-height: calc(100vh - 100px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${dimensions.md}) {
        min-height: calc(100vh - 70px);
    }
`;

const BlurredBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.6) blur(4px);
    transform: scale(1.1);

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    height: 60vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${dimensions.md}) {
        padding: 100px 20px;
        min-height: calc(100vh - 70px);
        height: 100%;
    }

    h2,
    h3,
    p {
        color: white;
        text-align: center;
        font-family: "Playfair Display", serif;
    }

    h2,
    h3 {
        font-size: 70px;
        font-weight: bold;
        margin-bottom: 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 42px;
        }
    }

    p {
        font-size: 32px;
        width: 70%;
        margin: 0px auto;

        @media (max-width: ${dimensions.md}) {
            font-size: 16px;
        }
    }

    h3 {
        padding: 0px 20px;
        box-sizing: border-box;
    }
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: none;
    filter: brightness(0.6);
    z-index: -1;
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${(props) => props.background};
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 4px;
    background-size: 110%;
    text-transform: capitalize;
    color: ${(props) => props.color};
    font-weight: bold;
    margin-top: 30px;

    &:hover {
        background: ${(props) => props.backgroundHover};

        @media (max-width: ${dimensions.md}) {
            background: transparent;
        }
    }
`;

const Line = styled.div`
    flex: 1;
    height: 3px;
    background-color: white;
`;

function Discount({ theme, text, handleForm }) {
    return (
        <Container background={theme.primaryBackground}>
            <BlurredBackground src="/image/homepage/discount_background.jpg" />
            <InfoContainer>
                <div>
                    <h2>{text.title}</h2>
                    <p>{text.paragraph}</p>
                    <Row type="flex" justify="center" align="middle">
                        <Line />
                        <h3>-10%</h3>
                        <Line />
                    </Row>

                    <Row type="flex" justify="center">
                        <OrderButton
                            color={theme.inverseText}
                            background={theme.primary}
                            backgroundHover={theme.primaryHover}
                            onClick={() => handleForm(true)}
                        >
                            {text.button}
                        </OrderButton>
                    </Row>
                </div>

                <Background src="/image/homepage/discount_background.jpg" />
            </InfoContainer>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility) => dispatch(handleForm(visibility)),
    };
};

export default connect(null, mapDispatchToProps)(withTheme(Discount));
