import {
    GET_COMMENTS, COMMENT_ERROR, GET_COMMENTS_BY_MOVIE, GET_COMMENTS_BY_USER
} from '../actions/types';

const initialState = {
    user: null,
    comment: null,
    comments: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case GET_PROFILE:
        case GET_COMMENTS:
            return {
                ...state,
                comments: payload,
                loading: false
            };
        case GET_COMMENTS_BY_MOVIE:
            return {
                ...state,
                comments: payload,
                loading: false
            };
        case GET_COMMENTS_BY_USER:
            return {
                ...state,
                comments: payload,
                loading: false
            };
        // case UPDATE_PROFILE:
        //     return {
        //         ...state,
        //         profile: payload,
        //         loading: false
        //     };
        case COMMENT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                comment: null
            };
        default:
            return state;
    }
}