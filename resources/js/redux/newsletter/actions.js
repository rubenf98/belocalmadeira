import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchNewsletters = (page = 1, filters = {}) => ({
    type: types.FETCH_NEWSLETTERS,
    payload: axios.get(`${window.location.origin}/api/newsletters?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchNewsletter = (id) => ({
    type: types.FETCH_NEWSLETTER,
    payload: axios.get(`${window.location.origin}/api/newsletters/${id}`)
})

export const deleteNewsletter = id => ({
    type: types.DELETE_NEWSLETTER,
    payload: axios.delete(`${window.location.origin}/api/newsletters/${id}`),
    meta: { id }
});

export const createNewsletter = (data) => ({
    type: types.CREATE_NEWSLETTER,
    payload: axios.post(`${window.location.origin}/api/newsletters`, data),
});


export const updateNewsletter = (id, data) => ({
    type: types.UPDATE_NEWSLETTER,
    payload: axios.put(`${window.location.origin}/api/newsletters/${id}`, data),
});

export const updateNewsletterSubscription = (id) => ({
    type: types.UPDATE_NEWSLETTER_SUBSCRIPTION,
    payload: axios.put(`${window.location.origin}/api/newsletters-subscription/${id}`),
});

export const resetNewsletter = () => ({
    type: types.RESET_NEWSLETTER,
});

