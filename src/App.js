
import Movie from './Movie'
import { useEffect, useState } from 'react';
import './App.css';



const App = () => {

  const[movies, setMovies] = useState([]);
  const[search, setSearch] = useState("");

  // only updates after submit is clicked
  const[query, setQuery] = useState('Film');


  useEffect(() => {
    getMovies();
    console.log('lets say we are fetching');
  }, [query]);


  // Fetching the API and assigning to getMovies
  const getMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f2360989338abcdd53ef13d0fa0b762a&language=en-US&page=1');
    const data = await response.json();
    console.log(data.results);
  };



  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  //stopping the constant updating
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }




  return(
    <div className="App">
      <h1>Movie Database</h1>
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-button" type="submit">
         Search
         </button>
     </form>

    {movies.map(movies => (
      <Movie 
      title={setMovies.title} 
      tagline={setMovies.tagline} 
      image={setMovies.data}
      />
    ))}

    </div>
  )
}


export default App;
