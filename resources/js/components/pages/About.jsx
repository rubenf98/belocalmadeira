import React from 'react'
import styled, { withTheme } from "styled-components";
import { Col, Row } from 'antd';
import { dimensions, maxWidth } from '../../helper';
import PageHeader from '../common/PageHeader';

const Container = styled.div`
    //
`;

const PartnerContainer = styled(Row)`
    width: 100%;
    max-width: ${maxWidth};
    margin: 200px auto;

    @media (max-width: ${dimensions.md}) {
            margin: 100px auto;
    }

    img {
       width: 15%;
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

const InfoContainer = styled(Row)`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Column = styled(Col)`
    padding: 15px;
    box-sizing: border-box;

    h2 {
        font-family: 'Playfair Display', serif;
        font-size: 40px;
    }

    p {
        color: ${props => props.text};
        font-size: 18px;
    }
`;


function About({ theme }) {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/about");

    return (
        <Container>
            <PageHeader title={text.title} subtitle={text.subtitle} />
            <InfoContainer>
                <Column text={theme.lightText} xs={24} md={10}>
                    <h2>{text.section.title}</h2>
                    {text.section.items.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </Column>
                <Column xs={24} md={14}>
                    <Row type="flex" gutter={20}>
                        <Col xs={8} md={8}>
                            <img src="/image/about/about1.jpg" alt="" />
                        </Col>
                        <Col xs={16} md={16}>
                            <Row gutter={20} style={{ marginBottom: "20px" }}>
                                <Col xs={12} md={12}>
                                    <img src="/image/about/about2.jpg" alt="" />
                                </Col>
                                <Col xs={12} md={12}>
                                    <img src="/image/about/leaf.svg" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <img src="/image/about/about3.jpg" alt="" />
                            </Row>
                        </Col>
                    </Row>
                </Column>
            </InfoContainer>

            <PartnerContainer type="flex" justify="space-around" align="middle">
                <img loading="lazy" src="/image/about/fastrope.png" alt="fastrope" />
                <img loading="lazy" src="/image/about/tripadvisor.png" alt="tripadvisor" />
                <img loading="lazy" src="/image/about/movigo.svg" alt="movigo" />
                <img loading="lazy" src="/image/about/espacomilenio.png" alt="espacomilenio" />
                <img style={{ filter: "contrast(1) grayscale(1)" }} loading="lazy" src="/image/about/liveinmadeira.png" alt="liveinmadeira" />
            </PartnerContainer>
        </Container>
    )
}

export default withTheme(About)
