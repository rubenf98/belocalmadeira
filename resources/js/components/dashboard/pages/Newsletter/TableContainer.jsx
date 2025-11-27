import React, { useState } from "react";
import styled from "styled-components";
import Table from "../../../common/TableContainer";
import dayjs from "dayjs";
import StopPropagation from "../../StopPropagation";
import RowOperation from "../../RowOperation";
import FormContainer from "./FormContainer";
import {
    fetchNewsletters,
    fetchNewsletter,
    updateNewsletter,
    deleteNewsletter,
    createNewsletter,
    updateNewsletterSubscription,
} from "../../../../redux/newsletter/actions";
import { connect } from "react-redux";
import { Menu } from "antd";

const Container = styled.div`
    width: 100%;
`;

const AddButton = styled.div`
    width: 80px;
    height: 40px;
    float: right;
    background: ${({ theme }) => theme.primary};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    cursor: pointer;
    padding: 10px;

    &:hover {
        background: ${({ theme }) => theme.primaryHover};
    }

    img {
        height: 100%;
        margin: auto;
        display: block;
    }
`;

const Indicator = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => props.background};
`;

function TableContainer({
    loading,
    data,
    meta,
    handlePageChange,
    deleteNewsletter,
    updateNewsletter,
    createNewsletter,
    updateNewsletterSubscription,
}) {
    const [visibility, setVisibility] = useState(false);
    const [currentRecord, setCurrentRecord] = useState({});

    const columns = [
        {
            title: "Subscrito desde",
            dataIndex: "subscribed_at",
            render: (date) => (
                <span>{dayjs(date).format("YYYY-MM-DD HH:mm")}</span>
            ),
        },
        {
            title: "Atualmente subscrito",
            dataIndex: "subscribed",
            render: (subscribed) => (
                <Indicator
                    background={subscribed != 0 ? "#008d09" : "#df0000"}
                />
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Telemóvel",
            dataIndex: "phone",
        },

        {
            title: "",
            key: "",
            render: (text, row) => (
                <StopPropagation>
                    <RowOperation
                        onUpdateClick={() => onUpdateClick(row)}
                        onDeleteConfirm={() => deleteNewsletter(row.id)}
                    >
                        <Menu.Item
                            onClick={() => updateNewsletterSubscription(row.id)}
                        >
                            Alterar subscrição
                        </Menu.Item>
                    </RowOperation>
                </StopPropagation>
            ),
        },
    ];

    function onUpdateClick(record) {
        setVisibility(true);
        setCurrentRecord(record);
    }

    function onClose() {
        setVisibility(false);
        setCurrentRecord({});
    }

    return (
        <Container>
            <AddButton onClick={() => setVisibility(true)}>
                <img src="/icon/add_white.svg" alt="add" />
            </AddButton>
            <Table
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handlePageChange={(aPage) => handlePageChange(aPage)}
            />

            <FormContainer
                visible={visibility}
                record={currentRecord}
                handleModalClose={onClose}
                updateNewsletter={updateNewsletter}
                createNewsletter={createNewsletter}
            />
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewsletters: (page, filters) =>
            dispatch(fetchNewsletters(page, filters)),
        fetchNewsletter: (id) => dispatch(fetchNewsletter(id)),
        updateNewsletter: (id, data) => dispatch(updateNewsletter(id, data)),
        createNewsletter: (data) => dispatch(createNewsletter(data)),
        updateNewsletterSubscription: (id) =>
            dispatch(updateNewsletterSubscription(id)),
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

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
