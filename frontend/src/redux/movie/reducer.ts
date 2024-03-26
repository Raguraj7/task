import { SET_MOVIEDATA, SET_MOVIELIST } from './types';

export const initialState = {
  list: [],
  moviedata: undefined,
  selectedId: undefined,
};
export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIELIST: {
      return { ...state, list: action.payload };
    }
    case SET_MOVIEDATA: {
      return {
        ...state,
        moviedata: action.payload,
        selectedId: action.payload.id,
      };
    }

    default: {
      return { ...state };
    }
  }
};
