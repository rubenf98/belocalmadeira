import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { dimensions } from "../../helper";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 20px;
    left: 0;
    background-color: ${(props) => props.background};
    display: ${(props) => (props.visible ? "flex" : "none")};
    z-index: 101;
    color: white;
`;

const Content = styled.div`
    width: 90%;
    margin: auto;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .image {
        img {
            width: 15px;
            cursor: pointer;
        }

        @media (max-width: ${dimensions.md}) {
            flex: 1;
            order: 1;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 5px;
            width: 10px;
            width: 100%;

            img {
                width: 10px;
            }
        }
    }

    .text {
        p {
            font-size: 16px;
            margin: 0px;
            font-weight: 300;
        }

        @media (max-width: ${dimensions.md}) {
            order: 2;
            width: 100%;
            p {
                font-size: 14px;
            }
        }
    }
`;

function Flyer({ theme }) {
    const [visible, setVisible] = useState(true);
    return (
        <Container visible={visible} background={theme.primary}>
            <Content>
                <div className="column text">
                    {localStorage.getItem("language") == "en" ? (
                        <p>
                            Our activities sell out quickly, so book early in
                            order to assure the day you want.
                        </p>
                    ) : (
                        <p>
                            As nossas atividades esgotam rápido, por isso
                            reserve a sua com antecedência para assegurar o dia
                            que pretende.
                        </p>
                    )}
                    {localStorage.getItem("language") == "en" ? (
                        <p>
                            Enjoy 10% OFF for families on all tours with 4 or
                            more participants!
                        </p>
                    ) : (
                        <p>
                            Aproveite 10% de desconto familiar em todas as
                            reservas com 4 ou mais participantes!
                        </p>
                    )}
                </div>
                <div className="column image">
                    <img
                        onClick={() => setVisible(false)}
                        src="/icon/close.svg"
                        alt="close icon"
                    ></img>
                </div>
            </Content>
        </Container>
    );
}

export default withTheme(Flyer);
