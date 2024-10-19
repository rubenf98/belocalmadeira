import React, { useState, useEffect } from "react";
import Input from "antd/es/input"
import Cascader from "antd/es/cascader"
import DatePicker from "antd/es/date-picker"
import styled, { withTheme } from "styled-components";
import Table from "../../../common/TableContainer";
import RowOperation from "../../RowOperation";
import StopPropagation from "../../StopPropagation";
import FormContainer from "./FormContainer";
import { updateTransfer, createExternalTransfer, updateVisibility } from "../../../../redux/transfer/actions";
import { connect } from "react-redux";
import { colors } from "../../../../helper";
import TransferForm from "./TransferForm";
import { message } from "antd";

const { Search } = Input;

const Container = styled.div`
    width: 100%;
`;

const Indicator = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.background};
`;

const IndicatorButton = styled.button`
    border-radius: 6px;
    color: white;
    background: ${props => props.background};
    box-shadow: 0px;
    border: 0px;
    padding: 6px 8px;
    box-sizing: border-box;
    cursor: pointer;
`;

const AddButton = styled.div`
    width: 80px;
    height: 40px;
    float: right;
    background: ${props => props.background};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    cursor: pointer;
    padding: 10px;

    &:hover {
        background: ${props => props.backgroundH};
    }

    img {
        height: 100%;
        margin: auto;
        display: block;
    }
`;

function TableContainer({ theme, loading, data, meta, handlePageChange, onRowClick, updateVisibility, onDelete, updateTransfer, setFilters, createExternalTransfer }) {
    const [visibility, setVisibility] = useState(false);
    const [reservationVisibility, setTransferVisibility] = useState(false);
    const [currentRecord, setCurrentRecord] = useState({});
    const [input, setInput] = useState({ client: undefined, trajectory: undefined });

    const columns = [
        {
            title: '',
            dataIndex: 'confirmation',
            render: (confirmation) => <Indicator background={confirmation != 0 ? "#008d09" : "#df0000"} />,
        },
        {
            title: '#',
            dataIndex: 'id',
        },
        {
            title: 'Cliente',
            dataIndex: 'name',
            filterDropdown: () => (getFilter("client")),
            render: (name, row) => (<span>{name} | {row.email} | {row.phone}</span>),
        },
        {
            title: 'Passageiros',
            dataIndex: 'passengers',
        },
        {
            title: 'Data',
            dataIndex: 'date',
            filterDropdown: () => (getDatePicker("date")),
        },
        {
            title: 'Trajetória',
            dataIndex: 'trajectory',
            filterDropdown: () => (getFilter("trajectory")),
        },
        {
            title: 'Retorno',
            dataIndex: 'return_date',
            render: (date) => date ? date : "---",
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            render: (price) => (<span>{price + "€"}</span>),
        },
        // {
        //     title: '',
        //     dataIndex: 'seen',
        //     render: (seen, row) => <StopPropagation> <IndicatorButton background={seen != 0 ? "#008d09" : "#df0000"} onClick={() => updateVisibility(row.id)}>{seen ? <span>Desmarcar como visto</span> : <span>Marcar como visto</span>}</IndicatorButton></StopPropagation>,
        // },
        {
            title: '',
            dataIndex: 'admin_confirmation',
            render: (admin_confirmation, row) => <StopPropagation> <IndicatorButton background={admin_confirmation != 0 ? "#008d09" : "#df0000"} onClick={() => updateVisibility(row.id)}>{admin_confirmation ? <span>Confirmado</span> : <span>Confirmar</span>}</IndicatorButton></StopPropagation>,
        },
        // {
        //     title: "",
        //     key: "",
        //     render: (text, row) => (
        //         <StopPropagation>
        //             <RowOperation
        //                 onDeleteConfirm={() => onDelete(row.id)}
        //                 onUpdateClick={() => onUpdateClick(row)}
        //             />
        //         </StopPropagation>
        //     ),
        // },
    ];


    function onUpdateClick(record) {
        setVisibility(true);
        setCurrentRecord(record);
    };

    function handleFilterChange(field, value) {
        let newInput = input;
        newInput[field] = value;
        setInput(newInput);
    }

    function getDatePicker(field) {
        let obj = {}
        obj[field]
        return (
            <div style={{ padding: 8 }}>
                <DatePicker
                    onChange={(value, date) => setFilters({ date: date })}
                    allowClear
                />
            </div>
        );
    }

    function getFilter(field) {
        return (
            <div style={{ padding: 8 }}>
                <Search
                    onChange={(e) => handleFilterChange(field, e.target.value)}
                    onSearch={() => setFilters(input)}
                    placeholder="Pesquisa..."
                    allowClear
                    enterButton
                    size="large"
                />
            </div>
        );
    }



    return (
        <Container>
            <Table
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handlePageChange={(aPage) => handlePageChange(aPage)}
                onRow={(record) => {
                    return {
                        onClick: () => onRowClick(record.id),
                    };
                }}
            />
            <FormContainer
                visible={visibility}
                record={currentRecord}
                handleModalClose={() => setVisibility(false)}
                updateTransfer={updateTransfer}
            />
            <TransferForm
                visible={reservationVisibility}
                handleModalClose={() => setTransferVisibility(false)}
                createTransfer={createExternalTransfer}
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createExternalTransfer: (data) => dispatch(createExternalTransfer(data)),
        updateTransfer: (id, data) => dispatch(updateTransfer(id, data)),
        updateVisibility: (id) => dispatch(updateVisibility(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.transfer.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(TableContainer));
