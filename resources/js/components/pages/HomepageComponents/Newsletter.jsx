import { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Title } from "../Form/styles";
import { dimensions } from "../../../helper";
import { Input, notification } from "antd";
import { connect } from "react-redux";
import { createNewsletter } from "../../../redux/newsletter/actions";

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
    const { text } = props;
    const [form, setForm] = useState({ phone: undefined, email: undefined });

    const handleSubmit = () => {
        if (form.email || form.phone) {
            props
                .createNewsletter(form)
                .then(() => {
                    setForm({ phone: undefined, email: undefined });
                    notification.success({
                        message: text.feedback,
                        description: text.feedbackInstruction,
                    });
                })
                .catch(() => {
                    notification.error({
                        message: text.error,
                        description: text.errorInstruction,
                    });
                });
        }
    };

    return (
        <Container>
            <img src="/images/activities/canyoning/18.jpg" alt="" />
            <div className="content">
                <Title>{text.title}</Title>
                <p>{text.paragraph}</p>
                <Input.Group compact>
                    <Input
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        style={{
                            width: "50%",
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                        }}
                        placeholder={text.emailPlaceholder}
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
                        value={form.phone}
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
                                onClick={handleSubmit}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    background: "green",
                                    cursor: "pointer",
                                }}
                            />
                        }
                        placeholder={text.phonePlaceholder}
                    />
                </Input.Group>
            </div>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewsletter: (data) => dispatch(createNewsletter(data)),
    };
};
const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
