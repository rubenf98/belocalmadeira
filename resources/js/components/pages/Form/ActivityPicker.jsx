import React, { useEffect, useState } from "react";
import { fetchActivities } from "../../../redux/activity/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { dimensions } from "../../../helper";

const Activity = styled.div`
    width: 33%;
    position: relative;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }

    img {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(1);
        padding: 10px;
        box-sizing: border-box;
        border-radius: 20px;
    }

    .opacitylayer {
        padding: 10px;
        box-sizing: border-box;
        position: absolute;
        z-index: 2;
        top: 10px;
        left: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        border-radius: 10px;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.7) 90%
        );
    }

    h4 {
        margin: 0px;
        position: relative;
        z-index: 3;
        color: white;
        font-size: clamp(16px, 2.5vw, 20px);
        font-weight: bold;
    }

    p {
        position: relative;
        z-index: 3;
        color: white;
        margin: 0px;
    }

    span {
        position: relative;
        z-index: 3;
        background-color: white;
        color: black;
        padding: 3px 6px;
        box-sizing: border-box;
        display: inline;
        border-radius: 6px;
        font-size: clamp(14px, 2vw, 16px);
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    button {
        padding: 6px;
        box-sizing: border-box;
        margin: 0px 10px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 20px;
        min-width: 80px;
    }
`;

function ActivityPicker(props) {
    const [filters, setFilters] = useState([
        "Canyoning",
        "Hiking",
        "Biking",
        "Jeep Tour",
        "Coasteering",
    ]);
    const { data, form, formData } = props;
    useEffect(() => {
        props.fetchActivities({ language: localStorage.getItem("language") });
    }, []);

    const handleActivityClick = (value) => {
        form.setFieldsValue({ activity: value });
        props.setFormData({ ...formData, activity: value });
        props.setStepOrder([0, 1]);
        props.setStep(1);
    };

    const ActivityContainer = ({ activity, value }) => (
        <Activity onClick={(e) => handleActivityClick(value)} key={activity.id}>
            <p>{activity.activity}</p>
            <h4>{activity.name[localStorage.getItem("language")]}</h4>
            <span>{activity.price}€ /p</span>
            <div className="opacitylayer" />
            <img src={activity.image} alt="" />
        </Activity>
    );

    return (
        <div>
            <FlexContainer>
                <button onClick={() => setFilters(["Canyoning"])}>
                    Canyoning
                </button>
                <button onClick={() => setFilters(["Hiking"])}>Hiking</button>
                <button onClick={() => setFilters(["Biking"])}>Biking</button>
                <button onClick={() => setFilters(["Jeep Tour"])}>Jeep</button>
                <button onClick={() => setFilters(["Coasteering"])}>
                    Coasteering
                </button>
                <button
                    onClick={() =>
                        setFilters([
                            "Canyoning",
                            "Hiking",
                            "Biking",
                            "Jeep Tour",
                            "Coasteering",
                        ])
                    }
                >
                    All
                </button>
            </FlexContainer>
            <FlexContainer>
                {data
                    .filter((activity) => filters.includes(activity?.name?.en))
                    .flatMap((activity) =>
                        activity.children?.length > 0
                            ? activity.children.map((child) => (
                                  <ActivityContainer
                                      value={[activity.value, child.value]}
                                      key={child.id}
                                      activity={{
                                          ...child,
                                          activity: activity.name.en,
                                      }}
                                  />
                              ))
                            : [
                                  <ActivityContainer
                                      value={[activity.value, undefined]}
                                      key={activity.id}
                                      activity={activity}
                                  />,
                              ]
                    )}

                {/* {data.map((activity) => (
                    <>
                        {activity.children.length > 0 ? (
                            activity.children.map((child) => (
                                <ActivityContainer activity={child} />
                            ))
                        ) : (
                            <ActivityContainer activity={activity} />
                        )}
                    </>
                ))} */}
            </FlexContainer>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivities: (filters) => dispatch(fetchActivities(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.activity.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPicker);
