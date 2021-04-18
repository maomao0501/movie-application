import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import { getProfiles } from '../../../actions/profile';
import {Link} from "react-router-dom";
import { withRouter } from "react-router";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
          <>
            <div className="home-title">
              <h1 className='large text-primary'>Community</h1>
              <p className='lead text-center text-light'>
                See how people think about MovieDB here
          </p>
            </div>
            <div className=''>
              <ul className="list-group">
                {profiles.length > 0 ? (
                  profiles.map(profile => (
                      <li className="list-group-item">
                        <Link to={{
                          pathname: `/dashboard/${profile.user._id}`,
                          state: {profile}
                        }}>
                          {profile.user.name}
                          {
                            console.log(profile)
                          }
                        </Link>
                      </li>
                  ))
                ) : (
                    <h4>No profiles found...</h4>
                  )}
              </ul>
            </div>
          </>
        )}
    </>
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
)(withRouter(Profiles));
