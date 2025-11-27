import { useEffect } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Col, Input } from "antd";
import { connect } from "react-redux";

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

    const handleModalClose = () => {
        form.resetFields();
        if (props.handleModalClose) props.handleModalClose();
    };

    useEffect(() => {
        const { visible, record } = props;
        if (visible && record?.id) {
            form.setFieldsValue({
                email: record?.email,
                phone: record?.phone,
            });
        }
    }, [props.visible, props.record, form]);

    const onFinish = (values) => {
        if (props?.record?.id) {
            props.updateNewsletter(props.record.id, values);
        } else {
            props.createNewsletter(values);
        }
        handleModalClose();
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
                                <Form.Item name="email" label="Email">
                                    <Input
                                        placeholder="Email"
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="phone" label="Telemóvel">
                                    <Input
                                        placeholder="Telemóvel"
                                        style={{ width: "100%" }}
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
        loading: state.newsletter.loading,
    };
};

export default connect(mapStateToProps, null)(FormContainer);
