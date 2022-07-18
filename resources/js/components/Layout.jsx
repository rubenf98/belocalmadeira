import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";
import { connect } from "react-redux";
import OrderForm from "./pages/OrderForm";
import { handleForm } from "../redux/application/actions";
import ThemeContainer from "./ThemeContainer";
import AnimationContainer from "./common/AnimationContainer";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    margin: auto;
    display: block;
    position: relative;
    box-sizing: border-box;
    overflow-x: hidden;


    .ant-select-dropdown {
        background-color: transparent !important;
    }
`;

class Layout extends Component {
    render() {
        return (
            <ThemeContainer>
                <Container>
                    <AnimationContainer animateIn="fadeInDown" offset={0}>
                        <Navbar onOrder={this.openForm} handleVisibility={this.props.handleForm} />
                    </AnimationContainer>
                    <OrderForm visible={this.props.formVisible} handleVisibility={this.props.handleForm} />

                    <div> {this.props.children} </div>


                    <Footer />
                </Container>
            </ThemeContainer>

        );
    }
}

const mapStateToProps = (state) => {
    return {
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