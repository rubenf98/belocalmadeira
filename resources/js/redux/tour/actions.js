import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTours = (page = 1, filters = {}) => ({
    type: types.FETCH_TOURS,
    payload: axios.get(`${window.location.origin}/api/tours?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchTour = (id) => ({
    type: types.FETCH_TOUR,
    payload: axios.get(`${window.location.origin}/api/tours/${id}`)
})

export const deleteTour = id => ({
    type: types.DELETE_TOUR,
    payload: axios.delete(`${window.location.origin}/api/tours/${id}`),
    meta: { id }
});

export const createTour = (data) => ({
    type: types.CREATE_TOUR,
    payload: axios.post(`${window.location.origin}/api/tours`, data),
});


export const updateTour = (id, data) => ({
    type: types.UPDATE_TOUR,
    payload: axios.put(`${window.location.origin}/api/tours/${id}`, data),
});
