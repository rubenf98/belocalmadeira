import React from 'react'
import { Row, Form, Col, Select } from 'antd';
import { CustomCheckbox, CustomSelect, CustomInput, CustomInputNumber } from './styles';

function Information() {
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
                        <CustomSelect size='large' placeholder="Activity">
                            <Select.Option value="canyoning">Canyoning</Select.Option>
                            <Select.Option value="hiking">Hiking</Select.Option>
                            <Select.Option value="biking">Biking</Select.Option>
                            <Select.Option value="coastering">Coastering</Select.Option>
                        </CustomSelect>
                    </Form.Item>
                </Col>

                <Col xs={24}>
                    <Form.Item
                        name="private"
                    >
                        <CustomCheckbox>Private Experience</CustomCheckbox>
                    </Form.Item>
                </Col>


            </Row>


        </div >
    )
}

export default Information