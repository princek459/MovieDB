
import Movie from './Movie';
import { useEffect, useState } from 'react';
import './App.css';



const App = () => {

  /**
   *  API-Key: f2360989338abcdd53ef13d0fa0b762a
   *  search: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
   *  image: https://image.tmdb.org/t/p/w1280
   * 
   */

  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=f2360989338abcdd53ef13d0fa0b762a&language=en-US&page=1&include_adult=false";

  const[movies, setMovies] = useState([]);
  const[search, setSearch] = useState("");
  const[searchTerm, setSearchTerm] = useState('');

  // only updates after submit is clicked
  const[query, setQuery] = useState('Film');


  useEffect(() => {
    getMovies();
    console.log('We are fetching');
  }, [query]);


  // Fetching the API and assigning to getMovies
  const getMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=f2360989338abcdd53ef13d0fa0b762a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
    const data = await response.json();
    setMovies(data.results);
    console.log(data);
  };



  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //stopping the constant updating
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    fetch(SEARCH_API + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })

  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };


  return(
    <div className="App">
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text" 
            className="search" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header> 
    <div className="movie-container">

      {movies.length > 0 && movies.map(movies => (
        <Movie 
          key={movies.id}
          {...movies}
      // title={movies.title}
      // overview={movies.overview} 
      // poster_path={movies.poster_path}
      
        />
      ))}
    </div>


    </div>
  )
}


export default App;
