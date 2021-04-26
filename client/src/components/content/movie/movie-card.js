import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import movieIcon from '../../../asset/movie-icon.png';
import {connect} from "react-redux";
import {adminDeleteAccount, getCurrentProfile} from "../../../actions/profile";
import {deleteWatchlist} from "../../../actions/watchlist";

const MovieCard = ({movie, isAuthenticated}) => {
    const [iconSrc, setIconSrc] = useState(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)
    return(
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card" style={{margin: "10px"}}>
                <img src={iconSrc}
                    onError={() => {setIconSrc(movieIcon)}}></img>
                <div className="card-body">
                    <Link to={`/details/${movie.id}`}>
                        {movie.title}
                    </Link>
                    { isAuthenticated &&
                        <div>
                            {/*TODO: add successful msg*/}
                            <div className="mt-3">
                                <button
                                    // onClick={}
                                    className="btn btn-primary">
                                    Add to WatchList
                                </button>
                            </div>
                            <div className="mt-1">
                                <button className="btn btn-warning">Add to FavoriteList</button>
                            </div>
                        </div>
                    }
                    { !isAuthenticated &&
                    <div>
                        <div className="mt-3">
                            <Link to="/login">
                                <button className="btn btn-primary">Add to WatchList</button>
                            </Link>
                        </div>
                        <div className="mt-1">
                            <Link to="/login">
                                <button className="btn btn-warning">Add to FavoriteList</button>
                            </Link>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, { }
)(MovieCard);