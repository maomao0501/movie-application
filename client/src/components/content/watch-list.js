import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import { getWatchlist } from '../../actions/watchlist'
import CommentItem from "./comment/comment-item";

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
                        {movies.map((movie) =>
                            <li className="list-group-item">
                                {movie.movie}
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
