import { Collapse } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';

const { Panel } = Collapse;

const Container = styled.section`
    width: 100%;
    position: relative;
    background: ${props => props.background};
    box-sizing: border-box;
    padding: 50px 0px;

    @media (max-width: ${dimensions.md}) {
        padding: 20px;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
`;


const Info = styled.div`
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    h2 {
        font-size: clamp(28px, 3vw, 36px);
        font-family: 'Playfair Display', serif;
        font-weight: bold;
    }
`;


const Accordion = styled(Collapse)`
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 20px 0px;
    }

    .ant-collapse-item, .ant-collapse-item:last-child {
        background-color: white;
        margin-bottom: 10px;

        span {
            position: relative;
            z-index: 3;
        }
    }
    .ant-collapse-header {
        
        font-size: 14px;
        padding: 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            font-size: 12px;
            padding: 0px;
        }
    }

    .ant-collapse-content-box {
        p {
            font-size: 12px;
            text-align: justify;

            @media (max-width: ${dimensions.md}) {
                font-size: 12px;
            }
        }
    }

    
`;

function SimplifiedFaq({ theme, text, hasBackground = true }) {
    return (
        <Container background={hasBackground && theme.primaryBackground}>
            <Content>
                <Info>
                    <h2>{text.title}</h2>
                </Info>

                <Accordion ghost>
                    {text.questions.map((item, iIndex) => (
                        <Panel header={item.question} key={iIndex}>
                            {item.answer.map((answer, aIndex) => (
                                <p key={"answer-" + "iIndex-" + aIndex}>{answer}</p>
                            ))}
                        </Panel>
                    ))}
                </Accordion>
            </Content>
        </Container>
    )
}

export default withTheme(SimplifiedFaq)