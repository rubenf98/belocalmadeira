import React, { useEffect } from 'react'
import { Row, Form, Calendar, Col, Select } from 'antd';
import moment from "moment";
import styled from "styled-components";
import { fetchDisabledDates } from "../../../redux/reservation/actions";
import { connect } from "react-redux";

const CustomCalendar = styled(Calendar)`
    background: transparent;
    color: white;
    margin: 10px 0px;

    .ant-picker-body {
        padding: 30px 0px !important;
        box-sizing: border-box;
    }

    .ant-picker-cell {
        color: #7d7d7d;
    }

    .ant-picker-cell-in-view, th {
        color: white !important;
    }

    th {
        font-weight: bold;
    }

    .ant-picker-calendar, .ant-picker-panel {
        background: transparent;
    }
`;

const CustomSelect = styled(Select)`
    cursor: pointer !important;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    outline: none;
    border-radius: 0px;
    border: 0px;
    background-color: transparent;
    color: white;
    font-size: 24px;

    .ant-select, .ant-select-selector {
        background-color: transparent !important;
    }


    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    svg {
        fill: white;
    }
`;


function Date({ fetchDisabledDates, calendarMetadata, loading, participants }) {

    useEffect(() => {
        fetchDisabledDates(participants);
    }, [participants]);

    return (
        <div>
            {!loading &&
                <Form.Item
                    name="date"
                    rules={[{ required: true, message: "Please select a date" }]}
                >
                    <CustomCalendar
                        fullscreen={false}
                        disabledDate={(currentDate) => {
                            return currentDate && (
                                (currentDate < moment())
                                || (calendarMetadata.disabled.includes(moment(currentDate).format("YYYY-MM-DD"))));
                        }}
                        headerRender={({ value, onChange }) => {
                            const currentDate = moment();
                            const currentYear = currentDate.year();
                            const monthOptions = [];
                            const month = value.month();
                            const year = value.year();

                            const current = value.clone();
                            const localeData = value.localeData();
                            const months = [];

                            for (let i = 0; i < 12; i++) {
                                current.month(i);
                                months.push(localeData.monthsShort(current));
                            }

                            for (let index = 0; index < 12; index++) {
                                monthOptions.push(
                                    <Select.Option style={{ width: "100px" }} key={index}>
                                        {months[index]}
                                    </Select.Option>,
                                );
                            }

                            const options = [];
                            for (let i = currentYear; i < year + 2; i += 1) {
                                options.push(
                                    <Select.Option key={i} value={i}>
                                        {i}
                                    </Select.Option>,
                                );
                            }
                            return (
                                <div style={{ padding: 8 }}>
                                    <Row gutter={32}>
                                        <Col span={12}>
                                            <CustomSelect
                                                style={{ width: "100%" }}
                                                size="large"
                                                dropdownMatchSelectWidth={false}
                                                onChange={newYear => {
                                                    const now = value.clone().year(newYear);
                                                    onChange(now);
                                                }}
                                                dropdownRender={menu => (
                                                    <div className='colored-dropdown'>
                                                        {menu}
                                                    </div >
                                                )}
                                                value={String(year)}
                                            >
                                                {options}
                                            </CustomSelect>
                                        </Col>
                                        <Col span={12}>
                                            <CustomSelect
                                                style={{ width: "100%" }}
                                                size="large"
                                                dropdownMatchSelectWidth={false}
                                                value={String(month)}
                                                onChange={selectedMonth => {
                                                    const newValue = value.clone();
                                                    newValue.month(parseInt(selectedMonth, 10));
                                                    onChange(newValue);
                                                }}
                                                dropdownRender={menu => (
                                                    <div className='colored-dropdown'>
                                                        {menu}
                                                    </div >
                                                )}
                                            >
                                                {monthOptions}
                                            </CustomSelect>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        }}
                    />
                </Form.Item>}






        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDisabledDates: (participants) => dispatch(fetchDisabledDates(participants)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Date);