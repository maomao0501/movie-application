import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment } from '../../../actions/comment'

const CommentInput = (
    {
        movieId,
        postComment,
        auth: { isAuthenticated, user }
    }) => {
    const [formData, setFormData] = useState({
        user: user==null ? "" : user._id,
        movie: movieId,
        avatar: user==null ? "" : user.avatar,
        text: ""
    });
    return (
        <div className="row">
            <textarea
                onChange={(e) =>
                    setFormData((oldData) => ({
                        ...oldData,
                        text: e.target.value
                    }))}
                value={formData.text} className="form-control"
                disabled={!isAuthenticated}></textarea>
            {
                isAuthenticated &&
                <button 
                    className="btn btn-primary form-control"
                    onClick={() => {
                    setFormData((oldData) => ({
                        ...oldData,
                        text: ""
                    })).then(postComment(formData, false))
                }}
                    className="btn btn-primary">
                    Submit Comment
                </button>
            }
            {
                !isAuthenticated &&
                <Link to="/login"
                    className="btn btn-primary form-control">
                    Login
                </Link>
            }

        </div>
    )
}

CommentInput.propTypes = {
    postComment: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(
    mapStateToProps,
    { postComment }
)(CommentInput)