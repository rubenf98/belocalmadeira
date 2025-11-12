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
    width: 50%;
    padding: 10px;
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

const Participant = styled.p`
    width: 100%;
    margin: 3px 0px;
    padding: 5px 10px;
    box-sizing: border-box;
    font-weight: bold;
    color: white;
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
        if (!activities?.length || !data?.activity?.length) return;

        let selectedActivity = null;

        // Extrai os identificadores
        const [mainActivityId, subActivityId] = data.activity;

        // Procura a atividade principal
        const mainActivity = activities.find((a) => a.value === mainActivityId);

        // Se houver subatividade, procura dentro dela
        if (mainActivity && subActivityId && mainActivity.children) {
            selectedActivity = mainActivity.children.find(
                (a) => a.value === subActivityId
            );
        } else {
            selectedActivity = mainActivity;
        }

        if (selectedActivity) {
            const basePrice = data.private
                ? selectedActivity.private_price
                : selectedActivity.price;

            const perGroup = selectedActivity.price_per_person || 1; // N (default 1)

            // Calcula o número de grupos
            const groups = Math.ceil(data.participants / perGroup);

            // Preço total baseado no número de grupos
            const totalPrice = basePrice * groups;

            setActivityName(selectedActivity.label);
            setActivityPrice(totalPrice);
        }

        if (mainActivityId != 5) {
            let discountValue = 1;

            if (data.participants >= 4) discountValue = 0.9;
            if (coupon?.id) discountValue *= coupon.value;

            setDiscount(discountValue);
        }
    }, [data, activities, coupon]);

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

            {data.person && (
                <div>
                    <Feedback>{text.details.participants}</Feedback>

                    {data.person.map((participant, index) => (
                        <Participant key={index}>
                            {text.details.participant} {index + 1}:{" "}
                            {participant.gender} / {participant.weight}kg /{" "}
                            {participant.height}cm / {participant.shoe} EU /{" "}
                            {participant.birthday}
                        </Participant>
                    ))}
                </div>
            )}
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
