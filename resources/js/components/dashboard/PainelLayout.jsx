import styled from "styled-components";
import NavBar from "./NavBar";
import { dimensions } from "../../helper";
import ThemeContainer from "../ThemeContainer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const PageContainer = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 245, 245);
`;

const MobileMessage = styled.div`
    width: 80%;
    font-size: 1.4em;
    font-weight: bold;
    text-align: center;
    margin: auto;
    display: none;

    @media (min-width: ${dimensions.md}) {
        display: none;
    }
`;

const Footer = styled.div`
    margin-top: 50px;
    img {
        width: 120px;
        margin: auto;
        display: block;
    }

    p {
        text-align: center;
        margin: 20px auto;
    }
`;

function PainelLayout(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate("/login");
        }
    }, [props.isAuthenticated]);

    return (
        <ThemeContainer>
            <PageContainer>
                <NavBar />
                {props.children}
                <Footer>
                    <img src="/images/logo.png" alt="logo" />
                    <p>
                        © {dayjs().year()} Be Local Madeira. All Rights
                        Reserved.
                    </p>
                </Footer>
                <MobileMessage>
                    O painel de controlo não está disponível na versão mobile,
                    utilize um computador para aceder a todas as funções.
                </MobileMessage>
            </PageContainer>
        </ThemeContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.currentUser,
        loading: state.reservation.loading,
        data: state.reservation.relevantData,
    };
};

export default connect(mapStateToProps, null)(PainelLayout);
