import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 3840px;
    min-height: 100%;
    margin: auto;
    display: block;
    position: relative;
    box-sizing: border-box;
    overflow-x: hidden;
`;

class Layout extends Component {
    render() {
        return (
            <Container>
                <Navbar onOrder={this.openForm} />

                <div> {this.props.children} </div>


                <Footer />
            </Container>
        );
    }
}

export default Layout;
