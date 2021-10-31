
import Movie from './Movie'
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const[movie, setMovie] = useState([]);


  useEffect( () => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=f2360989338abcdd53ef13d0fa0b762a');
    const data = await response.json();
    console.log(data);
    
  }

  return(
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search-button" type="submit">
         Search
         </button>
     </form>

    {movie.map(getMovies => (
      <Movie 
      title={getMovies.data.title} 
      tagline={getMovies.tagline} 
      image={getMovies.data.poster_path}
      />
    ))}

     <h1>Hello worlhgfd</h1>
    </div>
  )
}


export default App;
