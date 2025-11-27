import { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
    fetchNewsletters,
    fetchNewsletter,
    updateNewsletter,
    deleteNewsletter,
} from "../../../../redux/newsletter/actions";
import { dimensions } from "../../../../helper";
import TableContainer from "./TableContainer";

const ContentContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    margin: 50px 0px;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }
`;
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Table = styled.div`
    width: 100%;
`;

const Newsletter = (props) => {
    const { data, loading, meta } = props;
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        props.fetchNewsletters();
    }, []);

    const setFiltersHandler = (aFilters) => {
        const newFilters = { ...filters, ...aFilters };
        setFilters(newFilters);
        setPage(1);
        props.fetchNewsletters(1, newFilters);
    };

    const handlePageChange = (pagination) => {
        setPage(pagination.current);
        props.fetchNewsletters(pagination.current, filters);
    };

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <TableContainer
                        handlePageChange={handlePageChange}
                        data={data}
                        loading={loading}
                        meta={meta}
                        setFilters={setFiltersHandler}
                    />
                </Table>
            </ContentContainer>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewsletters: (page, filters) =>
            dispatch(fetchNewsletters(page, filters)),
        fetchNewsletter: (id) => dispatch(fetchNewsletter(id)),
        deleteNewsletter: (id) => dispatch(deleteNewsletter(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.newsletter.loading,
        data: state.newsletter.data,
        meta: state.newsletter.meta,
        current: state.newsletter.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
