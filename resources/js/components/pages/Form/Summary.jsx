import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row } from "antd";
import { dimensions } from "../../../helper";
import moment from "moment";
import { connect } from "react-redux";

const Flex = styled(Row)`
    margin: 10px auto 60px auto;
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
        opacity: 0.6;
        margin-left: 10px;
    }
`;

const Participant = styled(Detail)`
    width: 50%;
`;

const Feedback = styled.h3`
    font-size: 20px;
    font-weight: bold;
    opacity: 0.8;
    padding: 0px 10px;
    color: white;
`;

function Summary({ text, data, activities, coupon }) {
    const [activityName, setActivityName] = useState("");
    const [activityPrice, setActivityPrice] = useState(0);
    const [discount, setDiscount] = useState(1);

    useEffect(() => {
        activities.map((currentActivity) => {
            if (data.activity.length == 2) {
                currentActivity.children.map((activity) => {
                    if (activity.value == data.activity[1]) {
                        setActivityName(activity.label);
                        var price = data.private
                            ? activity.private_price
                            : activity.price;
                        setActivityPrice(price * data.participants);
                    }
                });
            } else {
                if (currentActivity.value == data.activity[0]) {
                    setActivityName(currentActivity.label);
                    var price = data.private
                        ? currentActivity.private_price
                        : currentActivity.price;
                    setActivityPrice(price * data.participants);
                }
            }
        });

        var discountValue = 1;

        if (data.participants >= 4) {
            discountValue = 0.9;
        }

        if (coupon.id) {
            discountValue = discountValue * coupon.value;
        }

        setDiscount(discountValue);
    }, [data]);

    return (
        <div>
            <Flex type="flex" justify="flex-start">
                <Detail>
                    <span className="fieldname">{text.details.name} </span>{" "}
                    {data.name}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.email} </span>{" "}
                    {data.email}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.phone} </span>{" "}
                    {data.phone?.code
                        ? data.phone?.code + "" + data.phone?.phone
                        : data?.phone}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.address} </span>{" "}
                    {data.address}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.private} </span>{" "}
                    {data.private ? "Yes" : "No"}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.activity} </span>{" "}
                    {activityName}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.price} </span>{" "}
                    {activityPrice * discount}€{" "}
                    {discount != 1 && (
                        <span className="old-price">{activityPrice}€</span>
                    )}{" "}
                </Detail>
                <Detail>
                    <span className="fieldname">{text.details.date} </span>{" "}
                    {data.date}
                </Detail>
            </Flex>
            <Feedback>{text.participantsTitle}</Feedback>

            <Flex type="flex" justify="flex-start">
                {data.person &&
                    data.person.map((participant, index) => (
                        <Participant key={index}>
                            <span>
                                {text.details.participant} {index + 1}{" "}
                            </span>{" "}
                            {moment(participant.birthday).format("YYYY-MM-DD")}{" "}
                            / {participant.gender} / {participant.weight}kg /{" "}
                            {participant.height}cm / {participant.shoe} EU
                        </Participant>
                    ))}
            </Flex>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        activities: state.activity.data,
        coupon: state.coupon.current,
    };
};

export default connect(mapStateToProps, null)(Summary);
