import React from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../helper";
import SectionTitle from "./SectionTitle";
import { handleForm } from "../../redux/application/actions";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    containerCommonStyle,
    phoneButtonStyle,
    secundaryButtonStyle,
    Title,
} from "../pages/Form/styles";

const Container = styled.section`
    ${containerCommonStyle}
`;

const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
    max-width: ${maxWidth};
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 200px;

    div {
        width: 33%;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }

        img {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    }
`;

const StepsContainer = styled.div`
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    max-width: ${maxWidth};
    width: 100%;
    margin: 50px auto 0px auto;
`;

const Step = styled.div`
    width: 33%;
    padding: 30px 15px;
    box-sizing: border-box;

    .content {
        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
        height: 100%;
        display: flex;
        border-radius: 10px;
        flex-direction: column;
    }

    .step-header {
        position: relative;
        //background-color: rgba(0,0,0,.2);
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(255, 255, 255, 0) 30%
        );

        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            position: relative;
            border-radius: 10px;

            @media (max-width: ${dimensions.md}) {
                max-height: 500px;
            }
        }

        p {
            z-index: 2;
            position: absolute;
            bottom: 0px;
            left: 15px;
            font-size: 18px;
            font-weight: bold;
            color: white;
        }
    }

    .step-content {
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 1;

        p {
            font-size: 16px;
            font-weight: 300;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }

        .title {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 15px;
            margin-bottom: 20px;

            h3,
            .price {
                font-size: clamp(22px, 3vw, 32px);
                font-weight: bold;
                margin: 0px;
                line-height: 100%;

                span {
                    font-size: 18px;
                }
            }

            h3 {
                font-style: italic;
            }
        }
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;
        width: 50%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin: 30px 0px;
    }

    h4,
    h5 {
        margin: 0px;
    }

    h5 {
        font-size: 22px;
        font-weight: 300;
        letter-spacing: -0.06px;

        @media (max-width: ${dimensions.md}) {
            font-size: 20px;
        }
    }
`;

const OrderButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: ${(props) => props.background};
    border: ${(props) => "1px solid " + props.border};
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 4px;
    background-size: 110%;
    text-transform: capitalize;
    color: ${(props) => props.color};
    font-weight: bold;
    margin-top: 10px;
    min-width: 100px;
    text-align: center;
    text-transform: uppercase;

    &:hover {
        background: ${(props) => props.backgroundHover};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    .action-button {
        ${secundaryButtonStyle}
    }

    .phone-button {
        ${phoneButtonStyle}
    }
`;

function Activity({
    data,
    gallery,
    level_dictionary,
    theme,
    handleForm,
    language,
}) {
    return (
        <Container>
            <StepsContainer>
                {data.map((experience, index) => (
                    <Step key={experience.id}>
                        <div className="content">
                            <div className="step-header">
                                <img src={experience.image} />
                                <p>{level_dictionary[experience.level]}</p>
                            </div>

                            <div className="step-content">
                                <div className="title">
                                    <h3>{experience.name[language]}</h3>
                                    <div className="price">
                                        {experience.price}
                                        <span>/p</span>
                                    </div>
                                </div>

                                <p style={{ flex: 1 }}>
                                    {experience.description[language]}
                                </p>
                                <ButtonContainer>
                                    <button
                                        onClick={() =>
                                            handleForm(true, {
                                                activity_id: [1, experience.id],
                                            })
                                        }
                                        className="action-button"
                                    >
                                        <div className="circle" />{" "}
                                        {language == "en"
                                            ? "Book now"
                                            : "Reservar"}
                                    </button>

                                    <Link
                                        to={
                                            "/activities/" +
                                            experience.key +
                                            "/" +
                                            experience.id
                                        }
                                    >
                                        <button className="phone-button">
                                            {language == "en"
                                                ? "See more"
                                                : "Saber mais"}
                                        </button>
                                    </Link>
                                </ButtonContainer>
                            </div>
                        </div>
                    </Step>
                ))}
            </StepsContainer>

            <SectionTitle title={gallery.title} subtitle={gallery.subtitle} />

            <Gallery>
                {gallery.images.map((column) => (
                    <div>
                        {column.map((image, index) => (
                            <picture key={index}>
                                <source
                                    srcSet={
                                        "/image/activities/gallery/" +
                                        image +
                                        ".jpg"
                                    }
                                    type="image/jpg"
                                />
                                <img
                                    alt="gallery image"
                                    className="profile"
                                    src={
                                        "/image/activities/gallery/" +
                                        image +
                                        ".webp"
                                    }
                                    loading="lazy"
                                />
                            </picture>
                        ))}
                    </div>
                ))}
            </Gallery>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility, activity) =>
            dispatch(handleForm(visibility, activity)),
    };
};

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Activity));
