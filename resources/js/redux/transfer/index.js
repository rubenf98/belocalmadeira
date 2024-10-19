import { types } from "./types";

export const initialState = {
    data: [],
    calendarMetadata: {
        dates: {},
        disabled: []
    },
    meta: {},
    links: {},
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_TRANSFER}_PENDING`:
        case `${types.CREATE_EXTERNAL_TRANSFER}_PENDING`:
        case `${types.CREATE_TRANSFER}_PENDING`:
        case `${types.UPDATE_TRANSFER}_PENDING`:
        case `${types.FETCH_TRANSFERS}_PENDING`:
        case `${types.FETCH_TRANSFER}_PENDING`:
        case `${types.FETCH_DISABLED_DATES}_PENDING`:
        case `${types.UPDATE_VISIBILITY}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.CREATE_EXTERNAL_TRANSFER}_REJECTED`:
        case `${types.UPDATE_TRANSFER}_REJECTED`:
        case `${types.DELETE_TRANSFER}_REJECTED`:
        case `${types.FETCH_DISABLED_DATES}_REJECTED`:
        case `${types.CREATE_TRANSFER}_REJECTED`:
        case `${types.UPDATE_VISIBILITY}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_DISABLED_DATES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                calendarMetadata: action.payload.data,
            };

        case `${types.CREATE_EXTERNAL_TRANSFER}_FULFILLED`:
        case `${types.CREATE_TRANSFER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };

        case `${types.DELETE_TRANSFER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_TRANSFER}_FULFILLED`:
        case `${types.UPDATE_VISIBILITY}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map(
                    (record) =>
                        record.id === action.payload.data.data.id
                            ? action.payload.data.data
                            : record
                )
            };

        case `${types.FETCH_TRANSFER}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_TRANSFERS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.FETCH_TRANSFER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_TRANSFERS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
                links: action.payload.data.links
            };

        default:
            return state
    }
}