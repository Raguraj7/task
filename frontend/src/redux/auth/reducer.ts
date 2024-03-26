import { SET_SIGNIN_ERROR, SET_REGISTER_ERROR } from './types';

export const initialState = {
  signinerror: undefined,
  registerError: undefined,
};
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SIGNIN_ERROR: {
      return {
        ...state,
        signinerror: action.payload,
      };
    }
    case SET_REGISTER_ERROR: {
      return {
        ...state,
        registerError: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};
