import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import { getWatchlist } from '../../actions/watchlist'
import CommentItem from "./comment/comment-item";
import {Link} from "react-router-dom";

const WatchList = (
    {
        getWatchlist,
        getCurrentProfile,
        auth: { isAuthenticated, user }, profile,
        watchlist: { movies, loading }
    }) => {
    useEffect(() => {
        getCurrentProfile();
        getWatchlist();
    }, [getWatchlist, getCurrentProfile]);
    return (
        <div>
            {/*TODO: Watchlist match logined user, movie name as link to movie*/}
            <h1>Watch List Page</h1>
            {
                !loading &&
                    <ul className="list-group">
                        {
                            movies.filter((movie) =>
                                movie.user === user._id
                            ).map((movie) =>
                            <li className="list-group-item">
                                <Link to={`/details/${movie.movie}`}>
                                    {/*TODO: match movie id to movie object*/}
                                    {movie.movie}
                                </Link>
                                {/*TODO: remove btn*/}
                                <button className="btn btn-danger float-right">
                                    Remove
                                </button>
                            </li>
                        )}
                    </ul>
            }

        </div>
    )
}

WatchList.propTypes = {
    getWatchlist: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    watchlist: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    watchlist: state.watchlist
});

export default connect(
    mapStateToProps,
    { getCurrentProfile, getWatchlist }
)(WatchList);
