import React, { useContext, useState, useEffect } from 'react';
import { Form, Drawer, Row } from 'antd';
import styled, { ThemeContext } from "styled-components";
import Activity from './Form/Activity';
import Location from './Form/Location';
import People from './Form/People';
import { dimensions } from "../../helper";
import Information from './Form/Information';
import Date from './Form/Date';

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

const OrderForm = ({ visible, handleVisibility, onCancel, activities = [], initForm = [0, 0] }) => {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/form");

    const [step, setStep] = useState(0);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [calendarMetadata, setCalendarMetadata] = useState({});
    const [drawerWidth, setDrawerWidth] = useState(720);
    const [form] = Form.useForm();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        setDrawerWidth(window.innerWidth > 720 ? 720 : window.innerWidth);
    }, [window.innerWidth])

    const steps = [
        { title: "Explore our activities and book your Madeira Island experience right here!", content: <Information /> },
        { title: "Select the date for your activity from the available options on the calendar", content: <Date /> }
    ]

    const nextStep = () => {
        setStep(step == (steps.length - 1) ? step : step + 1);
    }

    const previousStep = () => {
        setStep(step > 0 ? step - 1 : 0);
    }

    return (
        <Content
            background={themeContext.primary}
            title={null}
            placement="right"
            width={drawerWidth}
            closable={false}
            visible={visible}
        >

            <CloseContainer onClick={() => handleVisibility(false)}>
                <span>close</span> <img src="/icon/close.svg" alt="close icon" />
            </CloseContainer>

            <Title>{steps[step].title}</Title>

            {steps[step].content}

            <Next onClick={nextStep}>
                <img src="/icon/next.svg" alt='next step' />
            </Next>
        </Content>

    );
};

export default OrderForm;