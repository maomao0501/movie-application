import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_WATCHLIST, WATCHLIST_ERROR
} from './types';

// Get current user's watchlist
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
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};