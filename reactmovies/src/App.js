import React from 'react';
import logo from './logo.svg';
import './App.css';
//Importing Components
import MovieDisplay from "./components/MovieDisplay"
import Form from "./components/Form";
function App() {
  //variable with your apiKey
  const apiKey = "e39c6159";
  //State to hold movie data
  const [movie, setMovie] = React.useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch (
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    //Parse JSON response into JS object
    const data = await response.json();
    //set the Movie state to the movie
    console.log(data)
    setMovie(data);
  }
  //This will run on the first render but no on subsequent renders
  React.useEffect(()=> {
    getMovie("Clueless");
  }, []);

  
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
