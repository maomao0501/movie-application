import {
    GET_COMMENTS, 
    COMMENT_ERROR, 
    GET_COMMENTS_BY_MOVIE, 
    GET_COMMENTS_BY_USER,
    ADD_COMMENT,
    REMOVE_COMMENT
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
        case ADD_COMMENT:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    ...payload
                },
                loading: false
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((comment) => {
                    if (comment._id != payload) return true;
                    else return false;
                }),
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