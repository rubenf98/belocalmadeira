import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchExperiences = (page = 1, filters = {}) => ({
    type: types.FETCH_EXPERIENCES,
    payload: axios.get(`${window.location.origin}/api/experiences?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchExperience = (id) => ({
    type: types.FETCH_EXPERIENCE,
    payload: axios.get(`${window.location.origin}/api/experiences/${id}`)
})

export const deleteExperience = id => ({
    type: types.DELETE_EXPERIENCE,
    payload: axios.delete(`${window.location.origin}/api/experiences/${id}`),
    meta: { id }
});

export const createExperience = (data) => ({
    type: types.CREATE_EXPERIENCE,
    payload: axios.post(`${window.location.origin}/api/experiences`, data),
});


export const updateExperience = (id, data) => ({
    type: types.UPDATE_EXPERIENCE,
    payload: axios.put(`${window.location.origin}/api/experiences/${id}`, data),
});
