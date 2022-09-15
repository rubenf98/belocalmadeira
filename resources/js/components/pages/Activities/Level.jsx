import React from 'react'
import { useParams } from "react-router-dom";
import PageHeader from '../../common/PageHeader';
import styled, { withTheme } from 'styled-components'
import { dimensions, maxWidth } from '../../../helper';
import Faq from '../HomepageComponents/Faq';
import { Col, Row } from 'antd';

const Image = styled.img`
    max-width: 720px;
    width: 100%;
    margin: 50px auto;
    display: block;
    padding: 0px 20px;
    box-sizing: border-box;
    max-height: ${props => props.height + "px"};
    object-fit: cover;
`;


const Container = styled.div`
    max-width: calc(${maxWidth} - 200px);
    width: 100%;
    margin: auto;
    padding: 0px 20px 50px 20px;
    box-sizing: border-box;
    
    @media (max-width: ${dimensions.md}) {
        padding: 0px 0px 50px 0px;
    }
`;

const DetailsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    width: 90%;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 0px 20px;
    }

    div {
        width: 33%;
        padding: 0px 10px;
        box-sizing: border-box;
        
        
        @media (max-width: ${dimensions.md}) {
            &:first-child {
                width: 100%;
            }

            &:nth-child(2), &:nth-child(3) {
                width: 50%;
            }
            span {
                display: none;
            }
        }

        @media (max-width: ${dimensions.sm}) {
            &:nth-child(2), &:nth-child(3) {
                width: 100%;
            }
        }

        h4 {
            font-size: 28px;

            @media (max-width: ${dimensions.md}) {
                width: 100%;
            }
        }

        ul {
            margin: 0px;
        }

        li {
            opacity: .7;
            font-size: 16px;
        }
    } 
`;

const ParagraphContainer = styled.div`
    margin: 50px 0px;
    width: 100%;
    margin: auto;

    h2 {
        font-size: 40px;
        font-family: 'Playfair Display', serif;
    }

    p {
        font-size: 16px;
        opacity: .7;
    }

    h3 {
        font-size: 24px;
        text-align: center;
        margin: 0px;
    }

    h4 {
        opacity: .7;
        font-size: 14px;
        text-align: center;
        margin: 0px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;

        h3 {
            font-size: 18px;
            text-align: left;
        }

        h4 {
            text-align: left;
        }
    }

`;


function Level() {
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/activityCanyoning");
    const faqText = require('../../../assets/' + localStorage.getItem('language') + "/homepage");
    var { index } = useParams();

    return (
        <div>
            <PageHeader title={"Canyoning - " + text.levels.items[index].subtitle} subtitle={text.levels.subtitle} />
            <Container>
                <ParagraphContainer>
                    <h2>{text.levels.titles[0]} - {text.levels.items[index].subtitle}</h2>
                    <p>{text.levels.descriptions[index]}</p>
                    <p>{text.levels.items[index].paragraphs[0]}</p>
                    <Row style={{ margin: "20px 0px 40px 0px" }} type="flex" justify='space-between'>
                        {text.levels.details[index].map((detail, detailIndex) => (
                            <Col xs={12} md={12} lg={4} >
                                <h3>{detail}</h3>
                                <h4>{text.levels.fields[detailIndex]}</h4>
                            </Col>
                        ))}
                    </Row>
                </ParagraphContainer>
                <DetailsContainer>
                    <div>
                        <h4>{text.section}</h4>

                    </div>
                    <div>

                        <ul>
                            {text.includes.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                    <div>

                        <ul>
                            {text.activities.items.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                </DetailsContainer>


                <Image height={500} src={"/image/activities/levels/" + text.levels.items[index].images[0] + ".jpg"} />

                <ParagraphContainer>
                    <h2>{text.levels.titles[1]}</h2>

                    {text.levels.summary[index].map((summaryItem) => (
                        <p>{summaryItem}</p>
                    ))}
                </ParagraphContainer>

                <Row type="flex">
                    <Col xs={24} md={12}>
                        <Image height={700} src={"/image/activities/levels/" + text.levels.items[index].images[1] + ".jpg"} />
                    </Col>
                    <Col xs={0} md={12}>
                        <Image height={700} src={"/image/activities/levels/" + text.levels.items[index].images[2] + ".jpg"} />
                    </Col>
                </Row>

                <Faq hasBackground={false} text={faqText.text.faq} />

            </Container>
        </div>
    )
}

export default Level