import React from 'react'
import MovieCard from "./movie-card";

const MovieGrid = ({movies, msg}) =>
    <div>
        <table className="table">
            <thead>
            <tr>
                <th>
                    <h3 style={{textAlign: "center", color: "purple"}}>{msg}</h3>
                </th>
            </tr>
            </thead>
        </table>
        <div className="row">
            {
                movies.map((movie) =>
                    <MovieCard movie={movie}/>
                )
            }
        </div>
    </div>

export default MovieGrid