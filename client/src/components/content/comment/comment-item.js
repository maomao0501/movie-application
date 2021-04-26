import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getProfileById} from '../../../actions/profile'

const CommentItem = ({ 
    comment,
    userId,
    profileById,
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
                        {comment.date} delete-button-float-right
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={profile.user.avatar} class="img-thumbnail" width="40" height="40" alt="..."/>
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
    getProfileById: PropTypes.func.isRequired,
    profileById: PropTypes.object.isRequired,
    userId: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    userId: state.profile.userId,
    profileById: state.profile.profileById
  });
  
  export default connect(
    mapStateToProps,
    { getProfileById }
  )(CommentItem);
