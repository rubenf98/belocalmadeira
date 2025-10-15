import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { containerCommonStyle, Title } from "../Form/styles";
import { dimensions } from "../../../helper";
import { Input, Space } from "antd";

const Container = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 100px 0px 100px 0px;
    display: flex;
    align-items: center;
    gap: 40px;

    img {
        width: 50%;
        max-height: 500px;
        object-fit: cover;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .content {
        width: calc(${dimensions.custom} / 2);

        p {
            font-weight: 300;
            font-size: clamp(16px, 1.5vw, 18px);
        }
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px 100px 20px;
        flex-wrap: wrap;

        .content {
            order: 0;

            h2 {
                text-align: center;
                margin-bottom: 30px;
            }
        }

        img {
            order: 1;
            margin: auto;
            display: block;
            width: 100%;
            max-height: 200px;
            border-radius: 20px;
        }
    }
`;

function Newsletter(props) {
    const [form, setForm] = useState({ phone: undefined, email: undefined });

    return (
        <Container>
            <img src="/image/about/about3.jpg" alt="" />
            <div className="content">
                <Title>Sasd</Title>
                <p>
                    Subscribe our newsletter with promotions, tips and much more
                    for you to enjoy Madeira Island in the best way possible.
                </p>
                <Input.Group compact>
                    <Input
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        style={{
                            width: "50%",
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                        }}
                        placeholder="Enter your email"
                        suffix={
                            <div
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                }}
                            />
                        }
                    />
                    <Input
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        style={{
                            width: "50%",
                            borderTopRightRadius: "20px",
                            borderBottomRightRadius: "20px",
                        }}
                        suffix={
                            <div
                                onClick={() => alert("Clicked")}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    background: props.theme.primary,
                                    cursor: "pointer",
                                }}
                            />
                        }
                        placeholder="Enter your phone number"
                    />
                </Input.Group>
            </div>
        </Container>
    );
}

export default withTheme(Newsletter);
