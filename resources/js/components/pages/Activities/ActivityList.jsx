import { useEffect } from "react";
import Activity from "../../common/Activity";
import { connect } from "react-redux";
import { fetchExperiences } from "../../../redux/experience/actions";
import { useParams } from "react-router-dom";

const activityDictionary = {
    canyoning: 1,
    hiking: 2,
    jeep: 5,
};

function ActivityList(props) {
    var { activity } = useParams();
    const { text } = require("../../../assets/" +
        localStorage.getItem("language") +
        "/activity" +
        activity);

    useEffect(() => {
        props.fetchExperiences(1, { activity: activityDictionary[activity] });
    }, [activity]);

    return (
        <div>
            <Activity
                data={props.data}
                level_dictionary={text.level_dictionary}
                gallery={text.gallery}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExperiences: (page, filters) =>
            dispatch(fetchExperiences(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.experience.loading,
        data: state.experience.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
