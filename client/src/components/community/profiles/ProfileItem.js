import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    bio,
    movieTag
  }
}) => {
  return (
      <li className="list-group-item">
        {/*TODO: add link "/profile/:uid"*/}
        {/*TODO: user-profile component*/}
        {/*<UserProfile profile={this.profile}/>*/}
        <Link to={`/profile/${_id}`}>{name}</Link>
      </li>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
