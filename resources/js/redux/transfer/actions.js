import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTransfers = (page = 1, filters = {}) => ({
    type: types.FETCH_TRANSFERS,
    payload: axios.get(`${window.location.origin}/api/transfers?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchDisabledDates = (participants) => ({
    type: types.FETCH_DISABLED_DATES,
    payload: axios.get(`${window.location.origin}/api/transfers/disabledDate?participants=${participants}`)
})

export const fetchTransfer = (id) => ({
    type: types.FETCH_TRANSFER,
    payload: axios.get(`${window.location.origin}/api/transfers/${id}`)
})

export const deleteTransfer = id => ({
    type: types.DELETE_TRANSFER,
    payload: axios.delete(`${window.location.origin}/api/transfers/${id}`),
    meta: { id }
});

export const createTransfer = (data) => ({
    type: types.CREATE_TRANSFER,
    payload: axios.post(`${window.location.origin}/api/transfers`, data),
});


export const updateTransfer = (id, data) => ({
    type: types.UPDATE_TRANSFER,
    payload: axios.put(`${window.location.origin}/api/transfers/${id}`, data),
});

export const createExternalTransfer = (data) => ({
    type: types.CREATE_EXTERNAL_TRANSFER,
    payload: axios.post(`${window.location.origin}/api/external-transfers`, data),
});

export const blockTransferDate = (data) => ({
    type: types.BLOCK_TRANSFER_DATE,
    payload: axios.post(`${window.location.origin}/api/transfers/blockDate`, data),
});

export const updateVisibility = (id) => ({
    type: types.UPDATE_VISIBILITY,
    payload: axios.put(`${window.location.origin}/api/transfer/visibility/${id}`),
});