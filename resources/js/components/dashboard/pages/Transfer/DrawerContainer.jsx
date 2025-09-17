import { Drawer, Row } from "antd";
import styled from "styled-components";

const Container = styled(Drawer)`
    .ant-drawer-content {
        background: rgb(255, 255, 255);

        ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;

            li {
                color: #535353;

                span {
                    font-weight: bold;
                    display: inline;
                }
            }

            .details {
                width: 50%;
                margin: 5px 0px;

                span {
                    font-weight: bold;
                    display: block;
                }
            }
        }
    }
`;

function DrawerContainer({ visible, onClose, record }) {
    return (
        <div>
            <Container
                width={600}
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                {Object.keys(record).length && (
                    <div>
                        <h1>Resumo de Reserva</h1>
                        <ul>
                            <li className="details">
                                <span>Nome</span> {record.name}
                            </li>
                            <li className="details">
                                <span>Email</span> {record.email}
                            </li>
                            <li className="details">
                                <span>Telemóvel</span> {record.phone}
                            </li>
                            <li className="details">
                                <span>Data</span> {record.date}
                            </li>
                            <li className="details">
                                <span>Trajetória</span> {record.trajectory}
                            </li>
                            <li className="details">
                                <span>Passageiros</span> {record.passengers}
                            </li>
                        </ul>
                        {record.return_date && (
                            <div>
                                <h2>Retorno</h2>
                                <ul>
                                    <li className="details">
                                        <span>Data</span> {record.return_date}
                                    </li>
                                    <li className="details">
                                        <span>Trajetória</span>{" "}
                                        {record.trajectory}
                                    </li>
                                </ul>
                            </div>
                        )}
                        <br />
                        <div>
                            <ul>
                                <li className="details">
                                    <span>Total</span>
                                    {record.price}€
                                </li>{" "}
                            </ul>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default DrawerContainer;
