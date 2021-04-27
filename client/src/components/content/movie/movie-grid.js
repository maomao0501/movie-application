import React from 'react'
import MovieCard from "./movie-card";

const MovieGrid = ({movies, msg}) =>
    <div style={{margin: "1rem"}}>
        <h3 style={{textAlign: "center", color: "purple", padding: "1rem" }}>{msg}</h3>
        <div class="card border-info bg-transparent">
            <div class="card-body bg-transparent" >
                <div className="row ">
                    {
                        movies.map((movie) =>
                            <MovieCard movie={movie} key={movie.id}/>
                        )
                    }
                </div>
            </div>
        </div>
        
    </div>

export default MovieGrid