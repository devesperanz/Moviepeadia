import axios from '../Axios';
import {
  NOW_SHOWING,
  UP_COMING,
  POPULAR,
  TOP_RATED,
  SINGLE_MOVIE,
} from './types';

export const nowShowingAction = () => {
  return dispatch => {
    axios
      .get(
        '/3/movie/now_playing?api_key=4dd8c7ef4f025907ae0eb519e5a5968e&language=en-US&page=1'
      )
      .then(res => {
        console.log(res.data.results);
        dispatch({
          type: NOW_SHOWING,
          payload: res.data.results,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const upComingAction = () => {
  return dispatch => {
    axios
      .get(
        '/3/movie/upcoming?api_key=4dd8c7ef4f025907ae0eb519e5a5968e&language=en-US&page=1'
      )
      .then(res => {
        console.log(res.data.results);
        dispatch({
          type: UP_COMING,
          payload: res.data.results,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const popularAction = () => {
  return dispatch => {
    axios
      .get(
        '/3/movie/popular?api_key=4dd8c7ef4f025907ae0eb519e5a5968e&language=en-US&page=1'
      )
      .then(res => {
        console.log(res.data.results);
        dispatch({
          type: POPULAR,
          payload: res.data.results,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const topRatedAction = () => {
  return dispatch => {
    axios
      .get(
        '/3/movie/top_rated?api_key=4dd8c7ef4f025907ae0eb519e5a5968e&language=en-US&page=1'
      )
      .then(res => {
        console.log(res.data.results);
        dispatch({
          type: TOP_RATED,
          payload: res.data.results,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const singleMovieAction = movieId => {
  return dispatch => {
    axios
      .get(
        `/3/movie/${movieId}?api_key=4dd8c7ef4f025907ae0eb519e5a5968e&language=en-US`
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: SINGLE_MOVIE,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
