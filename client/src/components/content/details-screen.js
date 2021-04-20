import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import movieService from "../services/movie-service";
import CommentList from "./comment/comment-list";
import { getComments } from '../../actions/comment';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Spinner from "../layout/Spinner";

const DetailsScreen = ({
                           getComments,
                           comment: { comments, loading }
                       }) => {
    const {imdbID} = useParams();
    const history = useHistory();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        findMovieByIMDB();
        getComments()
    },[getComments])
    const findMovieByIMDB = () => {
        movieService.findMovieByIMDB(imdbID)
            .then((data) => {
                setMovie(data)
            })
    }
    return (
        <div>
            <button  class="btn btn-success" onClick={() => {history.goBack()}}>Back</button>
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
            {/*{JSON.stringify(movie)}*/}
            //TODO: find comments
            {
                loading?
                    <Spinner /> :
                    <CommentList comments={comments}/>
            }
        </div>
    )
}


DetailsScreen.propTypes = {
    getComments: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    comment: state.comment
});

export default connect(
    mapStateToProps,
    { getComments }
)(DetailsScreen);