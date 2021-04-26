import {
    GET_WATCHLIST, GET_WATCHLIST_BY_ID, WATCHLIST_ERROR, REMOVE_WATCHLIST
} from '../actions/types';

const initialState = {
    movie: null,
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
        case GET_WATCHLIST_BY_ID:
            return {
                ...state,
                movie: payload,
                loading: false
            };
        // case UPDATE_PROFILE:
        //     return {
        //         ...state,
        //         profile: payload,
        //         loading: false
        //     };
        case REMOVE_WATCHLIST:
            return {
                ...state,
                loading: false
            }
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