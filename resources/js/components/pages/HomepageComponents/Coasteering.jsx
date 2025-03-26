import { Image, Carousel } from "antd";
import React from "react";
import styled from "styled-components";
import { dimensions, maxWidth } from "../../../helper";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 100px auto;
    padding: 50px;
    box-sizing: border-box;
    max-width: 1600px;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
        padding: 0px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
    order: 2;

    .images {
        display: flex;
        justify-content: space-between;
        width: 20%;
        flex-direction: column;
        gap: 20px;
        padding: 0px 20px;
        box-sizing: border-box;
        order: 2;

        .ant-image {
            width: 100%;

            img {
                max-height: calc(60vh / 4);
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .main_image {
        width: 80%;
        order: 1;

        .ant-image {
            width: 100%;

            img {
                max-height: 80vh;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin-bottom: 20px;
        order: 1;

        .images,
        .main_image {
            display: none;
        }
    }
`;

const TextContainer = styled.div`
    width: 50%;
    padding: 0px 50px;
    box-sizing: border-box;
    order: 1;

    h2 {
        font-weight: bold;
        font-size: clamp(26px, 3vw, 42px);
        line-height: 100%;
        margin-bottom: 50px;
    }

    button {
        box-sizing: border-box;
        cursor: pointer;

        box-shadow: 0px;
        padding: 10px 30px 10px 30px;
        transition: 0.4s;
        border-radius: 4px;
        position: relative;
        background-size: 110%;
        text-transform: capitalize;

        font-weight: bold;
    }

    .primary_button {
        background: ${({ theme }) => theme.primary};
        color: white;
    }

    .secundary_button {
        margin-left: 10px;
        background-color: transparent;
        border: 0px;
        text-decoration: underline;
        color: ${({ theme }) => theme.primary};
    }

    p {
        /* margin: 0px; */
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 0px 50px;
        order: 2;
    }
`;

const MobileCarousel = styled(Carousel)`
    display: none;
    width: 0px;
    height: 0px;

    @media (max-width: ${dimensions.md}) {
        display: block;
        width: 100vw;
        height: 50vh;

        img {
            width: 100%;
            height: 50vh;
            object-fit: cover;
        }
    }
`;
const images = [
    "/image/activities/05_coasteering.jpg",
    "/image/activities/02_coasteering.jpg",
    "/image/activities/03_coasteering.jpg",
    "/image/activities/04_coasteering.jpg",
];
function Coasteering({ text }) {
    return (
        <Container>
            <ImageContainer>
                <div className="images">
                    {images.map((image, index) => (
                        <Image key={index} src={image} />
                    ))}
                </div>
                <div className="main_image">
                    <Image src="/image/activities/01_coasteering.jpg" />
                </div>

                <MobileCarousel autoplay showDots infinite>
                    <img src="/image/activities/01_coasteering.jpg" />

                    {images.map((image, index) => (
                        <img key={index} src={image} />
                    ))}
                </MobileCarousel>
            </ImageContainer>
            <TextContainer>
                <h2>{text.title}</h2>
                {text.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <br />

                <Link to="/activities/canyoning">
                    <button className="primary_button">
                        {text.buttons[0]}
                    </button>
                </Link>
                <a
                    href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                    target="_blank"
                >
                    <button className="secundary_button">
                        {text.buttons[1]}
                    </button>
                </a>
            </TextContainer>
        </Container>
    );
}

export default Coasteering;
