import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchBlogs = (page = 1, filters = {}) => ({
    type: types.FETCH_BLOGS,
    payload: axios.get(`${window.location.origin}/api/blogs?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchBlog = (id) => ({
    type: types.FETCH_BLOG,
    payload: axios.get(`${window.location.origin}/api/blogs/${id}`)
})

export const deleteBlog = id => ({
    type: types.DELETE_BLOG,
    payload: axios.delete(`${window.location.origin}/api/blogs/${id}`),
    meta: { id }
});

export const createBlog = (data) => ({
    type: types.CREATE_BLOG,
    payload: axios.post(`${window.location.origin}/api/blogs`, data),
});


export const updateBlog = (id, data) => ({
    type: types.UPDATE_BLOG,
    payload: axios.put(`${window.location.origin}/api/blogs/${id}`, data),
});
