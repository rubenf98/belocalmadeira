import React, { useEffect, useState } from "react";
import { Row, Form, Col, Input } from "antd";
import {
    CustomCheckbox,
    CustomCascader,
    CustomInput,
    CustomInputNumber,
    CustomPhoneSelect,
    CustomSearch,
} from "./styles";
import { fetchActivities } from "../../../redux/activity/actions";
import { fetchCoupon } from "../../../redux/coupon/actions";
import { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import { connect } from "react-redux";
import styled from "styled-components";

const Warning = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;

    img {
        width: 20px;
        margin-right: 10px;
    }

    div {
        margin: 0px;
        color: white;
        font-size: 14px;
        opacity: 0.6;

        p {
            margin: 0px;
        }
    }
`;

const rules = {
    name: [
        {
            required: true,
            message: "",
        },
    ],
    email: [
        {
            required: true,
            message: "",
        },
        {
            type: "email",
            message: "Please specify a valid email",
        },
    ],
    phone: [
        {
            required: true,
            message: "",
        },
    ],
    address: [
        {
            required: true,
            message: "",
        },
    ],
    participants: [
        {
            required: true,
            message: "",
        },
    ],
    activity: [
        {
            required: true,
            message: "Please select an activity",
        },
    ],
};

function Information({
    fetchCoupon,
    fetchActivities,
    data,
    text,
    currentCoupon,
}) {
    const [couponError, setCouponError] = useState(false);
    useEffect(() => {
        fetchActivities({ language: localStorage.getItem("language") });
    }, []);

    const handleCoupon = (value) => {
        fetchCoupon(value)
            .then(() => {
                setCouponError(false);
            })
            .catch(() => {
                setCouponError(true);
            });
    };

    return (
        <ConfigProvider locale={en}>
            <div>
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item name="name" rules={rules.name}>
                            <CustomInput
                                size="large"
                                placeholder={text.form.name.placeholder}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item name="email" rules={rules.email}>
                            <CustomInput
                                size="large"
                                placeholder={text.form.email.placeholder}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            name="phone"
                            rules={rules.phone}
                            initialValue={{
                                short: "pt",
                            }}
                        >
                            <CustomPhoneSelect
                                size="large"
                                placeholder={text.form.phone.placeholder}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item name="address" rules={rules.address}>
                            <CustomInput
                                size="large"
                                placeholder={text.form.address.placeholder}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            name="participants"
                            rules={rules.participants}
                        >
                            <CustomInputNumber
                                max={15}
                                min={1}
                                controls={false}
                                size="large"
                                placeholder={text.form.participants.placeholder}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item name="activity" rules={rules.activity}>
                            <CustomCascader
                                size="large"
                                expandTrigger="hover"
                                options={data}
                                allowClear={false}
                                placeholder={text.form.activity.placeholder}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item name="private" valuePropName="checked">
                            <CustomCheckbox>
                                {text.form.private.placeholder}
                            </CustomCheckbox>
                        </Form.Item>
                    </Col>

                    <Col xs={24}>
                        <Warning>
                            <img src="/icon/discount.svg" alt="discount" />
                            <div>{text.family}</div>
                        </Warning>
                    </Col>

                    <Col span={24}>
                        <Form.Item name="coupon">
                            <>
                                <CustomSearch
                                    style={{ width: "50%" }}
                                    placeholder={text.form.coupon.placeholder}
                                    onSearch={handleCoupon}
                                />
                                {couponError ? (
                                    <p style={{ color: "red", margin: 0 }}>
                                        Promo code does not exist, or is no
                                        longer valid.
                                    </p>
                                ) : (
                                    <>
                                        {currentCoupon?.id && (
                                            <p
                                                style={{
                                                    color: "white",
                                                    margin: 0,
                                                }}
                                            >
                                                Promo code of{" "}
                                                {currentCoupon.discount}% will
                                                be applied at the end.
                                            </p>
                                        )}
                                    </>
                                )}
                            </>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        </ConfigProvider>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivities: (filters) => dispatch(fetchActivities(filters)),
        fetchCoupon: (filters) => dispatch(fetchCoupon(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.activity.data,
        currentCoupon: state.coupon.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);
