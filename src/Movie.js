import React from 'react'; 

const image_API = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=f2360989338abcdd53ef13d0fa0b762a";

const Movie = ({title,overview, poster_path}) => {
    return(
        <div className="movie">
            
            <img src={image_API + poster_path} alt="" />

           <div className="movie-info">
            <h3>{title}</h3> 
            <span></span>
            </div>

            <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;