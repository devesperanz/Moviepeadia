import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singleMovieAction } from '../redux/action';
import { Link } from 'react-router-dom';
function Detail({ match: { params } }) {
  const movie = useSelector(state => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleMovieAction(parseInt(params.id)));
  }, []);

  return (
    <div className='container'>
      <div className='details'>
        <div>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
        <div className='details-description'>
          <h2>{movie.title}</h2>
          <p className='overview'>{movie.overview}</p>
          <div className='details-info'>
            {movie.genres.map(movie => (
              <span className='genre' key={movie.id}>
                {movie.name}
              </span>
            ))}
            <p>{movie.release_date}</p>
            <Link to='/'> BACK</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
