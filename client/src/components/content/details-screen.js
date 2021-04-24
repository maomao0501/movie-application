import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import movieService from "../services/movie-service";
import CommentList from "./comment/comment-list";
import { getComments } from '../../actions/comment';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../layout/Spinner";
import CommentSection from "./comment/comments-section";

const DetailsScreen = () => {
    const {imdbID} = useParams();
    const history = useHistory();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        findMovieByIMDB();
    },[])
    const findMovieByIMDB = () => {
        movieService.findMovieByIMDB(imdbID)
            .then((data) => {
                setMovie(data)
            })
    }
    return (
        <div>
            <button  className="btn btn-success" onClick={() => {history.goBack()}}>Back</button>
            <h2>{movie.title}</h2>
            <p>
                <img width={300} style={{float: "right"}} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
                {movie.overview}
            </p>
            <div>
                {movie.original_title}
                <br/>
                {movie.release_date}
            </div>
            {/*TODO: load comment without auth (without login), */}
            {/*TODO: show comment user (who create the comment) as link to profile*/}
            <CommentSection/>
        </div>
    )
}

export default DetailsScreen;