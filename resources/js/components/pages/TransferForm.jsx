import React, { useContext, useState, useEffect } from "react";
import { Form, Drawer, Button, Row, notification, Popconfirm } from "antd";
import styled, { ThemeContext, keyframes } from "styled-components";
import Information from "./TransferForm/Information";
import { createTransfer } from "../../redux/transfer/actions";
import { connect } from "react-redux";
import Summary from "./TransferForm/Summary";
import moment from "moment";
import { dimensions } from "../../helper";

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

const TransferForm = ({
    visible,
    handleVisibility,
    createTransfer,
    loading,
    formTransferVisible,
}) => {
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/tourForm");
    const [formData, setFormData] = useState({ activity: 9 });
    const [step, setStep] = useState(0);
    const [stepOrder, setStepOrder] = useState([]);
    const [drawerWidth, setDrawerWidth] = useState(720);
    const [form] = Form.useForm();
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (visible) {
            handleReset(true);
        }
    }, [visible]);

    useEffect(() => {
        setDrawerWidth(window.innerWidth > 720 ? 720 : window.innerWidth);
    }, [window.innerWidth]);

    const steps = [
        {
            title: text.pages[0].title,
            content: (
                <Information
                    formTransferVisible={formTransferVisible}
                    text={text.pages[0]}
                />
            ),
        },
        {
            title: text.pages[2].title,
            content: (
                <Summary
                    text={text.pages[2]}
                    data={{
                        ...formData,
                        tour: formTransferVisible.id,
                        trajectory: formTransferVisible.trajectory,
                    }}
                />
            ),
        },
    ];

    const nextStep = () => {
        form.validateFields().then((currentStepData) => {
            setFormData({ ...formData, ...currentStepData });

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
        setStepOrder([]);
        form.resetFields();
        setFormData();
    };

    const handleFinish = () => {
        form.validateFields().then(() => {
            var formattedDate =
                moment(formData.date).format("YYYY-MM-DD") +
                " " +
                (formData.time ? formData.time : "08:00");
            var formattedReturnDate = formData.return
                ? moment(formData.return_data).format("YYYY-MM-DD") +
                  " " +
                  formData.return_time
                : null;

            createTransfer({
                ...formData,
                tour: formTransferVisible.id,
                date: formattedDate,
                return_date: formattedReturnDate,
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
                initialValues={{ direction: "from" }}
            >
                {steps[step].content}
            </Form>
            {step == 0 ? (
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
                            src="/icon/navbar/loading.svg"
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
        createTransfer: (data) => dispatch(createTransfer(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
        formTransferVisible: state.application.formTransferVisible,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferForm);
