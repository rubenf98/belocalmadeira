import React from "react";
import styled from "styled-components";
import Row from "antd/es/row";
import Form from "antd/es/form";
import Col from "antd/es/col";
import { dimensions } from "../../helper";
import axios from "axios";
import {
    containerCommonStyle,
    CustomInput,
    CustomTextArea,
    secundaryButtonStyle,
} from "./Form/styles";
import Faq from "./HomepageComponents/Faq";
import { connect } from "react-redux";

const Container = styled.div`
    ${containerCommonStyle}
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    margin: 150px auto;

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        .hide {
            margin-bottom: 30px;
        }
    }
`;

const SectionContainer = styled.div`
    width: 50%;
    margin: auto;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const ContactForm = styled(Form)`
    width: 100%;
    margin: 20px 0px 50px 0px;
`;

const FormContainer = styled.div`
    width: 100%;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    h2 {
        font-size: 26px;
    }

    h3 {
        font-size: 22px;
    }

    h2,
    h3,
    p,
    a {
        color: ${({ theme }) => theme.primary};

        &:hover {
            color: ${({ theme }) => theme.primary};
        }
    }
`;

const Sentence = styled.div`
    font-size: clamp(50px, 4vw, 82px);
    font-family: "Russo One", sans-serif;
    line-height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.primary};
`;

const Submit = styled.button`
    margin-top: 30px;
    ${secundaryButtonStyle}
`;

const rules = {
    name: [
        {
            required: true,
            message: "Please input your name!",
        },
    ],
    email: [
        {
            required: true,
            message: "Please input your email!",
        },
        {
            type: "email",
        },
    ],
    message: [
        {
            required: true,
            message: "Please input your message!",
        },
    ],
};

function Contact({ language }) {
    const [form] = Form.useForm();

    const { text } = require("../../assets/" + language + "/contact");
    const homepageText = require("../../assets/" + language + "/homepage");

    const onFinish = (values) => {
        axios.post(`${window.location.origin}/api/contact`, values);

        setTimeout(() => {
            form.resetFields();
            //setSubmitted(true);
        }, 300);
    };

    return (
        <div>
            <Container>
                <SectionContainer className="hide">
                    <Sentence>{text.sentence}</Sentence>
                </SectionContainer>
                <SectionContainer>
                    <FormContainer>
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
                                    <Form.Item name="name" rules={rules.name}>
                                        <CustomInput
                                            colored
                                            placeholder={text.form.items[0]}
                                            size="large"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={24} lg={24}>
                                    <Form.Item name="email" rules={rules.email}>
                                        <CustomInput
                                            colored
                                            placeholder={text.form.items[1]}
                                            size="large"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item name="message" rules={rules.message}>
                                <CustomTextArea
                                    colored
                                    placeholder={text.form.items[2]}
                                    size="large"
                                    maxLength={180}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Submit
                                    size="large"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    <div className="circle" />{" "}
                                    {text.form.submit}
                                </Submit>
                            </Form.Item>
                        </ContactForm>
                        <h3>{text.contact}</h3>
                        <Row type="flex">
                            <p style={{ marginRight: "20px" }}>
                                +351 935 124 260
                            </p>

                            <p>
                                <a href="mailto:belocalmadeira@gmail.com">
                                    belocalmadeira@gmail.com
                                </a>
                            </p>
                        </Row>
                    </FormContainer>
                </SectionContainer>
            </Container>
            <Faq text={homepageText.text.faq} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(Contact);
