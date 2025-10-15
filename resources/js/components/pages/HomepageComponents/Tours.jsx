import React, { useEffect } from "react";
import styled from "styled-components";
import { dimensions } from "../../../helper";
import { handleTransferForm } from "../../../redux/application/actions";
import { connect } from "react-redux";
import { fetchTours } from "../../../redux/tour/actions";
import {
    containerCommonStyle,
    primaryButtonStyle,
    Title,
} from "../Form/styles";

const Container = styled.section`
    ${containerCommonStyle}

    .circle {
        background-color: white !important;
    }
`;

const AirportTour = styled.div`
    margin: auto auto 50px auto;
    padding: 0px 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 60px;
    position: relative;

    img {
        order: ${(props) => (props.index % 2 ? 1 : 0)};
        width: 50%;
        border-radius: 20px;
    }

    .content {
        width: 50%;

        .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        h3 {
            font-size: clamp(18px, 2.5vw, 26px);
        }

        h2 {
            font-weight: bold;
            font-size: clamp(26px, 3vw, 42px);
            line-height: 100%;
        }

        button {
            ${primaryButtonStyle}
        }

        p {
            margin: 10px 0px;
        }
    }

    .background {
        background-color: ${({ theme }) => theme.primaryBackground};
        width: 100%;
        z-index: -1;
        position: absolute;
        left: 0;
        top: 50px;
        height: calc(100% - 100px);
        border-radius: 20px;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        margin-bottom: 70px;

        .content {
            width: 100%;
            order: 2;
        }

        img {
            width: 100%;
            order: 1;
        }

        .background {
            height: 100%;
        }
    }
`;

function Tours(props) {
    useEffect(() => {
        props.fetchTours();
    }, []);

    const { text } = props;
    return (
        <Container>
            <Title center>{text.title}</Title>

            {props.tours.map((tour, index) => (
                <AirportTour index={index} key={tour.id}>
                    <div className="background" />
                    <img src={tour.image} alt="airport" />
                    <div className="content">
                        <h3>
                            {tour.subtitle[localStorage.getItem("language")]}
                        </h3>
                        <h2>{tour.title[localStorage.getItem("language")]}</h2>
                        <p>
                            {
                                tour?.description[
                                    localStorage.getItem("language")
                                ]
                            }
                        </p>
                        <p>
                            {tour.description2 &&
                                tour.description2[
                                    localStorage.getItem("language")
                                ]}
                        </p>
                        <p>
                            {tour.description3 &&
                                tour.description3[
                                    localStorage.getItem("language")
                                ]}
                        </p>
                        <p>
                            {tour.description4 &&
                                tour.description4[
                                    localStorage.getItem("language")
                                ]}
                        </p>

                        <br />
                        <p>{tour.trajectory}</p>
                        <div className="button-container">
                            <button
                                onClick={() => props.handleTransferForm(tour)}
                            >
                                <div className="circle" /> {text.button}
                            </button>

                            {tour.trajectory ? (
                                <p>{parseInt(tour.price)}€</p>
                            ) : (
                                <div>
                                    <p>
                                        {parseInt(tour.price)}€, up to 4 persons
                                    </p>
                                    <p>
                                        {parseInt(tour.price) + 20}€, over 4
                                        persons
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </AirportTour>
            ))}
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTours: (filters) => dispatch(fetchTours(filters)),
        handleTransferForm: (state) => dispatch(handleTransferForm(state)),
    };
};

const mapStateToProps = (state) => {
    return {
        tours: state.tour.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tours);
