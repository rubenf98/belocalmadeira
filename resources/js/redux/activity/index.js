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
        case `${types.FETCH_ACTIVITIES}_PENDING`:
        case `${types.FETCH_ACTIVITY}_PENDING`:
            return {
                ...state,
                loading: true,

            };

        case `${types.FETCH_ACTIVITIES}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };

        case `${types.FETCH_ACTIVITIES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
                links: action.payload.data.links
            };

        case `${types.FETCH_ACTIVITY}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };


        case `${types.FETCH_ACTIVITY}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        default:
            return state
    }
}