import React, { useEffect } from 'react'
import { Row, Form, Col } from 'antd';
import { CustomCheckbox, CustomCascader, CustomInput, CustomInputNumber } from './styles';
import { fetchActivities } from "../../../redux/activity/actions";
import { connect } from "react-redux";


const rules = {
    name: [
        {
            required: true,
            message: 'Please input the name of the reservation',
        },
    ],
    email: [
        {
            required: true,
            message: 'Please input the gender of all participants',
        },
    ],
    phone: [
        {
            required: true,
            message: 'Please input the height of all participants',
        },
    ],
    address: [
        {
            required: true,
            message: 'Please input the weight of all participants',
        },
    ],
    participants: [
        {
            required: true,
            message: 'Please input the shoe size of all participants',
        },
    ],
    activity: [
        {
            required: true,
            message: 'Please input the shoe size of all participants',
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