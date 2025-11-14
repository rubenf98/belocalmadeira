import React from "react";
import styled from "styled-components";
import {
    containerCommonStyle,
    phoneButtonStyle,
    secundaryButtonStyle,
} from "./Form/styles";
import { connect } from "react-redux";

const Container = styled.section`
    ${containerCommonStyle}
    margin-top: 120px;
    display: flex;
    align-items: center;
`;

const Information = styled.div`
    width: 50%;
    padding-right: 50px;
    box-sizing: border-box;

    p,
    li {
        font-weight: 300;
        text-align: justify;
        font-size: clamp(16px, 2vw, 18px);
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

    .column {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: column;
        gap: 20px;

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .small {
        width: 25%;
    }

    .big {
        width: 50%;
    }
`;

function Store(props) {
    const { text } = require("../../assets/" + props.language + "/store");

    return (
        <Container>
            <Information>
                <h2>{text.title}</h2>
                <h3>{text.subtitle}</h3>

                {text.descriptions.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <ul>
                    {text.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <p>{text.disclaimer}</p>
                <div className="button-container">
                    <a
                        href="mailto:belocalmadeira@gmail.com?subject=Be%20Local%20Madeira%20Order%20Inquiry&body=My%20name%20is%20___________________________%20and%20I%20would%20like%20to%20order%20a%20__(T-shirt%20(27%E2%82%AC)%20or/and%20Hoodie%20(45%E2%82%AC))__%20in%20the%20size(s)%20___________________________.%20My%20preferred%20design%20or%20color%20is%20___________________________.%20I%20understand%20delivery%20is%20only%20available%20during%20activities.%20I%20___do%20/%20do%20not___%20already%20have%20a%20reservation.%20If%20yes,%20my%20reservation%20date%20is%20___________________________.%20Quantity:%20___________________________.%20Additional%20notes%20(optional):%20___________________________."
                        target="__blank"
                    >
                        <button className="action-button">
                            <div className="circle" /> {text.button}
                        </button>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                        target="_blank"
                    >
                        <button className="phone-button">
                            +351 935 124 260
                        </button>
                    </a>
                </div>
            </Information>
            <Grid>
                <div className="column small">
                    <img src="/image/merch/1.png" alt="" />
                    <img src="/image/merch/2.png" alt="" />
                    <img src="/image/merch/3.png" alt="" />
                </div>

                <div className="column big">
                    <img
                        style={{ flex: 1 }}
                        src="/image/merch/main.png"
                        alt=""
                    />
                    <img src="/image/merch/kids.png" alt="" />
                </div>

                <div className="column small">
                    <img src="/image/merch/4.png" alt="" />
                    <img src="/image/merch/5.png" alt="" />
                    <img src="/image/merch/6.png" alt="" />
                </div>
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(Store);
