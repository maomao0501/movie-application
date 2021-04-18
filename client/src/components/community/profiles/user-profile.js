import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

const UserProfile = (props) => {
    const profile = props.location.state.profile
    return(
        <div>
            {/*TODO: change css style*/}
            {/*TODO: add watch list / favorite*/}
            {/*TODO: if log in as user, show watch list / favorite*/}
            {/*TODO: if log in as admin, show manage user */}
            <div className='profile'>
                <img src={profile.user.avatar} alt='' className='profile-img round-img' />
                <div>
                    <h2>This is {profile.user.name} 's profile:</h2>
                    <p className='my-1'>My bio: {profile.bio}</p>
                    <p>Favorite movie genre:</p>
                    <ul>
                        {profile.skills.slice(0, 4).map((skill, index) => (
                            <li key={index} className='text-primary'>
                                {skill}
                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </div>
    )
}

UserProfile.propTypes = {
    profile: PropTypes.object.isRequired
};

export default withRouter(UserProfile)