import { useParams } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleForm } from "../../../redux/application/actions";
import BookingPageTemplate from "../../common/BookingPageTemplate";
import { fetchExperience } from "../../../redux/experience/actions";
import { useEffect } from "react";

function BookingPage(props) {
    var { activity, id } = useParams();
    const { text } = require("../../../assets/" +
        localStorage.getItem("language") +
        "/activity" +
        activity);

    useEffect(() => {
        props.fetchExperience(id);
    }, []);

    const handleSubmit = (data) => {
        props.handleForm(true, {
            activity: [props.experience.activity?.id, props.experience.id],
            ...data,
        });
    };

    return (
        <div>
            {props.experience?.id && (
                <BookingPageTemplate
                    experience={props.experience}
                    text={text.booking}
                    index={id}
                    handleForm={handleSubmit}
                />
            )}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (visibility, activity) =>
            dispatch(handleForm(visibility, activity)),
        fetchExperience: (id) => dispatch(fetchExperience(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.experience.loading,
        experience: state.experience.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
