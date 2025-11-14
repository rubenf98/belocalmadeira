import { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchBlogs } from "../../../../redux/blog/actions";
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

const Blog = ({ data, loading, meta, fetchBlogs }) => {
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const setFiltersHandler = (aFilters) => {
        const newFilters = { ...filters, ...aFilters };
        setFilters(newFilters);
        setPage(1);
        fetchBlogs(1, newFilters);
    };

    const handlePageChange = (pagination) => {
        setPage(pagination.current);
        fetchBlogs(pagination.current, filters);
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
        fetchBlogs: (page, filters) => dispatch(fetchBlogs(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.blog.loading,
        data: state.blog.data,
        meta: state.blog.meta,
        current: state.blog.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
