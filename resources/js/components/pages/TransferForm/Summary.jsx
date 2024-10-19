import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Row } from 'antd';
import { dimensions } from '../../../helper';
import moment from 'moment';
import { connect } from "react-redux";

const Flex = styled(Row)`
    margin: 10px auto 30px auto;
    position: relative;
    width: 100%;
    color: white;
`;

const Detail = styled.div`
    font-size: 18px;
    width: 50%;
    padding: 10px 10px;
    box-sizing: border-box;
    font-weight: bold;
    color: white;

    .fieldname {
        display: block;
        font-weight: 300;
    }

    .old-price {
        font-size: 16px;
        text-decoration: line-through;
        opacity: .6;
        margin-left: 10px;
    }
`;

const Subtitle = styled.h3`
    font-size: 20px;
    padding: 10px 10px;
    box-sizing: border-box;
    font-weight: bold;
    color: white;
`;

const Price = styled.div`
    font-weight: bold;  
    padding: 0px 10px;

    h3 {
        color: white;
        margin-bottom: 0px;
    }

    p {
        color: white;
        margin: 0px;
        font-size: 18px;
    }
    
`;


function Summary({ text, data, tours }) {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(1);

    useEffect(() => {
        tours.map((currentTour) => {
            if (currentTour.id == data.tour) {
                var multiplier = data.return ? 2 : 1;
                setPrice((currentTour.price * data.participants) * multiplier)
            }
        })



        if (data.participants >= 4) {
            setDiscount(.9)
        }

    }, [])

    return (
        <div>
            <Flex type="flex" justify="flex-start">
                <Detail><span className="fieldname">{text.details.name} </span> {data.name} </Detail>
                <Detail><span className="fieldname">{text.details.email} </span> {data.email} </Detail>
                <Detail><span className="fieldname">{text.details.phone} </span> {data.phone?.code ? data.phone?.code + "" + data.phone?.phone : data?.phone} </Detail>
                <Detail><span className="fieldname">{text.details.participants} </span> {data.participants} </Detail>

                {/* <Detail><span className="fieldname">{text.details.private} </span> {data.return ? "Yes" : "No"} </Detail> */}
                <Detail><span className="fieldname">{text.details.date} </span> {moment(data.date).format('DD-MM-YYYY') + " " + (data.time ? data.time : "08:00")}</Detail>
                {data.direction ?
                    <Detail><span className="fieldname">{text.details.location} </span>  {data.direction == "to" ? data.address + " -> Airport" : "Airport -> " + data.address} </Detail>
                    :
                    <Detail><span className="fieldname">{text.details.trajectory} </span>  {data.trajectory} </Detail>
                }

            </Flex>
            {data.return &&
                <div>
                    <Subtitle>Return transfer</Subtitle>
                    <Flex type="flex" justify="flex-start">
                        <Detail><span className="fieldname">{text.details.date} </span> {moment(data.return_date).format('DD-MM-YYYY') + " " + data.return_time}</Detail>
                        <Detail><span className="fieldname">{text.details.location} </span>  {data.direction == "to" ? "Airport -> " + data.address : data.address + " -> Airport"} </Detail>
                    </Flex>
                </div>
            }

            <Price>
                <h3>TOTAL:</h3>
                <p>{price * discount}€</p>
            </Price>




        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        tours: state.tour.data,
    };
};

export default connect(
    mapStateToProps,
    null
)(Summary);