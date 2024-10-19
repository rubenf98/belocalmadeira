import { Drawer, Row } from 'antd'
import React from 'react'
import styled from "styled-components";
import { dimensions } from "../../../../helper";
import moment from "moment";

const Container = styled(Drawer)`
.ant-drawer-content{
    background: rgb(255,255,255);
    
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li  {
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
}`;

const Participant = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.1);
    padding: 0px 10px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .details-container{
        
        flex: 1;

        .details {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            
            div {
                width: 25%;

                img {
                    width: 20px;
                    margin-right: 8px;
                }
                
            }
        }

        
    }

    .number{
        color: #8a8a8a;
        font-size: 50px;
        font-weight: bold;
        margin: 0px;
        margin-right: 20px;
    }

    .gender{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 12px;
    }
`;

function DrawerContainer({ visible, onClose, record }) {

    return (
        <div>
            <Container width={600} placement="right" onClose={onClose} visible={visible}>
                {Object.keys(record).length &&
                    <div>
                        <h1>Resumo de Reserva</h1>
                        <ul>
                            <li className="details"><span>Nome</span> {record.name}</li>
                            <li className="details"><span>Email</span> {record.email}</li>
                            <li className="details"><span>Telemóvel</span> {record.phone}</li>
                            <li className="details"><span>Data</span> {record.date}</li>
                            <li className="details"><span>Trajetória</span> {record.trajectory}</li>
                            <li className="details"><span>Passageiros</span> {record.passengers}</li>

                        </ul>
                        {record.return_date &&
                            <div>
                                <h2>Retorno</h2>
                                <ul>
                                    <li className="details"><span>Data</span> {record.return_date}</li>
                                    <li className="details"><span>Trajetória</span> {record.trajectory}</li>
                                </ul>
                            </div>
                        }
                        <br />
                        <div>
                            <ul>
                                <li className="details"><span>Total</span>{record.price}€</li>                            </ul>
                        </div>

                    </div>}


            </Container>
        </div>
    )
}

export default DrawerContainer
