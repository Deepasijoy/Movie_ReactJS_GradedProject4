import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie ,isLoading} = useGlobalContext();
  if(isLoading){
    return(
      <div className=''>
        <div className='loading'>Loading ...</div>
      </div>
    );
  };

  return (
   
      <section className='movie-page'>
        <div className='container grid grid-4-col'>{movie.map((curMovie) => {
          const {imdbID,Title,Poster}=curMovie;
          //to return movie name in single line
          const movieName=Title.substring(0,15);

          return( 
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='card'>
                <div className='card-info'>
              {/* display movie name if length more than 15 with ... */}
                  <h2>{movieName.length>=15 ?`${movieName}...`:movieName}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
                
              </div>

            </NavLink>
          )
         })}</div>
      </section>

  )
}

export default Movies
