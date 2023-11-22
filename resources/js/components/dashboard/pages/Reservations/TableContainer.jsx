import React, { useState, useEffect } from "react";
import Input from "antd/es/input"
import Cascader from "antd/es/cascader"
import DatePicker from "antd/es/date-picker"
import styled, { withTheme } from "styled-components";
import Table from "../../../common/TableContainer";
import RowOperation from "../../RowOperation";
import StopPropagation from "../../StopPropagation";
import FormContainer from "./FormContainer";
import { updateReservation, createExternalReservation, blockReservationDate, updateVisibility } from "../../../../redux/reservation/actions";
import { fetchActivities } from "../../../../redux/activity/actions";
import { connect } from "react-redux";
import { colors } from "../../../../helper";
import ReservationForm from "./ReservationForm";
import BlockReservationForm from "./BlockReservationForm";
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

function TableContainer({ theme, blockReservationDate, fetchActivities, loading, data, meta, handlePageChange, onRowClick, updateVisibility, onDelete, updateReservation, setFilters, createExternalReservation }) {
    const [visibility, setVisibility] = useState(false);
    const [reservationVisibility, setReservationVisibility] = useState(false);
    const [blockVisibility, setBlockVisibility] = useState(false);
    const [currentRecord, setCurrentRecord] = useState({});
    const [input, setInput] = useState({ client: undefined, activity: undefined });

    useEffect(() => {
        fetchActivities({ language: "pt" });
    }, [])

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
            title: 'Fonte',
            dataIndex: 'source',
        },
        {
            title: 'Cliente',
            dataIndex: 'name',
            filterDropdown: () => (getFilter("client")),
            render: (name, row) => (<span>{name} | {row.email} | {row.phone}</span>),
        },
        {
            title: 'Atividade',
            dataIndex: 'experienceable',
            render: (experience, row) => (<span>{getActivityField(experience)}</span>),
        },
        {
            title: 'Pessoas',
            dataIndex: 'participants',
        },
        {
            title: 'Data',
            dataIndex: 'date',
            filterDropdown: () => (getDatePicker("date")),
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            render: (price) => (<span>{price + "€"}</span>),
        },
        {
            title: '',
            dataIndex: 'seen',
            render: (seen, row) => <StopPropagation> <IndicatorButton background={seen != 0 ? "#008d09" : "#df0000"} onClick={() => updateVisibility(row.id)}>{seen ? <span>Desmarcar como visto</span> : <span>Marcar como visto</span>}</IndicatorButton></StopPropagation>,
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

    function getActivityField(experience) {
        var response = null;
        if (experience.activity_id) {
            response = experience.activity.name.pt + " (" + experience.name.pt + ")"
        } else {
            response = experience.name.pt
        }
        return response;
    }

    function onUpdateClick(record) {
        setVisibility(true);
        setCurrentRecord(record);
    };

    function handleFilterChange(field, value) {
        let newInput = input;
        newInput[field] = value;
        setInput(newInput);
    }

    function getDatePicker() {
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

    function handleDateBlock(e) {
        try {
            blockReservationDate(e)
            message.success('Datas bloqueadas com sucesso.');
        } catch (error) {
            message.error('Ocorreu um erro no bloqueio das datas, cao o problema persista contacte o programador.');
        }

    }


    return (
        <Container>
            <AddButton backgroundH={theme.primaryHover} background={theme.primary} onClick={() => setReservationVisibility(true)}>
                <img src="/icon/add_white.svg" alt="add" />
            </AddButton>
            <AddButton backgroundH={theme.primaryHover} background={theme.primary} onClick={() => setBlockVisibility(true)}>
                <img src="/icon/block_white.svg" alt="block" />
            </AddButton>
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
                updateReservation={updateReservation}
            />
            <ReservationForm
                visible={reservationVisibility}
                handleModalClose={() => setReservationVisibility(false)}
                createReservation={createExternalReservation}
            />
            <BlockReservationForm
                visible={blockVisibility}
                handleModalClose={() => setBlockVisibility(false)}
                createReservation={handleDateBlock}
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createExternalReservation: (data) => dispatch(createExternalReservation(data)),
        updateReservation: (id, data) => dispatch(updateReservation(id, data)),
        fetchActivities: (filters) => dispatch(fetchActivities(filters)),
        blockReservationDate: (data) => dispatch(blockReservationDate(data)),
        updateVisibility: (id) => dispatch(updateVisibility(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.activity.loading,
        activities: state.activity.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(TableContainer));
