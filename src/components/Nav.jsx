import React, {useContext} from 'react'
import { findByLabelText } from '@testing-library/react'
import {MovieContext} from './MovieContext'
const Nav = () => {
    const [movies, SetMovies] = useContext(MovieContext)
    const nrMovies = movies.length
    return (
        <div style={style}>
            <h3>Tomas</h3>
            <p>Nmber of Movies: {nrMovies}</p>
        </div>
    )
}

export default Nav

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "#333",
    color: "white",
    padding: "20px 20%"

}