import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import moment from "moment";
import { dimensions, maxWidth } from "../../helper";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    background: ${(props) => props.background};
    display: block;
    padding: 50px 0px;
    box-sizing: border-box;

    h2 {
        font-size: clamp(28px, 7vw, 100px);
        letter-spacing: 12px;
        color: white;
        text-align: center;
        font-family: "Playfair Display", serif;
    }

    @media (max-width: ${dimensions.md}) {
        h2 {
            text-align: left;
            letter-spacing: 6px;
            padding-left: 20px;
            box-sizing: border-box;
        }
    }
`;

const Disclaimer = styled.div`
    color: white;
    text-align: center;
    font-weight: 100;
    font-size: 14px;

    a {
        color: white;
        text-decoration: underline;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 80px;
    padding: 0px 20px;
    box-sizing: border-box;

    .flex-item {
        display: flex;
        flex-direction: column;
        gap: 13px;

        h3 {
            text-transform: uppercase;
            color: ${({ theme }) => theme.accent};
            font-family: "Playfair Display", serif;
            font-size: 20px;
            margin: 0px;
        }

        a,
        p {
            color: #ffffff;
            text-decoration: none;
            margin: 0px;

            &:hover,
            &:focus {
                color: #ffffff92;
            }
        }
    }

    .social-container {
        .social-links {
            display: flex;
            flex-direction: flex-end;
            align-items: center;
            gap: 15px;

            img {
                width: 20px;
            }
        }
    }

    .grow {
        flex: 1;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        padding: 0px 20px;
        box-sizing: border-box;
        gap: 30px;

        .flex-item {
            width: 100%;
        }
    }
`;

const Logo = styled(Link)`
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: auto !important;

    img {
        width: 100px;
    }

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;

const LegalContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    max-width: ${maxWidth};
    margin: 60px auto 30px auto;
    padding: 12px 18px;
    box-sizing: border-box;

    .grow {
        flex: 1;
    }

    a,
    p {
        color: #ffffff;
        text-decoration: none;
        margin: 0px;
    }

    .active-lang {
        text-decoration: underline;
        color: ${({ theme }) => theme.accent};
    }

    .lang {
        cursor: pointer;
    }

    a {
        &:hover,
        &:focus {
            color: #ffffff92;
        }
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        padding: 0px 20px;
        box-sizing: border-box;
        justify-content: flex-start;

        .grow {
            width: 100%;
            flex: auto;
        }
    }
`;

function Footer() {
    const themeContext = useContext(ThemeContext);
    const [active, setActive] = useState("en");
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/links");

    useEffect(() => {
        setActive(localStorage.getItem("language"));
    }, []);

    function handleLanguageClick(language) {
        localStorage.setItem("language", language);
        setActive(language);
        location.reload();
    }

    return (
        <Container background={themeContext.primary}>
            <h2>BE LOCAL MADEIRA</h2>
            <Content>
                <div className="flex-item links-container">
                    <h3>{text.titles[0]}</h3>
                    <Link to="/activities/canyoning">{text.links[3]}</Link>
                    <Link to="/activities/hiking">{text.links[4]}</Link>
                    <Link to="/activities/biking">{text.links[5]}</Link>
                    <Link to="/activities/coasteering">{text.links[6]}</Link>
                </div>
                <div className="flex-item links-container">
                    <h3>{text.titles[1]}</h3>
                    <Link to="/contact">{text.links[1]}</Link>
                    <Link to="/about">{text.links[0]}</Link>
                </div>
                <div className="flex-item links-container grow">
                    <h3>{text.titles[2]}</h3>
                    <a href="mailto:belocalmadeira@gmail.com" target="__blank">
                        belocalmadeira@gmail.com
                    </a>
                    <p>+351 935 124 260</p>
                </div>
                <div className="flex-item social-container">
                    <div className="social-links">
                        <h3>{text.titles[3]}:</h3>
                        <a
                            href="https://www.instagram.com/belocalmadeira/"
                            target="_blank"
                        >
                            <img
                                src="/icon/instagram.png"
                                alt="instagram link"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@belocalmadeira"
                            target="_blank"
                        >
                            <img src="/icon/tiktok.svg" alt="tiktok link" />
                        </a>
                    </div>
                    <Logo to="/">
                        <img
                            src="/image/logo_white.png"
                            alt="be local madeira white logo"
                        />
                    </Logo>
                </div>
            </Content>

            <LegalContainer>
                <Link to="/terms">{text.legal[0]}</Link>
                <p className="grow">
                    Copyright ©{moment().year()} Be Local Madeira. All rights
                    reserved
                </p>
                <p
                    className={active == "en" ? "lang active-lang" : "lang"}
                    onClick={() => handleLanguageClick("en")}
                >
                    EN
                </p>
                <p
                    className={active == "pt" ? "lang active-lang" : "lang"}
                    onClick={() => handleLanguageClick("pt")}
                >
                    PT
                </p>
            </LegalContainer>

            <Disclaimer>
                Built by{" "}
                <a href="https://ruben-freitas.pt/" target="__blank">
                    {" "}
                    Rúben Freitas
                </a>
            </Disclaimer>
        </Container>
    );
}

export default Footer;
