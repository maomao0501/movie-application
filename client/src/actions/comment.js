import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_COMMENTS, 
    COMMENT_ERROR, 
    GET_COMMENTS_BY_MOVIE, 
    GET_COMMENTS_BY_USER
} from './types';

// Get current movie's comments
export const getComments = () => async (dispatch) => {
    try {
        const res = await api.get('/comments');

        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getCommentsByMovie = (movieId) => async (dispatch) => {
    try {
        const res = await api.get(`/comments/movie/${movieId}`);

        dispatch({
            type: GET_COMMENTS_BY_MOVIE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getCommentsByUser = (userId) => async (dispatch) => {
    try {
        const res = await api.get(`/comments/user/${userId}`);

        dispatch({
            type: GET_COMMENTS_BY_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};