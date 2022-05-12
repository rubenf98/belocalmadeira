import React from 'react'
import styled, { withTheme } from "styled-components";
import { Col, Row } from 'antd';
import { maxWidth } from '../../helper';
import PageHeader from '../common/PageHeader';

const Container = styled.div`
    //
`;

const PartnerContainer = styled(Row)`
    width: 100%;
    max-width: ${maxWidth};
    margin: 200px auto;

    img {
       width: 20%;
       max-width: 250px;
       filter: contrast(0);
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
    return (
        <Container>
            <PageHeader title="About Us" subtitle="Fowl living for lights our ears bearing to heaven signs" />
            <InfoContainer>
                <Column text={theme.lightText} xs={24} md={10}>
                    <h2>Lorem, ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nulla dolorem aliquid consectetur, autem, beatae officiis sunt vel, quo et nam ipsam esse eius modi. Libero cupiditate architecto illum sunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla eligendi vel id labore doloribus consectetur.</p>
                </Column>
                <Column xs={24} md={14}>
                    <Row type="flex" gutter={20}>
                        <Col xs={24} md={8}>
                            <img src="/image/about/about1.jpg" alt="" />
                        </Col>
                        <Col xs={24} md={16}>
                            <Row gutter={20} style={{ marginBottom: "20px" }}>
                                <Col xs={24} md={12}>
                                    <img src="/image/about/about2.jpg" alt="" />
                                </Col>
                                <Col xs={24} md={12}>
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
            </PartnerContainer>
        </Container>
    )
}

export default withTheme(About)
