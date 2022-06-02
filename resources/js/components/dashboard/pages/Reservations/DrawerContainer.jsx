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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        flex: 1;

        div {
            width: 25%;

            img {
                width: 20px;
                margin-right: 8px;
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

    function getActivityField() {
        var response = null;
        if (record.experienceable.activity_id) {
            response = record.experienceable.activity.name.pt + " (" + record.experienceable.name.pt + ")"
        } else {
            response = record.experienceable.name.pt
        }
        return response;
    }

    return (
        <div>
            <Container width={600} placement="right" onClose={onClose} visible={visible}>
                {Object.keys(record).length &&
                    <div>
                        <h1>Resumo de Reserva</h1>
                        <ul>
                            <li className="details"><span >Nome</span> {record.name}</li>
                            <li className="details"><span>Email</span> {record.email}</li>
                            <li className="details"><span>Telemóvel</span> {record.phone}</li>
                            <li className="details"><span>Morada</span> {record.address}</li>
                            <li className="details"><span>Privado</span> {record.private ? "Sim" : "Não"}</li>
                            <li className="details"><span>Data</span> {record.date}</li>
                            <li className="details"><span>Atividade</span> {getActivityField()}</li>
                        </ul>
                        <h2>Participantes: {record.people}</h2>

                        <Row type="flex" justify='space-between'>
                            {record.reservationRarticipants.map((participant, key) => (
                                <Participant key={key}>
                                    <div className='number'>{key < 10 && "0"}{key + 1}</div>
                                    <img className='gender' src={"/icon/" + participant.gender + ".svg"} />
                                    <div className='details-container'>
                                        <div>
                                            <img src="/icon/dashboard/age.svg" alt="age" />{moment().diff(participant.birthday, 'years', false)}anos
                                        </div>
                                        <div>
                                            <img src="/icon/dashboard/height.svg" alt="height" />{participant.height}cm
                                        </div>
                                        <div>
                                            <img src="/icon/dashboard/weight.svg" alt="weight" />{participant.weight}kg
                                        </div>
                                        <div>
                                            <img src="/icon/dashboard/shoe.svg" alt="shoe" />{participant.shoe}EU
                                        </div>
                                    </div>
                                </Participant>
                            ))}
                        </Row>

                    </div>}


            </Container>
        </div>
    )
}

export default DrawerContainer
