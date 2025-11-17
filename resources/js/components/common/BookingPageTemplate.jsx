import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, Form, Row, Carousel, Image } from "antd";
import { connect } from "react-redux";
import { fetchDisabledDates } from "../../redux/reservation/actions";
import {
    containerCommonStyle,
    secundaryButtonStyle,
} from "../pages/Form/styles";
import dayjs from "dayjs";
import { dimensions } from "../../helper";
import BookingPageFormTemplate from "./BookingPageFormTemplate";

const Container = styled.div`
    ${containerCommonStyle}

    h2 {
        font-size: clamp(28px, 3vw, 36px);
        font-family: "Russo One", sans-serif;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px 0px 50px 0px;

        h2 {
            padding-left: 20px;
            box-sizing: border-box;
        }
    }

    .ant-picker-calendar,
    .ant-picker-panel {
        background-color: ${({ theme }) => theme.customWhite};
    }

    .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
        background-color: ${({ theme }) => theme.primary};
    }

    .ant-picker-cell-in-view.ant-picker-cell-today
        .ant-picker-cell-inner::before {
        border-color: ${({ theme }) => theme.primary};
    }
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
        font-size: 16px;
        opacity: 0.7;
    }
`;

const DetailsContainer = styled(Row)`
    width: 100%;
    margin-bottom: 50px;

    h4 {
        text-transform: uppercase;
        margin-bottom: 0px;
    }

    p {
        opacity: 0.7;
        margin: 0px 0px 10px 0px;
    }
`;

const ParagraphContainer = styled.div`
    margin: 50px 0px;
    width: 100%;
    margin: auto;

    h2 {
        font-size: 40px;
    }

    p {
        font-size: 16px;
        opacity: 0.7;
    }
`;

const FormContainer = styled.div`
    width: 35%;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 20px;
        margin: auto;
    }

    .price-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 30px 10px;
        box-sizing: border-box;
        color: white;
        background-color: ${({ theme }) => theme.primary};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        span {
            font-size: clamp(24px, 2.5vw, 40px);
            margin-left: 5px;
            line-height: 90%;
        }
    }

    .form {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 20px;
        box-sizing: border-box;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        button {
            ${secundaryButtonStyle}
            margin: auto;
        }
    }
`;

const InfoContainer = styled.div`
    width: 60%;
    padding: 0px 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const GalleryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    height: 50vh;
    gap: 20px;
    margin-bottom: 50px;

    .images {
        display: flex;
        justify-content: space-between;
        width: 20%;
        flex-direction: column;
        gap: 20px;
        max-height: 50vh;
        overflow-y: auto;

        .ant-image {
            width: 100%;

            img {
                max-height: calc(50vh / 5);
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .main_gallery_image {
        width: 80%;
        height: 50vh;
        .ant-image {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .ant-image-mask {
            width: 100%;
        }
    }

    img {
        border-radius: 12px;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin-bottom: 20px;
        order: 1;

        .ant-carousel {
            display: block;
        }

        .images,
        .main_gallery_image {
            display: none;
        }
    }
`;

const MobileCarousel = styled(Carousel)`
    width: 0px;
    height: 0px;

    @media (max-width: ${dimensions.md}) {
        width: 100vw;
        height: 50vh;

        img {
            width: 100%;
            height: 50vh;
            object-fit: cover;
        }
    }
`;

function BookingPageTemplate({
    handleForm,
    fetchDisabledDates,
    calendarMetadata,
    text,
    experience,
}) {
    const [form] = Form.useForm();
    useEffect(() => {
        fetchDisabledDates();
    }, []);

    useEffect(() => {
        var init = dayjs().add(1, "day");
        var condition = true;
        while (condition) {
            if (
                !calendarMetadata.disabled.includes(
                    dayjs(init).format("YYYY-MM-DD")
                )
            ) {
                condition = false;
            } else {
                init.add(1, "day");
            }
        }

        form.setFieldsValue({ date: init });
    }, [calendarMetadata]);

    const onPanelChange = (value) => {
        form.setFieldsValue({ date: value });
    };

    const handleSubmit = () => {
        form.validateFields().then((data) => {
            handleForm(data);
        });
    };

    return (
        <Container>
            <h2 className="subtitle">{experience.name["en"]}</h2>
            <Content>
                <InfoContainer>
                    <GalleryContainer
                        n_images={text.images[experience.id].length}
                    >
                        <div className="main_gallery_image">
                            <Image src={experience.image} />
                        </div>
                        <div className="images">
                            {text.images[experience.id].map((image, index) => (
                                <Image
                                    key={index}
                                    src={
                                        "/image/activities/levels/" +
                                        image +
                                        ".jpg"
                                    }
                                />
                            ))}
                        </div>

                        <MobileCarousel autoplay showDots infinite>
                            <img src={experience.image} />

                            {text.images[experience.id].map((image, index) => (
                                <img
                                    key={index}
                                    src={
                                        "/image/activities/levels/" +
                                        image +
                                        ".jpg"
                                    }
                                />
                            ))}
                        </MobileCarousel>
                    </GalleryContainer>

                    <h3>{text.titles[0]}</h3>
                    <DetailsContainer type="flex" justify="space-between">
                        {text.details.items[experience.id].map(
                            (detail, detailIndex) => (
                                <Col xs={12} md={12}>
                                    <h4>{text.details.titles[detailIndex]}</h4>
                                    {detailIndex == 4 ? (
                                        <a
                                            href="https://maps.app.goo.gl/QGif4UZZpUGJGnph7"
                                            target="__blank"
                                        >
                                            {detail}
                                        </a>
                                    ) : (
                                        <p>{detail}</p>
                                    )}
                                </Col>
                            )
                        )}
                    </DetailsContainer>

                    <h3>{text.titles[1]}</h3>
                    <ParagraphContainer>
                        {text.description[experience.id].map((paragraph) => (
                            <p>{paragraph}</p>
                        ))}
                    </ParagraphContainer>

                    {text.additionail &&
                        text.additionail[experience.id] &&
                        text.additionail[experience.id].titles.map(
                            (title, index) => (
                                <div key={"additionail_" + index}>
                                    <h3>{title}</h3>
                                    <ul>
                                        {text.additionail[experience.id].items[
                                            index
                                        ].map((info) => (
                                            <li>{info}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        )}
                </InfoContainer>
                <FormContainer>
                    <div className="price-container">
                        from <span>{experience.price}€</span>
                    </div>
                    <div className="form">
                        <Form name="basic" layout="vertical" form={form}>
                            <BookingPageFormTemplate
                                template={experience.key}
                                onPanelChange={onPanelChange}
                                handleSubmit={handleSubmit}
                                calendarMetadata={calendarMetadata}
                                text={text}
                            />
                        </Form>
                    </div>
                </FormContainer>
            </Content>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDisabledDates: (participants) =>
            dispatch(fetchDisabledDates(participants)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingPageTemplate);
