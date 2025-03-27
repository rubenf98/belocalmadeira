import React, { useContext, useState, useEffect } from "react";
import { Form, Drawer, Button, Row, notification, Popconfirm } from "antd";
import styled, { ThemeContext, keyframes } from "styled-components";
import Information from "./Form/Information";
import Date from "./Form/Date";
import Participants from "./Form/Participants";
import { createReservation } from "../../redux/reservation/actions";
import { connect } from "react-redux";
import Summary from "./Form/Summary";
import moment from "moment";
import { dimensions } from "../../helper";
import Type from "./Form/Type";
import Voucher from "./Form/Voucher";
import { fetchActivities } from "../../redux/activity/actions";
import { resetCoupon } from "../../redux/coupon/actions";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Content = styled(Drawer)`
    color: white;

    .ant-drawer-wrapper-body {
        background: ${(props) => props.background};
        padding: 50px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            padding: 10px;
        }
    }

    .ant-drawer-body {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */

        &:-webkit-scrollbar {
            display: none; /* Safari and Chrome */
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
    font-family: "Playfair Display", serif;
    color: white;
    margin: 50px 0px;

    @media (max-width: ${dimensions.md}) {
        font-size: 26px;
    }
`;

const Next = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0px 20px auto;
    padding: 10px 22px;
    background-color: ${({ theme }) => theme.primary};
    font-size: 18px;
    border: 1px solid white;
`;

const Submit = styled(Button)`
    cursor: pointer;
    cursor: ${(props) => (props.isloading ? "loading" : "pointer")};
    margin: 20px 0px;
    background-color: transparent;
    border: none;
    box-shadow: 0px;
    color: white;

    &:focus,
    &:active,
    &:hover {
        background-color: transparent;
        border: none;
        box-shadow: 0px;
    }
`;

const Loading = styled.img`
    width: 50px;
    animation: ${rotate} 2s linear infinite;
    opacity: ${(props) => (props.isloading ? "1 !important" : "0 !important")};
`;

const Previous = styled.img`
    cursor: pointer;
    width: 20px;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    cursor: ${(props) => (props.visible ? "pointer" : "default")};
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const OrderForm = ({
    visible,
    handleVisibility,
    createReservation,
    loading,
    activityInitialValue,
    fetchActivities,
    coupon,
}) => {
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/form");
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(0);
    const [stepOrder, setStepOrder] = useState([]);
    const [active, setActive] = useState(undefined);
    const [nParticipants, setNParticipants] = useState(3);
    const [drawerWidth, setDrawerWidth] = useState(720);
    const [form] = Form.useForm();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (visible) handleReset(true);
        if (activityInitialValue.name) {
            setNParticipants(activityInitialValue.participants);
            setFormData({ ...activityInitialValue });
            fetchActivities({ language: localStorage.getItem("language") });
            setStep(2);
        }
    }, [visible]);

    useEffect(() => {
        setDrawerWidth(window.innerWidth > 720 ? 720 : window.innerWidth);
    }, [window.innerWidth]);

    const steps = [
        {
            title: text.pages[1].title,
            content: <Date form={form} text={text.pages[1]} />,
        },
        {
            title: text.pages[0].title,
            content: <Information text={text.pages[0]} />,
        },
        {
            title: text.pages[2].title,
            content: <Participants text={text.pages[2]} n={nParticipants} />,
        },
        {
            title: text.pages[3].title,
            content: (
                <Summary
                    text={text.pages[3]}
                    data={{
                        ...formData,
                        date: moment(formData.date).format("YYYY-MM-DD"),
                    }}
                />
            ),
        },
    ];

    const nextStep = () => {
        form.validateFields().then((currentStepData) => {
            setFormData({ ...formData, ...currentStepData });
            if (step == 1) {
                setNParticipants(form.getFieldValue("participants"));
            }

            var nextStep = step == steps.length - 1 ? step : step + 1;

            setStepOrder([step, ...stepOrder]);
            setStep(nextStep);
        });
    };

    const previousStep = () => {
        var newOrder = [...stepOrder];
        newOrder.splice(0, 1);
        setStep(stepOrder[0]);
        setStepOrder(newOrder);
    };

    const handleReset = (close = true) => {
        setStep(0);
        resetCoupon();
        setStepOrder([]);
        form.resetFields();
        setFormData({});
    };

    const handleFinish = () => {
        form.validateFields().then((currentStepData) => {
            createReservation({
                ...formData,
                ...currentStepData,
                coupon_id: coupon.id,
            })
                .then((response, err) => {
                    if (!err) {
                        openNotificationWithIcon("success", {
                            message: text.success.message,
                            description: text.success.description,
                        });
                        handleReset(false);
                        handleVisibility(false);
                    }
                })
                .catch((error) => {
                    let messages = [];

                    Object.values(error.response.data.errors).map(function (
                        message
                    ) {
                        messages.push(message[0]);
                    });

                    openNotificationWithIcon("error", {
                        message: text.error.message,
                        description: messages.map((description, index) => (
                            <p key={index}>{description}</p>
                        )),
                    });
                });
        });
    };

    const openNotificationWithIcon = (type, content) => {
        notification[type](content);
    };

    return (
        <Content
            background={themeContext.primary}
            title={null}
            placement="right"
            width={drawerWidth}
            closable={false}
            maskClosable={false}
            visible={visible}
        >
            <FlexContainer>
                <Previous
                    visible={step != 0}
                    onClick={previousStep}
                    src="/icon/previous.svg"
                    alt="previous step"
                />
                <CloseContainer>
                    <Popconfirm
                        title={text.popconfirm.message}
                        placement="bottomLeft"
                        onConfirm={() => handleVisibility(false)}
                        okText={text.popconfirm.yes}
                        cancelText={text.popconfirm.no}
                    >
                        <span>{text.close}</span>{" "}
                        <img src="/icon/close.svg" alt="close icon" />
                    </Popconfirm>
                </CloseContainer>
            </FlexContainer>

            <Title>{steps[step].title}</Title>

            <Form
                form={form}
                layout="vertical"
                name="order"
                requiredMark={false}
                initialValues={{
                    ...activityInitialValue,
                }}
            >
                {steps[step].content}
            </Form>
            {step != 3 ? (
                <Next onClick={nextStep}>
                    <span> {text.controls.next} </span>
                </Next>
            ) : (
                <Row type="flex" justify="end">
                    <Submit
                        isloading={loading ? 1 : 0}
                        onClick={handleFinish}
                        type="primary"
                        htmlType="submit"
                    >
                        <Loading
                            isloading={loading ? 1 : 0}
                            src="/image/navbar/loading.svg"
                            alt="loading"
                        />
                        <span> {text.controls.submit} </span>
                    </Submit>
                </Row>
            )}
        </Content>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (data) => dispatch(createReservation(data)),
        resetCoupon: () => dispatch(resetCoupon()),
        fetchActivities: (filters) => dispatch(fetchActivities(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
        activityInitialValue: state.application.activityInitialValue,
        coupon: state.coupon.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
