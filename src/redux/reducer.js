import {
  NOW_SHOWING,
  UP_COMING,
  TOP_RATED,
  POPULAR,
  SINGLE_MOVIE,
} from './types';

const initialState = {
  users: [],
  movie: {
    genres: [],
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOW_SHOWING:
      return {
        ...state,
        users: action.payload.map(item => {
          return item;
        }),
      };
    case UP_COMING:
      return {
        ...state,
        users: action.payload.map(item => {
          return item;
        }),
      };
    case POPULAR:
      return {
        ...state,
        users: action.payload.map(item => {
          return item;
        }),
      };
    case TOP_RATED:
      return {
        ...state,
        users: action.payload.map(item => {
          return item;
        }),
      };
    case SINGLE_MOVIE:
      return { movie: action.payload };
    default:
      return state;
  }
};

export default reducer;
