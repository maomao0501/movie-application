import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getProfileById} from '../../../actions/profile'
import { deleteComment } from '../../../actions/comment';

const CommentItem = ({ 
    comment,
    userId,
    profileById,
    auth: { isAuthenticated, user },
    getProfileById,
}) => {
    const commentUserId = comment.user;
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (userId === commentUserId) {
            setProfile(profileById)
        }
    }, [userId]);
    useEffect(() => {
        getProfileById(commentUserId);
    }, [getProfileById])
    return (
        profile != null &&
            <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <Link to={`/profile/${commentUserId}`}>
                            {profile.user.name}
                        </Link>
                    </div>
                    <div className="col-10">
                        {comment.date} 
                        {
                        (isAuthenticated && user._id == profile.user._id) &&
                        <button className="btn btn-warning float-right"
                        onClick={() =>{
                            deleteComment(comment._id)
                        }}>
                            Delete comment
                        </button>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={profile.user.avatar} className="img-thumbnail" width="40" height="40" alt="..."/>
                    </div>
                    <div className="col-10">
                        {comment.text}
                    </div>
                </div>
            </li>
        </div>
    )
}

CommentItem.propTypes = {
    auth: PropTypes.object.isRequired,
    getProfileById: PropTypes.func.isRequired,
    profileById: PropTypes.object.isRequired,
    userId: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    userId: state.profile.userId,
    profileById: state.profile.profileById
  });
  
  export default connect(
    mapStateToProps,
    { getProfileById }
  )(CommentItem);
