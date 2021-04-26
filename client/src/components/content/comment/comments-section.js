import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import { getProfiles, getCurrentProfile } from '../../../actions/profile';
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import {getComments, getCommentsByMovie} from "../../../actions/comment";
import CommentList from "./comment-list";

const CommentSection = ({
                      getComments,
                      getCurrentProfile,
                      auth: { isAuthenticated, user }, profile,
                      comment: { comments, loading }
                  }) => {
    useEffect(() => {
        getCurrentProfile();
        getComments();
    }, [getComments, getCurrentProfile]);

    return (
        <>
            <h1>comment section</h1>
            <CommentList comments={comments}/>
            {/*{*/}
            {/*    isAuthenticated &&*/}
            {/*        console.log("user", user)*/}
            {/*}*/}
            {/*{*/}
            {/*    console.log(comments)*/}
            {/*}*/}
            {/*{*/}
            {/*    loading &&*/}
            {/*    console.log("comments:", comments)*/}
            {/*}*/}
        </>
    );
};

CommentSection.propTypes = {
    getCommentsByMovie: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    comment: state.comment,
    commentProfile: state.commentProfile
});

export default connect(
    mapStateToProps,
    { getCurrentProfile, getComments }
)(CommentSection);
