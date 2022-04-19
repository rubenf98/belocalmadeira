import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";
import SmoothScroll from "./common/SmoothScroll";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { light, dark } from "./themes"
import { connect } from "react-redux";
import OrderForm from "./pages/OrderForm";
import { handleForm } from "../redux/application/actions";

const Container = styled.div`
    width: 100%;
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
            <ThemeProvider theme={this.props.theme === 'light' ? light : dark}>
                <Container>
                    <SmoothScroll>
                        <GlobalStyles />
                        <Navbar onOrder={this.openForm} handleVisibility={this.props.handleForm} />
                        <OrderForm visible={this.props.formVisible} handleVisibility={this.props.handleForm} />

                        <div> {this.props.children} </div>


                        <Footer />
                    </SmoothScroll>
                </Container>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
        formVisible: state.application.formVisible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility) => dispatch(handleForm(visibility)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);