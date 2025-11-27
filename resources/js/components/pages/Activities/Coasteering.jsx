import { useEffect } from "react";
import { fetchActivity } from "../../../redux/activity/actions";
import { connect } from "react-redux";
import BookingPageTemplate from "../../common/BookingPageTemplate";

function Coasteering(props) {
    const { text } = require("../../../assets/" +
        localStorage.getItem("language") +
        "/activitycoasteering");

    useEffect(() => {
        props.fetchActivity(4);
    }, []);

    const handleSubmit = (data) => {
        props.handleForm(true, {
            activity: [props.activity?.id, null],
            ...data,
        });
    };

    return (
        <div>
            <div>
                {props.activity?.id && (
                    <BookingPageTemplate
                        experience={{
                            ...props.activity,
                            id: 1,
                            key: "coasteering",
                            image: "/images/activities/coasteering/21.jpg",
                        }}
                        experienceId={1}
                        text={text.booking}
                        index={props.activity?.id}
                        handleForm={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility, activity) =>
            dispatch(handleForm(visibility, activity)),
        fetchActivity: (id) => dispatch(fetchActivity(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.activity.loading,
        activity: state.activity.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coasteering);
