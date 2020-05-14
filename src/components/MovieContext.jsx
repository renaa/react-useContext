import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        { id: 1, name: "Harry Potter", price: '$10' },
        { id: 2, name: "Game of Thrones", price: '$2' },
        { id: 3, name: "Inception", price: '$10' },
        { id: 4, name: "MovieX", price: '$3' },
        { id: 5, name: "MovieY", price: '$3' },

    ])

    return (
        <MovieContext.Provider
            value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
