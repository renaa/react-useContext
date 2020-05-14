import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [movies, SetMovies] = useContext(MovieContext)
    const [name, SetName] = useState('')
    const [price, SetPrice] = useState('')

    const updateName = ({target}) => {
        SetName(target.value)
    }
    
    const updatePrice = ({target}) => {
        SetPrice(target.value)
    }

    const addMovie = e => {
        e.preventDefault()
        SetMovies(prevMovies => [
            ...prevMovies, 
            {name: name, price: price}
        ])
        SetName('')
        SetPrice('')
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" onChange={updateName}/>
            <input type="text" name="price" onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie