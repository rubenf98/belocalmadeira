import React, { useEffect, useState } from 'react'
import { Row, Form, Col, Radio, DatePicker, Select } from 'antd';
import { CustomCheckbox, CustomCascader, CustomInput, CustomInputNumber, CustomPhoneSelect, CustomSelect, CustomDatePicker, CustomRadio } from '../Form/styles';
import { fetchActivities } from "../../../redux/activity/actions";
import { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

const Warning = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;

    img {
        width: 20px;
        margin-right: 10px;
    }

    div {
        margin: 0px;
        color: white;
        font-size: 14px;
        opacity: .6;

        p {
            margin: 0px;
        }
    }
    
`;

const rules = {
    name: [
        {
            required: true,
            message: '',
        },
    ],
    email: [
        {
            required: true,
            message: '',
        },
        {
            type: 'email',
            message: 'Please specify a valid email',
        },
    ],
    phone: [
        {
            required: true,
            message: '',
        },
    ],
    address: [
        {
            required: true,
            message: '',
        },
    ],
    participants: [
        {
            required: true,
            message: '',
        },
    ],
    activity: [
        {
            required: true,
            message: 'Please select an activity',
        },
    ],
};

function Information({ data, text, formTransferVisible }) {
    const [hasReturn, setHasReturn] = useState(false)
    const [currentDate, setCurrentDate] = useState(undefined)

    return (
        <ConfigProvider locale={en}>
            <div>
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="name"
                            rules={rules.name}
                        >
                            <CustomInput size='large' placeholder={text.form.name.placeholder} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="email"
                            rules={rules.email}
                        >
                            <CustomInput size='large' placeholder={text.form.email.placeholder} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="phone"
                            rules={rules.phone}
                            initialValue={{
                                short: 'pt',
                            }}
                        >
                            <CustomPhoneSelect

                                size="large"
                                placeholder={text.form.phone.placeholder}
                            />
                        </Form.Item>
                    </Col>


                    <Col xs={24} md={12}>
                        <Form.Item
                            name="participants"
                            rules={rules.participants}
                        >
                            <CustomInputNumber max={8} min={2} controls={false} size='large' placeholder={text.form.participants.placeholder} />
                        </Form.Item>
                    </Col>

                    {!formTransferVisible.trajectory && <Col xs={24} md={24}>
                        <Form.Item
                            // label={text.form.direction.label}
                            name="direction"
                            rules={rules.activity}
                        >
                            <CustomRadio size='large' defaultValue="to airport" buttonStyle="solid">
                                <Radio.Button value="from">From airport</Radio.Button>
                                <Radio.Button value="to">To airport</Radio.Button>
                            </CustomRadio>
                        </Form.Item>
                    </Col>}

                    {!formTransferVisible.trajectory && <Col xs={24} md={24}>
                        <Form.Item
                            name="address"
                            rules={rules.address}
                        >
                            <CustomInput size='large' placeholder={text.form.location.placeholder} />
                        </Form.Item>
                    </Col>}



                    <Col xs={24} md={12}>
                        <Form.Item
                            name="date"
                            rules={rules.address}


                        >
                            <CustomDatePicker
                                onChange={(e) => setCurrentDate(e)}
                                size='large'
                                placeholder={text.form.date.placeholder}
                                disabledDate={(current) => {
                                    return current &&
                                        current < moment().add(1, 'days');
                                }}
                            />
                        </Form.Item>
                    </Col>
                    {!formTransferVisible.trajectory &&
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="time"
                                rules={rules.address}
                            >
                                <CustomSelect size='large' placeholder={text.form.time.placeholder} >
                                    <Select.Option value="00:00">00:00</Select.Option>
                                    <Select.Option value="00:30">00:30</Select.Option>
                                    <Select.Option value="01:00">01:00</Select.Option>
                                    <Select.Option value="01:30">01:30</Select.Option>
                                    <Select.Option value="02:00">02:00</Select.Option>
                                    <Select.Option value="02:30">02:30</Select.Option>
                                    <Select.Option value="03:00">03:00</Select.Option>
                                    <Select.Option value="03:30">03:30</Select.Option>
                                    <Select.Option value="04:00">04:00</Select.Option>
                                    <Select.Option value="04:30">04:30</Select.Option>
                                    <Select.Option value="05:00">05:00</Select.Option>
                                    <Select.Option value="05:30">05:30</Select.Option>
                                    <Select.Option value="06:00">06:00</Select.Option>
                                    <Select.Option value="06:30">06:30</Select.Option>
                                    <Select.Option value="07:00">07:00</Select.Option>
                                    <Select.Option value="07:30">07:30</Select.Option>
                                    <Select.Option value="08:00">08:00</Select.Option>
                                    <Select.Option value="08:30">08:30</Select.Option>
                                    <Select.Option value="09:00">09:00</Select.Option>
                                    <Select.Option value="09:30">09:30</Select.Option>
                                    <Select.Option value="10:00">10:00</Select.Option>
                                    <Select.Option value="10:30">10:30</Select.Option>
                                    <Select.Option value="11:00">11:00</Select.Option>
                                    <Select.Option value="11:30">11:30</Select.Option>
                                    <Select.Option value="12:00">12:00</Select.Option>
                                    <Select.Option value="12:30">12:30</Select.Option>
                                    <Select.Option value="13:00">13:00</Select.Option>
                                    <Select.Option value="13:30">13:30</Select.Option>
                                    <Select.Option value="14:00">14:00</Select.Option>
                                    <Select.Option value="14:30">14:30</Select.Option>
                                    <Select.Option value="15:00">15:00</Select.Option>
                                    <Select.Option value="15:30">15:30</Select.Option>
                                    <Select.Option value="16:00">16:00</Select.Option>
                                    <Select.Option value="16:30">16:30</Select.Option>
                                    <Select.Option value="17:00">17:00</Select.Option>
                                    <Select.Option value="17:30">17:30</Select.Option>
                                    <Select.Option value="18:00">18:00</Select.Option>
                                    <Select.Option value="18:30">18:30</Select.Option>
                                    <Select.Option value="19:00">19:00</Select.Option>
                                    <Select.Option value="19:30">19:30</Select.Option>
                                    <Select.Option value="20:00">20:00</Select.Option>
                                    <Select.Option value="20:30">20:30</Select.Option>
                                    <Select.Option value="21:00">21:00</Select.Option>
                                    <Select.Option value="21:30">21:30</Select.Option>
                                    <Select.Option value="22:00">22:00</Select.Option>
                                    <Select.Option value="22:30">22:30</Select.Option>
                                    <Select.Option value="23:00">23:00</Select.Option>
                                    <Select.Option value="23:30">23:30</Select.Option>
                                </CustomSelect>
                            </Form.Item>
                        </Col>}


                    <Col xs={24} md={24}>
                        <p style={{ color: "white" }}>{formTransferVisible.trajectory}</p>
                    </Col>



                    {!formTransferVisible.trajectory &&
                        <>
                            <Col xs={24}>
                                <Form.Item
                                    name="return"
                                    valuePropName="checked"
                                >
                                    <CustomCheckbox onChange={(e) => setHasReturn(e.target.checked)}>{text.form.private.placeholder}</CustomCheckbox>
                                </Form.Item>
                            </Col>
                            {hasReturn && <>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="return_date"
                                        rules={rules.address}

                                    >
                                        <CustomDatePicker
                                            size='large'
                                            placeholder={text.form.return_date.placeholder}
                                            disabledDate={(current) => {
                                                return current &&
                                                    current < moment().add(1, 'days') || current < moment(currentDate);
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="return_time"
                                        rules={rules.address}
                                    >
                                        <CustomSelect size='large' placeholder={text.form.return_time.placeholder} >
                                            <Select.Option value="00:00">00:00</Select.Option>
                                            <Select.Option value="00:30">00:30</Select.Option>
                                            <Select.Option value="01:00">01:00</Select.Option>
                                            <Select.Option value="01:30">01:30</Select.Option>
                                            <Select.Option value="02:00">02:00</Select.Option>
                                            <Select.Option value="02:30">02:30</Select.Option>
                                            <Select.Option value="03:00">03:00</Select.Option>
                                            <Select.Option value="03:30">03:30</Select.Option>
                                            <Select.Option value="04:00">04:00</Select.Option>
                                            <Select.Option value="04:30">04:30</Select.Option>
                                            <Select.Option value="05:00">05:00</Select.Option>
                                            <Select.Option value="05:30">05:30</Select.Option>
                                            <Select.Option value="06:00">06:00</Select.Option>
                                            <Select.Option value="06:30">06:30</Select.Option>
                                            <Select.Option value="07:00">07:00</Select.Option>
                                            <Select.Option value="07:30">07:30</Select.Option>
                                            <Select.Option value="08:00">08:00</Select.Option>
                                            <Select.Option value="08:30">08:30</Select.Option>
                                            <Select.Option value="09:00">09:00</Select.Option>
                                            <Select.Option value="09:30">09:30</Select.Option>
                                            <Select.Option value="10:00">10:00</Select.Option>
                                            <Select.Option value="10:30">10:30</Select.Option>
                                            <Select.Option value="11:00">11:00</Select.Option>
                                            <Select.Option value="11:30">11:30</Select.Option>
                                            <Select.Option value="12:00">12:00</Select.Option>
                                            <Select.Option value="12:30">12:30</Select.Option>
                                            <Select.Option value="13:00">13:00</Select.Option>
                                            <Select.Option value="13:30">13:30</Select.Option>
                                            <Select.Option value="14:00">14:00</Select.Option>
                                            <Select.Option value="14:30">14:30</Select.Option>
                                            <Select.Option value="15:00">15:00</Select.Option>
                                            <Select.Option value="15:30">15:30</Select.Option>
                                            <Select.Option value="16:00">16:00</Select.Option>
                                            <Select.Option value="16:30">16:30</Select.Option>
                                            <Select.Option value="17:00">17:00</Select.Option>
                                            <Select.Option value="17:30">17:30</Select.Option>
                                            <Select.Option value="18:00">18:00</Select.Option>
                                            <Select.Option value="18:30">18:30</Select.Option>
                                            <Select.Option value="19:00">19:00</Select.Option>
                                            <Select.Option value="19:30">19:30</Select.Option>
                                            <Select.Option value="20:00">20:00</Select.Option>
                                            <Select.Option value="20:30">20:30</Select.Option>
                                            <Select.Option value="21:00">21:00</Select.Option>
                                            <Select.Option value="21:30">21:30</Select.Option>
                                            <Select.Option value="22:00">22:00</Select.Option>
                                            <Select.Option value="22:30">22:30</Select.Option>
                                            <Select.Option value="23:00">23:00</Select.Option>
                                            <Select.Option value="23:30">23:30</Select.Option>
                                        </CustomSelect>
                                    </Form.Item>
                                </Col>
                            </>}
                        </>}

                    <Warning>
                        <img src="/icon/warning.svg" alt="warning" />
                        <div>{text.warning}</div>
                    </Warning>


                </Row>


            </div >
        </ConfigProvider>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivities: (filters) => dispatch(fetchActivities(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.activity.data,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Information);