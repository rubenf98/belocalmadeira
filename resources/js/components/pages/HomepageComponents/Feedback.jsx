import React, { useRef } from "react";
import SectionTitle from "../../common/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from "antd";
import styled from "styled-components";
import { dimensions, maxWidth } from "../../../helper";
import { Title } from "../Form/styles";

const Container = styled.div`
    margin-bottom: 200px;

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 100px;
    }
`;

const CarouselContainer = styled(Row)`
    width: 100%;
    margin: auto !important;
    max-width: ${maxWidth};
    margin-bottom: 200px;
    align-items: center;

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 100px;
    }

    h2 {
        font-size: 32px;
        margin-bottom: 5px;

        @media (max-width: ${dimensions.md}) {
            display: none;
        }
    }
`;

const CarouselItem = styled.div`
    margin-bottom: 50px;

    h3 {
        font-weight: bold;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    margin: 0px 0px 20px 0px;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    img {
        width: 35px;
        height: 35px;
        cursor: pointer;
        padding: 5px;
        border: 1px solid black;
    }

    .last {
        border-left: 0px;
    }
`;

const MainImage = styled.img`
    width: 100%;
    max-width: 500px;
    float: right;
    border-radius: 20px;

    @media (max-width: ${dimensions.md}) {
        margin: auto;
        display: block;
        float: none;
        max-width: 800px;
    }
`;

const Citation = styled.img`
    width: 50px;
    margin: 50px 0px 20px 0px;
`;

const ViewMore = styled.div`
    position: absolute;
    bottom: 0;
    left: 16px;

    @media (max-width: ${dimensions.md}) {
        bottom: 10px;
    }

    a {
        color: #777;

        &:hover {
            color: black;
        }
    }
`;

const responsive = {
    desktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
    },
};

function Feedback({ text }) {
    const ref = useRef(null); // ref => { current: null }

    return (
        <Container>
            <Title center>{text.subtitle}</Title>

            <CarouselContainer
                type="flex"
                justify="center"
                align="center"
                gutter={32}
            >
                <Col xs={24} md={12}>
                    <MainImage
                        src="/images/activities/canyoning/15.jpg"
                        alt="canyoning participant looking over a bridge"
                    />
                </Col>
                <Col xs={24} md={12} style={{ position: "relative" }}>
                    <h2>{text.subsubtitle}</h2>
                    <ButtonContainer>
                        <img src="/icon/previous2.svg" alt="previous" />
                        <img
                            className="last"
                            src="/icon/next2.svg"
                            alt="next"
                            onClick={() => {
                                ref.current.next();
                            }}
                        />
                    </ButtonContainer>
                    <Citation src="/icon/citation.svg" alt="" />
                    <Carousel
                        ref={ref}
                        showDots={false}
                        removeArrowOnDeviceType={["mobile", "desktop"]}
                        infinite
                        responsive={responsive}
                    >
                        {text.items.map((item) => (
                            <CarouselItem>
                                <p>{item.comment}</p>
                                <h3>{item.author}</h3>
                            </CarouselItem>
                        ))}
                    </Carousel>

                    <ViewMore>
                        <a
                            target="_blank"
                            href="https://www.google.com/search?channel=fs&q=be+local+madeira#lrd=0xc60619c49131751:0x9e71e279a1d4ccf2,1,,,"
                        >
                            {text.viewmore}
                        </a>
                    </ViewMore>
                </Col>
            </CarouselContainer>
        </Container>
    );
}

export default Feedback;
