import React, { useEffect } from 'react'
import { Row, Form, Col } from 'antd';
import { CustomCheckbox, CustomCascader, CustomInput, CustomInputNumber } from './styles';
import { fetchActivities } from "../../../redux/activity/actions";
import { connect } from "react-redux";

function Information({ fetchActivities, data }) {
    useEffect(() => {
        fetchActivities({ language: localStorage.getItem('language') });
    }, [])

    return (
        <div>

            <Row gutter={32}>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="name"
                    >
                        <CustomInput size='large' placeholder='Name (required)' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="email"
                    >
                        <CustomInput size='large' placeholder='E-mail (required)' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="phone"
                    >
                        <CustomInput size='large' placeholder='Phone Number' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="address"
                    >
                        <CustomInput size='large' placeholder='Pickup Address' />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="participants"
                    >
                        <CustomInputNumber controls={false} size='large' placeholder='Number of participants (required)' />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="activity"
                    >
                        <CustomCascader
                            size="large"
                            expandTrigger="hover"
                            options={data}
                            allowClear={false}
                            placeholder='Activity'
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
                        <CustomCheckbox>Private Experience</CustomCheckbox>
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