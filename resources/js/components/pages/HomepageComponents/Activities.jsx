import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { dimensions } from "../../../helper";
import { Link } from "react-router-dom";
import {
    containerCommonStyle,
    secundaryButtonStyle,
    Title,
} from "../Form/styles";

const Container = styled.section`
    ${containerCommonStyle}
`;

const ActivitiesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 100px auto;

    h4 {
        color: ${(props) => props.titleColor};
    }
`;

const Activity = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px 10%;

    .text-container {
        width: 50%;
        order: ${(props) => (props.isOdd ? "1" : "0")};
        padding: 70px 0px;
        box-sizing: border-box;

        h4 {
            text-transform: uppercase;
        }

        h3 {
            text-transform: capitalize;
            font-size: clamp(26px, 3vw, 36px);
            margin-top: 0px;
            line-height: 100%;
        }

        p {
            font-weight: 300;
            font-size: clamp(16px, 2vw, 18px);
            text-align: justify;
        }

        button {
            margin-top: 50px;
            ${secundaryButtonStyle}
        }
    }

    img {
        order: ${(props) => (props.isOdd ? "0" : "1")};
        width: 50%;
        object-fit: cover;
        max-height: 700px;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;

        margin-top: -50px;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        img {
            order: 2;
            width: 100%;
            max-height: 300px;
            margin: 0px auto 100px auto !important;
        }

        .text-container {
            width: 100%;
            text-align: center;
            padding: 0px;
        }

        button {
            margin: 0px auto 20px auto !important;
        }
    }
`;

function Activities({ text }) {
    return (
        <Container id="activities">
            <Title center>{text.title}</Title>

            <ActivitiesContainer>
                {text.items.map((activity, index) => (
                    <Activity isOdd={index % 2} key={index}>
                        <div className="text-container">
                            <h4>{activity.subtitle}</h4>
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>

                            <Link to={"/activities/" + activity.subtitle}>
                                <button>
                                    <div className="circle" /> {text.button}
                                </button>
                            </Link>
                        </div>
                        <img
                            src={
                                "/image/homepage/" + activity.subtitle + ".jpg"
                            }
                            alt=""
                        />
                    </Activity>
                ))}
            </ActivitiesContainer>
        </Container>
    );
}

export default Activities;
