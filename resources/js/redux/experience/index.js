import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    links: {},
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_EXPERIENCE}_PENDING`:
        case `${types.CREATE_EXPERIENCE}_PENDING`:
        case `${types.UPDATE_EXPERIENCE}_PENDING`:
        case `${types.FETCH_EXPERIENCES}_PENDING`:
        case `${types.FETCH_EXPERIENCE}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.UPDATE_EXPERIENCE}_REJECTED`:
        case `${types.DELETE_EXPERIENCE}_REJECTED`:
        case `${types.CREATE_EXPERIENCE}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.CREATE_EXPERIENCE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };

        case `${types.DELETE_EXPERIENCE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_EXPERIENCE}_FULFILLED`:
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

        case `${types.FETCH_EXPERIENCE}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_EXPERIENCES}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.FETCH_EXPERIENCE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_EXPERIENCES}_FULFILLED`:
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