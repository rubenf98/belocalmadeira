import React from 'react'
import styled, { withTheme } from "styled-components";
import Row from "antd/es/row"
import Form from "antd/es/form"
import Button from "antd/es/button"
import Col from "antd/es/col"
import { dimensions } from "../../helper";
import axios from "axios";
import { CustomInput, CustomTextArea } from "./Form/styles";
import PageHeader from '../common/PageHeader';


const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    width: 90%;
    margin: 200px auto;
`;

const SectionContainer = styled.div`
    width: 50%;
    margin: auto;
`;

const ContactForm = styled(Form)`
    width: 60%;
    margin: 20px 0px 50px 0px;
`;

const FormContainer = styled.div`
    width: 70%;

    h2, h3 {
        font-family: 'Playfair Display', serif;
    }

    h2 {
        font-size: 26px;
    }

    h3 {
        font-size: 22px;
    }
    
    h2, h3, p, a {
        color: ${props => props.color};

        &:hover {
            color: ${props => props.color};
        }
    }
`;

const Sentence = styled.div`
    font-size: 82px;
    line-height: 70px;
    width: 60%;
    color: ${props => props.color};
`;

const Submit = styled(Button)`
    background: white;
    border: none;
    padding: 10px;
    text-transform: uppercase;
    background-color: ${props => props.text};
    transition: box-shadow .3s ease;

    &:hover, &:focus {
        color: white;
        background-color: ${props => props.text};
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,.5);
    }
    @media (max-width: ${dimensions.md}){
        margin: auto;
    }
`;

const rules = {
    name: [
        {
            required: true,
            message: 'Please input your name!',
        },
    ],
    email: [
        {
            required: true,
            message: 'Please input your email!',
        },
        {
            type: "email",
        },
    ],
    message: [
        {
            required: true,
            message: 'Please input your message!',
        },
    ]
}

function Contact({ theme }) {
    const [form] = Form.useForm();

    const { text } = require('../../assets/' + localStorage.getItem('language') + "/contact");


    const onFinish = (values) => {
        axios.post(`${window.location.origin}/api/contact`, values);

        setTimeout(() => {
            form.resetFields();
            setSubmitted(true);
        }, 300);

    };



    return (
        <div>
            <PageHeader title="Contact Us" subtitle="Fowl living for lights our ears bearing to heaven signs" />
            <Container>
                <SectionContainer>
                    <Sentence color={theme.primary}>
                        Life. <br />
                        It could be
                        just the thing
                        your brand
                        needs.
                    </Sentence>


                </SectionContainer>
                <SectionContainer>
                    <FormContainer color={theme.primary}>
                        <h2>{text.formTitle}</h2>
                        <ContactForm
                            requiredMark={false}
                            name="basic"
                            onFinish={onFinish}
                            layout="vertical"
                            form={form}
                        >
                            <Row gutter={16}>
                                <Col md={24} lg={24}>
                                    <Form.Item
                                        name="name"
                                        rules={rules.name}
                                    >
                                        <CustomInput placeholder={text.form.items[0]} size="large" />
                                    </Form.Item>
                                </Col>
                                <Col md={24} lg={24}>
                                    <Form.Item
                                        name="email"
                                        rules={rules.email}
                                    >
                                        <CustomInput placeholder={text.form.items[1]} size="large" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item

                                name="message"
                                rules={rules.message}
                            >
                                <CustomTextArea placeholder={text.form.items[2]} size="large" maxLength={180} />
                            </Form.Item>

                            <Form.Item>
                                <Submit size="large" type="primary" htmlType="submit" text={theme.primary}>
                                    {text.form.submit}
                                </Submit>
                            </Form.Item>
                        </ContactForm>
                        <h3>{text.contact}</h3>
                        <Row type="flex">
                            <p style={{ marginRight: "20px" }}>+351 935 124 260</p>

                            <p>
                                <a href="mailto:belocalmadeira@gmail.com">
                                    belocalmadeira@gmail.com
                                </a>
                            </p>
                        </Row>
                    </FormContainer>


                </SectionContainer>


            </Container>
        </div>
    )
}

export default withTheme(Contact)
