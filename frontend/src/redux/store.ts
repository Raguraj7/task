import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/reducer';
import { movieReducer } from './movie/reducer';

export const store = configureStore({
  reducer: { auth: authReducer, movie: movieReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
