import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import {deleteWatchlist, getWatchlist} from '../../actions/watchlist'
import CommentItem from "./comment/comment-item";
import {Link} from "react-router-dom";
import watchlist from "../../reducers/watchlist";
import movieService from "../services/movie-service";

const WatchList = (
    {
        getWatchlist,
        getCurrentProfile,
        deleteWatchlist,
        auth: { isAuthenticated, user }, profile,
        watchlist: { movies, loading }
    }) => {
    // const [movieTitle, setMovieTitle] = useState({});
    useEffect(() => {
        getCurrentProfile();
        getWatchlist();
    }, [getWatchlist, deleteWatchlist]);
    function refreshPage() {
        window.location.reload(false);
    }
    // function findMovieById(id) {
    //     movieService.findMovieByIMDB(id)
    //         .then((result) => {
    //             setMovieTitle(result)
    //         })
    // }
    return (
        <div>
            {/*TODO: Watchlist match logined user, movie name as link to movie*/}
            <h1>Watch List Page</h1>
            {
                !loading && isAuthenticated &&
                    <ul className="list-group">
                        {
                            console.log(movies)
                        }
                        {
                            movies.filter((movie) =>
                                movie.user === user._id
                            ).map((movie) =>
                            <li className="list-group-item">

                                <Link to={`/details/${movie.movie}`}>
                                    {/*{*/}
                                    {/*    movieService.findMovieByIMDB(movie.movie)*/}
                                    {/*        .then((result) => {*/}
                                    {/*            setMovieTitle(result)*/}
                                    {/*        })*/}
                                    {/*}*/}
                                    {
                                        // console.log(movieTitle)
                                    }
                                    {/*TODO: show movie title here*/}
                                    {movie.movie}
                                </Link>
                                <button
                                    onClick={() => {
                                        deleteWatchlist(movie._id)
                                        refreshPage()
                                    }}
                                    className="btn btn-danger float-right">
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
    watchlist: PropTypes.object.isRequired,
    deleteWatchlist: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    watchlist: state.watchlist
});

export default connect(
    mapStateToProps,
    { getCurrentProfile, getWatchlist, deleteWatchlist}
)(WatchList);
