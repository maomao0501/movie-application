// import React from 'react'
// import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';
// import ProfileItem from "./ProfileItem";
//
// const UserProfile = ({profile: {
//     user: { _id, name, avatar },
//     bio,
//     movieTag
// }}) => {
//     return(
//         <div className='profile'>
//             <img src={avatar} alt='' className='profile-img round-img' />
//             <div>
//                 <h2>This is {name} 's profile:</h2>
//                 <p className='my-1'>My bio: {bio}</p>
//                 <p>Favorite movie genre:</p>
//                 <ul>
//                     {movieTag.slice(0, 4).map((tag, index) => (
//                         <li key={index} className='text-primary'>
//                             {tag}
//                         </li>
//                     ))}
//
//                 </ul>
//             </div>
//
//         </div>
//     )
// }
//
// ProfileItem.propTypes = {
//     profile: PropTypes.object.isRequired
// };
//
// export default UserProfile;