import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Col, Input, DatePicker } from "antd";
import { connect } from "react-redux";

const ButtonContainer = styled(Row)`
    padding: 30px 0px 10px 0;
`;

const Container = styled.div`
    background: white;
    border-radius: 5px;
    width: 100%;
`;

class FormContainer extends Component {
    formRef = React.createRef();

    handleModalClose = () => {
        this.formRef.current.resetFields();

        this.props.handleModalClose();
    };
    componentDidUpdate(prevProps) {
        var { visible, record } = this.props;
        if (prevProps.visible != visible) {
            this.formRef.current.setFieldsValue({
                title: record.title,
            });
        }
    }

    onFinish = (values) => {
        this.props.updateBlog(this.props.record.id, values).then(() => {
            this.handleModalClose();
        });
    };

    render() {
        return (
            <Container>
                <div>
                    <Modal
                        width={720}
                        onCancel={this.handleModalClose}
                        visible={this.props.visible}
                        footer={null}
                    >
                        <Form
                            ref={this.formRef}
                            name="basic"
                            onFinish={this.onFinish}
                        >
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
                            </Row>
                            <ButtonContainer type="flex" justify="end">
                                <Button
                                    loading={this.props.loading}
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
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
    };
};

export default connect(mapStateToProps, null)(FormContainer);
