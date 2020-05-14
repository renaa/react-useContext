import React, { useState, useContext } from 'react'

import { MovieContext } from './MovieContext'

import Movie from './Movie'
const MovieList = () => {
    const [movies, SetMovies] = useContext(MovieContext)

    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id}
                    name={movie.name}
                    price={movie.price}
                />
            ))}
        </div>
    )
}

export default MovieList