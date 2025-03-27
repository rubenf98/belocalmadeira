import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchCoupons = (page = 1, filters = {}) => ({
    type: types.FETCH_COUPONS,
    payload: axios.get(`${window.location.origin}/api/coupons?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchCoupon = (id) => ({
    type: types.FETCH_COUPON,
    payload: axios.get(`${window.location.origin}/api/coupons/${id}`)
})

export const deleteCoupon = id => ({
    type: types.DELETE_COUPON,
    payload: axios.delete(`${window.location.origin}/api/coupons/${id}`),
    meta: { id }
});

export const createCoupon = (data) => ({
    type: types.CREATE_COUPON,
    payload: axios.post(`${window.location.origin}/api/coupons`, data),
});


export const updateCoupon = (id, data) => ({
    type: types.UPDATE_COUPON,
    payload: axios.put(`${window.location.origin}/api/coupons/${id}`, data),
});

export const resetCoupon = () => ({
    type: types.RESET_COUPON,
});

