import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Col, Input, DatePicker, Upload } from "antd";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dayjs from "dayjs";

const ButtonContainer = styled(Row)`
    padding: 30px 0px 10px 0;
`;

const Container = styled.div`
    background: white;
    border-radius: 5px;
    width: 100%;
`;

const FormContainer = (props) => {
    const [form] = Form.useForm();
    const [image, setImage] = useState(null);

    const handleModalClose = () => {
        form.resetFields();
        if (props.handleModalClose) props.handleModalClose();
    };

    useEffect(() => {
        const { visible, record } = props;
        if (visible && record?.id) {
            form.setFieldsValue({
                title: record?.title,
                date: dayjs(record?.date),
                body: record?.body,
            });
        }
    }, [props.visible, props.record, form]);

    const onFinish = (values) => {
        values.date = dayjs(values.date).format("YYYY-MM-DD");

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("date", values.date);
        formData.append("body", values.body);
        formData.append("image", image);

        if (props?.record?.id) {
            formData.append("_method", "PATCH");
            //https://github.com/laravel/framework/issues/13457
            props.updateBlog(props.record.id, formData);
        } else {
            props.createBlog(formData);
        }
        handleModalClose();
    };

    const uploadprops = {
        onRemove: (file) => {
            setImage(null);
        },
        beforeUpload: (file) => {
            setImage(file);
            return false;
        },
        fileList: image ? [image] : [],
    };

    return (
        <Container>
            <div>
                <Modal
                    width={720}
                    onCancel={handleModalClose}
                    visible={props.visible}
                    footer={null}
                >
                    <Form form={form} name="basic" onFinish={onFinish}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item name="title" label="Título">
                                    <Input
                                        placeholder="Título"
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="date" label="Data">
                                    <DatePicker
                                        placeholder="Data"
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Upload {...uploadprops}>
                                    <Button htmlType="button">
                                        Upload Image
                                    </Button>
                                </Upload>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="body">
                                    <ReactQuill
                                        theme="snow"
                                        style={{ height: "200px" }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <ButtonContainer type="flex" justify="end">
                            <Button
                                loading={props.loading}
                                size="large"
                                width="150px"
                                type="primary"
                                htmlType="submit"
                            >
                                Submeter
                            </Button>
                        </ButtonContainer>
                    </Form>
                </Modal>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.blog.loading,
    };
};

export default connect(mapStateToProps, null)(FormContainer);
