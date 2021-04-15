import React, {useState, useEffect} from "react";
import movieService from "../services/movie-service";
import MovieGrid from "./movie/movie-grid";

const PopularMoviesTopFive = () => {
    const [results, setResults] = useState({ results: [] });
    useEffect(() => {
        movieService.findPopular()
            .then((result) => {
                setResults(result)
            })
    }, [])
    return (
        <div>
            <ul className="list-group">
                {
                    results.results &&
                    <MovieGrid
                        movies={results.results.slice(0, 5)}
                        msg="Most recent popular movies - Top 5"/>
                }
            </ul>
        </div>
    )
};

export default PopularMoviesTopFive;