import React, { useEffect } from 'react'
import SectionTitle from '../../common/SectionTitle'
import styled, { ThemeContext } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';
import { Link } from 'react-router-dom';
import { handleTransferForm } from '../../../redux/application/actions';
import { connect } from 'react-redux';
import { fetchTours } from '../../../redux/tour/actions';
import { Row } from 'antd';

const Container = styled.section`
    width: 100%;
    padding: 100px 0px;
    box-sizing: border-box;
    position: relative;
`;

const AirportTour = styled.div`
    max-width: ${maxWidth};
    margin: auto auto 50px auto;
    padding: 0px 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 60px;
    position: relative;

    img {
        order: ${(props) => props.index % 2 ? 1 : 0};
        width: 50%;
    }

    .content {
        width: 50%;

        .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        h3 {
            font-size: clamp(18px, 2.5vw, 26px);
        }

        h2 {
            font-weight: bold;
            font-size: clamp(26px, 3vw, 42px);
            line-height: 100%;
        }

        button {
            box-sizing: border-box;
            cursor: pointer;
            background: ${({ theme }) => theme.primary};
            box-shadow: 0px;
            padding: 10px 30px 10px 30px;
            transition: .4s;    
            border-radius: 4px;
            position: relative;
            background-size: 110%;
            text-transform: capitalize;
            color: white;
            font-weight: bold;
            
        }

        p {
            margin: 0px;
        }
    }

    .background {
        background-color: ${({ theme }) => theme.primaryBackground};
        width: 100%;
        z-index: -1;
        position: absolute;
        left: 0;
        top: 50px;
        height: calc(100% - 120px);
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        margin-bottom: 70px;

        .content {
            width: 100%;
            order: 2;
        }

        img {
            width: 100%;
            order: 1;
        }

        .background {
            height: 100%;
        } 

        
    }
`;

function Tours(props) {

    useEffect(() => {
        props.fetchTours();
    }, [])

    const { text } = props;
    return (
        <Container>
            <SectionTitle title={text.subtitle} subtitle={text.title} />

            {props.tours.map((tour, index) => (
                <AirportTour index={index} key={tour.id}>
                    <div className='background' />
                    <img src={tour.image} alt="airport" />
                    <div className='content'>
                        <h3>{tour.subtitle[localStorage.getItem('language')]}</h3>
                        <h2>{tour.title[localStorage.getItem('language')]}</h2>
                        <p>{tour.description[localStorage.getItem('language')]}</p>
                        <br />
                        <p>{tour.trajectory}</p>
                        <div className='button-container'>
                            <button onClick={() => props.handleTransferForm(tour)}>{text.button}</button>
                            <p>{tour.price}€/p</p>
                        </div>
                    </div>
                </AirportTour>
            ))}
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTours: (filters) => dispatch(fetchTours(filters)),
        handleTransferForm: (state) => dispatch(handleTransferForm(state)),
    };
};

const mapStateToProps = (state) => {
    return {
        tours: state.tour.data,
    };
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tours);