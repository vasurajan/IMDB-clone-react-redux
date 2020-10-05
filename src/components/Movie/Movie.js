import React from 'react';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid.js';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

const Movie = ({ movie, directors, loading, actors }) => (
  <div className="rmdb-movie">
    {movie ?
      <div>
        <Navigation movie={movie.original_title} />
        <MovieInfo movie={movie} directors={directors} />
        <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      </div>
      : null}
    {actors ?
      <div className="rmdb-movie-grid">
        <FourColGrid header={'Actors'}>
          {actors.map((element, i) => (
            <Actor key={i} actor={element} />
          ))}
        </FourColGrid>
      </div>
      : null}
    {!actors && !loading ? <h1>No movie found</h1> : null}
    {loading ? <Spinner /> : null}
  </div>
)



export default Movie;