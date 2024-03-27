import { Suspense, lazy, useState } from 'react';
import Loading from '../components/Loading';
import { clearRegisterErrorAction, registerAction } from '../redux/auth/action';
import { useAppSelector } from '../redux/hooks';
import Button from '../components/Button';
import ErrorDisplay from '../components/ErrorDisplay';
import ErrorBoundary from '../components/ErrorBoundary';
const Input = lazy(() => import('../components/Input'));

const Register = () => {
  const [registerdata, setRegisterData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    repassword: '',
  });

  const setKeyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerdata, [name]: value });
  };

  const [registersuccess, setRegistersuccess] = useState(false);
  const register = () => {
    registerAction(registerdata).then(() => {
      setRegistersuccess(true);
    });
  };
  const { registerError } = useAppSelector((state) => state.auth);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        {!registersuccess ? (
          <div className='bg-gray-50 p-5 flex items-center justify-center w-full h-screen'>
            <div className='w-full max-w-md'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 text-center mb-3'>
                Sign in to your account
              </h1>
              {registerError && (
                <ErrorDisplay
                  message={registerError}
                  clearError={clearRegisterErrorAction}
                />
              )}
              <div>
                <Input
                  label='User name'
                  name='username'
                  type='text'
                  value={registerdata.username}
                  onChange={setKeyValue}
                  placeholder=''
                />
                <Input
                  label='Email'
                  name='email'
                  type='text'
                  value={registerdata.email}
                  onChange={setKeyValue}
                  placeholder=''
                />
                <Input
                  label='Phonenumber'
                  name='phonenumber'
                  type='text'
                  value={registerdata.phonenumber}
                  onChange={setKeyValue}
                  placeholder=''
                />
                <Input
                  label='password'
                  name='password'
                  type='text'
                  value={registerdata.password}
                  onChange={setKeyValue}
                  placeholder=''
                />
                <Input
                  label='Re-Password'
                  name='repassword'
                  type='text'
                  value={registerdata.repassword}
                  onChange={setKeyValue}
                  placeholder=''
                />

                <div className='flex justify-end'>
                  <Button onClick={register} text='Register' />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='flex justify-center items-center w-full h-screen gap-3'>
              <div className='font-medium '>
                User Successfully registerd...{' '}
              </div>
              <a
                href='/signin'
                className='underline text-blue-500 decoration-blue-500 '
              >
                Goto Signin Page
              </a>
            </div>
          </>
        )}
      </Suspense>
    </ErrorBoundary>
  );
};

export default Register;
