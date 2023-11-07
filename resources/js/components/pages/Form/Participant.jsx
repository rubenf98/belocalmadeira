import React, { Fragment, useState, useEffect } from 'react'
import { Row, Form, Input, DatePicker, Select, Col } from 'antd';
import styled from "styled-components";
import { dimensions } from "../../../helper";
import { CustomCheckbox, CustomSelect, CustomInput, CustomInputNumber, CustomDatePicker } from './styles';

const PersonForm = styled(Row)`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 12px;
`;

const Title = styled.h3`
    font-size: 24px;
    font-family: 'Playfair Display', serif;
    color: white;
    margin: 10px 0px;
`;


const rules = {
    name: [
        {
            required: true,
            message: 'Please input the name of all participants',
        },
    ],
    bday: [
        {
            required: true,
            message: 'Please input the birthday of all participants',
        },
    ],
    gender: [
        {
            required: true,
            message: 'Please input the gender of all participants',
        },
    ],
    height: [
        {
            required: true,
            message: 'Please input the height of all participants',
        },
    ],
    weight: [
        {
            required: true,
            message: 'Please input the weight of all participants',
        },
    ],
    shoe: [
        {
            required: true,
            message: 'Please input the shoe size of all participants',
        },
    ],
};

function Participant({ text, nParticipant }) {
    return (
        <div>
            <Title>{text.subtitle} {nParticipant}</Title>

            <PersonForm gutter={32} key={index}>
                <Col xs={24} md={8}>
                    <Form.Item name="name" rules={rules.name}>
                        <CustomInput placeholder={text.form.person.name.placeholder} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item name="age" rules={rules.bday}>
                        <CustomDatePicker picker="month" placeholder={text.form.person.bday.placeholder} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item name="shoe" rules={rules.shoe}>
                        <CustomSelect
                            dropdownRender={menu => (
                                <div className='colored-dropdown'>
                                    {menu}
                                </div >
                            )}
                            placeholder={text.form.person.shoe.placeholder}
                        >
                            <Select.Option value="35">2 UK / 35 EU</Select.Option>
                            <Select.Option value="36">3 UK / 36 EU</Select.Option>
                            <Select.Option value="37">4 UK / 37 EU</Select.Option>
                            <Select.Option value="38">5 UK / 38 EU</Select.Option>
                            <Select.Option value="39">5.5 UK / 39 EU</Select.Option>
                            <Select.Option value="40">6.5 UK / 40 EU</Select.Option>
                            <Select.Option value="41">7 UK / 41 EU</Select.Option>
                            <Select.Option value="42">8 UK / 42 EU</Select.Option>
                            <Select.Option value="43">9 UK / 42 EU</Select.Option>
                            <Select.Option value="44">9.5 UK / 44 EU</Select.Option>
                            <Select.Option value="45">10 UK / 45 EU</Select.Option>
                            <Select.Option value="46">11 UK / 46 EU</Select.Option>
                            <Select.Option value="47">12 UK / 47 EU</Select.Option>
                        </CustomSelect>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item name="gender" rules={rules.gender}>
                        <CustomSelect
                            dropdownRender={menu => (
                                <div className='colored-dropdown'>
                                    {menu}
                                </div >
                            )}
                            placeholder={text.form.person.gender.placeholder}
                        >
                            <Select.Option value="male">{text.form.person.gender.options[0]}</Select.Option>
                            <Select.Option value="female">{text.form.person.gender.options[1]}</Select.Option>
                        </CustomSelect>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item name="height" rules={rules.height}>
                        <CustomSelect
                            dropdownRender={menu => (
                                <div className='colored-dropdown'>
                                    {menu}
                                </div >
                            )}
                            placeholder={text.form.person.height.placeholder}
                        >
                            <Select.Option value="120">&lt; 120cm</Select.Option>
                            {[...Array(89)].map((count, index) =>
                                <Select.Option key={index} value={index + 121}>{index + 121}cm</Select.Option>
                            )}
                            <Select.Option value="Over 210">&gt; 210cm</Select.Option>
                        </CustomSelect>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item name="weight" rules={rules.weight}>
                        <CustomSelect
                            dropdownRender={menu => (
                                <div className='colored-dropdown'>
                                    {menu}
                                </div >
                            )}
                            placeholder={text.form.person.weight.placeholder}
                        >
                            <Select.Option value="Under 30kg">&lt; 30kg</Select.Option>
                            {[...Array(89)].map((count, index) =>
                                <Select.Option key={index} value={index + 31}>{index + 31}kg</Select.Option>
                            )}
                            <Select.Option value="Over 120kg">&gt; 120kg</Select.Option>
                        </CustomSelect>
                    </Form.Item>
                </Col>


            </PersonForm>
        </div>
    )
}

export default Participant