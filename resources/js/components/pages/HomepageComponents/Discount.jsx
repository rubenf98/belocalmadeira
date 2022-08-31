import { Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';

const Container = styled.section`
    width: 100%;
    position: relative;
    background: ${props => props.background};
`;

const Content = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 0px 100px 0px;
    box-sizing: border-box;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px 100px 20px;
    }
`;

const OffsetBackground = styled.div`
    background: ${props => props.background};
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
`;

const InfoContainer = styled.div`
    width: 50%;
    padding-right: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        order: 2;
    }
    
    h2 {
        margin: 0px auto;
        font-size: 40px;
        text-transform: capitalize;
        
        @media (max-width: ${dimensions.md}) {
            font-size: 30px;
            width: 100%;
            text-align: center;
            margin: 30px 0px;
        }

        @media (max-width: ${dimensions.sm}) {
            font-size: 26px;
            width: 100%;
        }

        span {
            font-weight: bold;
            font-family: 'Merienda One', cursive;;
        }
    }
    
`;

const Image = styled.img`
    width: 50%;
    z-index:2 ;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        order: 1;
    }
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${props => props.background};
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    transition: .4s;
    border-radius: 4px;
    background-size: 110%;
    text-transform: capitalize;
    color: ${props => props.color};
    font-weight: bold;
    margin-top: 30px;

    &:hover {
        background: ${props => props.backgroundHover};

        @media(max-width: ${dimensions.md}) {
            background: transparent;
        }
    }
    
`;

function Discount({ theme }) {
    return (
        <Container background={theme.primaryBackground}>
            <OffsetBackground background={theme.primary} />
            <Content >
                <InfoContainer>
                    <h2>Book your activity now and get <span>5%</span> exclusive online discount, or enjoy our <span>10%</span> offer for families!</h2>
                    <Row type="flex">
                        <OrderButton color={theme.inverseText} background={theme.primary} backgroundHover={theme.primaryHover}>Book now</OrderButton>
                    </Row>

                </InfoContainer>
                <Image src="/image/homepage/family.jpg" />
            </Content>

        </Container>
    )
}

export default withTheme(Discount)