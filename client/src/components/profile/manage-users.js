import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileItem from '../community/profiles/ProfileItem';
import { getProfiles } from '../../actions/profile';

import { useEffect } from 'react';
import {Link} from "react-router-dom";

const ManageUsers = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    return(
        <>
            <h3>Manage Users</h3>
            <ul className="list-group">
                {profiles.map(profile => (
                    <li className="list-group-item">
                        {/*TODO:add user profile link, delete btn*/}
                        <Link to="/">
                            {profile.user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

ManageUsers.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { getProfiles }
)(ManageUsers);