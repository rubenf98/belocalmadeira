import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { dimensions } from "../../helper";
import ThemeContainer from "../ThemeContainer";

const PageContainer = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    @media (max-width: ${dimensions.md}){
        display: none;
    } 
`;

const MobileMessage = styled.div`
    width: 80%;
    font-size: 1.4em;
    font-weight: bold;
    text-align:center;
    margin: auto;

    @media (min-width: ${dimensions.md}){
        display: none;
    }
`;

const Content = styled.div`
    flex: 1;
    background: rgb(245, 245, 245);
`;

const NavBarContainer = styled.div`
    height: 80px;
`;

export default class PainelLayout extends Component {
    render() {
        return (
            <ThemeContainer>
                <PageContainer>
                    <NavBarContainer><NavBar /></NavBarContainer>
                    <ContentContainer>
                        <Content>
                            {this.props.children}
                        </Content>
                    </ContentContainer>

                    <MobileMessage>
                        O painel de controlo não está disponível na versão mobile, utilize um computador para aceder a todas as funções.
                    </MobileMessage>
                </PageContainer>
            </ThemeContainer>
        );
    }
}
