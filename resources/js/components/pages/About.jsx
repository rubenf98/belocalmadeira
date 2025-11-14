import React, { Suspense } from "react";
import styled, { withTheme } from "styled-components";
import { Col, Row } from "antd";
import { dimensions, maxWidth } from "../../helper";
import PageHeader from "../common/PageHeader";
import Faq from "./HomepageComponents/Faq";
import { containerCommonStyle } from "./Form/styles";

const Container = styled.div`
    margin-top: 150px;
`;

const PartnerContainer = styled(Row)`
    width: 100%;
    max-width: ${maxWidth};
    margin: 200px auto;

    @media (max-width: ${dimensions.md}) {
        margin: 100px auto;
    }

    img {
        width: 10%;
        max-width: 250px;
        filter: contrast(0);

        @media (max-width: ${dimensions.md}) {
            width: 30%;
            margin: 20px 0px;
        }

        @media (max-width: ${dimensions.sm}) {
            width: 40%;
        }
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    ${containerCommonStyle}
    display: flex;
    align-items: center;
    gap: 100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 80vh;
        border-radius: 20px;
        box-shadow: 0px 00px 10px 0px rgba(0, 0, 0, 0.3);
    }
`;

const Column = styled.div`
    width: 50%;
    h2 {
        font-size: clamp(40px, 5vw, 60px);
        line-height: 100%;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        text-align: justify;
    }
`;

function About({ theme }) {
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/about");

    const homepageText = require("../../assets/" +
        localStorage.getItem("language") +
        "/homepage");

    const AboutSection = React.lazy(() => import("./HomepageComponents/About"));

    return (
        <Container>
            <InfoContainer>
                <Column text={theme.lightText} xs={24} md={12}>
                    <h2>{text.section.title}</h2>
                    {text.section.items.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </Column>
                <Column xs={24} md={12}>
                    <img src="/image/about/about3.jpg" alt="" />
                </Column>
            </InfoContainer>
            <Suspense fallback={<div></div>}>
                <AboutSection text={homepageText.text.about} />
            </Suspense>
            <Faq text={homepageText.text.faq} />

            {/* <PartnerContainer type="flex" justify="space-around" align="middle">
                <img loading="lazy" src="/image/about/fastrope.png" alt="fastrope" />
                <img loading="lazy" src="/image/about/tripadvisor.png" alt="tripadvisor" />
                <img loading="lazy" src="/image/about/movigo.svg" alt="movigo" />
                <img loading="lazy" src="/image/about/espacomilenio.png" alt="espacomilenio" />
                <img style={{ filter: "contrast(1) grayscale(1)" }} loading="lazy" src="/image/about/liveinmadeira.png" alt="liveinmadeira" />
            </PartnerContainer> */}
        </Container>
    );
}

export default withTheme(About);
