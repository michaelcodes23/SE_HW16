//importing React library
import React from "react";
//Defining a function
const MovieDisplay = ({movie}) => {
    const loaded = () => {
        return (
            <div>
                <h1>The MovieDisplay Component</h1>
                <h1>{movie.Title}</h1>
                <h1>{movie.Genre}</h1>
                <img src={movie.Poster} alt = {movie.Title}/>
                <h1>{movie.Year}</h1>
                <h1>IMDB Rating: {movie.imdbRating}</h1>
            </div>
        )
    }
    const loading = () => {
        return <h1>No Movie to Display</h1>
    }
    return movie ? loaded() : loading()
}


//exporting the function / component to use in other files

export default MovieDisplay