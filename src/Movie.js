import React from 'react'; 

const Movie = (title,tagline,image) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{tagline}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Movie;