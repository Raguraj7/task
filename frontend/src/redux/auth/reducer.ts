import { SET_SIGNIN_ERROR } from './types';

export const initialState = { signinerror: undefined };
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SIGNIN_ERROR: {
      return {
        ...state,
        signinerror: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};
