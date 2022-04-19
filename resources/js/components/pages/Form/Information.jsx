import React, { Fragment, useState, useEffect } from 'react'
import { Row, Form, Input, Checkbox, DatePicker, Calendar, Col, Slider, Select, Button, Switch, Divider, InputNumber } from 'antd';
import styled, { css } from "styled-components";

const baseInputStyles = css`
  width: 100%;
    margin: 10px 0px;
    border: none;
    border-bottom: 1px solid #cfcfcf;
    background: transparent;
    color: #ffffff;

    &:focus,
    &:active, &:hover {
        outline: none;
        border: none !important;
        border-bottom: 1px solid white !important;
        appearance: none;
        box-shadow: none;
    }

    &::placeholder {
        color: #b1b1b1;
    }
`;




const CustomInput = styled(Input)`
    ${baseInputStyles}
`;

const CustomInputNumber = styled(InputNumber)`
    ${baseInputStyles}    
`;

const CustomCheckbox = styled(Checkbox)`
    color: #d6d6d6;

    .ant-checkbox-inner {
        background: transparent
    }

    .ant-checkbox-checked, .ant-checkbox-inner {
        border-color: white !important;
    }

    .ant-checkbox-checked,.ant-checkbox  {
        border-color: white;

        &:after {
            border-color: white !important;
        }
    }

    &:focus,
    &:active, &:hover {

        .ant-checkbox-inner, .ant-checkbox-checked  {
            border-color: white;
        }
        
    }
`;


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

                <Col xs={24}>
                    <Form.Item
                        name="participants"
                    >
                        <CustomInputNumber controls={false} size='large' placeholder='Number of participants (required)' />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item
                        name="participants"
                    >
                        <CustomCheckbox>Private Experience</CustomCheckbox>
                    </Form.Item>
                </Col>

            </Row>

            
        </div>
    )
}

export default Information