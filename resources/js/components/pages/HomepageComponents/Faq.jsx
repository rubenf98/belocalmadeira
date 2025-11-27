import { Collapse } from "antd";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../../helper";
import { Title } from "../Form/styles";

const { Panel } = Collapse;

const Container = styled.section`
    width: 100%;
    position: relative;
    background: ${(props) => props.background};
    box-sizing: border-box;
    padding: 100px 0px 100px 0px;

    @media (max-width: ${dimensions.md}) {
        padding: 20px;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Info = styled.div`
    width: 50%;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 20px 0px;
    }

    p {
        font-size: 16px;
        opacity: 0.7;
    }
`;

const Accordion = styled(Collapse)`
    width: 50%;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 20px 0px;
    }

    .ant-collapse-item,
    .ant-collapse-item:last-child {
        background-color: white;
        margin-bottom: 10px;
        border-radius: 10px;

        span {
            position: relative;
            z-index: 3;
        }
    }
    .ant-collapse-header {
        font-size: 16px;
        padding: 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            font-size: 14px;
            padding: 0px;
        }
    }

    .ant-collapse-content-box {
        p {
            font-size: 14px;
            text-align: justify;

            @media (max-width: ${dimensions.md}) {
                font-size: 12px;
            }
        }
    }
`;

function Faq({ theme, text, hasBackground = true }) {
    return (
        <Container background={hasBackground && theme.primaryBackground}>
            <Content>
                <Info>
                    <Title>{text.title}</Title>
                    <p>{text.subtitle}</p>

                    <p>{text.terms}</p>
                </Info>

                <Accordion ghost>
                    {text.questions.map((item, iIndex) => (
                        <Panel header={item.question} key={iIndex}>
                            {item.answer.map((answer, aIndex) => (
                                <p key={"answer-" + "iIndex-" + aIndex}>
                                    {answer}
                                </p>
                            ))}
                        </Panel>
                    ))}
                </Accordion>
            </Content>
        </Container>
    );
}

export default withTheme(Faq);
