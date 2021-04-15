import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import movieIcon from '../../../asset/movie-icon.png';

const MovieCard = ({movie}) => {
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
                    <div className="controls">
                        <button className="btn btn-primary">Add to WatchList</button>
                    </div>
                    <br/>
                    <div className="controls">
                        <button className="btn btn-warning">Add to FavoriteList</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard