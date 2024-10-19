import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTransfers, fetchTransfer, deleteTransfer, updateTransfer } from "../../../../redux/transfer/actions";
import { dimensions } from "../../../../helper";
import TableContainer from "./TableContainer";
import DrawerContainer from "./DrawerContainer";

const ContentContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    margin: 50px 0px;

    @media (max-width: ${dimensions.lg}){
        width: 100%;
    }
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Table = styled.div`
     width: 100%;
`;

class Transfers extends Component {
    state = {
        filters: {},
        page: 1,
        drawerVisible: false
    }

    componentDidMount() {
        this.props.fetchTransfers();
    }

    setFilters = (aFilters) => {
        var { filters } = this.state;
        filters = { ...filters, ...aFilters };
        this.setState({ filters });

        this.props.fetchTransfers(1, filters);
    }

    handlePageChange = (pagination) => {
        var { filters } = this.state;
        this.setState({ page: pagination.current });

        this.props.fetchTransfers(pagination.current, filters);
    }

    onRowClick = (aRecord) => {
        this.props.fetchTransfer(aRecord).then(() => {
            this.setState({
                drawerVisible: true
            })
        });
    }

    setFilters = (aFilters) => {
        var { filters } = this.state;
        filters = { ...filters, ...aFilters };
        this.setState({ filters });

        this.props.fetchTransfers(1, filters);
    }

    render() {
        var { data, loading, meta, current } = this.props;
        var { drawerVisible } = this.state;

        return (
            <Container>
                <ContentContainer>
                    <Table>
                        <TableContainer
                            setFilters={this.setFilters}
                            onRowClick={this.onRowClick}
                            handlePageChange={this.handlePageChange}
                            data={data}
                            loading={loading}
                            meta={meta}
                            onDelete={this.props.deleteTransfer}
                        />
                    </Table>
                </ContentContainer>

                <DrawerContainer
                    record={current}
                    onClose={() => this.setState({
                        drawerVisible: false
                    })}
                    visible={drawerVisible} />
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransfers: (page, filters) => dispatch(fetchTransfers(page, filters)),
        fetchTransfer: (id) => dispatch(fetchTransfer(id)),
        updateTransfer: (id, data) => dispatch(updateTransfer(id, data)),
        deleteTransfer: (id) => dispatch(deleteTransfer(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.transfer.loading,
        data: state.transfer.data,
        meta: state.transfer.meta,
        current: state.transfer.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
