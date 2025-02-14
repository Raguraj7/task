import { AxiosError, AxiosResponse } from 'axios';
import { Axios } from '../../common/axios';
import { store } from '../store';
import { SET_REGISTER_ERROR, SET_SIGNIN_ERROR } from './types';

export const signinAction = (signindata: {
  username: string;
  password: string;
}) => {
  return new Promise((resolve, reject) => {
    Axios.post('auth/signin', { ...signindata })
      .then((res: AxiosResponse) => {
        console.log('sigininres', res.data);
        localStorage.setItem('token', res.data.data);
        resolve('success');
      })
      .catch((err: AxiosError) => {
        console.log(err);
        store.dispatch({ type: SET_SIGNIN_ERROR, payload: err });
      });
  });
};

export const registerAction = (registerdata: {
  username: string;
  password: string;
  email: string;
  phonenumber: string;
}) => {
  return new Promise((resolve, reject) => {
    Axios.post('auth/register', { ...registerdata })
      .then((res: AxiosResponse) => {
        console.log('regres', res.data);
        resolve('success');
      })
      .catch((err: AxiosError) => {
        console.log(err);
        store.dispatch({ type: SET_REGISTER_ERROR, payload: err });
      });
  });
};

export const clearErrorAction = () => {
  store.dispatch({ type: SET_SIGNIN_ERROR, payload: undefined });
};
export const clearRegisterErrorAction = () => {
  store.dispatch({ type: SET_REGISTER_ERROR, payload: undefined });
};
