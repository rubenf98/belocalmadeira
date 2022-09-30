import { Row, Col } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';
import { handleForm } from "../../../redux/application/actions";
import { connect } from "react-redux";


const Container = styled.section`
    width: 100%;
    position: relative;
    background: ${props => props.background};
    
`;

const Content = styled(Col)`
    width: 100%;
    box-sizing: border-box;
    padding: 50px 20px 100px 20px;
    box-sizing: border-box;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const OffsetBackground = styled.div`
    background: ${props => props.background};
    position: absolute;
    width: 100%;
    height: 250px;
    top: 0;

    @media (max-width: ${dimensions.md}) {
        height: 150px;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px 0px 0px 0px;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin-top: 30px;
    }

    p {
        margin: 0px;
        font-size: 16px;
        box-sizing: border-box;
        margin-right: 50px;

        @media (max-width: ${dimensions.md}) {
            font-size: 14px;
            margin-right: 20px;
        }
    }
    
    div {
        font-size: 80px;
        font-weight: bold;
        line-height: 0px;
        font-family: 'Playfair Display', serif;

        span {
            font-size: 27px;
        }
        
        @media (max-width: ${dimensions.md}) {
            font-size: 60px;
        }        
    }
    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:2 ;
    padding: 0px 0px 0px 60px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        display: none;
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
    margin-top: 10px;

    &:hover {
        background: ${props => props.backgroundHover};
    } 
`;

function Family({ theme, text, handleForm }) {
    return (
        <Container background={theme.primaryBackground}>
            <OffsetBackground background={theme.primary} />
            <Content>
                <Col xs={24} md={14}>
                    <img style={{ width: "100%" }} src="/image/homepage/family/1.jpg" />
                    <InfoContainer>
                        <p>{text.paragraph}</p>
                        <div>10<span>%</span></div>
                    </InfoContainer>
                    <Row type="flex">
                        <OrderButton onClick={() => handleForm(true)} color={theme.inverseText} background={theme.primary} backgroundHover={theme.primaryHover}>{text.button}</OrderButton>
                    </Row>
                </Col>
                <Col xs={0} md={10}>
                    <Image src="/image/homepage/family/2.jpg" />
                </Col>
            </Content>
        </Container>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility) => dispatch(handleForm(visibility)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(withTheme(Family));