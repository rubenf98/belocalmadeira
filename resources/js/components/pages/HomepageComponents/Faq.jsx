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

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;
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
    }

    h2 {
        font-size: 40px;
        font-family: 'Playfair Display', serif;
    }

    p {
        font-size: 16px;
        color: #707070;
    }
`;


const Accordion = styled(Collapse)`
    width: 50%;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
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
        }
    }

    .ant-collapse-content-box {
        p {
            font-size: 12px;

            @media (max-width: ${dimensions.md}) {
                font-size: 12px;
            }
        }
    }

    
`;

const items = [
    { q: "O que está incluído nos tours?", a: ["O preço inclui a atividade, o transporte entre o alojamento e o local da atividade, o Seguro de Acidentes Pessoais e de responsabilidade (de acordo com a legislação portuguesa) e todo o material individual e coletivamente.", "No caso do Canyoning e do Coasteering os clientes deverão trazer (toalha, fato de banho)", "Esta incluído ainda as fotografias e vídeos da atividade!"] },
    { q: "Qual é a idade mínima e a máxima para participar numa atividade de Canyoning ou Coasteering?", a: ["Para as atividades de Canyoning ou Coasteering, a idade mínima é de 7 anos. A idade máxima é de 75 anos."] },
    { q: "E se eu não me sentir confortável para saltar?", a: ["Os saltos não são obrigatórios e temos sempre alternativas (podemos colocar uma corda para descer em rapel ou então por vezes temos um caminho alternativo ao longo do curso de água onde podemos ver os outros a saltar sem ter de o fazer."] },
    { q: "O que acontece em caso de mau tempo?", a: ["Em caso de mau tempo, a atividade poderá ser cancelada ou agendada para outra data em concreto. Relativamente ao cancelamento por questões meteorológicas é sempre decidido e avaliado pela nossa equipa."] },
    { q: "Como posso cancelar uma atividade?", a: ["Para o cancelamento de uma atividade é necessário que exista um aviso prévio, quer por e-mail ou telefone. Para ser reembolsado, o cancelamento deve ser feito em um período superior a 24 horas."] },
]

function Faq({ theme }) {
    return (
        <Container background={theme.primaryBackground}>
            <Content>
                <Info>
                    <h2>Frequently asked questions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium vel alias tempora soluta possimus repellat, corporis accusamus. Quod reprehenderit quia sed. Aliquam quo eos ipsum id placeat fugiat ad.</p>
                </Info>

                <Accordion ghost>
                    {items.map((item, iIndex) => (
                        <Panel header={item.q} key={iIndex}>
                            {item.a.map((answer, aIndex) => (
                                <p key={"answer-" + "iIndex-" + aIndex}>{answer}</p>
                            ))}
                        </Panel>
                    ))}
                </Accordion>
            </Content>
        </Container>
    )
}

export default withTheme(Faq)