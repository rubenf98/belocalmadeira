import React, { useState } from "react";
import styled from "styled-components";
import Table from "../../../common/TableContainer";
import dayjs from "dayjs";
import StopPropagation from "../../StopPropagation";
import RowOperation from "../../RowOperation";
import FormContainer from "./FormContainer";

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

function TableContainer({
    loading,
    data,
    meta,
    handlePageChange,
    onDelete,
    updateBlog,
}) {
    const [visibility, setVisibility] = useState(false);
    const [currentRecord, setCurrentRecord] = useState({});

    const columns = [
        {
            title: "Data",
            dataIndex: "created_at",
            render: (date) => <span>{dayjs(date).format("YYYY-MM-DD")}</span>,
        },
        {
            title: "Título",
            dataIndex: "title",
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (image) => (
                <img
                    style={{
                        height: "50px",
                        width: "50px",
                        objectFit: "cover",
                    }}
                    src={image}
                />
            ),
        },
        {
            title: "",
            key: "",
            render: (text, row) => (
                <StopPropagation>
                    <RowOperation
                        onDeleteConfirm={() => onDelete(row.id)}
                        onUpdateClick={() => onUpdateClick(row)}
                    />
                </StopPropagation>
            ),
        },
    ];

    function onUpdateClick(record) {
        setVisibility(true);
        setCurrentRecord(record);
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
                handleModalClose={() => setVisibility(false)}
                updateReservation={updateBlog}
            />
        </Container>
    );
}

export default TableContainer;
