import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Row, notification } from 'antd';
import styled from "styled-components";
import { dimensions, maxWidth } from '../../helper';
import moment from 'moment';
import { useParams } from "react-router-dom";
import PageHeader from '../common/PageHeader';

const Container = styled.div`

`;


const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: 150px auto;
`;

const Summary = styled(Row)`
    margin: 10px auto 60px auto;
    position: relative;
    width: 100%;

    .details-container {
        width: 55%;
        padding: 25px;

        @media (max-width: ${dimensions.md}) {
            width: 80%;
            text-align: center;

            h3, p {
                width: 100%;
                margin: auto;
                display: block;
            }
        }

        @media (max-width: ${dimensions.sm}) {
            width: 96%;
        }

        h3 {
            font-size: 2em;
            font-weight: bold;

            @media (max-width: ${dimensions.md}) {
                margin-top: 10px;
            }
        }

        p {
            font-size: 1.2em;
        }
    }
`;

const Detail = styled.div`
    font-size: 18px;
    width: 25%;
    padding: 10px 10px;
    box-sizing: border-box;
    font-weight: bold;

    span {
        display: block;
        font-weight: 300;
    }

    @media (max-width: ${dimensions.md}) {
        width: 50%;
        font-size: 16px;
    }
`;

const Participant = styled(Detail)`
    width: 50%;
`;


const Loading = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .flex-container {
        margin: auto;
    }

    .gooey {
        padding: 10px;
        width: 100%;
        height: 40px;
        margin: 10px auto;
        background: #ffffff;
        filter: contrast(20);
    }

    .gooey .dot {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 22px;
        left: 60px;
        filter: blur(4px);
        background: #000;
        border-radius: 50%;
        transform: translateX(0);
        animation: dot 2.8s infinite;
    }

    .gooey .dots {
        transform: translateX(0);
        margin-top: 12px;
        margin-left: 70px;
        animation: dots 2.8s infinite;
    }

    .gooey .dots span {
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-left: 16px;
        filter: blur(4px);
        background: #000;
        border-radius: 50%;
    }

    @keyframes dot {
        50% {
            transform: translateX(120px);
        }
    }

    @keyframes dots {
        50% {
            transform: translateX(-20px);
        }
    }
`;

const Feedback = styled.h3`
    font-size: 20px;
    font-weight: bold;  
    opacity: .8;
    padding: 0px 10px;
`;


function Confirmation({ match }) {
    const [data, setData] = useState({})
    const [hasError, setHasError] = useState(false)
    let { token } = useParams();
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/confirmation");


    const openNotification = () => {
        notification.success({
            message: text.feedback,
            description: text.feedbackInstruction
        });
    };

    const getActivityField = (experience) => {
        var response = null;
        if (experience.activity_id) {
            response = experience.activity.name[localStorage.getItem("language")] + " (" + experience.name[localStorage.getItem("language")] + ")"
        } else {
            response = experience.name[localStorage.getItem("language")]
        }
        return response;
    }

    useEffect(() => {

        axios.get(`${window.location.origin}/api/reservation/showFromToken?token=${token}`).then((response) => {
            setData(response.data.data);
            const before = moment().subtract(1, 'minute')
            if (moment(response.data.data.updated_at).isAfter(before)) {
                openNotification();
            }
        }).catch((error) => {
            notification.error({
                message: text.error,
                description: text.errorInstruction
            });
            setHasError(true);
        })

    }, [])

    return (
        <Container>
            <PageHeader title={text.title} subtitle={text.subtitle} />
            <Content>
                {
                    (Object.keys(data).length === 0) ?
                        <Loading>
                            <div className='flex-container'>
                                {
                                    !hasError &&
                                    <div className="gooey">
                                        <span className="dot"></span>
                                        <div className="dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </Loading> :
                        <Fragment>

                            <Feedback>{text.feedbackInstruction}</Feedback>
                            <Summary type="flex" justify="flex-start">
                                <Detail><span>{text.details.activity} </span> {getActivityField(data.experienceable)} </Detail>
                                <Detail><span>{text.details.name} </span> {data.name} </Detail>
                                <Detail><span>{text.details.email} </span> {data.email} </Detail>
                                <Detail><span>{text.details.price} </span> {data.price}€ </Detail>
                                <Detail><span>{text.details.phone} </span> {data.phone} </Detail>
                                {data.source == "voucher" && <Detail><span>{text.details.recipient} </span> {data.recipient} </Detail>}
                                {data.source == "website" && <Detail><span>{text.details.address} </span> {data.address} </Detail>}
                                {data.source == "website" && <Detail><span>{text.details.private} </span> {text.details.privateAnswer[data.private]} </Detail>}
                                {data.source == "website" && <Detail><span>{text.details.date} </span> {data.date} {data.time}</Detail>}
                                <Detail><span>{text.details.created_at} </span> {data.created_at} </Detail>
                            </Summary>
                            {data.source == "website" && <Feedback>{text.participantsTitle}</Feedback>}

                            <Summary type="flex" justify="flex-start">
                                {data.reservationRarticipants.map((participant, index) => (
                                    <Participant><span>{text.details.participant} {index + 1} </span> {participant.birthday} /  {participant.gender} /  {participant.weight} / {participant.height}cm /  {participant.shoe} EU </Participant>
                                ))}
                            </Summary>
                        </Fragment>
                }
            </Content>
        </Container>
    )
}

export default Confirmation
