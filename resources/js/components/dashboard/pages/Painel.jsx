import Row from "antd/es/row";
import Col from "antd/es/col";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import { dimensions } from "../../../helper";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    flex: 1;
    max-width: 1600px;
    width: 90%;
    margin: auto;

    h1 {
        text-align: center;
        font-size: 2em;
        text-align: center;
        padding: 50px 0;
    }
`;

const CardContent = styled(Link)`
    background: white;
    width: calc(33% - 20px);
    padding: 50px 20px;
    text-align: center;
    min-width: 200px;
    border-radius: 12px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;

    @media (max-width: ${dimensions.sm}) {
        margin: 10px 0;
    }

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
    }

    img {
        width: 80%;
        object-fit: cover;
        margin: auto;
        display: block;
    }

    p {
        font-weight: bold;
        margin: 15px auto;
        font-size: 1.2em;
        color: #222222;
    }
`;

const Content = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
`;

const CardContainer = ({ img, text, to }) => (
    <CardContent to={to}>
        <img src={img} alt="iPhone icon" />
        <p className="card-text">{text}</p>
    </CardContent>
);

function Painel() {
    return (
        <Container>
            <h1>Bem vindo de volta ao painel de controlo</h1>
            <Content>
                <CardContainer
                    img="/icon/dashboard/reservation.svg"
                    text="Listagem de reservas"
                    to="/painel/reservas"
                />
                <CardContainer
                    img="/icon/dashboard/transfer.svg"
                    text="Transfers e Tours"
                    to="/painel/transfers"
                />
                <CardContainer
                    img="/icon/dashboard/contact.svg"
                    text="Mensagens de clientes"
                    to="/painel/contacto"
                />
                <CardContainer
                    img="/icon/dashboard/block.svg"
                    text="Datas bloqueadas"
                    to="/painel/bloqueado"
                />
                <CardContainer
                    img="/icon/dashboard/blog.svg"
                    text="Blog Posts"
                    to="/painel/blog"
                />
                <CardContainer
                    img="/icon/dashboard/newsletter.svg"
                    text="Newsletter"
                    to="/painel/newsletter"
                />
            </Content>
        </Container>
    );
}

export default Painel;
