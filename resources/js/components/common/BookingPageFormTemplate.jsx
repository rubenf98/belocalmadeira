import { Calendar, Form, Input, Row, Col } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
import { CustomInput, CustomInputNumber } from "../pages/Form/styles";
import dayjs from "dayjs";
import styled from "styled-components";
import { connect } from "react-redux";

const formItems = {
    undefined: [],
    canyoning: ["name", "email", "phone", "address", "date", "participants"],
    hiking: ["name", "email", "phone", "address", "date", "participants"],
    coasteering: ["name", "email", "phone", "address", "date", "participants"],
    biking: ["name", "email", "phone", "address", "date", "participants"],
    jeep: ["name", "email", "phone", "address", "participants", "date"],
};

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    padding: 10px 0px;
    box-sizing: border-box;

    svg {
        width: 20px;
        cursor: pointer;
    }
`;
function BookingPageFormTemplate(props) {
    const { text, language } = props;
    const [template, setTemplate] = useState([]);

    useEffect(() => {
        if (props.template) {
            setTemplate(formItems[props.template]);
        }
    }, [props.template]);

    return (
        <Row gutter={16}>
            {template.includes("date") && (
                <Col style={{ marginBottom: "50px" }} span={24}>
                    <Calendar
                        defaultValue={moment().add(1, "day")}
                        disabledDate={(currentDate) => {
                            return (
                                currentDate &&
                                (currentDate.isBefore(dayjs(), "day") ||
                                    props.calendarMetadata.disabled.includes(
                                        dayjs(currentDate).format("YYYY-MM-DD")
                                    ))
                            );
                        }}
                        fullscreen={false}
                        headerRender={({ value, onChange }) => {
                            const year = value.year();
                            const month = value.month();

                            return (
                                <CalendarHeader>
                                    <div
                                        onClick={() => {
                                            const now = value
                                                .clone()
                                                .subtract(1, "month");
                                            onChange(now);
                                        }}
                                    >
                                        <svg viewBox="0 0 20 20">
                                            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                        </svg>
                                    </div>
                                    {dayjs(new Date(year, month - 1, 1)).format(
                                        "MMMM YYYY"
                                    )}
                                    <div
                                        onClick={() => {
                                            const now = value
                                                .clone()
                                                .add(1, "month");
                                            onChange(now);
                                        }}
                                    >
                                        <svg viewBox="0 0 20 20">
                                            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                        </svg>
                                    </div>
                                </CalendarHeader>
                            );
                        }}
                        onPanelChange={props.onPanelChange}
                    />
                </Col>
            )}
            {template.includes("name") && (
                <Col xs={24} md={12}>
                    <Form.Item label={text.form.name.label} name="name">
                        <CustomInput
                            light
                            placeholder={text.form.name.placeholder}
                        />
                    </Form.Item>
                </Col>
            )}
            {template.includes("email") && (
                <Col xs={24} md={12}>
                    <Form.Item label={text.form.email.label} name="email">
                        <CustomInput
                            light
                            placeholder={text.form.email.placeholder}
                        />
                    </Form.Item>
                </Col>
            )}
            {template.includes("phone") && (
                <Col xs={24} md={12}>
                    <Form.Item label={text.form.phone.label} name="phone">
                        <CustomInput
                            light
                            placeholder={text.form.phone.placeholder}
                        />
                    </Form.Item>
                </Col>
            )}
            {template.includes("participants") && (
                <Col xs={24} md={12}>
                    <Form.Item
                        label={text.form.participants.label}
                        name="participants"
                    >
                        <CustomInputNumber
                            light
                            max={15}
                            min={1}
                            controls={false}
                            placeholder={text.form.participants.placeholder}
                        />
                    </Form.Item>
                </Col>
            )}
            {template.includes("address") && (
                <Col xs={24} md={24}>
                    <Form.Item label={text.form.address.label} name="address">
                        <CustomInput
                            light
                            placeholder={text.form.address.placeholder}
                        />
                    </Form.Item>
                </Col>
            )}
            {template.includes("date") && (
                <Col xs={24} md={24}>
                    <Form.Item name="date">
                        <Input style={{ display: "none" }} />
                    </Form.Item>
                </Col>
            )}

            {template.includes("dropdown_date") && (
                <Col xs={24} md={12}>
                    <Form.Item label={text.form.name.label} name="name">
                        <CustomInput
                            light
                            placeholder={text.form.name.placeholder}
                        />
                    </Form.Item>
                </Col>
            )}

            <br />

            <Col xs={24} md={24}>
                <button onClick={props.handleSubmit}>
                    <div className="circle" />
                    {language == "en" ? "Book now" : "Reservar já"}
                </button>
            </Col>
        </Row>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};
export default connect(mapStateToProps, null)(BookingPageFormTemplate);
