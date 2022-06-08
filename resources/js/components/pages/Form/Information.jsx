import React, { useEffect } from 'react'
import { Row, Form, Col } from 'antd';
import { CustomCheckbox, CustomCascader, CustomInput, CustomInputNumber } from './styles';
import { fetchActivities } from "../../../redux/activity/actions";
import { connect } from "react-redux";
import styled from "styled-components";

const Warning = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 30px;
        margin-right: 10px;
    }

    div {
        margin: 0px;
        color: white;
        font-size: 14px;
        opacity: .6;
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

function Information({ fetchActivities, data, text }) {
    useEffect(() => {
        fetchActivities({ language: localStorage.getItem('language') });
    }, [])

    return (
        <div>
            <Row gutter={32}>
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
                    >
                        <CustomInput size='large' placeholder={text.form.phone.placeholder} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="address"
                        rules={rules.address}
                    >
                        <CustomInput size='large' placeholder={text.form.address.placeholder} />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="participants"
                        rules={rules.participants}
                    >
                        <CustomInputNumber max={15} min={3} controls={false} size='large' placeholder={text.form.participants.placeholder} />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="activity"
                        rules={rules.activity}
                    >
                        <CustomCascader
                            size="large"
                            expandTrigger="hover"
                            options={data}
                            allowClear={false}
                            placeholder={text.form.activity.placeholder}
                            dropdownRender={menu => (
                                <div className='colored-dropdown'>
                                    {menu}
                                </div >
                            )}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>

                    <Form.Item
                        name="private"
                        valuePropName="checked"
                    >
                        <CustomCheckbox>{text.form.private.placeholder}</CustomCheckbox>
                    </Form.Item>
                    <Warning>
                        <img src="/icon/warning.svg" alt="warning" />
                        <div>{text.warning}</div>
                    </Warning>
                </Col>


            </Row>


        </div >
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