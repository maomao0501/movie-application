import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_WATCHLIST, WATCHLIST_ERROR, REMOVE_WATCHLIST, GET_WATCHLIST_BY_ID, ADD_WATCHLIST
} from './types';

// Get watchlist
export const getWatchlist = () => async (dispatch) => {
    try {
        const res = await api.get('/watchlist');

        dispatch({
            type: GET_WATCHLIST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: WATCHLIST_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get watchlist by id
export const getWatchlistById = () => async (dispatch) => {
    try {
        const res = await api.get('/watchlist/:watchlistId');

        dispatch({
            type: GET_WATCHLIST_BY_ID,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: WATCHLIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Create watchlist data
export const createWatchlist = (formData) => async (
    dispatch
) => {
    try {
        console.log(formData)
        const res = await api.post('/watchlist', formData);
        dispatch({
            type: ADD_WATCHLIST,
            payload: res.data
        });

        dispatch(setAlert("Added to your watchlist!",'success'));

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: WATCHLIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete watchlist movie
export const deleteWatchlist = (watchlistId) => async (dispatch) => {
    try {
        const res = await api.delete(`/watchlist/${watchlistId}`);

        dispatch({
            type: REMOVE_WATCHLIST
        });

        dispatch(setAlert('Movie Removed', 'success'));
    } catch (err) {
        dispatch({
            type: WATCHLIST_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};