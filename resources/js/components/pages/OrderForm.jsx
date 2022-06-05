import React, { useContext, useState, useEffect } from 'react';
import { Form, Drawer, Button } from 'antd';
import styled, { ThemeContext } from "styled-components";
import Information from './Form/Information';
import Date from './Form/Date';
import Participants from './Form/Participants';
import { createReservation } from '../../redux/reservation/actions';
import { connect } from "react-redux";

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


const OrderForm = ({ visible, handleVisibility, createReservation }) => {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/form");
    const [formData, setFormData] = useState({})
    const [step, setStep] = useState(0);
    const [nParticipants, setNParticipants] = useState(2);
    const [drawerWidth, setDrawerWidth] = useState(720);
    const [form] = Form.useForm();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (visible)
            handleReset(true);

    }, [visible])

    useEffect(() => {
        setDrawerWidth(window.innerWidth > 720 ? 720 : window.innerWidth);
    }, [window.innerWidth])

    const steps = [
        {
            title: text.pages[0].title,
            content: <Information text={text.pages[0]} />
        },
        {
            title: text.pages[1].title,
            content: <Date text={text.pages[1]} participants={form.getFieldValue('participants')} />
        },
        {
            title: text.pages[2].title,
            content: <Participants text={text.pages[2]} n={nParticipants} />
        }
    ]


    const nextStep = () => {
        var currentStepData = form.getFieldsValue();
        setFormData({ ...formData, ...currentStepData });
        if (step == 1) {
            setNParticipants(form.getFieldValue('participants'));
        }
        setStep(step == (steps.length - 1) ? step : step + 1);
    }

    const previousStep = () => {
        setStep(step > 0 ? step - 1 : 0);
    }

    const handleReset = (close = true) => {
        setStep(0);
        form.resetFields();
        setFormData({});
        handleVisibility(close);
    }

    const handleFinish = () => {
        var currentStepData = form.getFieldsValue();
        createReservation({ ...formData, ...currentStepData }).then((response, err) => {
            if (!err) {
                handleReset();
            }
        });
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
            onClose={handleReset}
        >
            <FlexContainer>
                <Previous visible={step != 0} onClick={previousStep} src='/icon/previous.svg' alt="previous step" />
                <CloseContainer onClick={() => handleVisibility(false)}>
                    <span>{text.close}</span> <img src="/icon/close.svg" alt="close icon" />
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
            {step != 2 ?
                <Next onClick={nextStep}>
                    <img src="/icon/next.svg" alt='next' />
                </Next> :
                <Button onClick={handleFinish} type='primary' htmlType="submit">
                    {text.submit}
                </Button>
            }

        </Content>

    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (data) => dispatch(createReservation(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);