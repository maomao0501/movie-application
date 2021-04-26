import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import {adminDeleteAccount, getCurrentProfile} from "../../../actions/profile";
import {connect} from "react-redux";

const UserProfile = (props) => {
    useEffect(() => {
        {
            props.isAuthenticated &&
            props.getCurrentProfile();
        }
        }, [props.getCurrentProfile]);
    const {profileId} = useParams();
    const p = props.location.state.profile
    return(
        <div>
            <div className='profile'>
                <img src={p.user.avatar} alt='' className='profile-img round-img' />
                {
                    props.isAuthenticated && props.auth.user && props.auth.user.role === "user" &&
                    <div>
                        <h2>This is {p.user.name} 's profile:</h2>
                        <p className='my-1'>My bio: {p.bio}</p>
                        <p>Favorite movie genre:</p>
                        <ul>
                            {p.movieTag.slice(0, 4).map((tag, index) => (
                                <li key={index} className='text-primary'>
                                    {tag}
                                </li>
                            ))}

                        </ul>
                    </div>
                }
                {
                    !props.isAuthenticated && !props.auth.user &&
                    <Link to="/login">
                        Please Login to see the profile!
                    </Link>
                }
                {
                    props.isAuthenticated && props.auth.user && props.auth.user.role === "admin" &&
                    <Link to="/">
                        <button className="btn btn-danger" onClick={() => props.adminDeleteAccount(profileId)}>
                            admin delete
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    adminDeleteAccount: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getCurrentProfile, adminDeleteAccount }
)(withRouter(UserProfile));