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
    <div className="col-sm-4">
      <div className='profile'>
        <img src={avatar} alt='' className='profile-img round-img' />
        <div>
          <Link to={`/profile/${_id}`}>{name}</Link>
          <p className='my-1'>My bio: {bio}</p>
          <p>Favorite movie genre:</p>
          <ul>
            {movieTag.slice(0, 4).map((tag, index) => (
              <li key={index} className='text-primary'>
                {tag}
              </li>
            ))}

          </ul>
        </div>

      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
