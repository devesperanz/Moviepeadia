import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nowShowingAction } from '../redux/action';
import { getYear } from '../lib/date';
import { Link } from 'react-router-dom';
function NowShowing() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nowShowingAction());
  }, []);
  return (
    <div className='grid-container'>
      {users.map(user => (
        <div className='grid-card' key={user.id}>
          <Link to={`/${user.id}`}>
            <img
              alt={user.title}
              src={`https://image.tmdb.org/t/p/w500/${user.poster_path}`}
            />
          </Link>

          <div className='grid-card-details'>
            <span className='grid-movie-info'>
              <p>{user.title}</p>
              <p>{getYear(user.release_date)}</p>
            </span>
            <span>
              <p>
                <i className='fas fa-star'></i> {user.vote_average}
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NowShowing;
