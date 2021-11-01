import React from 'react'; 

const image_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title,overview, poster_path, vote_average}) => {
    return(
        <div className="movie">
            
            <img src={image_API + poster_path} alt={title} />

           <div className="movie-info">
            <h3>{title}</h3> 
            <span></span>
            </div>

            <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
            <span>{vote_average}</span>
            </div>
        </div>
    );
}

export default Movie;