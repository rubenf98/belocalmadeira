import React from "react";
import styled from "styled-components";
import {
    containerCommonStyle,
    phoneButtonStyle,
    secundaryButtonStyle,
} from "./Form/styles";
import { connect } from "react-redux";
import { dimensions } from "../../helper";

const Container = styled.section`
    ${containerCommonStyle}

    .header {
        display: flex;
        align-items: flex-start;
        margin: 150px auto 100px auto;
        flex-wrap: wrap;
    }

    .packages {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 50px;
    }

    @media (max-width: ${dimensions.lg}) {
        .header {
            margin: 0px auto 50px auto;
        }
    }
`;

const Information = styled.div`
    width: 50%;
    padding-right: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    p,
    li {
        font-weight: 300;
        text-align: justify;
        font-size: clamp(16px, 2vw, 16px);

        span {
            font-weight: bold;
        }
    }

    h2 {
        font-size: clamp(28px, 4vw, 36px);
    }

    .button-container {
        display: flex;
        align-items: center;
        gap: 20px;

        .action-button {
            ${secundaryButtonStyle}
        }

        .phone-button {
            ${phoneButtonStyle}
        }
    }
`;

const Grid = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 20px;
    width: 50%;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    .column {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: column;
        gap: 20px;
        width: 33%;

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
`;

const Card = styled.div`
    width: calc(33% - 30px);
    box-sizing: border-box;

    .content {
        box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }

    .card-header {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        width: 100%;
        height: 300px;
        object-fit: cover;

        @media (max-width: ${dimensions.md}) {
            max-height: 500px;
        }
    }

    .info {
        padding: 20px;
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-direction: column;
        p,
        li {
            font-size: 16px;
            font-weight: 300;
            text-align: justify;
        }

        h3 {
            font-size: clamp(20px, 3vw, 26px);
            font-weight: bold;
        }

        .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            margin-top: 30px;

            .action-button {
                ${secundaryButtonStyle}
            }

            .price {
                line-height: 100%;
                font-size: clamp(16px, 2vw, 20px);
            }
        }
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 10px;
        width: calc(50% - 25px);
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin: 0px;
    }
`;

function MultiDay(props) {
    const { text } = require("../../assets/" + props.language + "/multiday");

    return (
        <Container>
            <div className="header">
                <Information>
                    <h2>{text.title}</h2>
                    <h3>{text.subtitle}</h3>

                    {text.descriptions.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <ul>
                        {text.items.map((item, index) => (
                            <li key={index}>
                                <span>{item.title}</span> {item.description}
                            </li>
                        ))}
                    </ul>

                    <p>{text.disclaimer}</p>
                </Information>
                <Grid>
                    <div className="column ">
                        <img
                            src="/images/activities/coasteering/17.jpg"
                            alt=""
                        />
                        <img
                            style={{ flex: 1 }}
                            src="/images/activities/hiking/19.jpg"
                            alt=""
                        />
                    </div>

                    <div className="column ">
                        <img
                            style={{ flex: 1 }}
                            src="/images/activities/canyoning/15.jpg"
                            alt=""
                        />
                        <img
                            style={{ minHeight: "200px" }}
                            src="/images/activities/canyoning/header.jpg"
                            alt=""
                        />
                    </div>

                    <div className="column ">
                        <img src="/images/activities/jeep/01.jpg" alt="" />
                        <img
                            style={{ flex: 1 }}
                            src="/images/activities/biking/12.jpg"
                            alt=""
                        />
                    </div>
                </Grid>
            </div>

            <div className="packages">
                {text.packages.map((packageItem) => (
                    <Card className="package" key={packageItem.title}>
                        <div className="content">
                            <img
                                className="card-header"
                                src={packageItem.image}
                                alt=""
                            />
                            <div className="info">
                                <h3>{packageItem.title}</h3>
                                <p>{packageItem.description}</p>

                                <ul>
                                    {packageItem.highlights.map(
                                        (highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        )
                                    )}
                                </ul>

                                <h4>{packageItem.itineraryTitle}</h4>
                                <ul style={{ flex: 1 }}>
                                    {packageItem.itinerary.map(
                                        (itinerary, index) => (
                                            <li key={index}>{itinerary}</li>
                                        )
                                    )}
                                </ul>

                                <div className="button-container">
                                    {packageItem.price}
                                    <a
                                        href={
                                            "mailto:belocalmadeira@gmail.com?subject=Be%20Local%20Madeira%20Order%20Inquiry&body=I'm%20interested%20in%20the%20multi%20day%20activity%20" +
                                            packageItem.title
                                                .replace(/ /g, "%20")
                                                .replace(/&/g, "%26") +
                                            "%0A%0AMy%20name%20is%3A%0ANumber%20of%20days%20interested%3A%0AWhich%20days%20%28dates%29%3A%0ANumber%20of%20people%3A%0AAdditional%20notes%20%28optional%29%3A%0A%0A%0A"
                                        }
                                        target="__blank"
                                    >
                                        <button className="action-button">
                                            <div className="circle" />{" "}
                                            {packageItem.button}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(MultiDay);
