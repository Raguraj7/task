import { Suspense, useState } from 'react';
import Loading from '../components/Loading';
import Input from '../components/Input';
import Button from '../components/Button';
import { clearErrorAction, signinAction } from '../redux/auth/action';
import ErrorDisplay from '../components/ErrorDisplay';
import { useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [signindata, setSignindata] = useState({
    username: '',
    password: '',
  });
  const setKeyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignindata({ ...signindata, [name]: value });
  };

  const signin = () => {
    signinAction(signindata).then(() => {
      navigate('/home');
    });
  };

  const { signinerror } = useAppSelector((state) => state.auth);

  return (
    <Suspense fallback={<Loading />}>
      <div className='bg-gray-50 p-5 flex items-center justify-center w-full h-screen'>
        <div className='w-full max-w-md'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 text-center mb-3'>
            Sign in to your account
          </h1>
          {JSON.stringify(signindata)}
          {signinerror && (
            <ErrorDisplay message={signinerror} clearError={clearErrorAction} />
          )}

          <div>
            <Input
              label='User name'
              name='username'
              type='text'
              value={signindata.username}
              onChange={setKeyValue}
              placeholder=''
            />
            <Input
              label='password'
              name='password'
              type='text'
              value={signindata.password}
              onChange={setKeyValue}
              placeholder=''
            />
            <div className='flex justify-end'>
              <Button onClick={signin} text='Signin' />
            </div>

            <div className='text-sm '>
              Don’t have an account yet?
              <a href='/register' className='font-medium hover:underline '>
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SignIn;
