import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
// import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import Register from './pages/Register';
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Register = lazy(() => import('./pages/Register'));

const RoutesComp = () => {
  return (
    <Routes>
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path='*'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};

export default RoutesComp;
