import api from '../utils/api';
import { setAlert } from './alert';

import {
    GET_COMMENTS, COMMENT_ERROR
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