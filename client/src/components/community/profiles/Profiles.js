import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
          <Fragment>
            <div className="home-title">
              <h1 className='large text-primary'>Community</h1>
              <p className='lead text-center text-light'>
                See how people think about MovieDB here
          </p>
            </div>
            {/*<div className="col-sm-4">*/}
            {/*  <div className='profile'>*/}
            {/*    <img src={avatar} alt='' className='profile-img round-img' />*/}
            {/*    <div>*/}
            {/*      <Link to={`/profile/${_id}`}>{name}</Link>*/}
            {/*      <p className='my-1'>My bio: {bio}</p>*/}
            {/*      <p>Favorite movie genre:</p>*/}
            {/*      <ul>*/}
            {/*        {movieTag.slice(0, 4).map((tag, index) => (*/}
            {/*            <li key={index} className='text-primary'>*/}
            {/*              {tag}*/}
            {/*            </li>*/}
            {/*        ))}*/}
            
            {/*      </ul>*/}
            {/*    </div>*/}

            {/*  </div>*/}
            {/*</div>*/}
            <div className='profiles'>
              <ul className="list-group">
                {profiles.length > 0 ? (
                  profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : (
                    <h4>No profiles found...</h4>
                  )}
              </ul>
            </div>
          </Fragment>
        )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
