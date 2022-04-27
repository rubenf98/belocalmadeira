import React, { useContext, useState, useEffect } from 'react';
import { Form, Drawer, Row } from 'antd';
import styled, { ThemeContext } from "styled-components";
import { dimensions } from "../../helper";
import Information from './Form/Information';
import Date from './Form/Date';
import Participants from './Form/Participants';

const Content = styled(Drawer)`
    color: white;
    

    .ant-drawer-wrapper-body {
        background: ${props => props.background};
        padding: 50px;
        box-sizing: border-box;
        
    }

    .ant-drawer-body {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */

        &:-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }
    }
    
`;

const CloseContainer = styled.div`
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        width: 12px;
        margin-left: 10px;
    }
`;

const Title = styled.h2`
    font-size: 36px;
    font-family: 'Playfair Display', serif;
    color: white;
    margin: 50px 0px;
`;

const Next = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0px;

    img {
        width: 50px;
    }
`;

const Previous = styled.img`
    cursor: pointer;
    width: 20px;
    opacity: ${props => props.visible ? 1 : 0};
    cursor: ${props => props.visible ? "pointer" : "default"};
    
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;


const OrderForm = ({ visible, handleVisibility }) => {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/form");

    const [step, setStep] = useState(0);
    const [nParticipants, setNParticipants] = useState(2);
    const [calendarMetadata, setCalendarMetadata] = useState({});
    const [drawerWidth, setDrawerWidth] = useState(720);
    const [form] = Form.useForm();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        setDrawerWidth(window.innerWidth > 720 ? 720 : window.innerWidth);
    }, [window.innerWidth])

    const steps = [
        { title: "Explore our activities and book your Madeira Island experience right here!", content: <Information /> },
        { title: "Select the date for your activity from the available options on the calendar", content: <Date /> },
        { title: "Fill the details of everyone that will participate on the activity", content: <Participants n={nParticipants} text={text} /> }
    ]

    const nextStep = () => {
        if (step == 1) {
            setNParticipants(form.getFieldValue('participants'));
        }
        setStep(step == (steps.length - 1) ? step : step + 1);
    }

    const previousStep = () => {
        setStep(step > 0 ? step - 1 : 0);
    }

    const handleClose = () => {
        setStep(0);
        handleVisibility(false);
    }

    return (
        <Content
            background={themeContext.primary}
            title={null}
            placement="right"
            width={drawerWidth}
            closable={false}
            maskClosable={false}
            visible={visible}
            onClose={handleClose}
        >
            <FlexContainer>
                <Previous visible={step != 0} onClick={previousStep} src='/icon/previous.svg' alt="previous step" />
                <CloseContainer onClick={() => handleVisibility(false)}>
                    <span>close</span> <img src="/icon/close.svg" alt="close icon" />
                </CloseContainer>
            </FlexContainer>

            <Title>{steps[step].title}</Title>
            <Form
                form={form}
                layout="vertical"
                name="order"
                requiredMark={false}
                initialValues={{
                    people: 2,
                }}
            >
                {steps[step].content}
            </Form>
            <Next onClick={nextStep}>
                <img src="/icon/next.svg" alt='next step' />
            </Next>
        </Content>

    );
};

export default OrderForm;