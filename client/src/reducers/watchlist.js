import {
    GET_WATCHLIST, WATCHLIST_ERROR
} from '../actions/types';

const initialState = {
    movies: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case GET_PROFILE:
        case GET_WATCHLIST:
            return {
                ...state,
                movies: payload,
                loading: false
            };
        // case UPDATE_PROFILE:
        //     return {
        //         ...state,
        //         profile: payload,
        //         loading: false
        //     };
        case WATCHLIST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}