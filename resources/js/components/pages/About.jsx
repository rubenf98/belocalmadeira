import React from 'react'
import styled, { withTheme } from "styled-components";
import Team from './About/Team';
import History from './About/History';
import Services from './About/Services';
import { Col, Row } from 'antd';
import { maxWidth } from '../../helper';

const Container = styled.div`
    //
`;

const PartnerContainer = styled(Row)`
    width: 100%;
    max-width: ${maxWidth};
    margin: 200px auto;

    img {
       width: 20%;
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

const Header = styled.div`
    height: calc(60vh);
    background: url("/image/2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        z-index: 1;
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 60px;
            color: white;
            text-align: center;
        }

        p {
            font-size: 18px;
            color: white;
            text-align: center;
        }
    }
`;

const Overlay = styled.div`
  z-index: 1;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, #000 0%, #38383830 100%);
  opacity: 0.7;

`;

function About({ theme }) {
    return (
        <Container>
            <Header >
                <Overlay />
                <div>
                    <h1>About Us</h1>
                    <p>Fowl living for lights our ears bearing to heaven signs</p>
                </div>
            </Header>
            <InfoContainer>
                <Column text={theme.lightText} xs={24} md={10}>
                    <h2>Lorem, ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nulla dolorem aliquid consectetur, autem, beatae officiis sunt vel, quo et nam ipsam esse eius modi. Libero cupiditate architecto illum sunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla eligendi vel id labore doloribus consectetur.</p>
                </Column>
                <Column xs={24} md={14}>
                    <Row type="flex" gutter={20}>
                        <Col xs={24} md={8}>
                            <img src="/image/about/biking.jpg" alt="" />
                        </Col>
                        <Col xs={24} md={16}>
                            <Row gutter={20} style={{ marginBottom: "20px" }}>
                                <Col xs={24} md={12}>
                                    <img src="/image/about/biking.jpg" alt="" />
                                </Col>
                                <Col xs={24} md={12}>
                                    <img src="/image/about/leaf.svg" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <img src="/image/about/instagram7.jpg" alt="" />
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
